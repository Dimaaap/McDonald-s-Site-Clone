import Image from 'next/image'
import React from 'react'

export const CheeseBurgersMainSection = () => {
  return (
    <div className="p-[5%] flex flex-col gap-7">
        <div className="w-full h-screen">
            <Image src="/novelty-hero.jpg" alt="" width={600}
            height={600} className="w-full" />
        </div>
        <div className="w-full grid grid-cols-2 gap-x-5 gap-y-7">
            <div className="flex flex-col gap-5">
                <Image src="/big-chicken-cheese.jpg" alt="" 
                width={400} height={400} />
                <div className="flex flex-col gap-5 text-left">
                    <h1 className="text-3xl font-extrabold">
                        Біг Чікен Чіз
                    </h1>
                    <p>
                        Апетитний шматок ніжного розплавленого сиру в поєднанні із соковитою 
                        курочкою… А ще салат, смажена цибулька, медово-гірчичний соус — і 
                        все це в запашній булочці, присипаній білим і чорним кунжутом.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Image src="https://s7d1.scene7.com/is/image/mcdonalds/Big_beef_cheese_burger:2-column-desktop?resmode=sharp2" 
                alt="" 
                width={400} height={400} />
                <div className="flex flex-col gap-5 text-left">
                    <h1 className="text-3xl font-extrabold">
                        Біг Біф Чіз
                    </h1>
                    <p>
                        Шматок ніжного розплавленого сиру і біфштекс із натуральної яловичини… 
                        Салат, смажена цибулька, нова булочка з чорним і білим кунжутом під 
                        особливим сирно-цибулевим соусом
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Image src="/camambert.jpg" alt="" 
                width={400} height={400} />
                <div className="flex flex-col gap-5 text-left">
                    <h1 className="text-3xl font-extrabold">
                        Сир Камамбер
                    </h1>
                    <p>
                        3 штучки улюбленого ніжного сиру Камамбер у хрусткій паніроці, що 
                        найкраще смакує із соусом із журавлини.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Image src="/bacoon_cheese.jpg" alt="" 
                width={400} height={400} />
                <div className="flex flex-col gap-5 text-left">
                    <h1 className="text-3xl font-extrabold">
                        Картопля Фрі із сирним соусом і беконом
                    </h1>
                    <p>
                        Улюблена картопелька Фрі з апетитним сирним соусом, що посипана хрумким 
                        обсмаженим беконом.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

