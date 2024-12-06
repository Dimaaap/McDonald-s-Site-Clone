"use client";

import { useImageZoom, useOpenShopModal, familyRooms, 
  useModalChangeImage, useAllImages } from "@/store";
import { X, Grid2x2, Play, Search, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AllImagesContainer } from "../shop";

export const ShopImageModal = () => {
  const { setIsModalOpen } = useOpenShopModal();
  const { currentImageIndex, setCurrentImageIndex } = useModalChangeImage()
  const { isZoomed, offset,  mouseDown, 
    handleSearchClick, handleImageClick, 
    handleMouseDown, handleMouseMove, handleMouseUp } = useImageZoom();

  const { isAllImagesShow, setIsAllImagesShow } = useAllImages()

    const showNextImage = () => {
      if(currentImageIndex <= 3) {
        setCurrentImageIndex(currentImageIndex + 1)
      } else {
        setCurrentImageIndex(0)
      }
    }

    const showPrevImage = () => {
      
      if(currentImageIndex == 0){
        setCurrentImageIndex(4)
      } else {
        setCurrentImageIndex(currentImageIndex - 1)
      }
    }

    const setAllImagesShow = () => {
      if(isAllImagesShow){
        setIsAllImagesShow(false)
      } else {
        setIsAllImagesShow(true)
      }
    }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center bg-black bg-opacity-80
      select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >

      <AllImagesContainer />

      <div className={`absolute font-bold text-[0.9rem] left-5 
      top-3 z-40 ${isZoomed ? "text-black/90" : "text-gray-300"}`}>
        { currentImageIndex + 1 }/5
      </div>
      <div className={`absolute flex flex-row gap-4 
      bg-black/50 top-0 text-white px-4 py-3 z-40 
      ${ isAllImagesShow ? "right-[20%]": "right-0" }`}>
        <Search
          size={20}
          className="hover:text-white/80 cursor-pointer"
          onClick={handleSearchClick}
          title="Zoom"
        />
        <Play size={20} className="hover:text-white/80 cursor-pointer" />
        <Grid2x2 size={20} className="hover:text-white/80 cursor-pointer" 
        onClick={() => setAllImagesShow() }/>
        <X
          size={20}
          className="hover:text-white/80 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        />
      </div>
      <div className="absolute top-[55%] left-3 bg-black-50 p-3 rounded-md 
      cursor-pointer text-center bg-black/60 z-40">
        <ArrowLeft size={20} className="text-white/70 hover:text-white" 
        onClick={ showPrevImage }/>
      </div>
      <div className={`absolute top-[55%] bg-black-50 p-3 rounded-md 
      cursor-pointer text-center bg-black/60 z-40
      ${ isAllImagesShow ? "right-[21%]" : "right-3" }`}>
        <ArrowRight size={20} className="text-white/70 hover:text-white" 
        onClick={ showNextImage }/>
      </div>
      <div
        className={`relative h-full mx-auto z-20 
          ${isZoomed ? "cursor-grab" : "cursor-zoom-in"}
          ${ isAllImagesShow ? "w-[60%] ml-[9%] mt-[10%]" : "w-[70%]" }`}
        onMouseDown={handleMouseDown}
      >
        {console.log(currentImageIndex)}
        <Image
          src={ familyRooms[currentImageIndex].src }
          alt="Shop Image"
          className="transition-transform duration-300 
          z-20 mx-auto w-full mt-[3.5%]"
          style={{
            transform: isZoomed
              ? `scale(2) translate(${offset.x}px, ${offset.y}px)`
              : "scale(1) translate(0, 0)",
            cursor: mouseDown ? "grabbing" : isZoomed ? "grab" : "zoom-in",
          }}
          width={600}
          height={600}
          onClick={ handleImageClick }
        />
      </div>
    </div>
  );
};

export default ShopImageModal;