import Image from "next/image";
import { useState } from "react";

export default function CreateAccountForm() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [county, setCounty] = useState("");

    /* Debugging */
    // console.log(
    //     firstname,
    //     lastname,
    //     password,
    //     email,
    //     phone,
    //     address,
    //     city,
    //     county
    // );

    return (
        // component container
        <div className='flex flex-row flex-wrap justify-center'>
            {/* form container */}
            <div className='flex flex-col space-y-4 px-10 pt-9 pb-9'>
                <h1 className='text-center text-2xl font-bold text-primary'>
                    Create An Account
                </h1>
                <form className='flex w-96 flex-col space-y-5'>
                    {/* first name */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow'
                        id='firstName'
                        type='text'
                        placeholder='First Name'
                        value={firstname}
                        onChange={(event) => setFirstname(event.target.value)}
                    />
                    {/* last name */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='lastName'
                        type='text'
                        placeholder='Last Name'
                        value={lastname}
                        onChange={(event) => setLastname(event.target.value)}
                    />
                    {/* password */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {/* email */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='email'
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {/* phone number */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='phoneNumber'
                        type='text'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    {/* Address */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='address'
                        type='text'
                        placeholder='Address'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    {/* City */}
                    {/* TODO: add the ZIP CODE field */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='city'
                        type='text'
                        placeholder='City'
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                    {/* County */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='county'
                        type='text'
                        placeholder='Country'
                        value={county}
                        onChange={(event) => setCounty(event.target.value)}
                    />
                    {/* Terms and Conditions */}
                    <label className='block w-full items-center font-bold text-black'>
                        <input
                            className='mr-2 rounded bg-gray-100 text-primary focus:ring-primary'
                            id='termsAndCoditions-checkbox'
                            type='checkbox'
                        />
                        <span className='text-sm'>
                            I agree to Terms and Conditions
                        </span>
                    </label>
                    {/* submit button */}
                    <button className='focus:shadow-outline rounded-xl bg-primary py-2  px-4 font-bold text-white shadow hover:bg-emerald-700'>
                        Register
                    </button>
                    {/* cancel button */}
                    <button className='focus:shadow-outline rounded-xl border border-primary  bg-transparent py-2 px-4 font-bold text-primary shadow hover:bg-primary  hover:text-white'>
                        Cancel
                    </button>
                    {/* sign in redirecting */}
                    <div className='text-center text-xs font-bold text-black'>
                        <span>Already Have An Account?</span>{" "}
                        <span className='text-blue-500 underline'>
                            <a href=''>Sign in</a>
                        </span>
                    </div>
                </form>
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
