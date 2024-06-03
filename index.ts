import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface ResponsiveValues<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

/**
 * This function is used to return responsive values based on the current screen size.
 * It uses the useMantineTheme hook to get the theme breakpoints and the useMediaQuery hook to determine the current screen size.
 * It then checks the screen size and returns the corresponding value from the values object if it exists, otherwise it returns the default value.
 *
 * @param {T} defaultValue - The default value to return if no matching responsive value is found.
 * @param {ResponsiveValues<T>} values - An object containing values for different screen sizes.
 * @returns {T} - The responsive value based on the current screen size or the default value if no matching responsive value is found.
 */
function responsive<T>(defaultValue: T, values: ResponsiveValues<T>): T {
  const theme = useMantineTheme();
  const breakpoints = theme.breakpoints;

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
