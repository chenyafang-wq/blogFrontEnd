import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "@/assets/icon/icon";
import { Spin } from "antd";
import KeepAlive from "react-activation";

const App = lazy(() => import("@/App"));
const LoginOrRegister = lazy(
  () => import("@/views/LoginOrRegister/LoginOrRegister")
);
const Home = lazy(() => import("@views/Home/Home"));
const About = lazy(() => import("@views/About/About"));
const Archive = lazy(() => import("@views/Archive/Archive"));
const Detail = lazy(() => import("@views/Detail/Detail"));
const EditPage = lazy(() => import("@views/EditPage/EditPage"));
const Resume = lazy(() => import("@views/Resume/Resume"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <Spin
            fullscreen={true}
            indicator={<Loading />}
            className="d-flex justify-center"
          />
        }
      >
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/home",
        element: (
            <Suspense
              fallback={
                <Spin
                  fullscreen={true}
                  indicator={<Loading />}
                  className="d-flex justify-center"
                />
              }
            >
              <Home />
          </Suspense>
        ),
      },
      // 默认（index）路由展示 About 页面
      {
        index: true,
        element: (
            <Suspense
              fallback={
                <Spin
                  fullscreen={true}
                  indicator={<Loading />}
                  className="d-flex justify-center"
                />
              }
            >
              <About />
            </Suspense>
        ),
      },
      // 显式的 /about 路由，依然可访问
      {
        path: "/about",
        element: (
            <Suspense
              fallback={
                <Spin
                  fullscreen={true}
                  indicator={<Loading />}
                  className="d-flex justify-center"
                />
              }
            >
              <About />
            </Suspense>
        ),
      },
      {
        path: "/archive",
        element: (
            <Suspense
              fallback={
                <Spin
                  fullscreen={true}
                  indicator={<Loading />}
                  className="d-flex justify-center"
                />
              }
            >
              <Archive />
            </Suspense>
        ),
      },
      {
        path: "/my-resume",
        element: (
          <Suspense
            fallback={
              <Spin
                fullscreen={true}
                indicator={<Loading />}
                className="d-flex justify-center"
              />
            }
          >
            <Resume />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/detail/:id",
    element: (
      <Suspense
        fallback={
          <Spin
            fullscreen={true}
            indicator={<Loading />}
            className="d-flex justify-center"
          />
        }
      >
        <Detail />
      </Suspense>
    ),
  },
  {
    path: "/edit",
    element: (
      <Suspense
        fallback={
          <Spin
            fullscreen={true}
            indicator={<Loading />}
            className="d-flex justify-center"
          />
        }
      >
        <EditPage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense
        fallback={
          <Spin
            fullscreen={true}
            indicator={<Loading />}
            className="d-flex justify-center"
          />
        }
      >
        <LoginOrRegister />
      </Suspense>
    ),
  },
]);
export default router;
