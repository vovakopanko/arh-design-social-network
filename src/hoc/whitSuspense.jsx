import React, { Suspense } from "react";
import Preloader from "../component/common/Preloader/Preloader";

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<div>Wait, your content Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};
 