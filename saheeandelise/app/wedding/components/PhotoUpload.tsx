import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const MyDropzone: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Perform actions with the accepted files
    console.log(acceptedFiles);
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()} style={{border: '1px solid #eee', padding: '20px', width: '300px'}}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
};

export default MyDropzone;