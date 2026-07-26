document.addEventListener("DOMContentLoaded", function () {
  if (typeof mediumZoom !== "function") {
    return;
  }

  var projectCoverZoomScale = 0.8;
  var projectCoverInsetRatio = (1 - projectCoverZoomScale) / 2;

  function getProjectCoverZoomContainer() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    return {
      width: width,
      height: height,
      left: width * projectCoverInsetRatio,
      right: width * projectCoverInsetRatio,
      top: height * projectCoverInsetRatio,
      bottom: height * projectCoverInsetRatio,
    };
  }

  var projectCoverZoom = mediumZoom("[data-project-cover-zoom]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    container: getProjectCoverZoomContainer(),
  });

  window.addEventListener("resize", function () {
    projectCoverZoom.update({
      container: getProjectCoverZoomContainer(),
    });
  });
});
