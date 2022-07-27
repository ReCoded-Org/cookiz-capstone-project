import React from 'react'



export const Social = () => {
  const Icons = [
    { name: "logo-facebook", link: "#" },
    { name: "logo-twitter", link: "#" },
    { name: "logo-instagram", link: "#" },
  ];
  return (
    <div className='flex flex-row justify-start '>
      {Icons.map((icon, index) => (
        <span key={index} className="p-2 mr-4 mt-4 cursor-pointer inline-flex items-center sm:my-6 
        rounded-full bg-gray-200   hover:text-gray-100 hover:bg-teal-500">
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="ionicon"><title>Logo Facebook</title><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd" /></svg> */}
      {/* <img src="./svg/logo-facebook.svg" className='bg-white-700' alt="" />
      <img src="./svg/logo-twitter.svg" alt="" />
      <img src="./svg/logo-instagram.svg" alt="" /> */}
    </div >
  )
}
