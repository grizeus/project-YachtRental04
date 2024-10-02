import React, { lazy, Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
window.React = React;

const Carousel = lazy(() => import("./components/Carousel/Carousel"));
const ReviewsCarousel = lazy(() =>
  import("./components/ReviewsCarousel/ReviewsCarousel")
);

import "modern-normalize";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Carousel />
    </Suspense>
  </StrictMode>
);

createRoot(document.getElementById("review-carousel")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ReviewsCarousel />
    </Suspense>
  </StrictMode>
);
