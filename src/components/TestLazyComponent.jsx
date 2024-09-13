import { lazy, Suspense, useState } from "react";
function withDelay(func, delay) {
  return new Promise((res) => {
    setTimeout(() => {
      return res(func());
    }, delay);
  });
}

const Profile = lazy(() => withDelay(() => import("./Profile"), 2000));
const Settings = lazy(() => withDelay(() => import("./Settings"), 2000));

function TestLazyComponent() {
  const [flag, setFlag] = useState(true);

  const toggleFlag = () => {
    setFlag((prev) => !prev);
  };

  const RenderedComponent = flag ? Profile : Settings;

  return (
    <>
      <div>
        <button onClick={toggleFlag}>
          {flag ? <>go to Settings</> : <>go to Profile</>}
        </button>
        <Suspense fallback={<h1>Загрузка</h1>}>
          <RenderedComponent />
        </Suspense>
      </div>
    </>
  );
}
export default TestLazyComponent;
