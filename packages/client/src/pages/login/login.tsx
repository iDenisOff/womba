import { LoginForm } from '@containers';
import { Card } from '@ui/components';
import './styles.scss';

export const LoginPage = () => {
    return (
        <Card className="login-page">
            <h3>Вход</h3>
            <LoginForm />
        </Card>
    );
};
