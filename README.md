# Mantine Responsive Values

A simple utility hook for applying responsive values to component props based on breakpoints defined in the Mantine theme.

## Installation

```bash
npx jsr add @knowsuchagency/mantine-responsive-values
```

## Usage

```tsx
import { MantineProvider, Box, Text, Title, Button } from "@mantine/core";
import { useResponsive as responsive } from "@knowsuchagency/mantine-responsive-values";

function HeroSection() {
  return (
    <Box
      mt={responsive(20, { sm: 30, md: 50, lg: 60, xl: 80 })}
      mb={responsive(30, { sm: 40, md: 70, lg: 80, xl: 100 })}
      px={responsive(10, { sm: 15, md: 30, lg: 40, xl: 50 })}
      style={{
        textAlign: responsive("center", { md: "left" }),
      }}
    >
      <Title
        order={1}
        fz={responsive(24, { sm: 32, md: 40, lg: 56, xl: 64 })}
        mb={responsive(10, { sm: 15, md: 25, lg: 30, xl: 35 })}
      >
        Welcome to Our App
      </Title>
      <Text
        fz={responsive(16, { sm: 18, md: 20, lg: 28, xl: 32 })}
        mb={responsive(15, { sm: 20, md: 35, lg: 40, xl: 45 })}
      >
        Discover a new way to manage your tasks and boost your productivity.
      </Text>
      <Button
        size={responsive("sm", { md: "md", lg: "lg" })}
        style={{
          padding: responsive("8px 16px", {
            md: "12px 24px",
            lg: "16px 32px",
          }),
        }}
      >
        Get Started
      </Button>
    </Box>
  );
}
```

### Parameters

- `defaultValue`: The default value to use if no breakpoints match.
- `values`: An object containing the values for different breakpoints. The keys should match the breakpoint names defined in the Mantine theme.


## License

This project is licensed under the MIT License.
