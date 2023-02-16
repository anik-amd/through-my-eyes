import { getCollection } from "astro:content";
// Get all entries from a collection. Requires the name of the collection as an argument.
const galleryCollection = await getCollection("gallery");

const formattedGalleryCollection = galleryCollection.map((i) => {
  return {
    title: i.data.title,
    height: i.data.height,
    width: i.data.width,
    src: "/gallery/images/" + i.slug + ".jpg",
    content: i.body,
    slug: i.slug,
  };
});

export { formattedGalleryCollection };
