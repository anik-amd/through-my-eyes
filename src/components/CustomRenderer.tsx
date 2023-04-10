// custom photo renderer function for  react-photo-album gallery

import { RenderPhoto } from "react-photo-album";

const CustomRenderer: RenderPhoto = ({
  layout,
  layoutOptions,
  imageProps: { alt, style, ...restImageProps },
}) => (
  <div
    style={{
      // border: "2px solid #eee",
      // borderRadius: "4px",
      boxSizing: "content-box",
      alignItems: "center",
      width: style?.width,
      position: "relative",
      // padding: `${layoutOptions.padding - 2}px`,
      // padding: 0,
      // paddingBottom: 0,
    }}
    className="rounded-xl m-4 shadow-md transition-all duration-50 ease-in-out transform hover:scale-105 hover:shadow-lg"
  >
    <img
      alt={alt}
      // className="rounded-xl shadow-sm shadow-gray-700 dark:shadow-gray-700"
      style={{
        ...style,
        width: "100%",
        padding: 0,
        borderRadius: "4px",
        display: "block",
      }}
      {...restImageProps}
    />
    <div
      className="absolute rounded-b bottom-0 bg-gray-900 text-gray-200 opacity-40 w-full text-center font-josefin text-sm p-2"
      // style={{
      //   paddingTop: "8px",
      //   paddingBottom: "8px",
      //   overflow: "visible",
      //   whiteSpace: "nowrap",
      //   textAlign: "center",
      // }}
    >
      {restImageProps.title}
    </div>
  </div>
);

export default CustomRenderer;
