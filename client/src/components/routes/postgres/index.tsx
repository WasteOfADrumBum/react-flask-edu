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
			<section>
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
			</section>
			{/* Deploying The Application */}
			<section>
				<div className='row'>
					<div className='col-md-12'>
						<SectionHeader
							icon='fa-solid fa-server'
							title='Deploying The Application'
							subtitle='Deploying the React-Flask application involves starting both the server and client applications. The server application is started by navigating to the server folder and running the "python server.py" command. The client application is started by navigating to the client folder and running the "npm start" command. Once both applications are running, the React-Flask application can be accessed through the web browser at the specified localhost address.'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<p className='lead'>
							To start the application, open two terminal windows. In the first terminal window, navigate to the{' '}
							<i className='fa-solid fa-folder' /> <code>react-flask/server</code> folder and run the command{' '}
							<code>python pgserver.py</code>. In the second terminal window, navigate to the{' '}
							<i className='fa-solid fa-folder' /> <code>react-flask/client</code> folder and run the command{' '}
							<code>npm start</code>.
						</p>
					</div>
					<div className='col-md-6'>
						<div className='code-box text-start mb-4'>
							<pre>
								<code>
									<div>
										<span className='code-comment text-secondary'>../react-flask/server&gt;</span>
									</div>
									<div>
										<span className='code-comment'>pthyon server.py</span>
										<span className='code-blinking'>|</span>
									</div>
								</code>
							</pre>
						</div>
						<div className='code-box text-start'>
							<pre>
								<code>
									<div>
										<span className='code-comment text-secondary'>../react-flask/client&gt;</span>
									</div>
									<div>
										<span className='code-comment'>npm start</span>
										<span className='code-blinking'>|</span>
									</div>
								</code>
							</pre>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Postgress
