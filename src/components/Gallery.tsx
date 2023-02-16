import PhotoAlbum from "react-photo-album";

import { formattedGalleryCollection } from "../utils/formattedGallery";

const Gallery = () => {
  console.log(formattedGalleryCollection);
  // TODO: add custom photo render.
  return (
    <div className="mb-5 cursor-pointer">
      <PhotoAlbum
        targetRowHeight={300}
        layout="rows"
        photos={formattedGalleryCollection}
        onClick={(o) => {
          console.log(o.photo.slug);
          const slug = "/" + o.photo.slug;
          location.href = slug;
        }}
      />
    </div>
  );
};

export default Gallery;
