const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ml-10 md:ml-0">
      {/* title part */}
      <div className="m-auto bflex flex-col">
        <div className=" flex  flex-col">
          <p className=" font-bold text-2xl md:text-3xl text-black">You’ve missed home made food?</p>
          <p className=" pb-12  pt-2 font-normal   text-black">Pick your favorite chef, food or cousin.</p>
        </div>


        <div className="flex flex-row flex-wrap gap-24  w-full justify-between">
          <div className="flex   flex-row justify-center items-center shadow-lg w-[34.375] h-[17.813rem] rounded-[10px] bg-[#9EE2B8] ">
            <div className="px-6 flex flex-col ">
            <img  className=" w-9 md:w-12 pt-4" src="images/cheff.png" />
              <p className=" w-[307px] text-2xl h-40 font-semibold md:text-3xl text-black">
                Pick your chef
                order the food and get it when you want<img  className="w-9 md:w-12  " src="images/soup.png" />
              </p>

            </div>
            <img className=" w-full  h-[17.8rem]  rounded-r-lg  " src="images/chef.png" alt="" />

          </div>
          <div className="flex   flex-row shadow-lg w-[34.375] h-[17.813rem] rounded-[10px] bg-[#FFE7E3] ">
            <div className="px-6  flex flex-col justify-center gap-7 ">
              <p className="  w-[310px]   text-2xl   md:pt-12 font-semibold md:text-3xl text-black">
                Get a 15% discount
                for your first order!
              </p>
              <button className="  box-border  w-32 h-10 bg-green-900 "><span className="w-20 h-5  font-bold text-base leading-5 text-white">Order Now</span></button>
            </div>
            <img className=" w-full h-[17.8rem]  rounded-r-lg  " src="images/basket.png" alt="" />

          </div>
        </div>
      </div>

    </div>
  );
}

export default Cards;