import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingTable from "./BookingTable";

const Booking = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/checkout?email=${user.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setBookings(data)
        })
        .catch(error=>console.log(error))

    },[])

    const handleDelete = id =>{

        const procced = confirm("Are you sure to delete it");
        if(procced){
            fetch()
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
            })
            .catch(error =>console.log(error))
        }

    }
    return (
        <>
        <h1>Hello I am useing booking Details : {bookings.length}</h1>
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
      {
        bookings.map(booking=><BookingTable key={booking._id} booking={booking} handleDelete={handleDelete}/>)
      }
     
    </tbody>
  
  </table>
</div>
            
        </>
    );
};

export default Booking;