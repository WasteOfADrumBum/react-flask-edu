/* create a react component for a bootstrap hero */
import React from 'react'
import './_hero.scss'

const Hero = () => {
	return (
		<div id='heroComponent'>
			<div className='px-4 py-5 my-5 text-center border-bottom border-3'>
				<div className='mx-auto mb-4'>
					<i className='fa-brands fa-2x fa-react mx-1' />
					<i className='fa-brands fa-2x fa-bootstrap mx-1' />
					<i className='fas fa-2x fa-american-sign-language-interpreting mx-3' />
					<i className='fab fa-2x fa-python mx-1' />
					<i className='fab fa-2x fa-node mx-1' />
				</div>
				<h1 className='display-5 fw-bold text-body-emphasis'>React & Flask</h1>
				<h2 className='display-6 fw-light text-body-emphasis'>From Zero to Full-Stack</h2>
				<div className='col-lg-6 mx-auto'>
					<p className='lead mb-4'>
						This is a simple guide to building a full-stack web application using React and Flask. The guide is broken
						down into 5 parts: <strong>setting up the development environment</strong>,{' '}
						<strong>setting up the folder directory structure</strong>, <strong>building the backend</strong>,
						<strong>building the frontend</strong>, and <strong>deploying the application</strong>.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
