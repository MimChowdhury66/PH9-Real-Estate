import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Property Portal | Home</title>
            </Helmet>
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;