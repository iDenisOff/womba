import getTime from './getTime';

const getNameWithTime = (name: string) => {
    return `${name}: ${getTime()}`;
};

export default getNameWithTime;
