"use client";

import { useImageZoom, useOpenShopModal } from "@/store";
import { X, Grid2x2, Play, Search, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ShopImageModal = () => {
  const { setIsModalOpen } = useOpenShopModal();
  const { isZoomed, offset,  mouseDown, 
    handleSearchClick, handleImageClick, 
    handleMouseDown, handleMouseMove, handleMouseUp } = useImageZoom();


  return (
    <div
      className="fixed inset-0 z-50 flex items-center bg-black bg-opacity-80"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={`absolute font-bold text-[0.9rem] left-5 
      top-3 z-40 ${isZoomed ? "text-black/90" : "text-gray-300"}`}>
        1/6
      </div>
      <div className="absolute flex flex-row gap-4 
      bg-black/50 top-0 right-0 text-white px-4 py-3 z-40">
        <Search
          size={20}
          className="hover:text-white/80 cursor-pointer"
          onClick={handleSearchClick}
        />
        <Play size={20} className="hover:text-white/80 cursor-pointer" />
        <Grid2x2 size={20} className="hover:text-white/80 cursor-pointer" />
        <X
          size={20}
          className="hover:text-white/80 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        />
      </div>
      <div className="absolute top-[55%] left-3 bg-black-50 p-3 rounded-md 
      cursor-pointer text-center bg-black/60 z-40">
        <ArrowLeft size={20} className="text-white/70 hover:text-white" />
      </div>
      <div className="absolute top-[55%] right-3 bg-black-50 p-3 rounded-md 
      cursor-pointer text-center bg-black/60 z-40">
        <ArrowRight size={20} className="text-white/70 hover:text-white" />
      </div>
      <div
        className={`relative h-full w-[70%] mx-auto z-20 ${
          isZoomed ? "cursor-grab" : "cursor-zoom-in"
        }`}
        onMouseDown={handleMouseDown}
      >
        <Image
          src="https://shop.rmhc.org.ua/wp-content/uploads/2020/04/kiev-1.png"
          alt="Shop Image"
          className="transition-transform duration-300 z-20 mx-auto w-full mt-[3.5%]"
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