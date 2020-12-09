
export const getLabelColor = (label) => {
    const ColorEnum = {0:"magenta", 1:"red", 2:"volcano", 3:"orange", 4:"gold", 5:"green", 6:"cyan", 7:"geekblue", 8:"purple"};
    var arr = label.split('');
    var sum = 0;
    arr.map((char) => {
        sum += char.charCodeAt(0);
    })
    return ColorEnum[sum%9];
}