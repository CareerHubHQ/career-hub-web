import { z } from 'zod';

// Password regex pattern - requires at least one letter, one number, 
// and allows special characters for better security
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&_-]{6,}$/;

/**
 * Login form validation schema
 */
export const loginSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must not exceed 20 characters'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .regex(
      PASSWORD_REGEX,
      'Password must contain at least one letter and one number'
    )
});

/**
 * Registration form validation schema
 */
export const registerSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .trim(),
  email: z.string()
    .email('Invalid email address')
    .trim()
    .toLowerCase(),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .regex(
      PASSWORD_REGEX,
      'Password must contain at least one letter and one number'
    ),
  confirmPassword: z.string()
    .min(1, 'Please confirm your password')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

/**
 * Email validation schema
 */
export const emailSchema = z.string()
  .email('Invalid email address')
  .trim()
  .toLowerCase();

/**
 * Password validation schema
 * Requires: min 6 characters, at least one letter, at least one number
 * Allows: letters, numbers, and special characters for better security
 */
export const passwordSchema = z.string()
  .min(6, 'Password must be at least 6 characters')
  .regex(
    PASSWORD_REGEX,
    'Password must contain at least one letter and one number'
  );

/**
 * Username validation schema
 */
export const usernameSchema = z.string()
  .min(3, 'Username must be at least 3 characters')
  .max(20, 'Username must not exceed 20 characters')
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    'Username can only contain letters, numbers, underscores, and hyphens'
  );
