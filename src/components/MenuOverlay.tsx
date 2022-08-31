import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../store/reducers/utils";

export const MenuOverlay = () => {
  const isActive = useSelector((state: any) => state.utils.isActive);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`menuOverlay d-block d-md-none ${
          isActive ? "isActive" : ""
        }`}
      >
        <div
          className="menuOverlay-bg"
          onClick={() => dispatch(toggleMenu())}
        ></div>
        <div className="menuOverlay-content">
          <div
            className="menuOverlay-close"
            onClick={() => dispatch(toggleMenu())}
          >
            <span>
              <IoClose />
            </span>
          </div>
          <ul>
            <li>
              <a href="#">ترست لاين</a>
            </li>
            <li>
              <a href="#"> لماذا ترست لاين؟ </a>
            </li>
            <li>
              <a href="#"> آلية العمل</a>
            </li>
            <li>
              <a href="#">تواصل معنا</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
