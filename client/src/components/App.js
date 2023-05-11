import React from 'react'
import { Hero, Tab } from './common'
import '../assets/styles/App.scss'

function App() {
	return (
		<div className='App'>
			<Hero />
			{/* Getting Started */}
			<section>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className='mb-3 text-center'>Getting Started</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<div className='code-box text-start'>
							<pre>
								<code>
									<div>
										<span className='code-comment'>mkdir react-flask</span>
									</div>
									<div>
										<span className='code-comment'>cd react-flask</span>
									</div>
									<div>
										<span className='code-comment'>mkdir server</span>
									</div>
									<div>
										<span className='code-comment'>cd server</span>
									</div>
									<div>
										<span className='code-comment'>touch server.py</span>
									</div>
									<div>
										<span className='code-comment'>cd ..</span>
									</div>
									<div>
										<span className='code-comment'>npx create-react-app client</span>
									</div>
									<div>
										<span className='code-comment'>cd server</span>
									</div>
									<div>
										<span className='code-comment'>python -m venv venv</span>
									</div>
									<div>
										<span className='code-comment'>venv\Scripts\activate</span>
									</div>
									<div>
										<span className='code-comment'>pip install flask</span>
										<span className='code-blinking'>|</span>
									</div>
								</code>
							</pre>
						</div>
					</div>
					<div className='col-md-6'>
						<ul className='text-start'>
							<li className='mb-1'>
								Create a folder named <i className='fa-solid fa-folder' /> <code>react-flask</code> as the root folder
								of your project.
							</li>
							<li className='mb-1'>
								Open a terminal window and navigate to the <i className='fa-solid fa-folder' /> <code>react-flask</code>{' '}
								folder.
							</li>
							<li className='mb-1'>
								Run the command <code>mkdir server</code> to create a folder for the Flask server.
							</li>
							<li className='mb-1'>
								Run the command <code>cd server</code> to navigate to the <i className='fa-solid fa-folder' />{' '}
								<code>server</code> folder.
							</li>
							<li className='mb-1'>
								Run the command <code>touch server.py</code> to create a file for the Flask server.
							</li>
							<li className='mb-1'>
								Run the command <code>cd ..</code> to navigate back to the <i className='fa-solid fa-folder' />{' '}
								<code>react-flask</code> folder.
							</li>
							<li className='mb-1'>
								Run the command <code>npx create-react-app client</code> to create a React app.
							</li>
							<li className='mb-1'>
								Run the command <code>cd server</code> to navigate to the <i className='fa-solid fa-folder' />{' '}
								<code>server</code> folder.
							</li>
							<li className='mb-1'>
								Run the command <code>python -m venv venv</code> to create a virtual environment for the Flask server.
							</li>
							<li className='mb-1'>
								Run the command <code>venv\Scripts\activate</code> to activate the virtual environment.
							</li>
							<li className='mb-1'>
								Run the command <code>pip install flask</code> to install Flask in the virtual environment.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section>
				{/* Setting Up The Folder Directory Structure */}
				<div className='row'>
					<div className='col-md-12'>
						<h1 className='my-3 text-center'>Setting Up The Folder Directory Structure</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<p className='lead text-center'>
							There is no one "best" folder directory structure for a React.js client application as it depends on the
							specific requirements of the application and the preferences of the development team. However, here is a
							commonly used directory structure for a React.js client application:
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 d-flex flex-column'>
						<p className='fw-bold mb-3 text-center'>Here is a visual representation of the directory structure:</p>
						<div className='text-start mx-auto'>
							<div>
								<code>src/</code>
							</div>
							<div>
								<code>├── assets/</code>
							</div>
							<div>
								<code>│ ├── images/</code>
							</div>
							<div>
								<code>│ ├── fonts/</code>
							</div>
							<div>
								<code>│ └── styles/</code>
							</div>
							<div>
								<code>├── components/</code>
							</div>
							<div>
								<code>│ ├── common/</code>
							</div>
							<div>
								<code>│ ├── layout/</code>
							</div>
							<div>
								<code>│ ├── routes/</code>
							</div>
							<div>
								<code>│ └── App.jsx</code>
							</div>
							<div>
								<code>├── constants/</code>
							</div>
							<div>
								<code>├── helpers/</code>
							</div>
							<div>
								<code>├── services/</code>
							</div>
							<div>
								<code>├── store/</code>
							</div>
							<div>
								<code>│ ├── actions/</code>
							</div>
							<div>
								<code>│ ├── reducers/</code>
							</div>
							<div>
								<code>│ └── store.js</code>
							</div>
							<div>
								<code>├── index.js</code>
							</div>
							<div>
								<code>└── routes.js</code>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<ul className='text-start'>
							<li className='mb-1'>
								<span className='fw-bold'>src/</span> - This is the root directory for all the source files of the
								application.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>assets/</span> - This directory contains all the static assets of the
								application, such as images, fonts, and stylesheets.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>components/</span> - This directory contains all the React components of the
								application, organized by their purpose.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>common/</span> - This directory contains reusable components that can be used
								across different pages and layouts.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>layout/</span> - This directory contains components that define the layout of
								the application, such as the header and footer.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>routes/</span> - This directory contains components that represent the pages
								of the application.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>App.jsx</span> - This is the main component that serves as the entry point for
								the application.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>constants/</span> - This directory contains constants used throughout the
								application, such as action types and URLs.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>helpers/</span> - This directory contains utility functions used throughout
								the application.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>services/</span> - This directory contains modules that handle API requests
								and responses.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>store/</span> - This directory contains the Redux store of the application.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>actions/</span> - This directory contains Redux action creators.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>reducers/</span> - This directory contains Redux reducers.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>store.js</span> - This file creates and configures the Redux store.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>index.js</span> - This is the entry point for the application.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>routes.js -</span> This file defines the routes of the application using a
								router library like react-router-dom.
							</li>
						</ul>
					</div>
				</div>
			</section>
			{/* Building The Backend Using Flask */}
			<section>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className='my-3 text-center'>Building The Backend Using Flask</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<div className='code-box text-start'>
							<pre>
								<code>
									<div>
										<span className='fw-lighter text-secondary me-3'>#01</span>
										<span className='code-comment'># server.py</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#02</span>
										<span className='code-keyword'>from</span> flask <span className='code-keyword'>import</span> Flask
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#03</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#04</span>
										app = Flask(__name__)
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#05</span>
										<span className='code-decorator'>@app</span>.route(<span className='code-string'>'/members'</span>)
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#06</span>
										<span className='code-keyword'>def</span> get_members():
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#07</span>
										<span className='code-keyword'>return</span> {'{'}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#08</span>
										<span className='code-string'>
											<Tab count={1} />
											'members'
										</span>
										: [
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#09</span>
										<span className='code-string'>
											<Tab count={2} />
											{'{'}
										</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#10</span>
										<span className='code-string'>
											<Tab count={3} />
											'id'
										</span>
										: <span className='code-number'>1</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#11</span>
										<span className='code-string'>
											<Tab count={3} />
											'full_name'
										</span>
										: <span className='code-string'>'John M Doe'</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#12</span>
										<span className='code-string'>
											<Tab count={3} />
											'first_name'
										</span>
										: <span className='code-string'>'John'</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#13</span>
										<span className='code-string'>
											<Tab count={3} />
											'middle_name'
										</span>
										: <span className='code-string'>'M'</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#14</span>
										<span className='code-string'>
											<Tab count={3} />
											'last_name'
										</span>
										: <span className='code-string'>'Doe'</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#15</span>
										<span className='code-string'>
											<Tab count={3} />
											'email'
										</span>
										:{' '}
										<span className='code-string'>
											'JohnDoe
											<span className='code-string'>@</span>email.com'
										</span>
										,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#16</span>
										<span className='code-string'>
											<Tab count={3} />
											'status'
										</span>
										: <span className='code-string'>'active'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#17</span>
										<span className='code-string'>
											<Tab count={2} />
											{'},'}
										</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#18</span>
										<span className='code-string'>
											<Tab count={2} />
											{'{'}
										</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#19</span>
										<span className='code-string'>
											<Tab count={3} />
											'id'
										</span>
										: <span className='code-number'>2</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#20</span>
										<span className='code-string'>
											<Tab count={3} />
											'full_name'
										</span>
										: <span className='code-string'>'Jane M Doe'</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#21</span>
										<span className='code-string'>
											<Tab count={3} />
											'first_name'
										</span>
										: <span className='code-string'>'Jane'</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#22</span>
										<span className='code-string'>
											<Tab count={3} />
											'middle_name'
										</span>
										: <span className='code-string'>'M'</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#23</span>
										<span className='code-string'>
											<Tab count={3} />
											'last_name'
										</span>
										: <span className='code-string'>'Doe'</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#24</span>
										<span className='code-string'>
											<Tab count={3} />
											'email'
										</span>
										:{' '}
										<span className='code-string'>
											'JaneDoe
											<span className='code-string'>@</span>email.com'
										</span>
										,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#25</span>
										<span className='code-string'>
											<Tab count={3} />
											'status'
										</span>
										: <span className='code-string'>'inactive'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#26</span>
										<span className='code-string'>
											<Tab count={2} />
											{'},'}
										</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#27</span>
										<span className='code-string'>
											<Tab count={2} />]
										</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#28</span>
										<span className='code-string'>
											<Tab count={1} />}
										</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#29</span>
										<span className='code-keyword'>if</span> __name__ == <span className='code-string'>'__main__'</span>
										:
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#30</span>
										<span className='code-keyword'>app</span>.run(debug=<span className='code-keyword'>True</span>)
										<span className='code-blinking'>|</span>
									</div>
								</code>
							</pre>
						</div>
					</div>
					<div className='col-md-6'>
						<ul>
							<li className='mb-1'>
								<span className='fw-bold'>Line 2</span> - Import the Flask class from the flask module.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 4</span> - Create an instance of the Flask class and assign it to the
								<code>app</code> variable.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 5</span> - Use the <code>@app.route()</code> decorator to define a route
								for the <code>/members</code> endpoint.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 6</span> - Define the <code>get_members()</code> function that returns a
								list of members.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 29</span> - Run the application in debug mode if the script is executed
								directly.
							</li>
						</ul>
					</div>
				</div>
			</section>
			{/* Building The Frontend Using React */}
			<section>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className='my-3 text-center'>Building The Frontend Using React</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<div className='code-box text-start'>
							<pre>
								<code>
									<div>
										<span className='fw-lighter text-secondary me-3'>#01</span>
										<span className='code-comment'>// index.js</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#02</span>
										<span className='code-keyword'>import</span> React <span className='code-keyword'>from</span>{' '}
										<span className='code-string'>'react'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#03</span>
										<span className='code-keyword'>import</span> ReactDOM <span className='code-keyword'>from</span>{' '}
										<span className='code-string'>'react-dom/client'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#04</span>
										<span className='code-keyword'>import</span> App <span className='code-keyword'>from</span>{' '}
										<span className='code-string'>'./components/App'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#05</span>
										<span className='code-keyword'>import</span> {'{'} BrowserRouter, Routes, Route {'}'}{' '}
										<span className='code-keyword'>from</span> <span className='code-string'>'react-router-dom'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#06</span>
										<span className='code-keyword'>import</span> {'{'} Members {'}'}{' '}
										<span className='code-keyword'>from</span>{' '}
										<span className='code-string'>'./components/routes'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#07</span>
										<span className='code-keyword'>const</span> root = ReactDOM.createRoot(document.getElementById(
										<span className='code-string'>'root'</span>)!)
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#08</span>
										root.render(
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#09</span>
										<Tab count={1} />
										&lt;React.StrictMode&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#10</span>
										<Tab count={2} />
										&lt;BrowserRouter&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#11</span>
										<Tab count={3} />
										&lt;Routes&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#12</span>
										<Tab count={4} />
										&lt;Route path=<span className='code-string'>'/'</span> element=&lt;
										<span className='code-string'>'&lt;App /&gt;'</span> /&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#13</span>
										<Tab count={4} />
										&lt;Route path=<span className='code-string'>'/members'</span> element=&lt;
										<span className='code-string'>'&lt;Members /&gt;'</span> /&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#14</span>
										<Tab count={3} />
										&lt;/Routes&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#15</span>
										<Tab count={2} />
										&lt;/BrowserRouter&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#16</span>
										<Tab count={1} />
										&lt;/React.StrictMode&gt;,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#17</span>)
									</div>
								</code>
							</pre>
						</div>
					</div>
					<div className='col-md-6'>
						<ul>
							<li className='mb-1'>
								<span className='fw-bold'>Line 2</span> - Import the React module.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 3</span> - Import the ReactDOM module.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 4</span> - Import the <code>App</code> component.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 5</span> - Import the <code>BrowserRouter</code>, <code>Routes</code>,
								and <code>Route</code> components from the react-router-dom module.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 6</span> - Import the <code>Members</code> component.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 7</span> - Create a root for the React application.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 8</span> - Render the React application.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 9</span> - Wrap the application in a <code>React.StrictMode</code>{' '}
								component.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 10</span> - Wrap the application in a <code>BrowserRouter</code>{' '}
								component.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 11</span> - Wrap the application in a <code>Routes</code> component.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 12</span> - Define the route for the <code>/</code> endpoint.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 13</span> - Define the route for the <code>/members</code> endpoint.
							</li>
						</ul>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<div className='code-box text-start'>
							<pre>
								<code>
									<div>
										<span className='fw-lighter text-secondary me-3'>#01</span>
										<span className='code-comment'>// Members.jsx</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#02</span>
										<span className='code-keyword'>import</span> React, {'{'} useState, useEffect {'}'}{' '}
										<span className='code-keyword'>from</span> <span className='code-string'>'react'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#03</span>
										<span className='code-keyword'>import</span> {'{'} Link {'}'}{' '}
										<span className='code-keyword'>from</span> <span className='code-string'>'react-router-dom'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#04</span>
										<span className='code-keyword'>import</span> <span className='code-string'>'./_members.scss'</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#05</span>
										<span className='code-keyword'>const</span> Members = () =&gt; {'{'}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#06</span>
										<Tab count={1} />
										<span className='code-keyword'>const</span> [data, setData] = useState([
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#07</span>
										<Tab count={2} />
										{'{'}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#08</span>
										<Tab count={3} />
										id: <span className='code-number'>0</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#09</span>
										<Tab count={3} />
										first_name: <span className='code-string'>''</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#10</span>
										<Tab count={3} />
										middle_name: <span className='code-string'>''</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#11</span>
										<Tab count={3} />
										last_name: <span className='code-string'>''</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#12</span>
										<Tab count={3} />
										email: <span className='code-string'>''</span>,
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#13</span>
										<Tab count={3} />
										status: <span className='code-string'>''</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#14</span>
										<Tab count={2} />
										{'}'},
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#15</span>
										<Tab count={1} />
										])
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#16</span>
										<Tab count={1} />
										<span className='code-keyword'>useEffect</span>(() =&gt; {'{'}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#17</span>
										<Tab count={2} />
										fetch(
										<span className='code-string'>'/api/members'</span>)
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#18</span>
										<Tab count={3} />
										.then((res) =&gt; res.json())
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#19</span>
										<Tab count={3} />
										.then((data: any) =&gt; {'{'}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#20</span>
										<Tab count={4} />
										setData(
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#21</span>
										<Tab count={4} />
										data.members
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#22</span>
										<Tab count={3} />)
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#23</span>
										<Tab count={3} />
										console.log(data.members)
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#24</span>
										<Tab count={3} />
										{'}'})
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#25</span>
										<Tab count={2} />
										{'})'}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#26</span>
										<Tab count={1} />
										{'})'}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#27</span>
										<Tab count={1} />
										<span className='code-keyword'>return</span> (
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#28</span>
										<Tab count={2} />
										&lt;div id=
										<span className='code-string'>'membersView'</span>&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#29</span>
										<Tab count={3} />
										&lt;div className=
										<span className='code-string'>'row'</span>&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#30</span>
										<Tab count={4} />
										{`{typeof data ===`}
										<span className='code-string'>'undefined'</span> {`? (`}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#31</span>
										<Tab count={5} />
										&lt;p&gt;Loading...&lt;/p&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#32</span>
										<Tab count={4} />
										{`) : (`}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#33</span>
										<Tab count={5} />
										data.map((member, index) =&gt; {'{'}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#34</span>
										<Tab count={6} />
										{`return (`}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#35</span>
										<Tab count={7} />
										&lt;div className=
										<span className='code-string'>'col-md-12'</span> key=
										<span className='code-string'>{`{index}`}</span>&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#36</span>
										<Tab count={8} />
										{`{member.first_name} {member.last_name}`}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#37</span>
										<Tab count={7} />
										&lt;/div&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#38</span>
										<Tab count={6} />
										{`)`}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#39</span>
										<Tab count={5} />
										{`})`}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#40</span>
										<Tab count={4} />
										{`)}`}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#41</span>
										<Tab count={3} />
										&lt;/div&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#42</span>
										<Tab count={2} />
										&lt;/div&gt;
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#43</span>
										<Tab count={1} />)
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#44</span>
										{`})`}
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#45</span>
									</div>
									<div>
										<span className='fw-lighter text-secondary me-3'>#46</span>
										<span className='code-keyword'>export default</span> Members
										<span className='code-blinking'>|</span>
									</div>
								</code>
							</pre>
						</div>
					</div>
					<div className='col-md-6'>
						<ul>
							<li className='mb-1'>
								<span className='fw-bold'>Line 2</span> - Import the React module, the <code>useState</code> and{' '}
								<code>useEffect</code> hooks from the React module.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 3</span> - Import the <code>Link</code> component from the
								react-router-dom module.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 4</span> - Import the <code>_members.scss</code> stylesheet.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 5</span> - Define the <code>Members</code> component.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 6</span> - Define the <code>data</code> state variable.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 17</span> - Fetch the members data from the API.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 18</span> - Convert the response to JSON.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 19</span> - Set the <code>data</code> state variable.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 23</span> - Log the members data to the console.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 27</span> - Render the <code>Members</code> component.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 30</span> - Check if the <code>data</code> state variable is{' '}
								<code>undefined</code>.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 31</span> - Display a loading message if the <code>data</code> state
								variable is <code>undefined</code>.
							</li>
							<li className='mb-1'>
								<span className='fw-bold'>Line 33</span> - Display the members data if the <code>data</code> state
								variable is not <code>undefined</code>.
							</li>
						</ul>
					</div>
				</div>
			</section>
			{/* Deploying The Application */}
			<section>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className='my-3 text-center'>Deploying The Application</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<p className='lead text-center'>
							To start the application, open two terminal windows. In the first terminal window, navigate to the{' '}
							<i className='fa-solid fa-folder' /> <code>react-flask/server</code> folder and run the command{' '}
							<code>python server.py</code>. In the second terminal window, navigate to the{' '}
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

export default App

