"use client"
import React, { useEffect, useState } from "react"

class Store {
	static AUTHTOKEN = "authToken" // key for local storage, to store auth token

  static hotelUrl = "https://salmon-modesty-3.tiiny.site/hotels.json"

  static HOTELS = "hotels" // key for local storage, to store hotels

  static setHotels(hotels) {
    localStorage.setItem(this.HOTELS, JSON.stringify(hotels))
  }
}

const Dashboard = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
		if (localStorage.getItem(Store.AUTHTOKEN) === null) {
			window.location.replace("/login")
		}

		setHotels(JSON.parse(localStorage.getItem(Store.HOTELS) || "[]"))

    if (hotels.length === 0) {
      fetch(Store.hotelUrl)
        .then((response) => response.json())
        .then((data) => {
          setHotels(data.hotels)
          Store.setHotels(data.hotels)
        })
        .catch((error) => {
          console.error("Error fetching hotels", error)
        })
    }
  }, [])

	const handleLogout = () => {
		localStorage.removeItem(Store.AUTHTOKEN)
		window.location.replace("/login")
	}

  return (
    <div>
			<a href="/my-bookings">My Bookings</a>
      <h1>This is the Hotel Dashboard! <button onClick={handleLogout}>Logout</button></h1>
      <ul>
        {hotels.map((hotel) => (
          <>
            <li key={hotel.id}>
              {hotel.id} | {hotel.name} | {hotel.address} | {hotel.email} |{" "}
              {hotel.mobile}
            </li>
            <a href="">Book</a>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
