const minMobileSize = 375;
const mobileSize = 767;
const tabletSize = 1024;
const bigTabletSize = 1366;
const desktopSize = 1280;
const bigDesktopSize = 1920;

export default {
  mobile: `@media (max-width: ${mobileSize}px)`,
  tablet: `@media (max-width: ${tabletSize}px)`,
  minMobile: `@media (min-width: ${mobileSize}px)`,
  minTablet: `@media (min-width: ${tabletSize + 1}px)`,
  bigTablet: `@media (max-width: ${bigTabletSize}px)`,
  desktop: `@media (max-width: ${desktopSize}px)`,
  minDesktop: `@media (min-width: ${desktopSize}px)`,
};

export const sizes = {
  minMobileSize,
  mobileSize,
  tabletSize,
  bigTabletSize,
  desktopSize,
  bigDesktopSize,
};
