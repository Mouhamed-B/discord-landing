import { CheckCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React, { useState } from 'react'

export interface FeatureSectionProps {
    background:string, 
    title:string, 
    text:string, 
    features:string[],
    reverse:boolean,
    image:any,
    titleGradient:string
}

const FeatureSection = ({background, title, text, features, reverse, image, titleGradient}:FeatureSectionProps) => {
  return (
    <div className={`w-full ${background} py-14`}>
        <div className="container mx-auto">
            <div className="lg:mx-16 lg:px-14 text-start">
                <div className={`flex w-full gap-4 ${reverse ? 'flex-row-reverse':null}`}>
                    <div className="w-full lg:w-1/2 px-4">
                        <h1 className={`text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${titleGradient}`}>{title}</h1>
                        <p className="mt-6 mr-6">{text}</p>
                        <hr className="bg-gray-400 my-6"/>
                        <ul className="list-none">
                            {features.map((f,index) => (
                                <li key={index} className='flex items-center mb-4 text-lg'><span className="mr-4"><CheckCircleIcon color='green' height={16}/></span><span>{f}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:block w-1/2">
                        <Image className="w-full rounded-sm" alt={title+" "+'djamo'} src={image}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FeatureSection