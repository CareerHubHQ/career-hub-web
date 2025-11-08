import { useState } from "react";
import PropTypes from "prop-types";
import Form from "../../atoms/Form/form.atom";
import FormField from "../../molecules/FormField/form-field";
import Button from "../../atoms/Button/button.atom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <FormField
                label="Email"
                htmlFor="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
