import { ErrorContainer, ErrorType } from '@containers';

export const ApplicationErrorPage = () => {
    return (
        <ErrorContainer header="У нас что-то сломалось" code="400" type={ErrorType.Application} />
    );
};
