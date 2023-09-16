import { useLoaderData } from "react-router-dom";
// import Service from './../Service/Service';

const Checkout = () => {
    const service = useLoaderData();
    console.log(service)
    const {title,service_id, img, price} = service
    return (
        <>
            <h1>I am checkout page</h1>
            <p>Service length:  {title}</p>
        </>
    );
};

export default Checkout;