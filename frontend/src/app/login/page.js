"use client"

import React, { useEffect, useState } from "react"
import bcrypt from "bcryptjs-react";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
	const [users, setUsers] = useState([])

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
    if (e.target.name === "email") {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

	const handleFormData = (e) => {
		e.preventDefault()
		if (users.length > 0) {
			users.map((user) => {
				if (user.email === email) {
					if (bcrypt.compareSync(password, user.password)) {
						localStorage.setItem("authToken", "jwtoken")
						window.location.replace("/dashboard")
					}else{
						alert("Incorrect password")
					}
				}else{
					alert("Email does not exist")
				}
			})
		}else{
			alert("Server Error / No registered users - Try again later")
		}
	}

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleFormData}
      >
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
					required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
					required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
