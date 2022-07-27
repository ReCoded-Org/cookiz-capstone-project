import React from "react";
import { useState } from "react";
import ItemContainer from "./ItemContainer";



export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <footer className="bg-black text-white">
      <div className="grid grid-row-1 h-auto ">
        <ItemContainer>
        </ItemContainer>
      </div>


    </footer>
  )
}



