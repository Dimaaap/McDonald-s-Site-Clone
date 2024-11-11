import Image from "next/image"

export const CredoItem = () => {
  return (
    <div className="flex flex-row gap-2 ml-[10%] mt-[7%]">
        <div className='flex flex-col gap-0'>
            <div className="border-4 border-b-0 border-black p-2
            font-extrabold text-[1.3rem] ml-[38%] tracking-wide
            max-w-[65%] text-center">
                ЦІНУЄМО
            </div>
            <div className="border-4 border-b-0 border-black p-2
            font-extrabold text-[1.3rem] justify-end tracking-wide
            max-w-[80%] text-center ml-[20%]">
                КОЖНОГО
            </div>
            <div className="border-4 border-black p-2
            font-extrabold text-[1.3rem] justify-end tracking-wide">
                У ВЕЛИКІЙ РОДИНІ
            </div>
        </div>
        <div className="mt-[19%]">
            <Image src="/main_head_logo.svg" alt="main-logo"
            width={50} height={50} />
        </div>
    </div>
  )
}

