import { useState } from "react";
import PropTypes from "prop-types";
import Form from "../../atoms/Form/form.atom";
import FormField from "../../molecules/FormField/form-field";
import Button from "../../atoms/Button/button.atom";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log({ name, email, password });
    };

    return (
        <Form className="register-form" onSubmit={handleSubmit}>
            <FormField
                label="Full Name"
                htmlFor="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
            />

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
                placeholder="Create a password"
                required
            />

            <FormField
                label="Confirm Password"
                htmlFor="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
            />

            <Button type="submit" variant="primary">
                Register
            </Button>
        </Form>
    );
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
