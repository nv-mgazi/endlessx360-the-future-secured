// "#home" sits inside the GSAP-pinned hero section. A native anchor jump
// measures the pinned element while it is position:fixed, so it either does
// not scroll at all or lands at the end of the pin spacer (a blank hero).
// Home / Back-to-top must always scroll to the true document top instead.
export const scrollToHome = (event: { preventDefault(): void }) => {
  event.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
};
