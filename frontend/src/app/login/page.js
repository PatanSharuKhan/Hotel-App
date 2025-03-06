"use client"

import React, { useEffect, useState } from "react"
import bcrypt from "bcryptjs-react";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
	const [users, setUsers] = useState([])
	const [error, setError] = useState("")

  useEffect(() => {
    if (localStorage.getItem("authToken") !== null) {
      window.location.replace("/dashboard")
    }
		fetch("https://salmon-modesty-3.tiiny.site/users.json").then(
			(response) => response.json()
		).then((data) => {
			setUsers(data.users)
		}).catch((error) => {
			console.error("Error fetching users", error)
		})
  }, [])

  const handleInputChange = (e) => {
		setError("")
    if (e.target.name === "email") {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

	const handleFormData = (e) => {
		e.preventDefault()
		if (users.length > 0) {
			for(let user of users) {
				if (user.email === email) {
					if (bcrypt.compareSync(password, user.password)) {
						localStorage.setItem("authToken", "jwtoken")
						window.location.replace("/dashboard")
						break
					}else{
						setError("Incorrect password")
						break
					}
				}else{
					setError("Email does not exist")
				}
			}
		}else{
			setError("Server Error / No registered users - Try again later")
		}
	}

  return (
    <div className="h-[100vh] flex flex-col justify-center text-center">
      <h1 className="mb-5 text-2xl">HOTEL APP</h1>
      <form
        onSubmit={handleFormData}
				className="flex flex-col w-[50%] lg:w-[30%] mx-auto"
      >
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
					className="mb-4 border p-2 rounded border-gray-500"
					required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
					required
					className="mb-4 border p-2 rounded border-gray-500"
        />
				<p className="text-red-500 text-sm mb-2">{error}</p>
        <button type="submit" className="border rounded p-2 w-[50%] mx-auto bg-gray-800 cursor-pointer">Login</button>
      </form>
    </div>
  )
}

export default Login
