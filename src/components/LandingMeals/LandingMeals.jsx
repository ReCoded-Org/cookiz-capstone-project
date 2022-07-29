const LandingMeals = () => {
  return (
    <div className="grid md:grid-cols-6 m-14 ">
      <div className="md:col-span-1 " >
        <nav>
          <div className="">
            <input className="rounded-xl text-base flex justify-center font-bold  
            " type="search" placeholder="Search" name="search" />
            <h1 className=  "flex justify-center font-bold pt-5">Categories</h1>
            <ul className="flex items-center flex-col" >
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>

        </nav>
        </div>
        <div className="md:col-span-5 ">
        <div className="mt-8 grid md:grid-cols-3 gap-10 m-16" >

          <div className=" bg-white rounded overflow-hidden shadow-md relative">
            <img className="w-full sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base ">Spanish Paella </span>


            <div>
              <img className="inline p-2" src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 text-sm " >Jennifer Lawrence</span>
            </div>
            <div className=" bg-slate-100  text-xs  uppercase font-bold rounded-full p-2 absolute top-0  ml-2 mt-2 px-3"> <span >60 tl</span></div>


          </div>
          <div className=" bg-white rounded overflow-hidden shadow-md relative">
            <img className="w-full sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 text-sm" >Jennifer Lawrence</span>
            </div>
            <div className=" bg-slate-100  text-xs  uppercase font-bold rounded-full p-2 absolute top-0  ml-2 mt-2 px-3"> <span >60 tl</span></div>


          </div>
          <div className=" bg-white rounded overflow-hidden shadow-md relative">
            <img className="w-full sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 text-sm" >Jennifer Lawrence</span>
            </div>
            <div className=" bg-slate-100  text-xs  uppercase font-bold rounded-full p-2 absolute top-0  ml-2 mt-2 px-3"> <span >60 tl</span></div>


          </div>
          <div className=" bg-white rounded overflow-hidden shadow-md relative">
            <img className="w-full sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 text-sm" >Jennifer Lawrence</span>
            </div>
            <div className=" bg-slate-100  text-xs  uppercase font-bold rounded-full p-2 absolute top-0  ml-2 mt-2 px-3"> <span >60 tl</span></div>


          </div>
          <div className=" bg-white rounded overflow-hidden shadow-md  relative">
            <img className="w-full h-32 sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 text-sm" >Jennifer Lawrence</span>
            </div>
            <div className=" bg-slate-100  text-xs  uppercase font-bold rounded-full p-2 absolute top-0  ml-2 mt-2 px-3"> <span >60 tl</span></div>


          </div>
          <div className=" bg-white rounded overflow-hidden  shadow-md relative">
            <img className="w-full h-32 sm:h-48 object-cover" src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 text-sm" >Jennifer Lawrence</span>
            </div>
            <div className=" bg-slate-100  text-xs  uppercase font-bold rounded-full p-2 absolute top-0  ml-2 mt-2 px-3"> <span >60 tl</span></div>


          </div>

        </div>
        </div>
      
    </div>
  );
}

export default LandingMeals;