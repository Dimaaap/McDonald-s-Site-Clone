"use client"

import { Advertisment, Banner, FAQSection, 
  PromoSection, MainFooter } from "@/components";
import "./globals.css";
import { useBannerHandler, banners } from "@/store";

export default function Home() {

  const { currentBanner } = useBannerHandler();

  return (
    <div className="">
      <Banner bgImage={banners[currentBanner - 1].bgImage} 
      noticeTitle={banners[currentBanner - 1].noticeTitle}
      noticeText={banners[currentBanner - 1].noticeText}
      noticeHref={banners[currentBanner - 1].noticeHref} />
      <PromoSection />
      <Advertisment />
      <FAQSection />
      <MainFooter />
    </div>
  );
}
