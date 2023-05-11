import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Members } from './components/routes'
import { Navbar, Footer } from './components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// fix type declation for react

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<div className='container' style={{ marginTop: '100px', marginBottom: '125px' }}>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/members' element={<Members />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

