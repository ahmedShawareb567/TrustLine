import { AppImage } from "./AppImage";
import ImproveImage from "/images/t-3.png";

import { FaArrowLeft } from "react-icons/fa";

export const AppNews = ({ item }: any) => {
  return (
    <>
      <div className="appNews">
        <div className="appNews-header">
          <AppImage src={ImproveImage} alt="ImproveImage" />
        </div>
        <div className="appNews-body">
          <h3 className="fs-lg ">{item.title}</h3>
          <p className="fs-mdtext-gray-400">{item.body}</p>
          <a href="#" className="text-primary fs-md fw-medium">
            اقرأ المقال
            <span>
              <FaArrowLeft />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

AppNews.defaultProps = {
  title: "title",
};
