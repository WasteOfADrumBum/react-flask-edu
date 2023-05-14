import React from 'react'
import { Hero, Tab, SectionHeader } from '../../common'
import './_postgres.scss'

const Postgress = () => {
	const icons = ['fa-solid fa-laptop-code', 'fa-solid fa-arrow-right-arrow-left', 'fa-solid fa-database postgres-blue']
	const title = 'Postgres'
	const subTitle = 'Advantages of using PostgreSQL in React Flask Application'
	const content =
		'PostgreSQL offers numerous advantages when used in a React Flask application. It provides excellent data integrity and security, allowing developers to ensure the safety and security of their data. Additionally, it supports a wide range of data types and allows for complex queries and indexing, making it ideal for applications with large and complex datasets. PostgreSQL is also extremely popular among developers and enterprises alike, thanks to its robustness, scalability, and flexibility. By using PostgreSQL in a React Flask application, developers can build scalable and efficient RESTful APIs that can handle complex and large datasets.'

	return (
		<div id='postgresView'>
			<Hero icons={icons} title={title} subTitle={subTitle} content={content} />
			<div>
				<SectionHeader title='Why the Update' icon='fas fa-arrow-right-arrow-left' />
				<p>
					By utilizing PostgreSQL in my React Flask application, I have created a robust and scalable RESTful API that
					takes advantage of its numerous benefits. PostgreSQL is a powerful open-source relational database management
					system that offers excellent data integrity and security, and supports a wide range of data types, complex
					queries, and indexing, making it perfect for applications with large and complex datasets. Its robustness,
					scalability, and flexibility have made it a popular choice among developers and enterprises. The integration
					of PostgreSQL has made my application more efficient, reliable, and scalable, allowing me to deliver
					high-quality solutions to clients. To make it easier to manage the user's table in the database, I have
					created several components that can be used throughout the application, enabling the implementation of
					controls over the users' table quickly and easily. Overall, the PostgreSQL integration in my React Flask
					application provides a powerful and reliable solution for building scalable and efficient RESTful APIs.
				</p>
			</div>
		</div>
	)
}

export default Postgress
