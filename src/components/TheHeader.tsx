import { useEffect, useRef } from "react";
import Headroom from "headroom.js";

import Logo from "/images/logo.svg";
import { MenuOverlay } from "./MenuOverlay";
import { IoMenu } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/reducers/utils";
import { Link } from "react-router-dom";

export const TheHeader = () => {
  const theHeader: any = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const headroom = new Headroom(theHeader?.current, {
      offset: 50,
      classes: {
        // when element is initialised
        initial: "theHeader--fixed",
        // when scrolling up
        pinned: "theHeader--pinned",
        // when scrolling down
        unpinned: "theHeader--unpinned",
        // when above offset
        top: "theHeader--top",
        // when below offset
        notTop: "theHeader--not-top",
        // when at bottom of scoll area
        bottom: "theHeader--bottom",
        // when not at bottom of scroll area
        notBottom: "theHeader--not-bottom",
        // when frozen method has been called
        frozen: "theHeader--frozen",
      },
    });

    headroom.init();
  }, []);

  return (
    <>
      <div className="theHeader" ref={theHeader}>
        <div className="container px-4 px-md-0 px-lg-3">
          <div className="row align-items-center">
            <div className="col-md-2 col-4">
              <Link to="/">
                <div className="d-flex align-items-center">
                  <img
                    src={Logo}
                    alt="logo"
                    className="img-max theHeader-logo"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-8 d-none d-md-block">
              <ul className="d-md-flex align-items-center justify-content-center ">
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
            <div className="col-md-2 col-8">
              <div className="d-flex align-items-center flex-row-reverse">
                <a href="#" className="mb-0 fw-bold fs-lg">
                  ENG
                </a>
                <Link to="/posts" className="theHeader-login ms-3 ms-xl-5">
                  دخول
                </Link>
                <button
                  className="theHeader-menu d-block d-md-none"
                  onClick={() => dispatch(toggleMenu())}
                >
                  <IoMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MenuOverlay />
    </>
  );
};
