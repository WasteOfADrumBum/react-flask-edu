import React from 'react'
import { Hero, Tab, SectionHeader } from '../../common'
import postgresLogo from '../../../assets/images/postgres_logo.png'
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
				<div className='row mb-3'>
					<div className='col-md-12'>
						<SectionHeader
							icon='fa-solid fa-server'
							title='Deploying The Application'
							subtitle="To make things easier for you, I've created a new server file called pgserver.py that will run the application using PostgreSQL."
						/>
					</div>
				</div>
				<div className='row mb-3'>
					<div className='col-md-6'>
						<img src={postgresLogo} alt='pglogo' className='img-fluid' id='pglogo' />
					</div>
					<div className='col-md-6'>
						<h3>Install Postgres</h3>
						<p className='lead'>
							You can download the Postgres installer from{' '}
							<a
								href='https://www.postgresql.org/download/'
								target='_blank'
								rel='noreferrer'
								className='color-adobe-1 text-decoration-none'>
								postgresql.org
							</a>
							. Follow the instructions to install Postgres on your system.
						</p>
					</div>
				</div>
				<div className='row mb-3'>
					<div className='col-md-6'>
						<ul>
							<li>Open PgAdmin and connect to your server.</li>
							<li>
								Right-click on "Databases" and select "Create"
								<i className='fas fa-arrow-right mx-1' />
								"Database...".
							</li>
							<li>In the "Create - Database" dialog box, enter a name for your database in the "Name" field.</li>
							<li>In the "Owner" field, select a user that will own the database.</li>
							<li>In the "Owner" field, select a user that will own the database.</li>
							<li>Select the "Definition" tab and set the character set encoding and collation if necessary.</li>
							<li>Click the "Save" button to create your database.</li>
						</ul>
						<p>
							Once your database is created, you can connect to it using a database client like psql or create tables
							and data using SQL statements.
						</p>
					</div>
					<div className='col-md-6'>
						<h3>Create a database</h3>
						<p className='lead'>
							Once Postgres is installed, you will need to create a new database. You can do this using the createdb
							command in the terminal or using a GUI like pgAdmin.
						</p>
					</div>
				</div>
				<div className='row mb-3'>
					<div className='col-md-6'>
						<div className='code-box text-start mb-4'>
							<pre>
								<code>
									<div>
										<span className='code-comment text-secondary'>../react-flask&gt;</span>
									</div>
									<div>
										<span className='code-comment'>
											export DATABASE_URL=postgresql://username:password@localhost:5432/db_name
										</span>
										<span className='code-blinking'>|</span>
									</div>
								</code>
							</pre>
						</div>
					</div>
					<div className='col-md-6'>
						<h3>Update the application configuration</h3>
						<p className='lead'>
							Create a <code>.env</code> file in the root directory of the project and add the database connection
						</p>
					</div>
				</div>
				<div className='row mb-3'>
					<div className='col-md-6'>
						<div className='code-box text-start mb-4'>
							<pre>
								<code>
									<div>
										<span className='code-comment text-secondary'>../react-flask/server&gt;</span>
									</div>
									<div>
										<span className='code-comment'>flask db upgrade</span>
										<span className='code-blinking'>|</span>
									</div>
								</code>
							</pre>
						</div>
					</div>
					<div className='col-md-6'>
						<h3>Set up the tables</h3>
						<p className='lead'>
							Once the configuration is updated, you will need to create the tables for the application. You can do this
							using the flask db upgrade command in the terminal, which will apply any pending database migrations.
						</p>
					</div>
				</div>
				<div className='row mb-3'>
					<div className='col-md-6'>
						<div className='code-box text-start mb-4'>
							<pre>
								<code>
									<div>
										<span className='code-comment text-secondary'>../react-flask/server&gt;</span>
									</div>
									<div>
										<span className='code-comment'>pthyon pgserver.py</span>
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
					<div className='col-md-6'>
						<h3>Start the application</h3>
						<p className='lead'>
							To start the application, open two terminal windows. In the first terminal window, navigate to the{' '}
							<i className='fa-solid fa-folder' /> <code>react-flask/server</code> folder and run the command{' '}
							<code>python pgserver.py</code>. In the second terminal window, navigate to the{' '}
							<i className='fa-solid fa-folder' /> <code>react-flask/client</code> folder and run the command{' '}
							<code>npm start</code>.
						</p>
					</div>
				</div>
			</section>
			{/* RESTful API */}
			<section>
				<div className='row'>
					<div className='col-md-12'>
						<SectionHeader
							icon='fa-solid fa-code'
							title="RESTful API's"
							subtitle="The RESTful API's are used to perform CRUD operations on the users table in the database. The API's are implemented using Flask and SQLAlchemy."
						/>
					</div>
					<div className='col-md-12'>
						<p>
							In a RESTful API, HTTP methods such as GET, POST, PUT, and DELETE are used to indicate the type of
							operation being performed on a resource. Here are the functions of these methods:
						</p>
						<ul>
							<li>
								<strong>GET</strong>: The GET method is used to retrieve a resource from the server. It is an idempotent
								operation, meaning that it does not modify the state of the resource. It is commonly used to retrieve
								data from a server in response to a client request.
							</li>
							<li>
								<strong>POST</strong>: The POST method is used to create a new resource on the server. It is not
								idempotent, meaning that multiple requests will create multiple resources. It is commonly used to submit
								data to a server for processing, such as submitting a form.
							</li>
							<li>
								<strong>PUT</strong>: The PUT method is used to update an existing resource on the server. It is
								idempotent, meaning that multiple requests will have the same effect as a single request. It is commonly
								used to update data on a server, such as updating a user's profile.
							</li>
							<li>
								<strong>DELETE</strong>: The DELETE method is used to remove a resource from the server. It is
								idempotent, meaning that multiple requests will have the same effect as a single request. It is commonly
								used to delete data from a server, such as deleting a user's account. Regenerate response
							</li>
						</ul>
						<p>
							For example, if you want to retrieve a list of users from the server, you would use the GET method. If you
							want to create a new user, you would use the POST method. If you want to update an existing user, you
							would use the PUT method. If you want to delete a user, you would use the DELETE method.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Postgress
