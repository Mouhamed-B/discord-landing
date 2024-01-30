import React from 'react'

const Features = () => {
    const cards = [
        { title:"Coffres", text:"Des coffres pour mettre de l'argent de côté automatiquement", icon:<></>, hover:"yellow"},
        { title:"Transferts", text:"Des transferts gratuits pour envoyer de l'argent à qui vous voulez", icon:<></>, hover:"red"},
        { title:"Retraits gratuits", text:"Des retraits gratuits au guichet automatique pour retirer votre argent", icon:<></>, hover:"green"},
        { title:"Gestion des dépenses", text:"Un outil de gestion pour mieux suivre et contrôler vos dépenses", icon:<></>, hover:"pink"},
        { title:"Une carte VISA", text:"Une carte VISA pour payer en ligne et partout dans le monde sans frais", icon:<></>, hover:"black"},
    ]
  return (
    <div className="w-full bg-[#f3f4f6] py-14">
        <div className="container mx-auto">
            <div className="lg:mx-16 lg:px-14 text-center">
                <h1 className="text-5xl lg:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 from-30% to-blue-500 to-80%">L&apos;appli qu&apos;il vous faut pour mieux gérer votre argent</h1>
                <p className="m-8 text-2xl">Dites adieu à la frustration! <br />
Simplifiez votre vie financière en gérant tout votre argent en un seul et même endroit.</p>
                <div className="p-5 flex flex-col lg:flex-row flex-wrap gap-6 lg:grid lg:grid-cols-3">
                    {cards.map((card,index) => (
                        <div key={index} className={`card bg-base-100 shadow-xl cursor-pointer hover:bg-${card.hover}`}>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-start"><span className="mr-3">{card.icon}</span>{card.title}</h2>
                                <p className='text-xl text-start'>{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features