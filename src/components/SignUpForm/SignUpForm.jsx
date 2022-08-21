import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function SignUpForm() {
    const { t } = useTranslation("create-account");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        termsAndConditions: false,
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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        // component container
        <div className='flex flex-row flex-wrap justify-center'>
            {/* form container */}
            <div className='flex flex-col space-y-4 px-10 pt-9 pb-9'>
                <h1 className='text-center text-2xl font-bold text-primary'>
                    {t("create-account")}
                </h1>
                <form
                    className='flex w-96 flex-col space-y-5'
                    action='#'
                    onSubmit={(event) => handleSubmit(event)}
                >
                    {/* first name */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow'
                        id='firstName'
                        type='text'
                        placeholder={t("firstname")}
                        value={formData.firstName}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* last name */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='lastName'
                        type='text'
                        placeholder={t("lastname")}
                        value={formData.lastName}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* password */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='password'
                        type='password'
                        placeholder={t("password")}
                        value={formData.password}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* email */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='email'
                        type='email'
                        placeholder={t("email")}
                        value={formData.email}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* phone number */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='phone'
                        type='tel'
                        pattern='[0-9]{10}'
                        placeholder={t("phone")}
                        value={formData.phone}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* Address */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='address'
                        type='text'
                        placeholder={t("adress")}
                        value={formData.address}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* City */}
                    {/* TODO: add the ZIP CODE field */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='city'
                        type='text'
                        placeholder={t("city")}
                        value={formData.city}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    {/* County */}
                    <input
                        className='w-full appearance-none rounded border py-2 px-3 text-sm font-bold leading-tight text-gray-700 shadow focus:outline-none'
                        id='country'
                        type='text'
                        placeholder={t("country")}
                        value={formData.country}
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
                        <span className='text-sm'>{t("terms-conditions")}</span>
                    </label>
                    {/* submit button */}
                    <input
                        className='focus:shadow-outline rounded-xl bg-primary py-2  px-4 font-bold text-white shadow hover:bg-emerald-700'
                        type='submit'
                        value={t("register-btn")}
                    />

                    {/* cancel button */}
                    <button className='focus:shadow-outline rounded-xl border border-primary  bg-transparent py-2 px-4 font-bold text-primary shadow hover:bg-primary  hover:text-white'>
                        {t("cancel")}
                    </button>
                    {/* sign in redirecting */}
                    <div className='text-center text-xs font-bold text-black'>
                        <span> {t("have-account")}</span>{" "}
                        <span className='text-blue-500 underline'>
                            <a href=''> {t("signin")}</a>
                        </span>
                    </div>
                </form>
            </div>

            {/* image section */}
            <div className='max-w-screen-sm flex items-center bg-signUpImageColor'>
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
