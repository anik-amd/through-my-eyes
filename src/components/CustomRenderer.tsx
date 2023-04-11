import { RenderPhoto } from "react-photo-album";

const CustomRenderer: RenderPhoto = ({
  layout,
  layoutOptions,
  imageProps: { alt, style, ...restImageProps },
}) => (
  <div
    style={{
      boxSizing: "content-box",
      alignItems: "center",
      width: style?.width,
      position: "relative",
    }}
    className="rounded-xl m-4 shadow-md transition-all duration-50 ease-in-out transform hover:scale-105 hover:shadow-lg group"
  >
    <img
      alt={alt}
      style={{
        ...style,
        width: "100%",
        padding: 0,
        borderRadius: "4px",
        display: "block",
      }}
      {...restImageProps}
    />
    <div className="absolute rounded-b bottom-0 bg-gray-900 text-gray-200 opacity-0 w-full text-center font-josefin text-sm p-2 group-hover:opacity-40 transition-all duration-150 ease-in-out">
      {restImageProps.title}
    </div>
  </div>
);

export default CustomRenderer;
