const getColoredValue = ({
    value,
    backgroundColor = '#00897b'
}: {
    value: string;
    backgroundColor?: string;
}) => {
    return [`%c ${value} `, `background: ${backgroundColor}; color: #fff; border-radius: 2px;`];
};

export default getColoredValue;
