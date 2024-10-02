import React, { lazy, Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
window.React = React;

const YachtsCarousel = lazy(() => import("./components/YachtsCarousel/YachtsCarousel"));
const ReviewsCarousel = lazy(() =>
  import("./components/ReviewsCarousel/ReviewsCarousel")
);

import "modern-normalize";

createRoot(document.getElementById("yachts-carousel")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <YachtsCarousel />
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
