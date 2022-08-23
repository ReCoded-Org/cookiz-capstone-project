import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { TbToolsKitchen } from "react-icons/tb";

export default function SignUpLanding() {
    // initializing router
    const router = useRouter();

    // handle redirictin, takes a Path as an argument
    const handleRedirect = (e, PATH) => {
        e.preventDefault();
        router.push(PATH);
    };

    return (
        // root
        <div className='container mx-auto mt-28 flex flex-col p-10'>
            <h1 className='text-center text-5xl font-bold text-primary'>
                Choose Your Account Type
            </h1>
            {/* chose between user or chef container */}
            <div className='flex w-full flex-row flex-wrap justify-center gap-10 p-10'>
                {/* customer */}
                <div
                    className='h-48 w-48 rounded-3xl border-4 border-primary text-primary hover:cursor-pointer hover:bg-primary hover:text-white'
                    onClick={(e) => handleRedirect(e, "/signUpUser")}
                >
                    {/* icon and text */}
                    <div className='m-9 flex flex-col items-center'>
                        <AiOutlineUser size={80} />
                        <p className='m-1 text-xl font-bold '>Customer</p>
                    </div>

                </div>
                {/* chef */}
                <div
                    className='h-48 w-48 rounded-3xl border-4 border-primary text-primary hover:cursor-pointer  hover:bg-primary hover:text-white'
                    onClick={(e) => handleRedirect(e, "/signUpChef")}
                >
                    {/* icon and text */}
                    <div className='m-9 flex flex-col items-center'>
                        <TbToolsKitchen size={80} />
                        <p className='m-1 text-xl font-bold '>Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
