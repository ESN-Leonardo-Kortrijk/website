import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = [];
  const router = useRouter()
  router.push('/about-us')
  return (
    <div className="h-screen w-4/5 max-w-[1920px] m-auto">

      {/* <EmblaCarousel slides={[]} options={OPTIONS}/>
      <blockquote style={{minWidth: "100%"}} className="instagram-media" data-instgrm-permalink="https://www.instagram.com/esnleonardokortrijk/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">
        <div className="padding">
          <a href="https://www.instagram.com/esnleonardokortrijk/?utm_source=ig_embed&amp;utm_campaign=loading" className="instagram-link" target="_blank">
            <div className="profile-picture"></div>
            <div className="post-details">
              <div className="post-title"></div>
              <div className="post-subtitle"></div>
            </div>
          </a>
          <div className="padding"></div>
          <div className="icons">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
          <div className="post-content">
            <div className="post-image"></div>
            <div className="post-description"></div>
          </div>
        </div>
      </blockquote>
      <Script async src="https://www.instagram.com/embed.js"></Script> */}
    </div>
  );
}