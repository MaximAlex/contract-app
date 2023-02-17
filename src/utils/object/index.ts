export const getObjectValue = (obj: any, props: string) => {
    const propArray = props.split('.');
    let result = obj;
    for (let prop of propArray) {
        if (result.hasOwnProperty(prop)) {
            result = result[prop];
        } else {
            return '';
        }
    }
    return result || '';
};
