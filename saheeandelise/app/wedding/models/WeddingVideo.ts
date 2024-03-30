type Source = {
    src: string,
    type: string,
}


export type WeddingVideo = {
    type: "video",
    src: string,
    width: number,
    height: number,
    description: string
    poster: string,
    sources: Source[],
};