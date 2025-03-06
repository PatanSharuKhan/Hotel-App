import React from 'react';

const Home = () => {
  
  return (
    <div>
      <h1>Welcome to the Hotel Booking App</h1>
      <p>Explore the site</p>
      <a href='/dashboard'>Click here to go to Dashboard</a>
      <ul>
        <li>You will see the list of hotels with the corresponding prices.</li>
        <li>Click on book button to book the hotel</li>
        <li>Go to My Bookings tab and make the checkin process by entering Aadhaar number.</li>
      </ul>
    </div>
  )
}

export default Home;