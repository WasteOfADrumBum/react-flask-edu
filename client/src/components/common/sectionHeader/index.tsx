import React from 'react'
import './_sectionHeader.scss'

interface SectionHeaderProps {
	icon?: string
	title: string
	subtitle?: string
}

const SectionHeader = (props: SectionHeaderProps) => {
	const { icon, title, subtitle } = props

	const borderBottom = (title: string, subtitle?: string) => {
		if (title && subtitle) {
			return 'border-bottom'
		}
	}

	return (
		<div className='container my-4' id='sectionHeader'>
			<div className='row'>
				<div className='col'>
					<h2 className={`text-uppercase ${borderBottom(title, subtitle)}`}>
						{icon && <i className={`${icon} fa-2xs me-2`} />}
						{title}
					</h2>
					{subtitle && <h5 className='text-muted'>{subtitle}</h5>}
				</div>
			</div>
		</div>
	)
}

export default SectionHeader
