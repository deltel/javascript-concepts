module.exports = function process(num = 999) {
    let result = num;
    result = result * num;
    result = result ** num;
    result = result - num;
    result = result / num;
    result = result ** 2;
    result = result ** 3;
    return result;
};
