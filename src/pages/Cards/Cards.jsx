import { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const Cards = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('property.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])





    return (
        <div className="mt-10">
            <div className=" text-center mb-5">
                <h1 className="text-xl lg:text-5xl font-semibold">Rent or Sell
                    Property Online </h1>
                <p className="mt-2">Looking to sell property online or are you in search of tenants? <br />
                    Do it with ease with the largest real estate marketplace in
                    Bangladesh.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    properties.map(property => <PropertyCard key={property.id} property={property}></PropertyCard>)
                }
            </div>


        </div>
    );
};

export default Cards;