import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { TheHeader } from "./components/TheHeader";
import { PostsPage } from "./pages/posts";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./store/reducers/posts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="app">
      <Router basename="/TrustLine">
        <div>
          <TheHeader />
          <div className="app-content">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
            <Switch>
              <Route path="/posts">
                <PostsPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
