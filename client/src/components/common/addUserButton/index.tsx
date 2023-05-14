import React, { useState } from 'react'
import './_addUserButton.scss'

// Define the shape of the user object that will be submitted to the server
type User = {
	full_name: string
	first_name: string
	middle_name: string | null
	last_name: string
	email: string
	status: string
}

// Define the props that the component expects
type Props = {
	onUserAdded: () => void // Function to be called when a new user is successfully added
	onRefresh: () => void // Function to be called when the list of users needs to be refreshed
	handleStatusChange: React.ChangeEventHandler<HTMLSelectElement>
}

// Define the component
const AddUserButton: React.FC<Props> = ({ onUserAdded, onRefresh }) => {
	// Set up state variables to track whether the modal is visible and the form data
	const [showModal, setShowModal] = useState(false)
	const [formData, setFormData] = useState<User>({
		full_name: '',
		first_name: '',
		middle_name: null,
		last_name: '',
		email: '',
		status: '',
	})

	// Handle changes to the form inputs
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Extract the name and value of the changed input field
		const { name, value } = event.target
		// Update the form data, including the full name field which is dynamically generated from the first name, middle name, and last name fields
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
			full_name: `${prevData.first_name} ${prevData.middle_name ? prevData.middle_name + ' ' : ''}${
				prevData.last_name
			}`,
		}))
	}

	// Handle changes to the status select
	const handleStatusChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		setFormData((prevData) => ({
			...prevData,
			status: event.target.value,
		}))
	}

	// Handle submission of the form
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// Verify that the email address is valid
		const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
		if (!emailRegex.test(formData.email)) {
			alert('Please enter a valid email address')
			return
		}

		// Submit the form data to the server
		fetch('/api/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		})
			.then((response) => {
				// If the response is OK, clear the form data and call the onUserAdded and onRefresh functions to update the UI
				if (response.ok) {
					setShowModal(false)
					setFormData({
						full_name: '',
						first_name: '',
						middle_name: null,
						last_name: '',
						email: '',
						status: '',
					})
					onUserAdded()
					onRefresh()
				}
			})
			.catch((error) => {
				// Log any errors that occur during submission
				console.error(error)
			})
	}

	return (
		<>
			<button type='button' className='btn btn-primary' onClick={() => setShowModal(true)}>
				<i className='fas fa-plus' />
			</button>
			{showModal && (
				<div className='modal fade show' style={{ display: 'block' }} id='addUserModal'>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title'>Add User</h5>
								<button type='button' className='btn-close' onClick={() => setShowModal(false)}></button>
							</div>
							<form onSubmit={handleSubmit}>
								<div className='modal-body'>
									<div className='mb-3'>
										<label htmlFor='full_name' className='form-label'>
											Full Name
										</label>
										<input
											type='text'
											className='form-control bg-light text-muted'
											id='full_name'
											name='full_name'
											value={formData.full_name}
											onChange={handleInputChange}
										/>
									</div>
									<div className='mb-3'>
										<label htmlFor='first_name' className='form-label'>
											First Name
											<i className='fas fa-asterisk ms-1 text-danger fa-2xs' />
										</label>
										<input
											type='text'
											className='form-control'
											id='first_name'
											name='first_name'
											value={formData.first_name}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className='mb-3'>
										<label htmlFor='middle_name' className='form-label'>
											Middle Name
										</label>
										<input
											type='text'
											className='form-control'
											id='middle_name'
											name='middle_name'
											value={formData.middle_name || ''}
											onChange={handleInputChange}
										/>
									</div>
									<div className='mb-3'>
										<label htmlFor='last_name' className='form-label'>
											Last Name
											<i className='fas fa-asterisk ms-1 text-danger fa-2xs' />
										</label>
										<input
											type='text'
											className='form-control'
											id='last_name'
											name='last_name'
											value={formData.last_name}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className='mb-3'>
										<label htmlFor='email' className='form-label'>
											Email
											<i className='fas fa-asterisk ms-1 text-danger fa-2xs' />
										</label>
										<input
											type='email'
											className='form-control'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className='mb-3'>
										<label htmlFor='status' className='form-label'>
											Status
											<i className='fas fa-asterisk ms-1 text-danger fa-2xs' />
										</label>
										<select
											className='form-select'
											id='status'
											name='status'
											value={formData.status}
											onChange={handleStatusChange}
											required>
											<option value='' disabled>
												Select Status
											</option>
											<option value='active'>Active</option>
											<option value='inactive'>Inactive</option>
										</select>
									</div>
								</div>
								<div className='modal-footer'>
									<button type='button' className='btn btn-secondary' onClick={() => setShowModal(false)}>
										<i className='fas fa-times me-1' />
										Cancel
									</button>
									<button type='submit' className='btn btn-primary'>
										<i className='fas fa-plus me-1' />
										Add User
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default AddUserButton
