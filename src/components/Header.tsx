import React, { FC } from 'react'
import DjamoAppInPhone from '../assets/images/djamo_app_in_phone.svg'
import DjamoCardSmall from '../assets/images/djamo_card_small.webp'
import Image from 'next/image'


const Header:FC = () => {
  return (
    <header className="w-full bg-white">
        <div className="container flex mx-auto gap-4">
            <div className="w-full lg:w-1/2 justify-center lg:justify-end">
                <h1 className="text-4xl">No Stress,<br />Djamo Rek!</h1>
                <p> L&apos; appli pour mieux gérer votre argent.
                        Ouvrez un compte gratuit maintenant en un clic.
                </p>
                <form action="#" className="flex gap-8">
                    <select className="select select-bordered w-full w-max">
                        <option selected>+221</option>
                    </select>
                    <input type="text" placeholder="Votre numero de telephone" className="input input-bordered" />
                    <button className="btn btn-primary rounded-full">Rejoindre la liste d&apos;attente</button>
                </form>
            </div>
            <div className="hidden lg:block w-1/2 justify-start">
                <Image alt='djamo app in phone' src={DjamoAppInPhone}/>
                <Image alt='djamo card small' src={DjamoCardSmall}/>
            </div>
        </div>
    </header>
  )
}

export default Header