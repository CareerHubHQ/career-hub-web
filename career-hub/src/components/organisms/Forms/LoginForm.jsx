import { useState } from "react";
import PropTypes from "prop-types";
import Form from "../../atoms/Form/form.atom";
import FormField from "../../molecules/FormField/form-field";
import Button from "../../atoms/Button/button.atom";
import { validateLoginForm } from "../../../utils/auth.utils";

const LoginForm = ({ onSubmit }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form data
        const validation = validateLoginForm({ username, password });
        
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }
        
        // Clear errors and submit
        setErrors({});
        await onSubmit(validation.data);
    };

    return (
        // noValidate disables HTML5 validation to use Zod validation instead
        <Form className="login-form" onSubmit={handleSubmit} noValidate>
            <FormField
                label="Username"
                htmlFor="username"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
                error={errors.username}
                required
            />

            <FormField
                label="Password"
                htmlFor="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                error={errors.password}
                required
            />

            <Button type="submit" variant="primary">
                Log In
            </Button>
        </Form>
    );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
