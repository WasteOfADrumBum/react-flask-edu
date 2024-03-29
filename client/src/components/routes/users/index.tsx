import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeader, DeleteUserButton, AddUserButton, EditUserButton } from '../../common'
import './_users.scss'

const Users = () => {
	const [refresh, setRefresh] = useState(false)
	const [users, setUsers] = useState([
		{
			id: 0,
			full_name: '',
			first_name: '',
			middle_name: '',
			last_name: '',
			email: '',
			status: '',
		},
	])

	type Props = {
		handleStatusChange: () => void
		onUserAdded: () => void
		onRefresh: () => void
	}

	useEffect(() => {
		fetch('/api/users')
			.then((response) => response.json())
			.then((data) => setUsers(data.users))
	}, [refresh])

	const handleAction = (action: string) => (): void => {
		setRefresh(true)
		console.log(action)
	}

	useEffect(() => {
		setRefresh(false)
	}, [refresh])

	return (
		<div className='table-responsive'>
			<SectionHeader
				icon='fas fa-users'
				title='Users'
				subtitle='This page is the Users page. It displays a table of all users in the database. You can add, edit, or delete users from this page through the RESTful API connected to the PostgreSQL database.'
			/>
			<div className='d-flex justify-content-end mb-3'>
				<AddUserButton
					handleStatusChange={handleAction('status change')}
					onUserAdded={handleAction('user added')}
					onRefresh={handleAction('refresh')}
				/>
			</div>
			<table className='table table-striped table-hover'>
				<thead className='table-dark'>
					<tr>
						<th scope='col' className='col-1'>
							#
						</th>
						<th scope='col' className='col-2'>
							Last
						</th>
						<th scope='col' className='col-2'>
							First
						</th>
						<th scope='col' className='col-1'>
							MI
						</th>
						<th scope='col' className='col-3'>
							Email
						</th>
						<th scope='col' className='col-1'>
							Status
						</th>
						<th scope='col' className='col-2' />
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<th scope='row'>{user.id}</th>
							<td className='text-uppercase'>
								{user.last_name === null ? <span className='text-muted'>N/A</span> : user.last_name}
							</td>
							<td>{user.first_name === null ? <span className='text-muted'>N/A</span> : user.first_name}</td>
							<td>
								{user.middle_name === null ? <span className='text-muted'>N/A</span> : user.middle_name.charAt(0) + '.'}
							</td>
							<td>{user.email === null ? <span className='text-muted'>N/A</span> : user.email}</td>
							<td>
								{user.status === null ? (
									<span className='text-muted'>N/A</span>
								) : user.status === 'active' ? (
									<span className='text-success'>
										<i className='fas fa-check-circle' />
									</span>
								) : (
									<span className='text-danger'>
										<i className='fas fa-times-circle' />
									</span>
								)}
							</td>
							<td className='text-start text-lg-end'>
								<EditUserButton
									user={user}
									onUserUpdated={handleAction('user edited')}
									onRefresh={handleAction('refresh')}
								/>
								<DeleteUserButton
									userId={user.id}
									onDelete={handleAction('user deleted')}
									onRefresh={handleAction('refresh')}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Users
