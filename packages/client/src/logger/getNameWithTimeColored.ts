import getColoredValue from './getColoredValue';
import getNameWithTime from './getNameWithTime';

const getNameWithTimeColored = ({
    name,
    backgroundColor
}: {
    name: string;
    backgroundColor: string;
}) => {
    return getColoredValue({ backgroundColor, value: getNameWithTime(name) });
};

export default getNameWithTimeColored;
