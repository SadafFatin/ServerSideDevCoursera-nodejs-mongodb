module.exports = (x, y, callback) => {

    if (x <= 0 || y <= 0) {
        setTimeout(() =>
            callback(new Error("Rectangle dimensions should be greater than zero:  x = " +
                x + ",  and y = " + y), null),
            500)
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => (2 * (x + y)),
                area: () => (x * y)
            }),
            500)
    }


}

exports.perimeter = (x, y) => {
    return (2 * (x + y));
};

exports.area = (x, y) => (x * y);