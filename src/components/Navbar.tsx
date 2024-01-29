import React, { FC } from 'react'
import Logo from '../assets/images/logo.png'
import Image from 'next/image'
import { Bars3Icon } from '@heroicons/react/16/solid'


const Navbar:FC = () => {
  return (
    <div className="lg:p-4 shadow-md w-full">
        <div className="lg:container md:mx-auto">
            <div className="navbar lg:px-10 justify-between">
                <div className="navbar-start lg:flex-row justify-between w-full lg:w-max">
                    <Image src={Logo} height={40} alt="djamo clone logo mouhamed bakhoum" />
                    <div className="dropdown dropdown-left">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Bars3Icon height={24}/>
                        </div>
                        <ul tabIndex={0} className="menu menu-lg w-64 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:hidden">
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
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl rounded-full">
                        <li><a>Acceuil</a></li>
                        <li>
                            <details>
                            <summary>Produits & Services</summary>
                            <ul className="p-2">
                                <li><a>Coffres</a></li>
                                <li><a>Transferts</a></li>
                                <li><a>Cartes</a></li>
                            </ul>
                            </details>
                        </li>
                        <li><a>Tarifs</a></li>
                        <li><a>Témoignages</a></li>
                        <li><a>Points Relais</a></li>
                        <li><a>Apprendre</a></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:block lg:w-max">
                    <a className="btn btn-primary text-xl rounded-full">Rejoindre la liste d&apos;attente</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar