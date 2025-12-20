import { useState } from "react";
import PropTypes from "prop-types";
import Form from "../../atoms/Form/form.atom";
import FormField from "../../molecules/FormField/form-field";
import Button from "../../atoms/Button/button.atom";

const LoginForm = ({ onSubmit }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({ username, password })
    };

    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <FormField
                label="Username"
                htmlFor="username"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
                required
            />

            <FormField
                label="Password"
                htmlFor="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
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
