# Mantine Responsive Values

A simple utility for applying responsive values to component props based on breakpoints defined in the Mantine theme.

## Installation

Install the package using npm:

```bash
npm install ...
```

### Usage

```tsx
import React from 'react';
import { Box, Text } from '@mantine/core';
import responsive from '...';

const ResponsiveComponent: React.FC = () => {
  return (
    <Box
      mt={responsive(15, { xs: 5, sm: 10, md: 20, lg: 30, xl: 40 })}
      style={{ padding: responsive('10px', { xs: '3px', sm: '5px', md: '15px', lg: '20px', xl: '25px' }) }}
    >
      <Text fz={responsive('lg', { xs: 'xs', sm: 'sm', md: 'md', lg: 'xl', xl: 'xxl' })}>
        Responsive content goes here.
      </Text>
    </Box>
  );
};

export default ResponsiveComponent;
```


### Parameters

- `defaultValue`: The default value to use if no breakpoints match.
- `values`: An object containing the values for different breakpoints. The keys should match the breakpoint names defined in the Mantine theme.

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

## Types

The `ResponsiveValues` interface defines the shape of the `values` object:

```tsx
interface ResponsiveValues<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}
```

## License

This project is licensed under the MIT License.
```

This README provides a clear explanation of how to install, use, and understand the `responsive` utility function, including TypeScript types and an example usage.
