import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = [];
  return (
    <div className="h-screen w-4/5 m-auto">
      <Image
        width={200}
        height={400}
        src={"/images/ESN_Leo_logo.png"}
        alt="ESN Leonardo Kortrijk Logo"
      ></Image>
      <h1 className="text-3xl font-bold font-kelson_sans">
        {" "}
        Website in development
      </h1>
      <h2 className="text-2xl font-bold font-kelson_sans">Board:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">President</h4>
          <p>Giquardo</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">Vice</h4>
          <p>Alessia</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">Treasurer</h4>
          <p>Pieter</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">Local Representative</h4>
          <p>Jasper</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">IT Manager</h4>
          <p>Senne</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">HR Manager</h4>
          <p>Timo</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">Event Manager</h4>
          <p>Quentin</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">Graphic Designer</h4>
          <p>Nastia</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">Partnerships Manager</h4>
          <p>Edzra</p>
        </li>
        <li className="p-4 border rounded-md shadow-md">
          <h4 className="font-bold text-lg">Communication Manager</h4>
          <p>Fien</p>
        </li>
      </ul>

      <h2 className="text-2xl font-bold font-kelson_sans">Partners:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <li className="p-4 border rounded-md shadow-md ">
          <h4 className="font-bold text-lg">Café 56</h4>
          <p>Our club cafe</p>
        </li>
        <li className="p-4 border rounded-md shadow-md ">
          <h4 className="font-bold text-lg">Thelma & Louise</h4>
          <p>
            One of the famous belgian &quot;frituren&quot;, come here for some
            amazing fries and snacks.
          </p>
        </li>
        <li className="p-4 border rounded-md shadow-md ">
          <h4 className="font-bold text-lg">De Max</h4>
          <p>De Max is a bowling place close to the Kortrijk train station.</p>
        </li>
        <li className="p-4 border rounded-md shadow-md ">
          <h4 className="font-bold text-lg">Vives</h4>
          <p>
            A renowned university college offering diverse programs and strong
            industry ties.
          </p>
        </li>
        <li className="p-4 border rounded-md shadow-md ">
          <h4 className="font-bold text-lg">Howest</h4>
          <p>
            A technology-focused institution known for its innovative approach
            to education.
          </p>
        </li>
      </ul>

      <h2 className="text-2xl font-bold font-kelson_sans mb-4">Linktree:</h2>
      <a
        href="https://linktr.ee/esnleonardokortrijk"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-esn-dark-blue text-white font-semibold rounded-md hover:bg-esn-cyan transition"
      >
        Visit Our Linktree
      </a>

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
