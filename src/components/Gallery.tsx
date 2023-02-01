import PhotoAlbum from "react-photo-album";

import photos from "./photos";

import galleryCollection from "../utils";

const Gallery = () => {
  console.log(galleryCollection);
  return (
    <div className="mb-5">
      <PhotoAlbum targetRowHeight={300} layout="rows" photos={photos} />
    </div>
  );
};

export default Gallery;
