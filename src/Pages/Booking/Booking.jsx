import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingTable from "./BookingTable";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/checkout?email=${user.email}`;

  //all data get from backend database useing thie use effect
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  //handle delete btn function
  const handleDelete = (id) => {
    const procced = confirm("Are you sure to delete it");
    if (procced) {
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Your booking has deleted");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  //confirm btn function
  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
        body: JSON.stringify({status:"confirm"}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            // alert('Order has confirmed')
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking =>booking._id === id);
            updated.status = "confirm";
            const newBooking =[updated, ...remaining];
            setBookings(newBooking)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="text-2xl text-center leading-8">Hello there, here is your useing booking Details : {bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingTable
                key={booking._id}
                booking={booking}
                handleConfirm={handleConfirm}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Booking;
