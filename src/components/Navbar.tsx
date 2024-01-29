import React, { FC } from 'react'
import Logo from '../assets/images/logo.png'
import Image from 'next/image'


const Navbar:FC = () => {
  return (
    <div className=" p-4 shadow-md w-full">
        <div className="container mx-auto">
            <div className="navbar lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Image src={Logo} height={48} alt="djamo clone logo mouhamed bakhoum" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 lg:hidden">
                            <li><a>Acceuil</a></li>
                            <li>
                                <a>Produits & Services</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Tarifs</a></li>
                            <li><a>Témoignages</a></li>
                            <li><a>Points Relais</a></li>
                            <li><a>Apprendre</a></li>
                        </ul>
                    </div>
                    <Image src={Logo} height={48} alt="djamo clone logo mouhamed bakhoum" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl rounded-full">
                        <li><a>Acceuil</a></li>
                        <li>
                            <details>
                            <summary>Produits & Services</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </details>
                        </li>
                        <li><a>Tarifs</a></li>
                        <li><a>Témoignages</a></li>
                        <li><a>Points Relais</a></li>
                        <li><a>Apprendre</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary text-xl rounded-full">Rejoindre la liste d&apos;attente</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar