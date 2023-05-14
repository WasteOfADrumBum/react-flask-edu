import React, { useState } from 'react'
import './_editUserButton.scss'

type User = {
	full_name: string
	first_name: string
	middle_name: string | null
	last_name: string
	email: string
	status: string
}

type Props = {
	user: User
	onUserUpdated: () => void
	onRefresh: () => void
}

const EditUserButton: React.FC<Props> = ({ user, onUserUpdated, onRefresh }) => {
	const [showModal, setShowModal] = useState(false)
	const [formData, setFormData] = useState<User>(user)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
			full_name: `${prevData.first_name} ${prevData.middle_name ? prevData.middle_name + ' ' : ''}${
				prevData.last_name
			}`,
		}))
	}

	const handleStatusChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		setFormData((prevData) => ({
			...prevData,
			status: event.target.value,
		}))
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
		if (!emailRegex.test(formData.email)) {
			alert('Please enter a valid email address')
			return
		}

		fetch(`/api/users/${user.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (response.ok) {
					setShowModal(false)
					onUserUpdated()
					onRefresh()
				}
			})
			.catch((error) => {
				console.error(error)
			})
	}

	return (
		<>
			<button type='button' className='btn btn-warning mx-1' onClick={() => setShowModal(true)}>
				<i className='fas fa-edit me-1' />
			</button>
			{showModal && (
				<div className='modal fade show' style={{ display: 'block' }} id='editUserModal'>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title'>Edit User</h5>
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
											<i className='fas fa-asterisk ms-1 text-danger fa-2xs'></i>
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
										<i className='fas fa-edit me-1' />
										Edit User
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

export default EditUserButton
