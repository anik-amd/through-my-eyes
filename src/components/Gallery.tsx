import PhotoAlbum from "react-photo-album";
import CustomRenderer from "./CustomRenderer";

import { formattedGalleryCollection } from "../utils/formattedGallery";

const Gallery = () => {
  // TODO: optimize images, use lazy loading perphaps.
  // TODO: update astro to beta or remove astro/image.
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
          const slug = "/" + o.photo.slug;
          location.href = slug;
        }}
      />
    </div>
  );
};

export default Gallery;
