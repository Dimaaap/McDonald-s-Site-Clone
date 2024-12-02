import React from 'react'

export const PresentsSection = () => {
  return (
    <div className="relative bg-gray-100 flex flex-row px-[5%] items-center">
        <div className="text-6xl w-1/2 text-left font-extrabold py-[15%] 
        mx-auto">
            Родинам уже подарували
        </div>
        <div className="w-1/2 font-extrabold py-[15%]
        mx-auto flex flex-col gap-0">
            <h1 className="text-[10rem] text-blue-300">
                32:12
            </h1>
            <div className="flex flex-row text-left -mt-[9%]">
                <h1 className="text-2xl ml-[12%]">
                    днів
                </h1>
                <h1 className="text-2xl ml-[33%]">
                    годин
                </h1>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full">
            <path fill="#fff" d="M0,256L48,224C96,192,192,128,288,144C384,160,480,224,576,224C672,224,768,160,864,160C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    </div>
  )
}
