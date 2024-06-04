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
