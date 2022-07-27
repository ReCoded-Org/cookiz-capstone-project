import React from 'react'
import { Item } from './Item'
import { Logo } from './Logo'
import { Social } from './Social'




const ItemContainer = () => {
  const firstColumn = ["Get help", "Become a chef", "Promotions", "About Cookiez"];
  const secondColumn = ["Chef near me", "View all home made foods", "View all cities", "View all chefs"];
  return (
    <div className='px-20 py-6 grid grid-cols-1 xl:grid-cols-5 '>
      <div className='col-span-2'>
        <Logo />
        <Social />
      </div>
      <div className='col-span-2'>
        <Item className="col-start-3 col-end-4" arr={firstColumn} />
      </div>
      <Item className="col-start-4 col-end-5" arr={secondColumn} />
    </div>
    // </div >

  )
}

export default ItemContainer