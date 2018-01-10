import React from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

const GoogleAnalyticsTracking = WrappedComponent => {
  const trackPage = page => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };

  const HOC = props => {
    const page = props.location.pathname;
    //Disable on dev
    if (process.env.NODE_ENV === "production") {
      trackPage(page);
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default GoogleAnalyticsTracking;
