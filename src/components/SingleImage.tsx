import { formattedGalleryCollection } from "../utils/formattedGallery";

interface Props {
  slug: string | undefined;
}

const SingleImage = (props: Props) => {
  const imageObj = formattedGalleryCollection.find(
    (i) => i.slug === props.slug
  );

  return (
    <>
      <div className="mb-5">
        <div className="flex flex-col w-full justify-center items-center">
          <img
            className="mx-auto w-5/6 md:w-4/6 lg:w-3/6 mb-5 rounded-xl shadow-sm shadow-gray-700 dark:shadow-gray-700"
            src={imageObj?.src}
            alt={imageObj?.title}
          />
          <div className="mb-5 mt-5 w-5/6 md:w-4/6 lg:w-3/6">
            <h1 className="font-josefin text-2xl font-semibold text-gray-800 dark:text-gray-400">
              {imageObj?.title}
            </h1>
            <p className="prose dark:prose-invert">{imageObj?.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleImage;
