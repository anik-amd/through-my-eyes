import { formattedGalleryCollection } from "../utils/formattedGallery";

interface Props {
  slug: string | undefined;
}

const SingleImage = (props: Props) => {
  const imageObj = formattedGalleryCollection.find(
    (i) => i.slug === props.slug
  );
  console.log(imageObj);

  // adjust an image height to user screen size with tailwind

  return (
    <>
      <div className="mb-5">
        {imageObj ? (
          <img
            className="h-auto max-w-full"
            src={imageObj?.src}
            alt={imageObj?.title}
          />
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default SingleImage;
