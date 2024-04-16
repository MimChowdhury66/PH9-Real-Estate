import { Link, NavLink } from "react-router-dom";
import background from '../../../public/cool-background.png'
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const Header = () => {
    const { logout, user } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
                        <li><NavLink to="/service">Legal Service</NavLink></li>
                    </ul>
                </div>
                <a className=" text-2xl font-bold">Property <span className="text-sky-500">Portal</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
                    <li><NavLink to="/service">Legal Service</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip={user.displayName}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar " >
                            <div className="w-10 rounded-full "  >
                                <img src={user.photoURL} alt="" />

                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={logout} className="btn btn-sm btn-ghost">Logout</button></li>
                        </ul>
                    </div> :



                        <Link to='/login'><button style={{ backgroundImage: `url(${background})` }} className="btn text-xl">Log In</button></Link>

                }

            </div>
        </div>
    );
};

export default Header;