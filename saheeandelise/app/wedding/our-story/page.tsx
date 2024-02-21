import React from 'react';
import Image from 'next/image';
import { FaComputer } from "react-icons/fa6";
import { FaComputerMouse } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartHalf } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import PhotoTextFlipCard from '../components/PhotoTextFlipCard';
import FirstTimeline from '../components/FirstTimeline';
import GenericSwiper from '../components/GenericSwiper';


export default function Page() {
  return (
    <div>
      <div className="relative bg-white">
        <div>
          <Image src="../../images/our-story/s-e.jpg" 
                  alt="Image of Sahee shaped like an S, Elise shaped like an E"
                  width={500}
                  height={300}
          />
        </div>

        <div className="h-full w-full bg-black opacity-30 absolute inset-0 flex"></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-white text-6xl sm:text-9xl">Our Story</p>
        </div>
      </div>


      {/* Quick facts */}
      <div className="bg-weddingGreen m-5 p-1 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl sm:text-5xl text-center">A Couple of</h1>
          <h1 className="text-white text-4xl sm:text-5xl text-center">Couple Quirks</h1>
        </div>
        
        <div className="bg-white m-3 rounded-lg">
          <div className="grid grid-cols-2 gap-2">
            {/* Sahee */}
            <div className="border-r my-2 border-weddingGreen p-5">
              <ul className="list-disc">
                <li>Sahee has a green thumb</li>
                <li>He has analysis paralysis with a side of curiosity</li>
                <li>He loves Wendy&apos;s Chili</li>
              </ul>
            </div>

            {/* Elise */}
            <div className="p-5 my-2">
              <ul className="list-disc">
                <li>Elise&apos;s favorite pokemon is bulbasaur</li>
                <li>She is terrible at mental math</li>
                <li>She has multiple alter egos</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* How we met */}
      <div className="hidden md:block">
        <h1>How we met</h1>
        {/* Elise POV */}
        <div className="grid grid-cols-2 gap-2">
          <div className="m-10">
            <p>I walked into my first day of my first Computer Science class at UW La-Crosse with the goal of finding some friends in the same major as me. I got to class a little early, sat down, and waited for someone to sit by me to initiate conversation. However, that day, no one talked to me, and I remember feeling like I had made a mistake in the major that I chose, that I was over my head.</p>
          </div>
          <div className="relative h-full">
            <Image
              src="../../images/our-story/uwl-logo.png" // Specify the path to your image
              alt="Descriptive alt text"
              width={500}
              height={300}
            />
          </div>
          <div>
            Computer image
          </div>
          <div className="m-10">
            <p>I walked into the second day of class with this weight on my shoulders, when I saw someone sitting in the seat next to the one that I had been sitting in the class before. I quickly sat down, introduced myself, and then started to get to know my new Computer Science friend.</p>
          </div>
          <div className="m-10">
            <p>Class after class, we continued to talk before and after, learning about each other&apos;s lives little by little. My biggest problem was that I couldn&apos;t remember the person&apos;s name and felt too awkward to ask for it again. Luckily, after working on a class project, I stealthily found out that my CS friend&apos;s name was Sahee 🙂. After a few months, Sahee and I were basically inseparable.</p>
          </div>
          <div>Description</div>
          <div>
            <figure>
              <Image 
                src="../../images/our-story/first-sahee.JPG" 
                alt="The first picture Elise took of Sahee" 
                width={500}
                height={300}
              />
              <figcaption>The first picture Elise took of Sahee</figcaption>
            </figure>
          </div>
        </div>

      </div>

      {/* How we met mobile*/}
      <div className="block md:hidden m-5 bg-lime-100 rounded-lg">
        <div className="text-4xl flex justify-center items-center bg-weddingGreen rounded-lg">
          <h1 className="text-white text-4xl sm:text-5xl">How We Met</h1>
        </div>
        {/* Elise's POV */}
        <div>
          <div className="text-2xl pt-5 px-3">Elise&apos;s Point of View</div>
          <p className="px-3 py-3">I walked into my first day of my first Computer Science class at UW La-Crosse with the goal of finding some friends in the same major as me. I got to class a little early, sat down, and waited for someone to sit by me to initiate conversation. However, that day, no one talked to me, and I remember feeling like I had made a mistake in the major that I chose, that I was over my head.</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center"><FaComputer/></div>
            <div className="flex justify-center items-center"><FaComputerMouse/></div>
            <div className="flex justify-center items-center"><MdComputer/></div>
          </div>

          <p className="px-3 py-3">I walked into the second day of class with this weight on my shoulders, when I saw someone sitting in the seat next to the one that I had been sitting in the class before. I quickly sat down, introduced myself, and then started to get to know my new Computer Science friend.</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center"><IoIosHeartEmpty/></div>
            <div className="flex justify-center items-center scale-x-[-1]"><IoIosHeartHalf/></div>
            <div className="flex justify-center items-center"><IoMdHeart/></div>
          </div>
          <p className="px-3 py-3">Class after class, we continued to talk before and after, learning about each other&apos;s lives little by little. My biggest problem was that I couldn&apos;t remember the person&apos;s name and felt too awkward to ask for it again. Luckily, after working on a class project, I stealthily found out that my CS friend&apos;s name was Sahee. After a few months, Sahee and I were basically inseparable.</p>
        </div>

        {/* First photos */}
        <div className="grid grid-cols-2 gap-2">
          <div className="pl-3 pr-1.5">
            <figure>
              <Image 
                src="../../images/our-story/first-sahee-crop.JPG" 
                alt="The first picture Elise took of Sahee" 
                width={500}
                height={300}
              />
              <figcaption>The first picture Elise took of Sahee</figcaption>
            </figure>
          </div>
          <div className="pr-3 pl-1.5">
            <figure>
              <Image 
                src="../../images/our-story/first-elise.jpg" 
                alt="The first picture Sahee took of Elise" 
                width={500}
                height={300}
              />
              <figcaption>The first picture Sahee took of Elise</figcaption>
            </figure>
          </div>
        </div>

        {/* Sahee POV */}
        <div>
          <div className="text-2xl pt-5 px-3">Sahee&apos;s Point of View</div>
          <p className="px-3 py-3">On the first day of my intro CS class, I decided to sit in the second row because I didn&apos;t want to sit in the front but didn&apos;t want to sit in the back. It was a good day of class. On the second day, I sat in the same spot. But someone (hint: Elise) came to sit in the seat next to me. We talked and established each other as amicable teammates for future class projects. Somewhere along the way, homework turned into dinner, and dinner turned into a date. All in all, she is the best classmate you could ever ask for.</p>
        </div>
      </div>

      {/* First date */}
      <div className="m-5 bg-lime-100 rounded-lg">
        <div className="text-4xl flex justify-center items-center bg-weddingGreen rounded-t-lg">
          <h1 className="text-white text-4xl sm:text-5xl">Our First Date</h1>
        </div>

        <div>
          <PhotoTextFlipCard 
            imagePath={'/images/our-story/first-date.jpg'} 
            wording={"Our next step together beyond friendship began one bright morning, sparked by a lucky raffle win at a UWL Drag Show, where we landed some coupons for a couple of La Crosse's local restaurants. We chose to escape the stress of finals by heading to the World Renowned pizza buffet, Pizza Doctor. Afterwards we strolled through Riverside Park, sharing stories and laughter. Our date ended at Moka with smoothies, and conversations about the upcoming summer."}
          />
          
        </div>

      </div>

      {/* List of firsts */}
      <div>
        <div className="text-4xl flex justify-center items-center bg-weddingGreen rounded-lg mx-5 mt-5">
          <h1 className="text-white text-4xl sm:text-5xl">Firsts Milestones</h1>
        </div>
        <FirstTimeline></FirstTimeline>
      </div>

      {/* Proposal */}
      <div className="mx-5 mt-5 bg-lime-100 rounded-t-lg">
        <div className="text-4xl flex justify-center items-center bg-weddingGreen rounded-t-lg">
          <h1 className="text-white text-4xl sm:text-5xl">The Proposal</h1>
        </div>
        
        <div>
          <p className="px-3 py-3">After graduating from college, we set off on a Wisconsin road trip, exploring quirky roadside attractions and scouring antique stores for Elise&apos;s perfect engagement ring design. By the end of the trip we knew what we were looking for, and picked out an engagement ring together. Swipe through to see photos of the road trip!</p>
          <div className="px-3 pb-3">
            <GenericSwiper 
              images={[
                {src: "/images/our-story/rt-0.jpg", alt: "Nike Missile Controle Site"},
                {src: "/images/our-story/rt-1.jpg", alt: "Antique Store one"},
                {src: "/images/our-story/rt-2.jpg", alt: "The Science Outlet Store"},
                {src: "/images/our-story/rt-3.jpg", alt: "Mars Cheese Castle"},
                {src: "/images/our-story/rt-4.jpg", alt: "Richard Bong State Park"},
                {src: "/images/our-story/rt-5.jpg", alt: "Memorial to the founder of Dnd"},
                {src: "/images/our-story/rt-6.jpg", alt: "Gerty the Cow"},
                {src: "/images/our-story/rt-7.jpg", alt: "Baumgartner Bar in Monroe WI"},
                {src: "/images/our-story/rt-8.jpg", alt: "The Arbitrum"},
                {src: "/images/our-story/rt-9.jpg", alt: "Wesby Creamery"},
                {src: "/images/our-story/rt-10.jpg", alt: "World's Largest 6-pack"},
                {src: "/images/our-story/rt-11.jpg", alt: "Prarie Moon Sculpture Garden"},
                {src: "/images/our-story/rt-12.jpg", alt: "UW Eau Claire"},
                {src: "/images/our-story/rt-13.jpg", alt: "Metal Sculpture Park"},
                {src: "/images/our-story/rt-14.jpg", alt: "World's Largest Hex Nut"},
                {src: "/images/our-story/rt-15.jpg", alt: "Harry Houdini Memorial"},
                {src: "/images/our-story/rt-16.jpg", alt: "Ring Design"},
              ]}
            />
          </div>

          <p className="p-3">Months later, Elise had just come back from a trip to Cleveland, OH with her parents. Sahee seemed unusually distracted that evening. He suggested getting dressed up and going to dinner, but all Elise wanted was a cozy night in with frozen pizza. After dinner, Sahee suggested a walk, and Elise agreed. Elise saw a lump in Sahee&apos;s pocket and joked that it was a ring box, but it was actually a pair of socks that Sahee pulled out and put on.</p>
          <p className="p-3">As we were heading out the door, Elise saw the lump in Sahee&apos;s pocket again and made a joke about Sahee bringing an extra pair of socks on the walk, while tapping the lump. Turns out the lump this time was a ring box, and Sahee proposed to Elise on the spot in the apartment. Elise&apos;s joyful &quot;yes&quot; was followed by a walk where Sahee proposed again, this time at the originally intended romantic spot.</p>
          <Image 
            className="px-3" 
            src="../../images/our-story/engagement.jpg" 
            alt="Elise and Sahee after getting engaged" 
            width={500}
            height={300}/>

          <p className="p-3">We are so excited to share this day with you all, and want to thank our friends and family for their support throughout our lives!</p>
        </div>
      </div>

      <div className=" mx-5 mb-5 text-4xl flex justify-center items-center bg-weddingGreen rounded-b-lg">&nbsp;</div>

    </div>
  )
};
