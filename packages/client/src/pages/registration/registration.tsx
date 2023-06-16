import { RegistrationForm } from '@containers';
import './styles.scss';

export const RegistrationPage = () => {
    return (
        <div className="registration">
            <div className="registration__title">Sign up</div>
            <RegistrationForm />
        </div>
    );
};
