import { useMediaQuery } from "@mantine/hooks";

interface ResponsiveValues<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const defaultBreakpoints: Breakpoints = {
  xs: "36em", // 576px
  sm: "48em", // 768px
  md: "62em", // 992px
  lg: "75em", // 1200px
  xl: "88em", // 1408px
};

/**
 * This function is used to return responsive values based on the current screen size.
 * It uses the useMediaQuery hook to determine the current screen size.
 * It then checks the screen size and returns the corresponding value from the values object if it exists, otherwise it returns the default value.
 * The function can take an optional theme object with custom breakpoints. If no theme object is provided, it uses the default breakpoints.
 *
 * @param {T} defaultValue - The default value to return if no matching responsive value is found.
 * @param {ResponsiveValues<T>} values - An object containing values for different screen sizes.
 * @param {Object} theme - An optional theme object with custom breakpoints.
 * @returns {T} - The responsive value based on the current screen size or the default value if no matching responsive value is found.
 */
function responsive<T>(
  defaultValue: T,
  values: ResponsiveValues<T>,
  theme?: { breakpoints: Breakpoints }
): T {
  const breakpoints = theme?.breakpoints || defaultBreakpoints;

  let result = defaultValue;

  if (values.xl && useMediaQuery(`(min-width: ${breakpoints.xl})`)) {
    result = values.xl;
  } else if (values.lg && useMediaQuery(`(min-width: ${breakpoints.lg})`)) {
    result = values.lg;
  } else if (values.md && useMediaQuery(`(min-width: ${breakpoints.md})`)) {
    result = values.md;
  } else if (values.sm && useMediaQuery(`(min-width: ${breakpoints.sm})`)) {
    result = values.sm;
  } else if (values.xs && useMediaQuery(`(min-width: ${breakpoints.xs})`)) {
    result = values.xs;
  }

  return result;
}

export default responsive;
