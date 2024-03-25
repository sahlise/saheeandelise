import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import { PhotoMetadata } from "../models/PhotoMetadata";
import { Photo } from "../models/Photo";




type GalleryProps = {
    photos: Photo[]
};

const Gallery: React.FC<GalleryProps> = ({ photos }) => {

    //const [photos, setPhotos] = useState<Array<Photo>>([]);
    const [index, setIndex] = useState(-1);


    return <div>
        <PhotoAlbum layout="masonry" photos={photos}  onClick={({ index: current }) => setIndex(current)}/>

        <Lightbox
        index={index}
        slides={photos}
        open={index > -1}
        close={() => setIndex(-1)}
        plugins={[Download, Zoom, Video]}
        zoom={{
            maxZoomPixelRatio: 1,
            zoomInMultiplier: 2,
            pinchZoomDistanceFactor: 50
        }}

        // slides={[
        //     {
        //       type: "video",
        //       width: 1280,
        //       height: 720,
        //       poster: "https://placehold.co/600x400",
        //       sources: [
        //         {
        //           src: "https://saheeandelise.com/wedding/photo-uploads/9125b19f-fea1-47ca-8643-232ac558c981-73276556262__0AB332F6-079E-4BBE-92FC-058C60D9A685.MOV",
        //           type: "video/mp4",
        //         },
        //       ],
        //     },
        // ]
    //}
      />
        
    </div>;
};

export default Gallery;