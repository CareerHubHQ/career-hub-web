import { Link } from "react-router";
import AuthTemplate from "../../components/templates/AuthTemplate/auth-template";
import RegisterForm from "../../components/organisms/Forms/RegisterForm";

const RegisterPage = () => {
    const handleRegister = (data) => {
        console.log("Register data:", data);
        // Add your registration logic here
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
