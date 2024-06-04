# Mantine Responsive Values

A simple utility hook for applying responsive values to component props based on breakpoints defined in the Mantine theme.

## Installation

```bash
npx jsr add @knowsuchagency/mantine-responsive-values
```

## Usage

```tsx
import { Box, Text } from "@mantine/core";
import { useResponsive as responsive } from "@knowsuchagency/mantine-responsive-values";

function Component() {
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
```

### Parameters

- `defaultValue`: The default value to use if no breakpoints match.
- `values`: An object containing the values for different breakpoints. The keys should match the breakpoint names defined in the Mantine theme.


## License

This project is licensed under the MIT License.
