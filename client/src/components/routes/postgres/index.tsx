import React from 'react'
import { Hero, Tab, Header } from '../../common'
import './_postgres.scss'

const Postgress = () => {
	const icons = ['fa-solid fa-laptop-code', 'fa-solid fa-arrow-right-arrow-left', 'fa-solid fa-database postgres-blue']
	const title = 'Postgres'
	const subTitle = ''
	const content = ''

	return (
		<div id='postgresView'>
			<Hero icons={icons} title={title} subTitle={subTitle} content={content} />;
		</div>
	)
}

export default Postgress
