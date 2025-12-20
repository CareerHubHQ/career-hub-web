import { Link } from "react-router";
import { useNavigate } from "react-router";

import AuthTemplate from "../../components/templates/AuthTemplate/auth-template";
import LoginForm from "../../components/organisms/Forms/LoginForm";

import AuthService from "../../services/auth.services";

const LoginPage = () => {
    const navigate = useNavigate()
    const handleLogin = async (data) => {
        const { username, password } = data;
        try {
            const user = await AuthService.login(username, password);

            if (user) {
                navigate("/dashboard")
            }
            //TODO: Store the user data
        } catch (err) {
            console.error(err);
        }
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
