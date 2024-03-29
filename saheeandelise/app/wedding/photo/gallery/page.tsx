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
import { GiBranchArrow } from "react-icons/gi";
import Dropdown from '../../components/Dropdown';
import { convertUtcToChicago } from '../../utils/dateUtils';

const baseUrl = 'https://vvtlljqgg3.execute-api.us-east-2.amazonaws.com/prod/photos';
const baseFilePath = 'https://saheeandelise.com/wedding/photo-uploads/'

// const initialPhotos = [
//     { src: "https://placehold.co/600x400", width: 2400, height: 1600 },
//     { src: "https://saheeandelise.com/wedding/photo-uploads/08ef41ab-9287-4ad1-8cf5-d05dc72fda03-background__1_.jpg", width: 1600, height: 2400 },
//     //{ src: "https://saheeandelise.com/wedding/photo-uploads/9125b19f-fea1-47ca-8643-232ac558c981-73276556262__0AB332F6-079E-4BBE-92FC-058C60D9A685.MOV", width: 2400, height: 1600}
//   ];

type PhotoResponse = {
    items: PhotoMetadata[],
    next_cursor: string
}


export default function Page() {
    const DESCENDING = "DESC"

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isGalleryLoading, setIsGalleryLoading] = useState(true);
    const [curCursor, setCurCursor] = useState("");
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [name, setName] = useState<{ firstName: string; lastName: string } | null>(null);
    const [curPage, setCurPage] = useState(0)
    const [paginationMap, setPaginationMap] = useState<Map<number, string>>(new Map())
    const [curSortDir, setCurSortDir] = useState(DESCENDING)


    //const paginationMap = new Map<number, string>()
    //let curPage = 0;

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

        getPhotos(0, curSortDir)
        setIsLoading(false);
    }, []);


    const getNextPage = () => {
        getPhotos(curPage + 1, curSortDir)
        setCurPage((oldCount) => oldCount + 1)
    }

    const getPrevPage = () => {
        getPhotos(curPage - 1, curSortDir)
        setCurPage((oldCount) => oldCount - 1)
    }

    const changeOrder = (newDirection: string) => {

        setCurSortDir(newDirection)
        //reset user to first page
        setCurPage(0)
        getPhotos(0, newDirection)
    }

    const getPhotos = async (currentPage: number, sortDir: string) => {
        setIsGalleryLoading(true);
        setHasError(false)
        try {

            const curCursor = paginationMap.get(currentPage);
            const getUrl = curCursor ? baseUrl + "?sort=" + sortDir + "&cursor=" + curCursor : baseUrl + "?sort=" + sortDir
            const response = await fetch(getUrl);

            if (response.status != 200) {
                throw new Error('Api error');
            }

            let jsonData: PhotoResponse = await response.json();
            let nextPage = currentPage + 1
            let tempMap = paginationMap.set(nextPage, jsonData.next_cursor)
            setPaginationMap(tempMap)
            setCurCursor(jsonData.next_cursor)
            const metaDataPhotos = jsonData.items;

            // Create a promise for each image to load
            const loadImagePromises = metaDataPhotos.map((metaDataPhoto) => {
                return new Promise<Photo>((resolve, reject) => {
                    const imagePath = baseFilePath + metaDataPhoto.photoId + "-" + metaDataPhoto.sanitizedFilename;
                    const img = new Image();
                    img.src = imagePath;

                    let utcDateString = metaDataPhoto.timestamp;
                    const timeStamp = convertUtcToChicago(utcDateString);
                    console.log(metaDataPhoto.timestamp)

                    const photoDescription = `Uploaded by: ${metaDataPhoto.firstName} ${metaDataPhoto.lastName}`

                    img.onload = () => resolve(
                        {
                            src: imagePath,
                            width: img.width,
                            height: img.height,
                            description: photoDescription + '\n' + timeStamp
                        }
                    );
                    img.onerror = reject;
                });
            });

            const photos = await Promise.all(loadImagePromises);
            setPhotos(photos);




        } catch (error) {
            console.error('Error fetching mock data:', error);
            setHasError(true);
        } finally {
            window.scrollTo(0, 0);
            setIsGalleryLoading(false);
        }
    };


    return (
        <div className="h-full">
            <div className={`min-h-screen`}>
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl md:text-4xl mt-3 text-weddingMaroon">Gallery</h1>


                        {/* Loading Icon */}
                        <div className={`w-full flex flex-col justify-center items-center ${isLoading ? 'visible mt-20' : 'hidden'}`} role="status">
                            <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin fill-weddingMaroon" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>

                        {/* Buttons */}
                        <div className={`h-full w-3/4 md:w-11/12 ${!isLoading ? 'visible' : 'hidden'}`}>
                            <div className="md:grid md:grid-cols-2 mt-2 md:mt-4">
                                <div className="flex flex-row items-center justify-center md:justify-start">
                                    {name &&
                                        <div className="flex flex-row items-center md:text-lg">
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

                            <div className="mt-4 flex flex-col justify-center items-center md:justify-start md:items-start">
                                <div className="md:w-1/4">
                                    <Dropdown updateSelection={changeOrder} />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={`${!isLoading ? 'visible' : 'hidden'}`}>

                        {/* Gallery Loading Icon */}
                        <div className={`w-full flex flex-col justify-center items-center ${isGalleryLoading ? 'visible mt-20' : 'hidden'}`} role="status">
                            <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin fill-weddingMaroon" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Gallery Loading...</span>
                        </div>

                        {/* Gallery */}
                        <div className={`${!isGalleryLoading ? 'visible' : 'hidden'}`}>
                            {/* Gallery Buttons*/}
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex items-center justify-between w-3/4 md:w-11/12 mt-4">
                                    <button className={`${curPage <= 0 ? 'pointer-events-none text-gray-400' : 'text-weddingMaroon'} text-4xl `} onClick={getPrevPage} style={{ transform: 'rotate(-225deg)' }}><GiBranchArrow /></button>
                                    <div className="md:text-lg">Page {curPage + 1}</div>
                                    <button className={`${curCursor ? 'text-weddingMaroon' : 'pointer-events-none text-gray-400'} text-4xl `} onClick={getNextPage} style={{ transform: 'rotate(-45deg)' }}><GiBranchArrow /></button>
                                </div>
                            </div>


                            {/* Gallery Items*/}
                            <div className="mx-2 my-4">
                                <Gallery photos={photos} />
                            </div>
                        </div>

                    </div>


                </div>


            </div>



            <div className="w-full"><Footer /></div>
        </div>
    )
};
