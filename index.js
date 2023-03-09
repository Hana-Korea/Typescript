var add = function (a, b) {
    return a + b;
};
var 회원정보 = {
    name: "kim",
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("hi");
    },
};
var cutZero = function (a) {
    return a.replace(/^0+/, "");
};
console.log();
var removeDash = function (b) {
    return Number(b.replace(/-/g, ""));
};
var 어떤함수 = function (a, b, c) {
    return c(b(a));
};
console.log(어떤함수("010-1111-2222", cutZero, removeDash));
