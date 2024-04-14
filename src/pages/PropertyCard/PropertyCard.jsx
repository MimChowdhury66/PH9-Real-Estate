
const PropertyCard = ({ property }) => {
    // console.log(property);
    const { image, estate_title, segment_name, status, area, location, facilities, description, price } = property;
    return (
        <div>
            <div className="card h-[100%]  bg-base-100 shadow-xl">
                <figure><img className="w-[100%] md:h-[200px] lg:h-[250px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-2xl font-semibold">
                        {estate_title}
                        <div className="badge badge-primary p-3">{status}</div>
                    </h2>
                    <p> <span className="font-bold">Segment:</span> {segment_name} </p>
                    <p> <span className="font-bold">Description:</span> {description} </p>
                    <p> <span className="font-bold">Area:</span> {area} </p>
                    <p> <span className="font-bold">Location:</span> {location} </p>

                    <p> <span className="font-bold">Facilities:</span> {
                        facilities.map((facility, idx) => <span key={idx}> <ul className="list-disc ml-6"> <li>{facility}</li> </ul></span>)
                    } </p>

                    <p> <span className="text-2xl font-bold">Price:</span> {price} </p>

                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-outline btn-primary">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;