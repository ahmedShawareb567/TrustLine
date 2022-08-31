import { useDispatch, useSelector } from "react-redux";
import { AppPost } from "../../../components/AppPost";
import { AppShimmer } from "../../../components/AppShimmer";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createPost } from "../../../store/reducers/posts";

export const MainPostsPage = () => {
  const [toggle, setToggle] = useState(false);
  const posts = useSelector((state: any) => state.post.posts);

  const dispatch = useDispatch();

  const toggleAction = () => {
    setToggle((toggle: boolean) => !toggle);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(
      createPost({
        id: posts.length + 1,
        title: data.title,
        body: data.body,
        user: 1,
      })
    );
    reset({
      title: "",
      body: "",
    });
  };

  return (
    <>
      <div className="posts pt-xxl mt-5">
        <div className="container mt-md-5">
          {posts.length === 0 && <AppShimmer />}
          {posts && posts.length && (
            <>
              <div className="d-flex justify-content-center mb-lg">
                <button className="btn btn-primary" onClick={toggleAction}>
                  <span>
                    <IoAdd /> انشاء جديد
                  </span>
                </button>
              </div>
              {toggle && (
                <>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-12 mb-md">
                            <input
                              className={`form-control text-dark ${
                                errors.title && "is-invalid"
                              }`}
                              placeholder="العنوان"
                              {...register("title", { required: true })}
                            />
                            <p className="pt-2 mb-0 text-danger">
                              {errors.title && <span>هذه الحقل مطلوب</span>}
                            </p>
                          </div>

                          <div className="col-12 mb-md">
                            <textarea
                              className={`form-control text-dark ${
                                errors.body && "is-invalid"
                              }`}
                              placeholder="الوصف"
                              {...register("body", { required: true })}
                            ></textarea>
                            <p className="pt-2 mb-0 text-danger">
                              {errors.body && <span>هذه الحقل مطلوب</span>}
                            </p>
                          </div>

                          <div className="col-12">
                            <input type="submit" className="btn btn-primary" />
                          </div>
                        </div>
                      </form>
                      <div className="d-flex justify-content-center mb-lg">
                        <button
                          className="btn btn-danger mx-auto my-3"
                          onClick={toggleAction}
                        >
                          الغاء
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <h3 className="mb-4">الكل ({posts.length})</h3>
              <div className="row">
                {posts.map((item: any) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mb-lg"
                    key={item.id}
                  >
                    <AppPost post={item} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
