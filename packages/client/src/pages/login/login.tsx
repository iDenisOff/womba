import { LoginForm } from '@containers';
import './styles.scss';

export const LoginPage = () => {
    return (
        <div className="login">
            <div className="login__title">Sign in</div>
            <LoginForm />
        </div>
    );
};
