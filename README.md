# Problem Statement
A user registers on your site using email and password. He plans to visit a tourist place with his family. He wants to book
a hotel. Once he books the hotel he can do a web check-in by providing aadhaar number for all the family members.

# Approach
- [Login-Page] Authentication using email and password.
- [Landing-Page] Dashboard to display the list of hotels.
- [Detailed-Hotel-page] Allow user to view the hotel details and a button for booking.
- [My-Bookings-Page] Display the booked hotels.
- [Check-in-Page] Allow user to check-in using the Aadhaar number.

# Authorization
- User can [view] hotels
- Admin can [create-view-delete-update] hotels

# Functionality
- User authenticate using email and password
- View the Hotel and click on booking

- Admin register the hotel
- View the booked hotels by users.
- Admin enters the aadhaar during check-in.

# Technologies
- React
- Node
- Postgresql
- Prisma ORM

# Notes
- Fetch the json file [hotels], store them in local storage, make crud operations. Use the local storage for crud operations.
- If some thing went wrong fetch the json file and update the local storage.
- Name the hotels as (hotels), booked as (booked)