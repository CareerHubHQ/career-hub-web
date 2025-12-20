import { useState } from "react";
import PropTypes from "prop-types";
import Form from "../../atoms/Form/form.atom";
import FormField from "../../molecules/FormField/form-field";
import Button from "../../atoms/Button/button.atom";

import { validatePassword, validateEmail  } from "../../../utils/auth.utils";

const RegisterForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isValidPassword = !password || validatePassword(password);
    const isValidEmail = !email || validateEmail(email);
    const passwordsMatch = !confirmPassword || password === confirmPassword;
    const disabledButton = !email || !isValidEmail || !isValidPassword || !passwordsMatch;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <Form className="register-form" onSubmit={handleSubmit}>
            <FormField
                label="Email"
                htmlFor="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                errorText={!isValidEmail && email ? "Invalid email address" : null}
                required
            />

            <FormField
                label="Password"
                htmlFor="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                errorText={!isValidPassword && password ? "Must be 6+ characters with letters and numbers" : null}
                required
            />

            <FormField
                label="Confirm Password"
                htmlFor="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                errorText={!passwordsMatch && confirmPassword ? "Passwords do not match" : null}
                required
            />

            <Button type="submit" variant="primary" disabled={disabledButton}>
                Register
            </Button>
        </Form>
    );
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
