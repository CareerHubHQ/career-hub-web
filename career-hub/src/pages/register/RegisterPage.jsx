import { Link } from "react-router";
import AuthTemplate from "../../components/templates/AuthTemplate/auth-template";
import RegisterForm from "../../components/organisms/Forms/RegisterForm";

import AuthService from "../../services/auth.services";

const RegisterPage = () => {
    const handleRegister = async (data) => {
        console.log("Register data:", data);
        // Add your registration logic here
        const { username, password, email } = data;
        try {
            const newUser = await AuthService.signUp(email, password);
            console.log("Registered user:", newUser);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <AuthTemplate
            title="Create Account"
            subtitle="Sign up to get started"
            footer={
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            }
        >
            <RegisterForm onSubmit={handleRegister} />
        </AuthTemplate>
    );
};

export default RegisterPage;
