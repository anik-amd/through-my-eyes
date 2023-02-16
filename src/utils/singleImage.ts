import { getEntryBySlug } from "astro:content";

const singleImage = await getEntryBySlug("gallery");

// const formattedGalleryCollection = galleryCollection.map((i) => {
//   return {
//     title: i.data.title,
//     height: i.data.height,
//     width: i.data.width,
//     src: "/gallery/images/" + i.slug + ".jpg",
//   };
// });

// TODO: add UI modal formattedColletion
// const formattedImageCaption;

export { singleImage };
