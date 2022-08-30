import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUpUserForm() {
    const [formData, setFormData] = useState({
        id: "",

        password: "",
    });

    const [err, setErr] = useState("");
    const [message, setMessage] = useState("");

    const handleFormData = (event) => {
        if (event.target.type === "checkbox") {
            setFormData({
                ...formData,
                [event.target.id]: event.target.checked,
            });
        } else {
            setFormData({
                ...formData,
                [event.target.id]: event.target.value,
            });
        }
    };

    // intialzing axios obj
    const api = axios.create({
        baseURL: "https://cookiez-app.herokuapp.com/api",
    });

    // new user obj, that will be POSTed
    const newUser = {
        id: formData.username,

        password: formData.password,
    };

    //TODO: this has worked, yay!!!
    /*
        * Previous err message was: Access to XMLHttpRequest at 'https://cookiez-app.herokuapp.com/api/dishes'
            from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        * solution was to disable CROSS, I did this by installing a Chrome plugin
            plugin link: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related
            stackOverFlow solution link: https://stackoverflow.com/questions/46522749/how-to-solve-redirect-has-been-blocked-by-cors-policy-no-access-control-allow
    */

    // POSTing to customer endpoint
    const handleSubmit = async (e) => {
        e.preventDefault();
        const signInRes = await api
            .post("/auth/signin", newUser)
            .then(function (response) {
                setMessage(response.data.message);
                console.log(response);
                localStorage.setItem("id", JSON.parse(response.config.data).id);
                router.push("/");
            })
            .catch(function (error) {
                console.log(error);
                let isArray = Array.isArray(error.response.data.errors);
                if (isArray) {
                    setErr(error.response.data.errors[0].msg);
                } else {
                    setErr(error.response.data.error);
                }
            });
        // if res.ok redirect to sign in

        // debugging
        // } catch (err) {
        // res not in 200 res, errs from axios itself
        // errs from axios, if err is within the 200 range
        // if (err.response) {
        //} else {
        // if err is not in 200 range, tis will display the err message itself
        // }
        //}
    };

    // initializing router
    const router = useRouter();

    // handle cancel button
    const handleCancel = (e) => {
        e.preventDefault();
        // redirect user to home page
        router.push("/signUp");
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        // TODO: add route to sign in page
        router.push("/");
    };

    return (
        // component container
        <div className='flex flex-row flex-wrap justify-center'>
            {/* form container */}
            <div className='flex flex-col space-y-4 px-10 pt-9 pb-9'>
                <h1 className='text-center text-2xl font-bold text-primary'>
                    Create A Customer Account
                </h1>
                <form
                    className='flex w-96 flex-col space-y-5'
                    action='#'
                    onSubmit={(event) => handleSubmit(event)}
                >
                    {/* username */}
                    <h2>User Name</h2>
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow'
                        id='username'
                        type='text'
                        placeholder='Username'
                        value={formData.username}
                        onChange={(e) => handleFormData(e)}
                        required
                    />

                    {/* password fields  */}

                    {/* password */}
                    <h2>Password</h2>
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow'
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={(e) => handleFormData(e)}
                        required
                    />

                    {/* submit button */}
                    <input
                        className='focus:shadow-outline cursor-pointer rounded-xl bg-primary  py-2 px-4 font-bold text-white shadow hover:bg-emerald-700'
                        type='submit'
                        value='Submit'
                    />
                    {/* cancel button */}
                    <button
                        className='focus:shadow-outline rounded-xl border border-primary  bg-transparent py-2 px-4 font-bold text-primary shadow hover:bg-primary  hover:text-white'
                        onClick={(e) => handleCancel(e)}
                    >
                        Cancel
                    </button>
                    {/* sign in redirecting */}
                    <div className='text-center text-xs font-bold text-black'>
                        <span>Already Have An Account? </span>
                        <span className='text-blue-500'>
                            <button
                                className='underline'
                                onClick={(e) => handleSignIn(e)}
                            >
                                Sign in
                            </button>
                        </span>
                    </div>
                </form>

                {err && (
                    <h2 className='text-center font-bold text-red-600'>
                        {err}
                    </h2>
                )}

                {message && (
                    <h2 className='text-center font-bold text-green-600'>
                        {message}
                    </h2>
                )}
            </div>

            {/* image section */}
            <div className='flex max-w-screen-sm items-center bg-signUpImageColor'>
                <Image
                    src='/images/signup.png'
                    alt='test'
                    width={500}
                    height={500}
                ></Image>
            </div>
        </div>
    );
}
