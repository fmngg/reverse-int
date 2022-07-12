module.exports = function reverse(n) {
    const array = Array.from(String(n), Number);
    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (!isNaN(element)) {
            newArray.push(element);
        }
    }

    newArray.reverse();
    const string = newArray.join("");
    return string;
};
