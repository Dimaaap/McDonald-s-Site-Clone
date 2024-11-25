"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Heart, Search } from 'lucide-react'
import { AboutCategoryModal, FamilyRoomsModal, HowToBeInsideModal, OurThingsModal } from '../modals';
import { useFamilyRoomsModal } from '@/store';

export const RMHSMainHeader = () => {

    const [ aboutModalOpen, setAboutModalOpen ] = useState(false)
    const [ ourThingsModal, setOurThingsModal ] = useState(false)
    const [ howToJoinModal, setHowToJoinModal ] = useState(false);
    const { familyRoomsModal, setFamilyRoomsModal } = useFamilyRoomsModal();

    const handleCategoryHover = () => {
        setAboutModalOpen(false)
        setOurThingsModal(true)
        setFamilyRoomsModal(false)
        setHowToJoinModal(false)
    }

    const handleAboutUsHover = () => {
        setOurThingsModal(false);
        setAboutModalOpen(true);
        setFamilyRoomsModal(false);
        setHowToJoinModal(false);
    }

    const mouseLeaveFamilyModal = () => {
        setOurThingsModal(true);
        setFamilyRoomsModal(false);
        setHowToJoinModal(false);
    }

    const closeThingsModalIfRoomsModalHide = () => {
        if(!familyRoomsModal) {
            setOurThingsModal(false);
        }
    }

    const handleJoinHover = () => {
        setHowToJoinModal(true);
        setOurThingsModal(false);
        setFamilyRoomsModal(false);
        setAboutModalOpen(false);
    }

    const hideAllModals = () => {
        setHowToJoinModal(false);
        setOurThingsModal(false);
        setFamilyRoomsModal(false);
        setAboutModalOpen(false);
    }

  return (
    <div className="flex flex-row justify-between gap-5 items-center 
    p-10 bg-white fixed top-0 left-0 z-50 w-full mb-[20%]">
      <Link href="/rmhs" className="">
        <Image src="/rmhc/main-logo.webp" alt="RMHC Logo" width={150} 
        height={150} />
      </Link>
      <Link className="font-bold text-[1.1rem] hover:text-blue-400 
      hover:border-b-2 hover:border-blue-400" 
      href="/rmhs" onMouseEnter={() => hideAllModals()}>
        Головна
      </Link>
      <div className="font-bold text-[1.1rem] hover:text-blue-400 
      hover:border-b-2 hover:border-blue-400 cursor-pointer relative"
      onMouseEnter={ () => handleAboutUsHover() }>
        Про Фундацію
      </div>
      
      { aboutModalOpen && ( <AboutCategoryModal closeModal={ setAboutModalOpen } />) }
     

      <div className="font-bold text-[1.1rem] hover:text-blue-400 
      hover:border-b-2 hover:border-blue-400 cursor-pointer relative"
      onMouseEnter={ () => handleCategoryHover() }>
        Що ми робимо
      </div>

        { ourThingsModal && (<OurThingsModal closeModal={ closeThingsModalIfRoomsModalHide } />) }
        { familyRoomsModal && (<FamilyRoomsModal closeModal={ mouseLeaveFamilyModal }/>) }
        

      <div className="font-bold text-[1.1rem] hover:text-blue-400 
      hover:border-b-2 hover:border-blue-400 cursor-pointer"
      onMouseEnter={() => handleJoinHover()}>
        Як долучитись
      </div>

        { howToJoinModal && (<HowToBeInsideModal closeModal={() => setHowToJoinModal(false)} />) }
        

      <Link className="font-bold text-[1.1rem] hover:text-blue-400 
      hover:border-b-2 hover:border-blue-400 cursor-pointer"
      href="/news" onMouseEnter={() => hideAllModals()}>
        Новини
      </Link>
      <Link className="font-bold text-[1.1rem] hover:text-blue-400 
      hover:border-b-2 hover:border-blue-400 cursor-pointer"
      href="/contacts" onMouseEnter={() => hideAllModals()}>
        Контакти
      </Link>
      <Link href="/#" className="hover:text-blue-400 
      hover:border-b-2 hover:border-blue-400">
        <Image src="/rmhc/ukr-language.png" alt="Ukr Language" width={20} 
        height={20} className="mb-1" />
      </Link>
      <Link href="/#" className="hover:text-blue-400 
      hover:border-b-2 hover:border-blue-400">
        <Image src="/rmhc/gb-language.png" alt="Ukr Language" width={20} 
        height={20} className="mb-1" />
      </Link>
      <Link href="/donate" className="flex flex-row p-3 gap-2 rounded-md items-center 
      bg-red-500 text-white font-semibold hover:bg-red-600 ">
        Допомогти
        <Heart size={20} />
      </Link>
      <button className="cursor-pointer text-gray-600">
        <Search size={20} />
      </button>
    </div>
  )
}
