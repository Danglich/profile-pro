export const group = (array) => {
    let result = [];
    array.forEach((el) => {
        if (!result.includes(el.type)) {
            result.push(el.type);
        }
    });

    return result;
};
