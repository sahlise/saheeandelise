import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const baseUrl = 'https://vvtlljqgg3.execute-api.us-east-2.amazonaws.com/prod/photos';



const MyDropzone: React.FC = () => {
  async function uploadPhoto(file: File, presignedUrl: string) {
    // Use the Fetch API to upload the file to the presigned URL
    const options = {
      method: 'PUT', // Most presigned URLs for upload require PUT method
      body: file, // The file to upload
      headers: {
        'Content-Type': file.type // Usually, this is needed but check with your cloud provider as it might be different
      },
    };

    try {
      const response = await fetch(presignedUrl, options);
      
      
      
      if (response.status !== 200) {
        throw new Error(`Failed to upload file: ${response.statusText}`);
      }

     

      // Optionally, you can return some information here, such as the response status or a message
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert(error);
      throw error; // It's important to re-throw the error if you want to handle it in another part of your application
    }
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Make API call to get presigned URLs 
    let testFirstName = 'Alice';
    let testLastName = 'Bobson';
    let photos = [];
    let index = 0;
    for (const file of acceptedFiles) {
      photos.push({
        firstName: testFirstName,
        lastName: testLastName,
        filename: file.name,
        id: index
      });
      index++;
    }
    let data = {photos};
    try {

      const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      };
      console.log(data)
      const response = await fetch(baseUrl, settings);

      //TODO take this out obvi
      //await sleep(3000);
      const responseBody = await response.json();
      console.log(responseBody);

      for (const responseElement of responseBody.message) {
        uploadPhoto(acceptedFiles[responseElement.id], responseElement.preSignedUrl);
      }

      console.log(photos);
      if (response.status != 200) {
        throw new Error('Api error');
      }

    } catch (error) {
      console.error('More details', error);
      //
    } finally {
      //
    }
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()} style={{border: '1px solid #eee', padding: '20px', width: '300px'}}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag n drop some files here, or click to select files</p>
      }
    </div>
  );
};

export default MyDropzone;