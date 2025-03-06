"use client"
import React, { useEffect } from "react"

const MyBookings = () => {
  useEffect(() => {
    if (localStorage.getItem("authToken") === null) {
      window.location.replace("/login")
    }
  }, [])
  return (
    <div>
      <h1>My Bookings</h1>
      <p>Checkin process</p>
      <form>
        <input type="text" placeholder="Aadhaar Number" />
        <button>Checkin</button>
      </form>
    </div>
  )
}

export default MyBookings
