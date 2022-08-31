import Logo from "/images/footer-logo.svg";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const TheFooter = () => {
  return (
    <>
      <div className="theFooter pb-xl">
        <div className="container pt-xl">
          <div className="row">
            <div className="col-md-6">
              <img src={Logo} className="img-max" alt="logo" />
              <p className="text-gray-500 pt-lg mb-1">
                واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564
              </p>
              <p className="text-gray-500">
                جميع الحقوق محفوظة 2022{" "}
                <a href="#" className="text-primary">
                  {" "}
                  - Trustline{" "}
                </a>
              </p>
            </div>
            <div className="col-md-3 col-sm-8">
              <ul>
                <li>
                  <a href="#">للشركات</a>
                </li>
                <li>
                  <a href="#">للباحثين</a>
                </li>
                <li>
                  <a href="#">بيانات التواصل</a>
                </li>
                <li>
                  <a href="#">تواصل معنا</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="theFooter-social">
                <ul>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
