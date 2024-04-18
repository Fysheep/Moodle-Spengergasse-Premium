if (!location.href.match(/.*:\/\/.*moodle\..*/gm)) {
  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add(["MPdisabled"]);
    console.log("running");
  });
}
