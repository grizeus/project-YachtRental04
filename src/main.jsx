import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
window.React = React;

const YachtsCarousel = lazy(() =>
  import("./components/YachtsCarousel/YachtsCarousel")
);
const ReviewsCarousel = lazy(() =>
  import("./components/ReviewsCarousel/ReviewsCarousel")
);

import "modern-normalize";

createRoot(document.getElementById("yachts-carousel")).render(
    <Suspense fallback={<div>Loading...</div>}>
      <YachtsCarousel />
    </Suspense>
);

createRoot(document.getElementById("review-carousel")).render(
    <Suspense fallback={<div>Loading...</div>}>
      <ReviewsCarousel />
    </Suspense>
);
