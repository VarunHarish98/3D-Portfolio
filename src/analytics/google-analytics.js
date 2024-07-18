import ReactGA from "react-ga4";

export const handleAnalyticsEvent = (category, action, label = "") => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
  console.log({
    category: category,
    action: action,
    label: label,
  });
};

export const handleAnalyticsPageView = (hitType, page, title) => {
  ReactGA.send({
    hitType: hitType,
    page: page,
    title: title,
  });
  console.log({
    hitType: hitType,
    page: page,
    title: title,
  });
};
