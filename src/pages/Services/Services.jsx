import banner from '../../../public/service.png';
import 'animate.css';
import { Helmet } from "react-helmet-async";

const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Property Portal | Services</title>
            </Helmet>
            <div className="hero h-[400px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold animate__animated animate__backInDown">LEGAL SERVICES SUPPORT
                        </h1>
                        <p className="mb-5">MUTATION | PERMISSION | DEED | PLAN & AMP | NEC | C.S. S.A. R.S. | MOUZA MAP | CERTIFICATIONS

                        </p>
                        <button className="btn btn-outline ">Apply for legal services</button>
                    </div>
                </div>
            </div>
            <div className='mt-10 bg-cyan-200 p-5 mb-10'>
                <h1 className='text-center text-xl'>There are many legal documents and processes that need to be managed and handled during any property transaction. This can range from formally having your name appear against the government’s records to even having the permission to sell a property in the first place. Property Portal's Legal services take care of all this to ensure you do not get lost in the paperwork and can focus entirely on the property transaction.</h1>
            </div>
            <div>

                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Services Details
                        </h2>
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Legal Document Vetting</summary>
                                <div className="px-4 pb-4">
                                    <p>Ensure every document is exactly how and where it is supposed to be for carefree living and investment possibilities with the best property legal services in Bangladesh.
                                    </p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Changing Property Ownership
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>Property Portal helps provides the property legal services in Dhaka required for changing title ownership from one person to another.
                                    </p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Sale Permission</summary>
                                <div className="px-4 pb-4 space-y-2">
                                   
                                    <p>We ensure a Sale Permission is present in order for the existing owner, or lessee, of a property to be able to sell their property.
                                        We handle all your property legal aspects so you can focus on your purchase, sale, or investment without a worry.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Need Construction Approval?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                
                                    <p>Property portal ensures that plans you need to begin a construction project are approval-ready and help in acquiring those approvals both in the case of creation and in the case of lost documents.
</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;