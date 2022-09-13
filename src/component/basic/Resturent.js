import React, { useState } from 'react'
import Menu from "./MenuApi"
import './style.css'
import MenuCard  from './menucart'
import Navbar from './Navbar'


const uniqueList = 
[...new Set(Menu.map((curElem) => {
  return curElem.category;
})),
"All",]
console.log(uniqueList);

const Resturent = () => {
  const [menuData, setmenuData] = useState(Menu)
  const [menuList, setmenulist] = useState(uniqueList)

  const filterItem = (category) => {
    if(category=== "All"){
      setmenuData(Menu);
      return
    }
  const updatelist = Menu.filter((curElem)=>{
    return curElem.category === category;
  })
  setmenuData(updatelist)
};
  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard  menuData={menuData} />
        
    </>
  )
}

export default Resturent;
