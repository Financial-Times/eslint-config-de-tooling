module.exports = () => {
    const myFunction = async () => {
        const result = await Promise.resolve();
        return result;
    };
    return myFunction();
};
