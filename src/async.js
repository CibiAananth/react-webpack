import React, { useEffect } from "react";

export function asyncLoader(load) {
  return function AsyncComponent(props) {
    const [Component, setComponent] = React.useState(null);

    useEffect(() => {
      if (!Component) {
        load().then((module) => {
          setComponent(() => module.default);
        });
      }
    }, [load]);

    if (!Component) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
}
