import React, { useContext, useMemo } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { MantineThemeOverride } from "@mantine/core";

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

const defaultBreakpoints = {
  xs: "36em", // 576px
  sm: "48em", // 768px
  md: "62em", // 992px
  lg: "75em", // 1200px
  xl: "88em", // 1408px
};

const defaultTheme: MantineThemeOverride = {
  breakpoints: defaultBreakpoints,
};

const MantineThemeContext = React.createContext(defaultTheme);

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
function useResponsive<T>(
  defaultValue: T,
  values: ResponsiveValues<T>,
  theme?: { breakpoints: Breakpoints }
): T {
  const theme_ = theme || useContext(MantineThemeContext);
  const breakpoints = theme_?.breakpoints || defaultBreakpoints;

  const xl = useMediaQuery(`(min-width: ${breakpoints.xl})`);
  const lg = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const md = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const sm = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const xs = useMediaQuery(`(min-width: ${breakpoints.xs})`);

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
