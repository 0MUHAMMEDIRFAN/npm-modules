# Zero UI

A modern React UI component library with essential components for building beautiful user interfaces.

## Installation

```bash
npm install zero-ui-kit
```

## Usage

```jsx
import { Button, Input } from 'zero-ui-kit';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me!
      </Button>
      
      <Input 
        type="text" 
        label="Username" 
        placeholder="Enter your username" 
      />
    </div>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

- `variant`: `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline'` (default: `'primary'`)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `onClick`: `function`
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)

#### Examples

```jsx
// Primary button
<Button variant="primary">Primary</Button>

// Secondary button
<Button variant="secondary" size="large">Secondary</Button>

// Outline button
<Button variant="outline" size="small">Outline</Button>

// Disabled button
<Button disabled>Disabled</Button>
```

### Input

A flexible input component supporting various input types with labels, validation, and helper text.

#### Props

- `type`: `'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'radio' | 'checkbox' | 'file' | 'range'` (default: `'text'`)
- `label`: `string` - Input label
- `placeholder`: `string` - Placeholder text
- `value`: `string | number` - Input value
- `onChange`: `function` - Change handler
- `error`: `string` - Error message
- `disabled`: `boolean` (default: `false`)
- `required`: `boolean` (default: `false`)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `variant`: `'default' | 'filled' | 'outlined'` (default: `'default'`)
- `helperText`: `string` - Helper text
- `prefix`: `ReactNode` - Prefix content
- `suffix`: `ReactNode` - Suffix content

#### Examples

```jsx
// Text input with label
<Input 
  type="text" 
  label="Full Name" 
  placeholder="Enter your full name" 
/>

// Email input with validation
<Input 
  type="email" 
  label="Email" 
  placeholder="Enter your email"
  error="Please enter a valid email"
/>

// Password input
<Input 
  type="password" 
  label="Password" 
  placeholder="Enter your password"
  required
/>

// Number input
<Input 
  type="number" 
  label="Age" 
  placeholder="Enter your age"
  min="18"
  max="100"
/>

// Input with prefix and suffix
<Input 
  type="text" 
  label="Website" 
  placeholder="example"
  prefix="https://"
  suffix=".com"
/>

// Radio input
<Input 
  type="radio" 
  label="Option 1"
  name="radioGroup"
  value="option1"
/>

// Checkbox input
<Input 
  type="checkbox" 
  label="I agree to the terms"
/>

// File input
<Input 
  type="file" 
  label="Upload file"
  accept=".jpg,.png,.pdf"
/>

// Range input
<Input 
  type="range" 
  label="Volume"
  min="0"
  max="100"
  step="1"
/>
```

### Navbar

A responsive navigation component (existing component).

## Styling

The components come with default styles, but you can customize them by overriding the CSS classes or by using the `className` prop.

### CSS Classes

#### Button
- `.zero-button` - Base button class
- `.zero-button--{variant}` - Variant classes
- `.zero-button--{size}` - Size classes
- `.zero-button--disabled` - Disabled state

#### Input
- `.zero-input` - Base input class
- `.zero-input--{variant}` - Variant classes
- `.zero-input--{size}` - Size classes
- `.zero-input--error` - Error state
- `.zero-input--disabled` - Disabled state

## License

MIT

## Author

muhammedirfan
