import { formattedGalleryCollection } from "../utils/formattedGallery";

interface Props {
  slug: string | undefined;
}

const SingleImage = (props: Props) => {
  const imageObj = formattedGalleryCollection.find(
    (i) => i.slug === props.slug
  );
  console.log(imageObj);

  return (
    <>
      <div className="mb-5">
        <div className="flex flex-col w-full justify-center items-center">
          <img
            className="mx-auto w-screen md:w-3/4 lg:w-1/2 mb-5"
            src={imageObj?.src}
            alt={imageObj?.title}
          />
          <div className="mb-5 w-screen md:w-3/4 lg:w-1/2">
            <h1 className="font-josefin text-2xl font-semibold text-gray-800">
              {imageObj?.title}
            </h1>
            <p className="text-base text-gray-900">{imageObj?.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleImage;
