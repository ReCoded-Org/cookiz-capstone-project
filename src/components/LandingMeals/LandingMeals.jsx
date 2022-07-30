const LandingMeals = () => {
  return (
    <div className="grid md:grid-cols-6 m-14 ">
      <div className="md:col-span-1 " >
        <nav>
          <div >
            <div className="flex justify-center mt-[-14px]">
              <input className="rounded-xl  font-semibold hover:font-bold" type="search" placeholder="Search" name="search" />
             </div>
            <h1 className=  "flex justify-center font-bold pt-8">Categories</h1>
            <ul className="flex items-center flex-col" >

           
              <li className="font-sans">item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>

        </nav>
        </div>
        <div className="md:col-span-5  ">
        <div className="mt-8 grid md:grid-cols-3 gap-10 m-16" >

          <div className="card">
            <img className="w-full sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base ">Spanish Paella </span>


            <div>
              <img className="inline p-2 md:w-11  w-8" src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 md:text-sm font-normal text-xs" >Jennifer Lawrence</span>
            </div>
            <div className=" badge"> <span >60 tl</span></div>


          </div>
          <div className="card">
            <img className="w-full sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 md:w-11  w-8 " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 md:text-sm text-xs" >Jennifer Lawrence</span>
            </div>
            <div className="badge"> <span >60 tl</span></div>


          </div>
          <div className="card">
            <img className="w-full sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 md:w-11  w-8" src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 md:text-sm text-xs" >Jennifer Lawrence</span>
            </div>
            <div className="badge"> <span >60 tl</span></div>


          </div>
          <div className="card">
            <img className="w-full sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 md:w-11  w-8 " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 md:text-sm text-xs" >Jennifer Lawrence</span>
            </div>
            <div className="badge"> <span >60 tl</span></div>


          </div>
          <div className="card">
            <img className="w-full h-32 sm:h-48 object-cover " src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 md:w-11  w-8 " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 md:text-sm text-xs" >Jennifer Lawrence</span>
            </div>
            <div className="badge"> <span >60 tl</span></div>


          </div>
          <div className="card">
            <img className="w-full h-32 sm:h-48 object-cover" src="images/meat.jpg" alt="meatball" />

            <span className="m-4 font-bold text-sm md:text-base">Spanish Paella </span>


            <div>
              <img className="inline p-2 md:w-11  w-8  " src="images/Avatar.png" alt="chef" />
              <span className="text-grey-500 md:text-sm text-xs" >Jennifer Lawrence</span>
            </div>
            <div className="badge"> <span >60 tl</span></div>


          </div>

        </div>
        </div>
      
    </div>
  );
}

export default LandingMeals;