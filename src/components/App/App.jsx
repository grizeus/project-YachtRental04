import { lazy, Suspense } from "react";

const Carousel = lazy(() => import("../Carousel/Carousel"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Carousel />
    </Suspense>
  );
};

export default App;
