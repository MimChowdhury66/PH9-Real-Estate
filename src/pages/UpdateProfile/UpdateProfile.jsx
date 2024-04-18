import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        console.log(data);
        updateUserProfile(data.FullName, data.PhotoURL)
            .then(() => {
                toast.success('Update Successfully', {
                    autoClose: 5000,
                });

            })
    }

    return (
        <div>
            <Helmet>
                <title>Property Portal | Update Profile</title>
            </Helmet>
            <h1>Update Your profile here</h1>

            {
                user &&
                <div className="bg-slate-200 grid lg:flex justify-center gap-5 p-10 ">
                    <div className="lg:mt-10">
                        <form onSubmit={handleSubmit(onSubmit)} action="" className="grid justify-center bg-slate-200">
                            <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                            <input type="text" name="name" id="username" placeholder={user.displayName} className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600 mb-5"
                                {...register("FullName")}
                            />
                            <label htmlFor="name" className="block dark:text-gray-600">PhotoURL</label>

                            <input type="text" name="name" id="username" placeholder={user.photoURL} className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                                {...register("PhotoURL")}
                            />
                            <button className="block w-full mt-5 p-3 text-center rounded-full dark:text-gray-50 bg-slate-400">Update</button>
                        </form>
                    </div>
                    <div className="mt-20">
                        <img className="w-60 rounded-full" src={user.photoURL} alt="" />
                        <h3 className="text-center mt-3">Email: {user.email}</h3>
                    </div>
                </div>
            }


        </div>
    );
};

export default UpdateProfile;