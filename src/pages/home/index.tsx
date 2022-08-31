import { AppImage } from "../../components/AppImage";

import SaveImage from "/images/t-1.png";
import IntroduceImage from "/images/t-2.png";
import ImproveImage from "/images/t-3.png";
import AllImage from "/images/t-4.png";
import C1 from "/images/c-1.png";
import C2 from "/images/c-2.png";

import Shield from "/images/shield.svg";
import Code from "/images/code.svg";
import Trending from "/images/trending-up.svg";
import Keyboard from "/images/keyboard-open.svg";
import People from "/images/people.svg";

import { MainSlider } from "../../components/MainSlider";
import { AppNews } from "../../components/AppNews";
import { TheFooter } from "../../components/TheFooter";
import { Fragment, useCallback, useEffect, useState } from "react";
import { $axios } from "../../axios";
import { AppShimmer } from "../../components/AppShimmer";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  const postsAction = useCallback(async () => {
    try {
      const { data, status } = await $axios.get("/posts");
      if (status === 200) {
        setPosts(data.slice(0, 3));
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const photosAction = useCallback(async () => {
    try {
      const { data, status } = await $axios.get("/albums/1/photos");
      if (status === 200) {
        setPhotos(data.slice(0, 10));
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    photosAction();
    postsAction();
  }, [postsAction, photosAction]);

  return (
    <>
      <div className="homePage">
        <div className="homePage-intro">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col">
                <div className="text-center">
                  <h1 className="fs-3xl">ترست لاين تقدم لأعمالك الحماية </h1>
                  <p className="fs-md mb-lg">
                    ترست لاين شركة سعودية متخصصة في تقديم مجموعة واسعة من خدمات
                    وحلول الأمن السيبراني.
                  </p>
                  <button className="btn btn-lg btn-primary">تواصل معنا</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="whyTrust pb-xxl">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="row mb-lg">
                  <div className="col-md-6">
                    <h2 className="fs-2xl mb-0 title">لماذا ترست لاين؟</h2>
                    <p className="fs-md">
                      نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية
                      تسعى لرفع مستوى الأمن في جميع الكيانات والمؤسسات
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col">
                    <div className="whyTrust-grid">
                      <div className="whyTrust-grid-item">
                        <AppImage
                          src={SaveImage}
                          alt="saveImage"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="whyTrust-grid-item">
                        <AppImage
                          src={AllImage}
                          alt="AllImage"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="whyTrust-grid-item">
                        <AppImage
                          src={ImproveImage}
                          alt="ImproveImage"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="whyTrust-grid-item">
                        <AppImage
                          src={IntroduceImage}
                          alt="introduceImage"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services pb-xxl">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="services-content">
                  <div className="row">
                    <div className="col-md-6 mb-lg">
                      <h3 className="fs-2xl mb-0 title">الخدمات والحلول</h3>
                      <p className="fs-md">
                        نقدم خدمات وحلول احترافية في مجال الأمن السيبراني
                      </p>
                    </div>

                    <div className="col-md-6 mb-lg">
                      <div className="services-item d-md-flex align-items-center justify-content-center">
                        <div className="services-item-icon d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <img src={People} alt="People" />
                            <h4 className="mb-0 fs-md text-primary pt-2">
                              الفريق الأحمر
                            </h4>
                          </div>
                        </div>
                        <div className="services-item-text">
                          <p className="mb-0 fs-md pe-md-3 text-gray-500">
                            مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة
                            نقاط الضعف المتعلقة بالأمان.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-lg">
                      <div className="services-item d-md-flex align-items-center">
                        <div className="services-item-icon d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <img src={Trending} alt="Trending" />
                            <h4 className="mb-0 fs-md text-primary">
                              تقييم الضعف
                            </h4>
                          </div>
                        </div>
                        <div className="services-item-text">
                          <p className="mb-0 fs-md pe-md-3 text-gray-500">
                            مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة
                            نقاط الضعف المتعلقة بالأمان.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-lg">
                      <div className="services-item d-md-flex align-items-center">
                        <div className="services-item-icon d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <img src={Shield} alt="Shield" />
                            <h4 className="mb-0 fs-md text-primary">
                              المصادر الأمنية
                            </h4>
                          </div>
                        </div>
                        <div className="services-item-text">
                          <p className="mb-0 fs-md pe-md-3 text-gray-500">
                            مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة
                            نقاط الضعف المتعلقة بالأمان.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4 mb-md-0">
                      <div className="services-item d-md-flex align-items-center">
                        <div className="services-item-icon d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <img src={Code} alt="Code" />
                            <h4 className="mb-0 fs-md text-primary">
                              مراجعة كود المصدر
                            </h4>
                          </div>
                        </div>
                        <div className="services-item-text">
                          <p className="mb-0 fs-md pe-md-3 text-gray-500">
                            مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة
                            نقاط الضعف المتعلقة بالأمان.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="services-item d-md-flex align-items-center">
                        <div className="services-item-icon d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <img src={Keyboard} alt="Keyboard" />
                            <h4 className="mb-0 fs-md text-primary pt-2">
                              فحص الموقع والجوال
                            </h4>
                          </div>
                        </div>
                        <div className="services-item-text">
                          <p className="mb-0 fs-md pe-md-3 text-gray-500">
                            مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة
                            نقاط الضعف المتعلقة بالأمان.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ourTeam bg-white text-dark pb-xxl">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="d-lg-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <div className="ourTeam-image">
                      <AppImage src={C1} alt="c1" className="ms-3" />
                    </div>
                    <div className="ourTeam-image">
                      <AppImage src={C2} alt="c2" />
                    </div>
                  </div>
                  <div className="ourTeam-content text-gray-600">
                    <h4 className="fs-2xl mb-0 title">فريقـنا</h4>
                    <p className="fs-md">
                      في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة
                      لسنوات قادمة.
                    </p>
                    <p className="fs-md mb-0">
                      يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به
                      جميعًا.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-xxl">
              <div className="col">
                <h4 className="fs-2xl mb-lg title ">عمـلاؤنـا</h4>
                {photos && photos.length && <MainSlider items={photos} />}
                {photos.length === 0 && <AppShimmer />}
              </div>
            </div>
          </div>
        </div>

        <div className="news pt-xl pb-xl">
          <div className="container">
            <h4 className="fs-2xl title mt-lg mb-lg">الأخبار</h4>
            {posts && posts.length && (
              <div className="row">
                {posts.map((item: any) => (
                  <Fragment key={item.id}>
                    <div className="mb-5">
                      <AppNews item={item} />
                    </div>
                  </Fragment>
                ))}
              </div>
            )}
            {posts.length === 0 && <AppShimmer />}
          </div>
        </div>

        <TheFooter />
      </div>
    </>
  );
};
