import React, { useState, useEffect } from 'react'
import './_hero.scss'

type Props = {
	icons?: string[]
	title: string
	subTitle: string
	content: string
	imageName?: string
}

const Hero: React.FC<Props> = ({ icons = [], title, subTitle, content, imageName }) => {
	const [image, setImage] = useState<string | undefined>(undefined)

	useEffect(() => {
		const importImage = async () => {
			if (imageName) {
				const imageModule = await import(`../../../assets/images/${imageName}`)
				setImage(imageModule.default)
			}
		}
		importImage()
	}, [imageName])

	return (
		<div className='container col-xxl-8 px-4 py-5'>
			<div className='row flex-lg-row-reverse align-items-center g-5 py-1'>
				{icons.length > 0 && (
					<div className='col-12 d-flex align-items-center justify-content-center mt-4'>
						{icons.map((icon, index) => (
							<i key={index} className={`${icon} fa-2x mx-1`} />
						))}
					</div>
				)}
				<div className='col-12 d-flex flex-column align-items-center justify-content-center text-center my-2'>
					<h1 className='display-5 fw-bold lh-1 '>{title}</h1>
					<h2 className='display-6 fw-light text-body-emphasis'>{subTitle}</h2>
				</div>
				{image && (
					<div className='col-10 col-sm-8 col-lg-6 my-2'>
						<img
							src={image}
							className='d-block mx-lg-auto img-fluid'
							alt='Bootstrap Themes'
							width='700'
							height='500'
							loading='lazy'
						/>
					</div>
				)}
				<div className={image ? 'col-10 col-sm-8 col-lg-6 text-start my-2' : 'col-lg-12 text-center my-2'}>
					<p className='lead'>{content}</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
