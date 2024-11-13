import React from 'react'
import Image from 'next/image';

export const HowUploadAppSection = () => {
  return (
    <div className="flex flex-col gap-7 mt-[5%]" 
    id="how-to-upload">
      <div className="text-center">
        <h1 className="font-extrabold text-2xl">
            Як завантажити застосунок?
        </h1>
        <div className="flex flex-row justify-between">
            <div className="max-w-1/2 flex flex-col gap-0">
                <Image src="/how-to-upload.jpeg" 
                alt="How to Upload Btn" width={400} height={400} />
                <p>Шукайте застосунок за запитом «McDonald’s»</p>
            </div>
            <div className="max-w-1/2 flex flex-col gap-0">
                <Image src="/upload-qr.jpeg" alt="Upload with QR" 
                width={400} height={400} />
                <p>
                    Або відскануйте QR-код
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

