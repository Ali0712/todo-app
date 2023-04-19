import React from 'react'
import logo from "./logo2.png";

function Header() {
	return (
		<>
			<nav className="navbar">

				<h1 className="navbar-heading"><img className='logo' src={logo} alt="logo" />PlanMate</h1>
				<p className="navbar-tagline">Your Perfect Planning Companion</p>
			</nav>
		</>
	)
}
 
export default Header