import PhotoAlbum from "react-photo-album";

import photos from "./photos";

const Gallery = () => {
  return (
    <div>
      <PhotoAlbum targetRowHeight={300} layout="rows" photos={photos} />
    </div>
  );
};

export default Gallery;
