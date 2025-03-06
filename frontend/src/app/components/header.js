"use client"

import React, { useEffect } from "react"

const Header = () => {
	useEffect(() => {
		if(localStorage.getItem("authToken") === null){
			window.location.replace("/login")
		}
	},[])

	const handleLogout = () => {
		localStorage.removeItem("authToken")
		window.location.replace("/login")
	}
  return (
    <div className="flex justify-between p-3 bg-gray-600 mb-4">
      <a href="/">
        <h1>Hotel-App</h1>
      </a>
      <button onClick={handleLogout} className="cursor-pointer">Logout</button>
    </div>
  )
}

export default Header
