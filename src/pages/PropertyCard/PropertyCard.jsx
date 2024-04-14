
const PropertyCard = ({ property }) => {
    console.log(property);
    const { image, estate_title, segment_name, status, area, location, facilities, description, price } = property;
    return (
        <div>
            <div className="card h-[100%]  bg-base-100 shadow-xl">
                <figure><img className="w-[100%] md:h-[200px] lg:h-[250px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;