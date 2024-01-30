import FeatureSection from "@/components/Features/FeatureSection";
import Features from "@/components/Features/Features";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default async function Home() {

  const featuresSections = [
      {
        "background":"bg-white",
        "title":"Essayez le zéro frais",
        "text":"Nos tarifs sont transparents, justes et conçus pour vous aider à tirer le meilleur parti de votre argent sans vous ruiner.",
        "features":[
          "0F de gestion",
          "0F sur les dépôts",
          "0F sur les transferts",
          "0F sur les paiements dans la zone UEMOA",
          "0F sur les retraits dans la zone UEMOA",
        ],
        "reverse":false,
        "image":await import('@/assets/images/djamo_woman_happy.webp'),
        "titleGradient":"from-blue-500 from-10% to-yellow-500 to-50%",
      },
      {
        "background":"bg-[#f3f4f6]",
        "title":"Economisez sans effort",
        "text":"Mettez votre argent en sécurité sans effort grâce aux coffres.",
        "features":[
            "Economisez facilement avec les virements automatiques et le rendu monnaie",
            "Retirez votre argent quand vous voulez",
            "Economisez avec la communauté Djamo grâce aux challenges et remportez des lots."
        ],
        "reverse":true,
        "image":await import('@/assets/images/djamo_app_vaults.svg'),
        "titleGradient":"from-red-500 from-10% to-green-500 to-50%",
      },
      {
        "background":"bg-white",
        "title":"Gardez le contrôle",
        "text":"Gardez une vision claire de vos dépenses avec des notifications en temps réel et une catégorisation automatique effectuée par Djamo.",
        "features":[
            "Notification instantanée à chaque transaction",
            "Accès aux détails des dépenses et au relevé en temps réel, sans frais",
            "Catégorisation automatique de vos dépenses"
        ],
        "reverse":false,
        "image":await import("@/assets/images/djamo_app_vaults.svg"),
        "titleGradient":"from-green-500 from-10% to-blue-500 to-50%",
      },
      {
        "background":"bg-[#f3f4f6]",
        "title":"Vivez sans limites",
        "text":"Utilisez votre argent comme bon vous le semble. Djamo vous connecte au monde entier: paiements, retraits, et transferts, sans limites.",
        "features":[
            "Payez partout en ligne et à l'étranger",
            "Retirez du cash dans le monde entier grâce à votre carte Djamo VISA"
        ],
        "reverse":true,
        "image":await import("@/assets/images/djamo_app_no_limit.svg"),
        "titleGradient":"from-yellow-500 from-10% to-green-500 to-50%",
      }
  ]

  return (
    <main className="w-full">
      <Navbar/>
      <Header/>
      <Features/>
      {featuresSections.map((section,index) => (
        <FeatureSection 
            key={index} 
            background={section.background} 
            features={section.features} 
            image={section.image}
            reverse={section.reverse}
            text={section.text}
            title={section.title}
            titleGradient={section.titleGradient}
        />
      ))}
    </main>
  );
}
