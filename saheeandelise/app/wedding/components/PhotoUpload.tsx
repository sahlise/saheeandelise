'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { getNameFromLocalStorage } from '../utils/localStorageUtils';
import ProgressBar from '@ramonak/react-progress-bar';
import { Dialog } from '@headlessui/react'
import Modal from './Modal';

const baseUrl = 'https://vvtlljqgg3.execute-api.us-east-2.amazonaws.com/prod/photos';

type Photo = {
    firstName: string,
    lastName: string,
    filename: string,
    id: number,
};

interface PhotoUploadProps {
    uploadComplete: () => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ( {uploadComplete} ) => {
    const [uploadProgress, setUploadProgress] = useState<Record<number, number>>({});
    const [uploadingPhotos, setUploadingPhotos] = useState<Array<Photo>>([]);
    const [numberUploadFiles, setNumberUploadFiles] = useState(0)
    const [totalNumberFilesToUpload, setTotalNumberFilesToUpload] = useState(-1)

    const onFileDialogOpen = useCallback(() => {
        // Clear the states when the file dialog opens
        setUploadingPhotos([]);
        setUploadProgress({});
    }, []);

    useEffect(() => {
        if(numberUploadFiles == totalNumberFilesToUpload) {
            uploadComplete()
            setNumberUploadFiles(0)
        }
        
      }, [numberUploadFiles, totalNumberFilesToUpload]);

    async function uploadPhoto(file: File, presignedUrl: string, fileId: number) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', presignedUrl, true);
            xhr.setRequestHeader('Content-Type', file.type);

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentComplete = event.loaded / event.total * 100;
                    setUploadProgress(prevProgress => ({
                        ...prevProgress,
                        [fileId]: percentComplete,
                    }));
                }
            };

            xhr.onload = () => {
                if (xhr.status === 200) {
                    setNumberUploadFiles((oldCount) => oldCount + 1)
                    resolve(xhr.response);
                } else {
                    reject(`Failed to upload file: ${xhr.statusText}`);
                }
            };

            xhr.onerror = () => {
                reject('Error in upload');
            };

            xhr.send(file);
        });
    }

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        setTotalNumberFilesToUpload(acceptedFiles.length)

        let savedName = getNameFromLocalStorage();
        let firstName = savedName ? savedName.firstName : "Unknown";
        let lastName = savedName ? savedName.lastName : "Unknown";
        let photos: Photo[] = [];
        setUploadingPhotos([]);
        setUploadProgress({})

        acceptedFiles.forEach((file, index) => {
            photos.push({
                firstName: firstName,
                lastName: lastName,
                filename: file.name,
                id: index,
            });
        });

        setUploadingPhotos(photos);


        let data = { photos };
        try {
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            const response = await fetch(baseUrl, settings);

            if (response.status !== 200) {
                throw new Error('API error');
            }

            const responseBody = await response.json();

            const uploadPromises = responseBody.message.map((responseElement: any) =>
                uploadPhoto(acceptedFiles[responseElement.id], responseElement.preSignedUrl, responseElement.id)
            );

            await Promise.all(uploadPromises);

        } catch (error) {
            console.error('More details', error);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        onFileDialogOpen,
    });

    return (
        <div className="h-full w-full">
            {/* Photo upload section */}
            <div className="flex flex-col justify-center items-center my-4">
                <div className="w-3/4 md:w-1/2 p-3 border-3 border-gray-300 border-dashed rounded-xl" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="text-center">
                        <div className="flex flex-col justify-center items-center text-3xl"><MdOutlineAddPhotoAlternate /></div>
                        <div className="text-lg">Select Photos/Videos to Upload</div>
                    </div>
                </div>
            </div>

            <div className="mx-4">
                {uploadingPhotos.map((photo) => (
                    <div key={photo.id} className="w-3/4 md:w-1/2 my-4">
                        <div>Uploading {photo.filename}</div>
                        <ProgressBar
                            completed={Math.trunc(uploadProgress[photo.id]) || 0}
                            bgColor="#570034"
                            labelColor="#ffffff"
                            maxCompleted={100}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PhotoUpload;