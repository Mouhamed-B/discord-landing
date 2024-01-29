import React, { FC } from 'react'
import DjamoAppInPhone from '../assets/images/djamo_app_in_phone.svg'
import DjamoCardSmall from '../assets/images/djamo_card_small.webp'
import Image from 'next/image'
import { BoltIcon, CreditCardIcon, PhoneIcon } from '@heroicons/react/16/solid'


const Header:FC = () => {

    const contents = [
        {
            icon:<BoltIcon color='white' height={24}/>,
            title:"Ouvrez un compte en 1min",
            text:"Créez votre compte et recevez immédiatement une carte virtuelle VISA gratuite."
        },
        {
            icon:<CreditCardIcon color='white' height={24}/>,
            title:"Commandez votre carte physique",
            text:"Recevez votre carte en 48h, retirez de l'argent et payez sans frais partout dans le monde."
        },
        {
            icon:<PhoneIcon color='white' height={24}/>,
            title:"Accédez aux services via l'appli",
            text:"Epargnez, transférez, recevez votre salaire, gérez vos dépenses via l'application mobile."
        }
    ]

  return (
    <header className="w-full">
        <div className="w-full bg-white pt-4 pb-12">
            <div className="container flex mx-auto gap-4">
                <div className="w-full lg:w-1/2 flex lg:mx-8">
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
        </div>
        <div className="w-full bg-black pt-8 pb-12">
            <div className="container mx-auto">
                <div className="lg:mx-14 lg:px-14  flex gap-8 flex-col lg:flex-row">
                    {contents.map(({icon, title, text},index) => (
                        <div key={index} className='flex gap-4'>
                            <div>{icon}</div>
                            <div>
                                <h2 className='text-white text-xl'>{title}</h2>
                                <p className='text-gray-400 text-xl'>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header