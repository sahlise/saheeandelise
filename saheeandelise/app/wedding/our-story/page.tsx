import React from 'react';
import Image from 'next/image';
import { GiTacos } from "react-icons/gi";

export default function Page() { return (
  <div>
    {/* Quick facts */}
    <div>
      <h1>Quick facts</h1>
      <img src="../../images/our-story/s-e.jpg"></img>
      <div className="grid grid-cols-2 gap-2">
        {/* Sahee */}
        <div className="m-5">
          <ul className="list-disc">
            <li>Has a green thumb</li>
            <li>Has analysis paralysis with a side of curiosity</li>
            <li>Loves Wendy's Chili</li>
          </ul>
        </div>
        
        {/* Elise */}
        <div className="m-5">
          <ul className="list-disc">
            <li>Favorite pokemon is bulbasaur</li>
            <li>Terrible at mental math</li>
            <li>Has multiple alter egos</li>
          </ul>  
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
            layout="fill"
            objectFit="contain" // Adjust as needed: cover, contain, etc.
            className="h-full w-auto" // Ensure the image takes full height of its container
          />
        </div>
        <div>
          Computer image
        </div>
        <div className="m-10">
          <p>I walked into the second day of class with this weight on my shoulders, when I saw someone sitting in the seat next to the one that I had been sitting in the class before. I quickly sat down, introduced myself, and then started to get to know my new Computer Science friend.</p>
        </div>
        <div className="m-10">
          <p>Class after class, we continued to talk before and after, learning about each other's lives little by little. My biggest problem was that I couldn't remember the person's name and felt too awkward to ask for it again. Luckily, after working on a class project, I stealthily found out that my CS friend's name was Sahee 🙂. After a few months, Sahee and I were basically inseparable, and by the end of the semester, we decided to start dating.</p>
        </div>
        <div>Description</div>
        <div>
          <figure>
            <img src="../../images/our-story/first-sahee.JPG" alt="The first picture Elise took of Sahee"/>
            <figcaption>The first picture Elise took of Sahee</figcaption>
          </figure>
        </div>
      </div>

    </div>

    <div className="block md:hidden">
      
      {/* Elise's POV */}
      <div>
        <h1>Elise's Point of View</h1>
        <p>I walked into my first day of my first Computer Science class at UW La-Crosse with the goal of finding some friends in the same major as me. I got to class a little early, sat down, and waited for someone to sit by me to initiate conversation. However, that day, no one talked to me, and I remember feeling like I had made a mistake in the major that I chose, that I was over my head.</p>
        <div className="grid grid-cols-3 gap-4 content-center">
          <GiTacos />
          <GiTacos />
          <GiTacos />
        </div>
        
        <p>I walked into the second day of class with this weight on my shoulders, when I saw someone sitting in the seat next to the one that I had been sitting in the class before. I quickly sat down, introduced myself, and then started to get to know my new Computer Science friend.</p>
        <div className="grid grid-cols-3 gap-4 content-center">
          <GiTacos />
          <GiTacos />
          <GiTacos />
        </div>
        <p>Class after class, we continued to talk before and after, learning about each other's lives little by little. My biggest problem was that I couldn't remember the person's name and felt too awkward to ask for it again. Luckily, after working on a class project, I stealthily found out that my CS friend's name was Sahee. After a few months, Sahee and I were basically inseparable, and by the end of the semester, we decided to start dating.</p>
      </div>

      {/* First photos */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <figure>
            <img src="../../images/our-story/first-sahee.JPG" alt="The first picture Elise took of Sahee"/>
            <figcaption>The first picture Elise took of Sahee</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <img src="../../images/our-story/first-elise.jpg" alt="The first picture Sahee took of Elise"/>
            <figcaption>The first picture Sahee took of Elise</figcaption>
          </figure>
        </div>
      </div>

      {/* Sahee POV */}
      <div>
        <h1>Sahee's Point of View</h1>
        <p>On the first day of my intro CS class, I decided to sit in the second row because I didn't want to sit in the front but didn't want to sit in the back. It was a good day of class. On the second day, I sat in the same spot. But someone (hint: Elise) came to sit in the seat next to me. We talked and established each other as amicable teammates for future class projects. Somewhere along the way, homework turned into dinner, and dinner turned into a date. All in all, she is the best classmate you could ever ask for.</p>
      </div>


    </div>
    
  </div>
)
};
