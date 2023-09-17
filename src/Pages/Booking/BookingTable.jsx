const BookingTable = ({booking, handleDelete, handleConfirm}) => {

    const {_id, img, price, date, service_name, name, status} = booking;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={img}
                alt="car service images"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_name}</div>
            <div className="text-sm ">{name}</div>
            <div className="text-sm opacity-50">Bangladesh</div>
          </div>
        </div>
      </td>
      <td>
        $ {price}
      </td>
      <td>{date}</td>
      <th className="space-x-1">
        <button onClick={()=>handleConfirm(_id)} className="btn btn-primary btn-xs">{status === 'confirm' ? "Confirmed":"confirm"}</button>
        <button onClick={()=>handleDelete(_id)} className="btn btn-error btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default BookingTable;
