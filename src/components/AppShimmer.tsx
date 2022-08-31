import { Fragment } from "react";

export const AppShimmer = () => {
  return (
    <>
      <div className="appShimmer">
        {[1, 2, 3].map((i: number) => (
          <Fragment key={i}>
            <div className="appShimmer-item">
              <div className="appShimmer-content d-flex align-items-center justify-content-center">
                <div className="appShimmer-box">
                  <div className="d-flex">
                    <div className="appShimmer-circle"></div>
                    <div className="appShimmer-rect">
                      <div className="appShimmer-line"></div>
                      <div className="appShimmer-line"></div>
                    </div>
                  </div>
                  <div className="appShimmer-footer">
                    <div className="appShimmer-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
