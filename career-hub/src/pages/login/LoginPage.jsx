import { Link } from "react-router";
import AuthTemplate from "../../components/templates/AuthTemplate/auth-template";
import LoginForm from "../../components/organisms/Forms/LoginForm";

const LoginPage = () => {
    const handleLogin = (data) => {
        console.log("Login data:", data);
        // Add your login logic here
    };

    return (
        <AuthTemplate
            title="Welcome Back"
            subtitle="Sign in to your account to continue"
            footer={
                <p>
                    Don&apos;t have an account? <Link to="/register">Sign up</Link>
                </p>
            }
        >
            <LoginForm onSubmit={handleLogin} />
        </AuthTemplate>
    );
};

export default LoginPage;
