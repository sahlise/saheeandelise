// pages/index.js
'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import Footer from '../../components/Footer';
import { getNameFromLocalStorage } from '../../utils/localStorageUtils';
import Link from 'next/link';
import Gallery from '../../components/PhotoGallery';
import { json } from 'stream/consumers';
import { PhotoMetadata } from '../../models/PhotoMetadata';
import { Photo } from '../../models/Photo';

const baseUrl = ""//'https://vvtlljqgg3.execute-api.us-east-2.amazonaws.com/prod/photos';

// const initialPhotos = [
//     { src: "https://placehold.co/600x400", width: 2400, height: 1600 },
//     { src: "https://saheeandelise.com/wedding/photo-uploads/08ef41ab-9287-4ad1-8cf5-d05dc72fda03-background__1_.jpg", width: 1600, height: 2400 },
//     //{ src: "https://saheeandelise.com/wedding/photo-uploads/9125b19f-fea1-47ca-8643-232ac558c981-73276556262__0AB332F6-079E-4BBE-92FC-058C60D9A685.MOV", width: 2400, height: 1600}
//   ];

type PhotoResponse = {
    photos: PhotoMetadata[],
    nextCursor: string
}


export default function Page() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [key, setKey] = useState(0)
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [name, setName] = useState<{ firstName: string; lastName: string } | null>(null);

    useEffect(() => {
        // Attempt to load the name from localStorage when the component mounts
        setIsLoading(true);
        const storedName = getNameFromLocalStorage();
        if (storedName) {
            setName(storedName)
        } else {
            //there is no name in storage, force user to go to profile first
            router.push('/wedding/photo/profile')
        }


        const getPhotos = async () => {
            setIsLoading(true)
            setHasError(false)
            try {
              const response = await fetch(baseUrl + "?sort=DESC");
      
              if (response.status != 200) {
                throw new Error('Api error');
              }
      
              let jsonData: PhotoResponse = await response.json();
              const metaDataPhotos = jsonData.photos;
              const tempPhotos: Photo[] = []
              metaDataPhotos.forEach( metaDataPhoto => {
                const imagePath = "https://" + metaDataPhoto.photoPath.replace("www.mywebsite.com", "www.saheeandelise.com")
                console.log(imagePath)
                const img = new Image();
                img.src = imagePath

                img.onload = () => {
                    //console.log(photos.length)
                    tempPhotos.push({ src: imagePath, width: img.width, height: img.height });
                    console.log(tempPhotos.length)
                    setPhotos(tempPhotos);
                };
                
              });
              
      
      
            } catch (error) {
              console.error('Error fetching mock data:', error);
              setHasError(true);
            } finally {
              window.scrollTo(0, 0);
              setIsLoading(false);
            }
        };

        //getPhotos()
        setIsLoading(false);
    }, []);


    // const loadImage = (imageUrl: string) => {
        
    //     img.onerror = (err) => {
    //         console.log("img error");
    //         console.error(err);
    //     };
    // };


    // Function to add a photo
//   const addPhoto = () => {
//     setPhotos([...photos, { src: "https://placehold.co/600x400", width: 500, height: 500 }]);
//     setKey(prevKey => prevKey + 1); // Increment key to force reload
//   };


    return (
        <div className="h-full">
            <div className="min-h-screen">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl md:text-4xl mt-3 text-weddingMaroon">Gallery</h1>
                    {/* Buttons */}
                    <div className="h-full w-3/4 md:w-11/12">
                        <div className="md:grid md:grid-cols-2 mt-2 md:mt-4">
                            <div className="flex flex-row">
                                {name &&
                                    <div className="flex flex-row md:text-lg">
                                        <p className="">Hello {name.firstName} {name.lastName}!</p>
                                        <a href="/wedding/photo/profile" className="underline px-2 text-weddingMaroon">Edit</a>
                                    </div>
                                }
                            </div>
                            <div className="md:flex md:justify-end md:items-end w-full mt-4 md:mt-2">
                                <Link href="/wedding/photo/upload" passHref>
                                    <div className="bg-weddingTan hover:opacity-75 py-2 px-4 rounded cursor-pointer flex justify-center items-center">
                                        Upload Photos
                                    </div>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>

                

                {/* <button onClick={addPhoto}>add photo</button> */}

                {/* Gallery */}
                <div className="mx-2 my-4">
                    <Gallery key={key} photos={photos} />
                </div>
            </div>



            <div className="w-full"><Footer /></div>
        </div>
    )
};
