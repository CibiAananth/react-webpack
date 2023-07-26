import React from "react";
import { asyncLoader } from "./async";

const OtherComponent = asyncLoader(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => import(/* webpackChunkName: "page.component" */ "./Component"));
});

function MyComponent() {
  return (
    <div>
      Main component
      <OtherComponent />
    </div>
  );
}

export default MyComponent;
