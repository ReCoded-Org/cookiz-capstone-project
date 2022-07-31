import Image from "next/image";
import { useState } from "react";

export default function EditAccount() {
    const [phoneNum, setPhoneNum] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");

    // return EditPage component
    return (
        <>
            {/* page container */}
            <div className='min-w-sm m-5'>
                {/* icon */}
                <div className='flex w-1/2 flex-row items-center justify-center'>
                    <Image
                        src='/images/user.png'
                        alt='Edit Account Icon'
                        width={35}
                        height={35}
                    ></Image>
                    <h1 className='ml-2 text-2xl'>Edit Your Account</h1>
                </div>
                <div className=''>
                    {/* image, fields */}
                    <div className='m-9 flex flex-row flex-wrap justify-center'>
                        {/* image */}
                        <div className='mb-9 h-40 w-40'>
                            <Image
                                className='rounded-full object-cover'
                                src='/images/profile.jpeg'
                                alt='user avatar'
                                width={500}
                                height={500}
                            ></Image>
                        </div>
                        {/* Form */}
                        <div className='ml-9 w-96'>
                            <form className='flex w-full flex-col space-y-4'>
                                {/* phone number field */}
                                <input
                                    className='rounded border text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                                    id='phoneNum'
                                    type='text'
                                    placeholder='Phone Number'
                                    value={phoneNum}
                                    onChange={(event) =>
                                        setPhoneNum(event.target.value)
                                    }
                                />
                                {/* old passowrd field */}
                                <input
                                    className='rounded border text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                                    id='oldPass'
                                    type='password'
                                    placeholder='Old Password'
                                    value={oldPass}
                                    onChange={(event) =>
                                        setOldPass(event.target.value)
                                    }
                                />
                                {/* new password field */}
                                <input
                                    className='rounded border text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                                    id='newPass'
                                    type='password'
                                    placeholder='New Password'
                                    value={newPass}
                                    onChange={(event) =>
                                        setNewPass(event.target.value)
                                    }
                                />
                                {/* save button */}
                                <button className='focus:shadow-outline rounded-xl bg-primary py-2 px-4 font-bold text-white shadow hover:bg-emerald-700'>
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
