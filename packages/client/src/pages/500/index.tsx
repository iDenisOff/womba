import { ErrorContainer, ErrorType } from '@containers';

export const ServerErrorPage = () => {
    return (
        <ErrorContainer
            header="На сервере что-то пошло не так"
            code="500"
            type={ErrorType.Server}
        />
    );
};
