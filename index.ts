// call signature
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
  return a + b;
};

// object 안에 함수 넣고, methods 의 타입 정하는 법
type Member = {
  name: string;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  plusOne(x) {
    return x + 1;
  },
  changeName() {
    console.log("hi");
  },
};

// type Alias & 정규표현식
type ZeroType = (a: string) => string;
const cutZero: ZeroType = (a) => {
  return a.replace(/^0+/, "");
};
console.log();
type DashType = (b: string) => number;
const removeDash: DashType = (b) => {
  return Number(b.replace(/-/g, ""));
};

//함수안에 함수 넣어보기
type Special = (a: string, b: ZeroType, c: DashType) => number;
const 어떤함수: Special = (a, b, c) => {
  return c(b(a));
};
console.log(어떤함수("010-1111-2222", cutZero, removeDash));
