import { Route, Switch, useRouteMatch } from "react-router-dom";
import { MainPostsPage } from "./pages";
import { PostParameter } from "./pages/id";

export const PostsPage = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <div className="pb-xl">
        <Switch>
          <Route exact path={path}>
            <MainPostsPage />
          </Route>
          <Route path={`${path}/:id`}>
            <PostParameter />
          </Route>
        </Switch>
      </div>
    </>
  );
};
