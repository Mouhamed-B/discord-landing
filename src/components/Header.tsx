import React, { FC } from 'react'
import DjamoAppInPhone from '../assets/images/djamo_app_in_phone.svg'
import DjamoCardSmall from '../assets/images/djamo_card_small.webp'
import Image from 'next/image'


const Header:FC = () => {
  return (
    <header className="w-full bg-white py-4">
        <div className="container flex mx-auto gap-4">
            <div className="w-full lg:w-1/2 flex">
                <div className="ml-auto my-auto">
                    <h1 className="text-8xl font-extrabold">No Stress,<br />Djamo Rek!</h1>
                    <p className='text-2xl my-6'> L&apos; appli pour mieux gérer votre argent. <br />
                            Ouvrez un compte gratuit maintenant en un clic.
                    </p>
                    <form action="#" className="flex gap-2">
                        <select className="select select-bordered w-max text-xl">
                            <option selected>+221</option>
                        </select>
                        <input type="text" placeholder="Votre numero de telephone" className="input input-bordered text-xl" />
                        <button className="btn btn-primary py-0 rounded-full text-xl">Rejoindre la liste d&apos;attente</button>
                    </form>
                </div>
            </div>
            <div className="hidden w-1/2 justify-start lg:flex">
                <Image alt='djamo app in phone' src={DjamoAppInPhone}/>
                <Image alt='djamo card small' className='h-1/2 mt-auto w-1/4' src={DjamoCardSmall}/>
            </div>
        </div>
    </header>
  )
}

export default Header