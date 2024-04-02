import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { Photo } from "../models/Photo";
import { WeddingVideo } from "../models/WeddingVideo";
import React from "react";

type GalleryProps = {
    photos: Photo[]
    videos: WeddingVideo[]
};

const Gallery: React.FC<GalleryProps> = ({ photos, videos }) => {

    //const [photos, setPhotos] = useState<Array<Photo>>([]);
    const [index, setIndex] = useState(-1);


    return <div>
        <PhotoAlbum layout="rows" photos={[...photos, ...videos].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())}  onClick={({ index: current }) => setIndex(current)}/>

        <Lightbox
        index={index}
        slides={[...photos, ...videos].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())}
        open={index > -1}
        close={() => setIndex(-1)}
        plugins={[Download, Zoom, Video, Captions]}
        zoom={{
            maxZoomPixelRatio: 1,
            zoomInMultiplier: 2,
            pinchZoomDistanceFactor: 50
        }}
      />
        
    </div>;
};

export default Gallery;