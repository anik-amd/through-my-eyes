import { getCollection, getEntryBySlug } from "astro:content";
// Get all entries from a collection. Requires the name of the collection as an argument.
const galleryCollection = await getCollection("gallery");

export default galleryCollection;
