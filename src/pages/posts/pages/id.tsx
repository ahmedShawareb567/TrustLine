import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppPost } from "../../../components/AppPost";
import { AppShimmer } from "../../../components/AppShimmer";
import { useSelector, useDispatch } from "react-redux";
import { updatePostById } from "../../../store/reducers/posts";
import { deletePost } from "../../../store/reducers/posts";

export const PostParameter = () => {
  let { id }: any = useParams();
  const [toggle, setToggle] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const post = useSelector((state: any) => {
    // eslint-disable-next-line eqeqeq
    return state.post?.posts.find((post: any) => post.id == id);
  });

  const toggleAction = () => {
    setToggle((toggle: boolean) => !toggle);
  };

  const deletePostAction = () => {
    dispatch(deletePost(post.id));
    history.push("/posts");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(
      updatePostById({
        id: post.id,
        title: data.title,
        body: data.body,
      })
    );
  };

  return (
    <>
      <div className="post pt-xxl mt-5">
        <div className="container mt-md-5">
          {post && (
            <>
              <div className="row justify-content-center pb-lg">
                <div className="col-lg-6 col-md-8">
                  <div className="d-flex align-items-center justify-content-center flex-wrap mb-lg">
                    <button
                      className="btn btn-primary m-2"
                      onClick={toggleAction}
                    >
                      تعديل
                    </button>
                    <button
                      className="btn btn-danger m-2"
                      onClick={deletePostAction}
                    >
                      حذف
                    </button>
                  </div>
                  {toggle && (
                    <>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-12 mb-md">
                            <input
                              defaultValue={post?.title}
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
                              defaultValue={post?.body}
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
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-danger mx-auto my-3"
                          onClick={toggleAction}
                        >
                          الغاء
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <AppPost post={post} />
                </div>
              </div>
            </>
          )}
          {!post && <AppShimmer />}
        </div>
      </div>
    </>
  );
};
