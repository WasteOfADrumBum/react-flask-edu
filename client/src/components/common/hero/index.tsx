import React from 'react'
import './_hero.scss'

const Hero = ({ icons, title, subTitle, content }) => {
	return (
		<div id='heroComponent'>
			<div className='px-4 py-5 my-5 text-center border-bottom border-3'>
				<div className='mx-auto mb-4'>
					{icons.map((icon, index) => (
						<i key={index} className={`${icon} fa-2x mx-1`} />
					))}
				</div>
				<h1 className='display-5 fw-bold text-body-emphasis'>{title}</h1>
				<h2 className='display-6 fw-light text-body-emphasis'>{subTitle}</h2>
				<div className='col-lg-6 mx-auto'>
					<p className='lead mb-4'>{content}</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
