// pages/index.js
"use client";
import React from 'react';
import Link from 'next/link';
import useDevice from '../hook/useDevice';
import Image from 'next/image';


//import Link from 'next/link';

export default function Page() {

  const { isIOS } = useDevice();

  return (
    <div className="bg-white">

      <div className="flex flex-col items-center">

        <Image className="w-3/4 md:w-2/3" src="../../images/flower-divider-color.png"
          alt="Flower divider"
          width={1000}
          height={1000}
          priority={true}
        />
        <div className="flex flex-col justify-center items-center text-lg">

          {/* Travel */}
          <div className="md:w-2/3 px-4 flex flex-col justify-center items-center">

            <div className="grid grid-cols-3 md:grid-cols-3 mt-4 md:w-2/3">
              <div className="flex justify-end items-center">
                <div className="">
                  <Image
                    src="../../images/vine.png"
                    alt="Image of a vine"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="text-4xl md:text-5xl text-weddingGreen text-center">Travel</div>
              <div className="flex justify-start items-center">
                <div className="">
                  <Image
                    src="../../images/vine-right.png"
                    alt="Image of a vine"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>



            <div className="">The ceremony and reception will be taking place at the Swan Barn Door. There is parking at the venue. The address is
              {!isIOS && <Link className="underline pl-1 text-weddingGreen" href="http://maps.google.com/?q=swan+barn+door">4161 River Rd, Wisconsin Dells, WI 53965</Link>}
              {isIOS && <Link className="underline pl-1 text-weddingGreen" href="https://maps.apple.com/?address=4161-4187%20River%20Rd,%20Wisconsin%20Dells,%20WI%2053965,%20United%20States&auid=3058409537829054152&ll=43.645691,-89.775047&lsp=9902&q=The%20Swan%20Barn%20Door&t=m">4161 River Rd, Wisconsin Dells, WI 53965</Link>}
              .
            </div>

            <div className="pt-4">
              Enchanted by the Swan Barn Door&apos;s rustic indoor charm and beautiful outdoor space, we knew it was the perfect place to start our journey together. We liked its unique indoor balcony that offers guests a serene retreat, allowing them to remain connected to the celebration while enjoying a tranquil overlook of the venue.
              For more information, please visit the Swan Barn Door
              <Link className="underline pl-1 text-weddingGreen" href="https://theswanbarndoor.com/">official website.</Link>
            </div>

            <div className="w-full flex flex-col justify-left items-left">
              <div className="pt-4">
                Curious what vendors we are using for the wedding? Find out
                <Link className="underline pl-1 text-weddingGreen" href="/wedding/vendors">here</Link>
                !
              </div>
            </div>


          </div>

          {/* Accommodations */}
          <div className="md:w-2/3 px-4 flex flex-col justify-center items-center">

            <div className="grid grid-cols-4 md:grid-cols-3 mt-4">
              <div className="flex justify-end items-center">
                <div className="">
                  <Image
                    src="../../images/vine.png"
                    alt="Image of a vine"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="md:pt-3 text-4xl md:text-5xl text-weddingGreen text-center col-span-2 md:col-span-1">Lodging</div>
              <div className="flex justify-start items-center">
                <div className="">
                  <Image
                    src="../../images/vine-right.png"
                    alt="Image of a vine"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>

            <div className="">
              We have a hotel block at the Chula Vista resort. For the nights of June 7th and June 8th, 2024, we have reserved two types of accommodations:
              <ul className="py-4">
                <li>
                  El Grande Condo: 2 Bedrooms, sleeps 8 adults.
                  <Link className="underline pl-1 text-weddingGreen" href="https://chulavistaresort.com/rooms-suites/rio-condominiums/two-bedroom/">View Details</Link>
                </li>
                <li>
                  Tower Jr Suite: 1 Bedroom, sleeps 6 adults.
                  <Link className="underline pl-1 text-weddingGreen" href="https://chulavistaresort.com/rooms-suites/rio-condominiums/condo-junior-suite/">View Details</Link>
                </li>
              </ul>
              To use the hotel block, use the Booking ID Number: <b>K10495</b>. For more information, please visit the Chula Vista Resort
              <Link className="underline pl-1 text-weddingGreen" href="https://chulavistaresort.com/">official website</Link>
              .
            </div>

            <div className="pt-4">
              We are still deciding whether or not we want to plan for a shuttle going between the Chula Vista and the Swan Barn Door. If you are planning on staying at the Chula Vista, feel free to fill out this
              <Link className="underline px-1 text-weddingGreen" href="https://forms.gle/SMmpEprspS4TQwiw8">google form</Link>
              to let us know your thoughts!
            </div>
          </div>

          {/* Things to do */}
          <div className="md:w-2/3 px-4 flex flex-col justify-center items-center">

          <div className="grid grid-cols-4 md:grid-cols-3 mt-4">
              <div className="flex justify-end items-center">
                <div className="">
                  <Image
                    src="../../images/vine.png"
                    alt="Image of a vine"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="md:pt-3 text-4xl md:text-5xl text-weddingGreen text-center col-span-2 md:col-span-1">Activities</div>
              <div className="flex justify-start items-center">
                <div className="">
                  <Image
                    src="../../images/vine-right.png"
                    alt="Image of a vine"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>

            <div className="">
              The Wisconsin Dells is a classic tourist spot, known for being the &quot;Waterpark capital of the World&quot;. There are a variety of casual eateries, amusement parks and vibrant local attractions to check out in the Dells and surrounding areas.
              For more information about the Dells and things to do, visit their
              <Link className="underline pl-1 text-weddingGreen" href="https://www.wisdells.com/">website.</Link>
            </div>

            <div className="pt-4">
              The venue is also close to a variety of Wisconsin State Parks that are beautiful and fun to visit:
              <ul className="py-2">
                <li>
                  <Link className="underline pl-1 text-weddingGreen" href="https://dnr.wisconsin.gov/topic/parks/mirrorlake">Mirror Lake</Link>
                  : Mirror Lake State Park is named for its centerpiece, a lake which often is so calm that not a ripple marks its surface.
                </li>
                <li>
                  <Link className="underline pl-1 text-weddingGreen" href="https://dnr.wisconsin.gov/topic/parks/rockyarbor">Rocky Arbor</Link>
                  : A quiet and secluded escape just 1.5 miles from Wisconsin Dells, surrounded by pines and sandstone bluffs.
                </li>
                <li>
                  <Link className="underline pl-1 text-weddingGreen" href="https://dnr.wisconsin.gov/topic/parks/devilslake">Devil&apos;s Lake</Link>
                  : Wisconsin&apos;s largest state park offers magnificent views from 500-foot Quartzite bluffs overlooking a 360-acre lake.
                </li>
              </ul>
            </div>
          </div>

        </div>


        <div className="flex flex-col justify-center items-center w-full">
          <Image className="w-3/4 md:w-1/2" src="../../images/flower-divider-color.png"
            alt="Flower divider"
            width={1000}
            height={1000}
            priority={true}
          />
        </div>


      </div>

    </div>
  )
};
