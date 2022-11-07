import React from 'react'
import Logo from '../assets/Logo.png'
const NavBar = () => {
    return (
        <>
            <div className="flex relative w-full h-[80px] bg-slate-100">
                <div className="flex w-[100px] border-[4px] border-white top-3 left-3 absolute ">
                    <img src={Logo} alt="" srcSet={Logo} />
                </div>
                <h1 className="text-[36px] text-black text-center w-11/12 flex justify-center items-center">Property Search Tool</h1>
            </div>
        </>
    )
}

export default NavBar