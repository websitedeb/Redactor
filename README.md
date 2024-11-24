
# Redactor

Redactor is a lightweight library for conditional rendering, context management, and navigation in React applications.

## Features
- Simple badge-based access control using React Context.
- Conditional rendering with the `Protect` component.
- Easy navigation with the `useProtection` hook.

## Installation

Install the module via npm:

```
npm install react-redactor
```

## Usage

### 1. Badge Context (`useBadge` and `BadgeProvider`)

Wrap your app or part of it with the `BadgeProvider` to set a badge value.

```jsx
import React from "react";
import { useBadge, BadgeProvider } from "your-react-badge-module";

function App() {
    return (
        <BadgeProvider value={true}>
            <ChildComponent />
        </BadgeProvider>
    );
}

function ChildComponent() {
    const badge = useBadge();

    return <h1>Badge Value: {badge ? "Authorized" : "Unauthorized"}</h1>;
}
```

### 2. Conditional Rendering with `Protect`

Use the `Protect` component to conditionally render components based on the badge value.

```jsx
import React from "react";
import { Protect } from "your-react-badge-module";

const ProceedComponent = () => <h1>Welcome!</h1>;
const ReturnComponent = () => <h1>Access Denied!</h1>;

function App() {
    const badgeValue = true; // Example badge value

    return (
        <Protect
            Proceed={ProceedComponent}
            Return={ReturnComponent}
            badgeValue={badgeValue}
        />
    );
}
```

### 3. Navigation with `useProtection`

Redirect users based on a validation function.

```jsx
import React from "react";
import { useProtection } from "your-react-badge-module";

function App() {
    const validationFunc = () => true; // Replace with your logic

    useProtection(validationFunc, "/dashboard", "/login");

    return <h1>Redirecting...</h1>;
}
```

## API Reference

### `useBadge`
- **Description**: Access the current badge value from the context.
- **Returns**: The current badge value.

### `BadgeProvider`
- **Props**:
  - `value` (any): The value to set in the badge context.
  - `children` (ReactNode): The components to render within the provider.

### `Protect`
- **Props**:
  - `Proceed` (React.ComponentType): The component to render if `badgeValue` is `true`.
  - `Return` (React.ComponentType): The component to render if `badgeValue` is `false`.
  - `badgeValue` (boolean): Determines which component to render.

### `useProtection`
- **Parameters**:
  - `validationFunc` (Function): A function that returns `true` or `false`.
  - `goto_url` (string): The URL to navigate to if validation passes.
  - `returnto_url` (string): The URL to navigate to if validation fails.
- **Effect**: Redirects the user based on `validationFunc`.

## License

This library is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Feel free to open issues or pull requests on the [GitHub repository](https://github.com/websitedeb/Redactor).
