import React from 'react'
import { PersonalCard } from '../shared'
import { supervisorsSquad } from '@/store'

export const SupervisoryBoardMainSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-7 p-[5%]">
        <div className="flex flex-col text-center text-blue-300">
            <h1 className="text-4xl font-extrabold">
                Наглядова рада Фундації Дім Рональда МакДональда в Україні
            </h1>
            <p className="text-2xl mt-3">
                Час, який приділяють благодійності наші експерти, та досвід, 
                яким вони діляться заради допомоги дітям, є неоціненними
            </p>
        </div>
        <div className="bg-blue-600/60 p-[5%] text-white text-xl">
            Ми щиро вдячні кожному члену Наглядової ради за постійну підтримку Фундації, 
            за експертизу, важливі поради та відповідальний контроль, які допомагають нам 
            ставати кращими заради щасливого дитинства українських дітей. Ваш професіоналізм, 
            доброта та самовіддача вражають.
        </div>
        <div className="grid grid-cols-4 gap-x-10 gap-y-7">
            { supervisorsSquad.map((supervisor) => (
                <PersonalCard imageSrc={ supervisor.imageSrc } 
                name={ supervisor.name } fullText={ supervisor.fullText }
                key={ supervisor.id } />
            )) }
        </div>
      </div>
    </div>
  )
}
