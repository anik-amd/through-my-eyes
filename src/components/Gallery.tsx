import PhotoAlbum from "react-photo-album";
import CustomRenderer from "./CustomRenderer";

import { formattedGalleryCollection } from "../utils/formattedGallery";

const Gallery = () => {
  console.log(formattedGalleryCollection);
  return (
    <div className="mb-5">
      <PhotoAlbum
        renderPhoto={CustomRenderer}
        targetRowHeight={500}
        layout="rows"
        // spacing={10}
        // padding={10}
        photos={formattedGalleryCollection}
        onClick={(o) => {
          // TODO: remove all console log from production
          console.log(o.photo.slug);
          const slug = "/" + o.photo.slug;
          location.href = slug;
        }}
      />
    </div>
  );
};

export default Gallery;
