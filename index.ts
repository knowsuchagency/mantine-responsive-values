import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo } from "react";

interface ResponsiveValues<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}


/**
 * Custom hook to handle responsive values based on the current screen size.
 * It uses the useMediaQuery hook to determine the current screen size.
 * It then checks the screen size and returns the corresponding value from the values object if it exists, otherwise it returns the default value.
 * The hook uses the useMantineTheme hook internally to access the theme breakpoints.
 *
 * @param {T} defaultValue - The default value to return if no matching responsive value is found.
 * @param {ResponsiveValues<T>} values - An object containing values for different screen sizes.
 * @returns {T} - The responsive value based on the current screen size or the default value if no matching responsive value is found.
 */
function useResponsive<T>(
  defaultValue: T,
  values: ResponsiveValues<T>
): T {
  const theme = useMantineTheme();

  const xl = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);
  const lg = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);
  const md = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const sm = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  const xs = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`);

  return useMemo(() => {
    if (values.xl && xl) {
      return values.xl;
    } else if (values.lg && lg) {
      return values.lg;
    } else if (values.md && md) {
      return values.md;
    } else if (values.sm && sm) {
      return values.sm;
    } else if (values.xs && xs) {
      return values.xs;
    }
    return defaultValue;
  }, [defaultValue, values, xl, lg, md, sm, xs]);
}

export default useResponsive;
