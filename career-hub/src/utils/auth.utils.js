import { 
  passwordSchema, 
  emailSchema, 
  usernameSchema,
  loginSchema,
  registerSchema 
} from './validation.schemas.js';

/**
 * Validate password using Zod schema
 * @param {string} password - Password to validate
 * @returns {boolean} - Returns true if valid, false otherwise
 * @deprecated Use validatePasswordWithError for detailed error messages
 */
export const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return re.test(String(password));
};

/**
 * Validate password with detailed error message
 * @param {string} password - Password to validate
 * @returns {{ isValid: boolean, error?: string }} - Validation result with error message
 */
export const validatePasswordWithError = (password) => {
  const result = passwordSchema.safeParse(password);
  return {
    isValid: result.success,
    error: result.success ? undefined : result.error.errors[0].message
  };
};

/**
 * Validate email with detailed error message
 * @param {string} email - Email to validate
 * @returns {{ isValid: boolean, error?: string }} - Validation result with error message
 */
export const validateEmail = (email) => {
  const result = emailSchema.safeParse(email);
  return {
    isValid: result.success,
    error: result.success ? undefined : result.error.errors[0].message
  };
};

/**
 * Validate username with detailed error message
 * @param {string} username - Username to validate
 * @returns {{ isValid: boolean, error?: string }} - Validation result with error message
 */
export const validateUsername = (username) => {
  const result = usernameSchema.safeParse(username);
  return {
    isValid: result.success,
    error: result.success ? undefined : result.error.errors[0].message
  };
};

/**
 * Validate login form data
 * @param {{ username: string, password: string }} formData - Login form data
 * @returns {{ isValid: boolean, errors?: Object }} - Validation result with field errors
 */
export const validateLoginForm = (formData) => {
  const result = loginSchema.safeParse(formData);
  
  if (result.success) {
    return { isValid: true, data: result.data };
  }
  
  const errors = {};
  if (result.error && result.error.issues) {
    result.error.issues.forEach(issue => {
      errors[issue.path[0]] = issue.message;
    });
  }
  
  return { isValid: false, errors };
};

/**
 * Validate registration form data
 * @param {{ name: string, email: string, password: string, confirmPassword: string }} formData - Registration form data
 * @returns {{ isValid: boolean, errors?: Object }} - Validation result with field errors
 */
export const validateRegisterForm = (formData) => {
  const result = registerSchema.safeParse(formData);
  
  if (result.success) {
    return { isValid: true, data: result.data };
  }
  
  const errors = {};
  if (result.error && result.error.issues) {
    result.error.issues.forEach(issue => {
      errors[issue.path[0]] = issue.message;
    });
  }
  
  return { isValid: false, errors };
};