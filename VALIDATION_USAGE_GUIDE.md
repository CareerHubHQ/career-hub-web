# Validation System - Usage Guide

This guide explains how to use the new Zod-based validation system implemented in the Career Hub application.

## Overview

The application now uses [Zod](https://github.com/colinhacks/zod) for form validation, replacing custom validation functions. Zod provides:

- **Type-safe validation** with excellent TypeScript support
- **Composable schemas** for reusable validation logic
- **Detailed error messages** for better user experience
- **Zero dependencies** and small bundle size

## Installation

Zod has been installed as a dependency:

```bash
npm install zod
```

## Available Validation Functions

### Location: `/src/utils/auth.utils.js`

#### `validateLoginForm(formData)`
Validates login form data (username and password).

**Parameters:**
- `formData` (Object):
  - `username` (string): Username to validate
  - `password` (string): Password to validate

**Returns:**
```javascript
{
  isValid: boolean,
  errors?: { [field]: string },  // Only present if isValid is false
  data?: { username: string, password: string }  // Only present if isValid is true
}
```

**Example:**
```javascript
import { validateLoginForm } from '../utils/auth.utils';

const handleSubmit = (e) => {
  e.preventDefault();
  const validation = validateLoginForm({ username, password });
  
  if (!validation.isValid) {
    setErrors(validation.errors);
    return;
  }
  
  // Use validated data
  onSubmit(validation.data);
};
```

#### `validateRegisterForm(formData)`
Validates registration form data.

**Parameters:**
- `formData` (Object):
  - `name` (string): User's full name
  - `email` (string): Email address
  - `password` (string): Password
  - `confirmPassword` (string): Password confirmation

**Returns:**
```javascript
{
  isValid: boolean,
  errors?: { [field]: string },
  data?: { name: string, email: string, password: string, confirmPassword: string }
}
```

**Example:**
```javascript
import { validateRegisterForm } from '../utils/auth.utils';

const handleSubmit = (e) => {
  e.preventDefault();
  const validation = validateRegisterForm({ name, email, password, confirmPassword });
  
  if (!validation.isValid) {
    setErrors(validation.errors);
    return;
  }
  
  onSubmit(validation.data);
};
```

#### `validateEmail(email)`
Validates a single email address.

**Parameters:**
- `email` (string): Email address to validate

**Returns:**
```javascript
{
  isValid: boolean,
  error?: string
}
```

**Example:**
```javascript
import { validateEmail } from '../utils/auth.utils';

const handleEmailChange = (email) => {
  const validation = validateEmail(email);
  if (!validation.isValid) {
    setEmailError(validation.error);
  } else {
    setEmailError(null);
  }
};
```

#### `validateUsername(username)`
Validates a username.

**Parameters:**
- `username` (string): Username to validate

**Returns:**
```javascript
{
  isValid: boolean,
  error?: string
}
```

**Rules:**
- 3-20 characters
- Only letters, numbers, underscores, and hyphens

#### `validatePasswordWithError(password)`
Validates a password with detailed error message.

**Parameters:**
- `password` (string): Password to validate

**Returns:**
```javascript
{
  isValid: boolean,
  error?: string
}
```

**Rules:**
- Minimum 6 characters
- Must contain at least one letter
- Must contain at least one number

#### `validatePassword(password)` [DEPRECATED]
Legacy validation function for backward compatibility.

**Parameters:**
- `password` (string): Password to validate

**Returns:**
- `boolean`: true if valid, false otherwise

**Note:** Use `validatePasswordWithError` for new code to get detailed error messages.

## Validation Schemas

### Location: `/src/utils/validation.schemas.js`

Pre-defined Zod schemas for common validation patterns:

- `loginSchema` - Login form validation
- `registerSchema` - Registration form validation
- `emailSchema` - Email validation
- `passwordSchema` - Password validation
- `usernameSchema` - Username validation

**Example of custom usage:**
```javascript
import { emailSchema } from '../utils/validation.schemas';

const result = emailSchema.safeParse('user@example.com');
if (result.success) {
  console.log('Valid email:', result.data);
} else {
  console.log('Errors:', result.error.errors);
}
```

## Validation Rules

### Username
- ✅ Minimum 3 characters
- ✅ Maximum 20 characters
- ✅ Only letters, numbers, underscores, and hyphens allowed

### Email
- ✅ Valid email format
- ✅ Trimmed whitespace
- ✅ Converted to lowercase

### Password
- ✅ Minimum 6 characters
- ✅ Must contain at least one letter (A-Z or a-z)
- ✅ Must contain at least one number (0-9)

### Name
- ✅ Minimum 2 characters
- ✅ Maximum 50 characters
- ✅ Trimmed whitespace

### Password Confirmation
- ✅ Must match password field

## FormField Component

The `FormField` component has been enhanced to display validation errors.

**Props:**
- `label` (string, required): Field label
- `htmlFor` (string, required): Input ID
- `error` (string, optional): Error message to display
- `...props`: All other props are passed to the Input component

**Example:**
```jsx
<FormField
  label="Email"
  htmlFor="email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  required
/>
```

## Complete Form Example

```jsx
import { useState } from "react";
import { validateLoginForm } from "../utils/auth.utils";
import FormField from "./FormField";
import Button from "./Button";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateLoginForm({ username, password });
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setErrors({});
    await onSubmit(validation.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Username"
        htmlFor="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
        required
      />

      <FormField
        label="Password"
        htmlFor="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        required
      />

      <Button type="submit">Log In</Button>
    </form>
  );
};
```

## Real-time Validation (Optional)

For real-time validation as the user types:

```jsx
const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");

const handleEmailChange = (e) => {
  const value = e.target.value;
  setEmail(value);
  
  if (value) {
    const validation = validateEmail(value);
    setEmailError(validation.isValid ? "" : validation.error);
  } else {
    setEmailError("");
  }
};
```

## Error Display Styling

Error messages are styled with the `.form-field-error` class:

```scss
.form-field-error {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
```

## Migration from Custom Validation

### Before:
```javascript
if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}
```

### After:
```javascript
const validation = validateRegisterForm({ name, email, password, confirmPassword });

if (!validation.isValid) {
  setErrors(validation.errors);
  return;
}
```

## Benefits of the New System

1. **Consistent Validation**: All forms use the same validation logic
2. **Better Error Messages**: Users get specific, helpful error messages
3. **Type Safety**: Zod provides runtime type checking
4. **Maintainable**: Easy to add or modify validation rules in one place
5. **Reusable**: Validation schemas can be composed and reused
6. **Testable**: Easy to unit test validation logic

## Future Enhancements

Consider these enhancements as the application grows:

1. **React Hook Form Integration**: For better form state management
   ```bash
   npm install react-hook-form @hookform/resolvers
   ```

2. **Async Validation**: Check username/email availability
   ```javascript
   const asyncSchema = z.string().refine(async (username) => {
     return await checkUsernameAvailability(username);
   }, "Username is already taken");
   ```

3. **Custom Validators**: Add business-specific validation rules
   ```javascript
   const customPasswordSchema = passwordSchema.refine(
     (password) => !commonPasswords.includes(password),
     "Password is too common"
   );
   ```

## Resources

- [Zod Documentation](https://zod.dev)
- [Zod GitHub Repository](https://github.com/colinhacks/zod)
- [React Hook Form + Zod](https://react-hook-form.com/get-started#SchemaValidation)
