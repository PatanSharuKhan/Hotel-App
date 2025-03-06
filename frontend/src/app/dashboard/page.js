"use client"
import React, { useEffect, useState } from "react"
import Header from "../components/header"

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

  const hotelCard = (hotel) => {
    return (
      <div
        className="border p-2 rounded mb-2 border-gray-400 mx-1"
        key={hotel.id}
      >
        <h1>{hotel.name}</h1>
        <hr />
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vT0D8oWYIkE6DY7euRWMggL994u0PerFTQ&s" className="w-100"/>
        <p>Email: {hotel.email}</p>
        <p>Mobile: {hotel.mobile}</p>
				<p>Address: {hotel.address}</p>
        <button className="border p-1 rounded bg-gray-600 mt-3">Book</button>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div>
        <a href="/my-bookings" className="mx-1 border p-1 bg-blue-700">
          My Bookings
        </a>
        <h1 className="mx-1 my-3">HOTELS</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hotels.map((hotel) => hotelCard(hotel))}
        </ul>
				{hotels.length === 0 && <p className="text-red-500 mx-1 mt-3">Hotels not found!</p>}
      </div>
    </>
  )
}

export default Dashboard
