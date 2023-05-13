import React, { useState } from 'react'

interface Props {
	userId: number
	onDelete: (message: string) => void
	onRefresh: () => void
}

const DeleteUserButton: React.FC<Props> = ({ userId, onDelete, onRefresh }) => {
	const [showModal, setShowModal] = useState(false)

	const handleDelete = () => {
		fetch(`/api/users/${userId}`, {
			method: 'DELETE',
		})
			.then((response) => response.json())
			.then((data) => {
				onDelete(data.message)
				onRefresh()
			})
	}

	return (
		<>
			<button type='button' className='btn btn-danger' onClick={() => setShowModal(true)}>
				<i className='fas fa-trash'></i>
			</button>
			<div
				className={`modal fade${showModal ? ' show' : ''}`}
				tabIndex={-1}
				aria-hidden={!showModal}
				style={{ display: showModal ? 'block' : 'none' }}>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Confirm Delete</h5>
							<button
								type='button'
								className='btn-close'
								aria-label='Close'
								onClick={() => setShowModal(false)}></button>
						</div>
						<div className='modal-body text-center'>Are you sure you want to delete this user?</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' onClick={() => setShowModal(false)}>
								<i className='fas fa-times me-1' />
								Cancel
							</button>
							<button type='button' className='btn btn-danger' onClick={handleDelete}>
								<i className='fas fa-trash me-1' />
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DeleteUserButton
