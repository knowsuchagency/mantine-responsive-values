# Mantine Responsive Values

A simple utility for applying responsive values to component props based on breakpoints defined in the Mantine theme.

## Installation

```bash
npx jsr add @knowsuchagency/mantine-responsive-values
```

## Usage

```tsx
import React from "react";
import { Box, Text } from "@mantine/core";
import responsive from "@knowsuchagency/mantine-responsive-values";

const ResponsiveComponent: React.FC = () => {
  return (
    <Box
      mt={responsive(15, { xs: 5, sm: 10, md: 20, lg: 30, xl: 40 })}
      style={{
        padding: responsive("10px", {
          xs: "3px",
          sm: "5px",
          md: "15px",
          lg: "20px",
          xl: "25px",
        }),
      }}
    >
      <Text
        fz={responsive("lg", {
          xs: "xs",
          sm: "sm",
          md: "md",
          lg: "xl",
          xl: "xxl",
        })}
      >
        Responsive content goes here.
      </Text>
    </Box>
  );
};

export default ResponsiveComponent;
```

### Usage with Custom Breakpoints

You can also provide a `theme` object with custom breakpoints to the `responsive` function. Here's an example:

```tsx
import React from "react";
import { Box, Text, useMantineTheme } from "@mantine/core";
import responsive from "@knowsuchagency/mantine-responsive-values";

const ResponsiveComponentWithCustomBreakpoints: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <Box
      mt={responsive(15, { xs: 5, sm: 10, md: 20, lg: 30, xl: 40 }, theme)}
      style={{
        padding: responsive(
          "10px",
          { xs: "3px", sm: "5px", md: "15px", lg: "20px", xl: "25px" },
          theme
        ),
      }}
    >
      <Text
        fz={responsive(
          "lg",
          { xs: "xs", sm: "sm", md: "md", lg: "xl", xl: "xxl" },
          theme
        )}
      >
        Responsive content goes here.
      </Text>
    </Box>
  );
};

export default ResponsiveComponentWithCustomBreakpoints;
```

### Parameters

- `defaultValue`: The default value to use if no breakpoints match.
- `values`: An object containing the values for different breakpoints. The keys should match the breakpoint names defined in the Mantine theme.
- `theme`: An optional object containing custom breakpoints. If not provided, the function will use the following default breakpoints:
  - `xs`: 36em (576px)
  - `sm`: 48em (768px)
  - `md`: 62em (992px)
  - `lg`: 75em (1200px)
  - `xl`: 88em (1408px)

### Example

```tsx
const marginTop = responsive(15, {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
});
```

## License

This project is licensed under the MIT License.
