import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUpChefForm() {
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        birthday: "",
        gender: "",
        bio: "",
        kitchenName: "",
        kitchenDescription: "",
    });

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
        username: formData.username,
        firstname: formData.firstName,
        lastname: formData.lastName,
        bio: formData.bio,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        // parsing the phone number as an Int, as requested from back-end
        phone: parseInt(formData.phone),
        birthday: formData.birthday,
        gender: formData.gender,
        kitchenName: formData.kitchenName,
        kitchenDescription: formData.kitchenDescription,
        acceptTos: true,
    };

    // POSTing to chef endpoint
    const handleSubmit = async (e) => {
        e.preventDefault();
        //try {
        const res = await api.post("/auth/chef/signup", newUser);
        // if res.ok redirect to sign in
        if (res) {
            router.push("/");
        }
        // debugging
        //} catch (err) {
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

    // TODO: WILL BE THERE A SING IN PAGE !??
    // handle sing in if, already have an account button
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
                    Create A Chef Account
                </h1>
                <form
                    className='flex w-96 flex-col space-y-5'
                    action='#'
                    onSubmit={(event) => handleSubmit(event)}
                >
                    {/* username */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow'
                        id='username'
                        type='text'
                        placeholder='Username'
                        value={formData.username}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* first and last name */}
                    <div className='flex w-full flex-row justify-between space-x-4'>
                        {/* first name */}
                        <input
                            className='w-1/2 appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow'
                            id='firstName'
                            type='text'
                            placeholder='First Name'
                            value={formData.firstName}
                            onChange={(e) => handleFormData(e)}
                            required
                        />
                        {/* last name */}
                        <input
                            className='w-1/2 appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                            id='lastName'
                            type='text'
                            placeholder='Last Name'
                            value={formData.lastName}
                            onChange={(e) => handleFormData(e)}
                            required
                        />
                    </div>
                    {/* password fields  */}
                    <div className='flex w-full flex-row justify-between space-x-4'>
                        {/* password */}
                        <input
                            className='w-1/2 appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                            id='password'
                            type='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={(e) => handleFormData(e)}
                            required
                        />
                        {/* confirmPassword */}
                        <input
                            className='w-1/2 appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                            id='confirmPassword'
                            type='password'
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            onChange={(e) => handleFormData(e)}
                            required
                        />
                    </div>
                    {/* password rules */}
                    <div
                        style={{
                            marginTop: "5px",
                            marginBottom: "5px",
                            height: "1px",
                            fontSize: "10px",
                        }}
                    >
                        <span className='font-bold tracking-wide text-stone-700'>
                            * Password Must Contain a Number, Uppercase and
                            Lowercase
                        </span>
                    </div>
                    {/* email */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='email'
                        type='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* phone number */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='phone'
                        type='tel'
                        placeholder='Phone Number'
                        value={formData.phone}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* phone number rules */}
                    <div
                        style={{
                            marginTop: "5px",
                            marginBottom: "5px",
                            height: "1px",
                            fontSize: "10px",
                        }}
                    >
                        <span className='font-bold tracking-wide text-stone-700'>
                            * Phone Number Must Be 10 digits and Starts with 5xx
                        </span>
                    </div>
                    {/* Birthday and gender */}
                    <div className='flex w-full flex-row justify-between space-x-4'>
                        {/* Birthday */}
                        <input
                            className='w-1/2 appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                            id='birthday'
                            type='text'
                            placeholder='Birthday'
                            value={formData.birthday}
                            onChange={(e) => handleFormData(e)}
                            required
                        />
                        {/* Gender */}
                        <input
                            className='w-1/2 appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                            id='gender'
                            type='text'
                            placeholder='Gender'
                            value={formData.gender}
                            onChange={(e) => handleFormData(e)}
                            required
                        />
                    </div>
                    {/* bio */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='bio'
                        type='text'
                        placeholder='Bio'
                        value={formData.bio}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* kitchenName */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='kitchenName'
                        type='text'
                        placeholder='Kitchen Name'
                        value={formData.kitchenName}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* kitchenDescription */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='kitchenDescription'
                        type='text'
                        placeholder='Kitchen Description'
                        value={formData.kitchenDescription}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* Terms and Conditions */}
                    <label className='block w-full items-center font-bold text-black'>
                        <input
                            className='mr-2 rounded bg-gray-100 text-primary focus:ring-primary'
                            id='termsAndConditions'
                            type='checkbox'
                            onClick={(e) => handleFormData(e)}
                            required
                        />
                        <span className='text-sm'>
                            I agree to Terms and Conditions
                        </span>
                    </label>
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
            </div>

            {/* image section */}

            {/* make this hidden */}

            <div className='flex max-w-screen-sm items-center bg-signUpImageColor'>
                <Image
                    src='/images/signup2.jpg'
                    alt='test'
                    width={500}
                    height={500}
                ></Image>
            </div>
        </div>
    );
}
