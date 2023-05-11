import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './_members.scss'

const Members = () => {
	const [data, setData] = useState([
		{
			id: 0,
			first_name: '',
			middle_name: '',
			last_name: '',
			email: '',
			status: '',
		},
	])
	useEffect(() => {
		fetch('/api/members')
			.then((res) => res.json())
			.then((data: any) => {
				setData(data.members)
				console.log(data.members)
			})
	}, [])

	return (
		<div id='membersView'>
			<table className='table table-striped'>
				<thead className='bg-dark text-light'>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Last</th>
						<th scope='col'>First</th>
						<th scope='col'>MI</th>
						<th scope='col'>Email</th>
						<th scope='col'>Status</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{typeof data === 'undefined' ? (
						<p>Loading...</p>
					) : (
						data.map((member, index) => {
							return (
								<tr key={index}>
									<th scope='row'>{member.id}</th>
									<td className='text-uppercase'>{member.last_name}</td>
									<td>{member.first_name}</td>
									<td>{member.middle_name.length > 0 ? member.middle_name[0] : ''}</td>
									<td>{member.email}</td>
									<td>
										{member.status === 'active' ? (
											<span>
												<i className='fas fa-check-circle text-success me-1' />
												{member.status}
											</span>
										) : (
											<span>
												<i className='fas fa-times-circle text-danger me-1' />
												{member.status}
											</span>
										)}
									</td>
									<td>
										<Link to={`/members/${member.id}`} className='btn btn-primary mx-1'>
											<i className='fas fa-user-edit' />
										</Link>
										<Link to={`/members/${member.id}`} className='btn btn-danger mx-1'>
											<i className='fas fa-user-times' />
										</Link>
									</td>
								</tr>
							)
						})
					)}
				</tbody>
			</table>
		</div>
	)
}

export default Members
