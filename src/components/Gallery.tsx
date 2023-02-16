import PhotoAlbum from "react-photo-album";

import photos from "./photos";

import { formattedGalleryCollection } from "../utils/formattedGallery";

const Gallery = () => {
  console.log(photos);
  console.log(formattedGalleryCollection);
  return (
    <div className="mb-5">
      <PhotoAlbum
        targetRowHeight={300}
        layout="rows"
        photos={formattedGalleryCollection}
      />
    </div>
  );
};

export default Gallery;
