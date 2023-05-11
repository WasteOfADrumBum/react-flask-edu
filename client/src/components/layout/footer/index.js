import React from 'react'

const Footer = () => {
	return (
		<footer className='container-fluid bg-light py-3 mt-4 border-top fixed-bottom'>
			<div className='container d-flex flex-wrap justify-content-between align-items-center'>
				<div className='col-md-4 d-flex align-items-center'>
					<a href='/' className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>
						<i className='fa-brands fa-bootstrap' />
					</a>
					<span className='mb-3 mb-md-0 text-muted'>© 2023 Joshua M. Small</span>
				</div>
				<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
					<li className='ms-3'>
						<a className='text-muted' href='#'>
							<i className='fa-brands fa-github' />
						</a>
					</li>
					<li className='ms-3'>
						<a className='text-muted' href='#'>
							<i className='fa-brands fa-twitter' />
						</a>
					</li>
					<li className='ms-3'>
						<a className='text-muted' href='#'>
							<i className='fa-brands fa-instagram' />
						</a>
					</li>
					<li className='ms-3'>
						<a className='text-muted' href='#'>
							<i className='fa-brands fa-linkedin' />
						</a>
					</li>
					<li className='ms-3'>
						<a className='text-muted' href='#'>
							<i className='fa-brands fa-youtube' />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
