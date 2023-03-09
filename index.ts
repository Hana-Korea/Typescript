// call signature
type Add = { (a: number, b: number): number };

const add: Add = (a, b) => {
  return a + b;
};

// Overloading
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};
const push: Push = (config) => {
  if (typeof config == "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
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

//Generic
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};
const superPrint: SuperPrint = (arr) => {
  return arr[0];
};
const a = superPrint([1, 2, 3]);
const b = superPrint([1, "2", 3]);
const c = superPrint([1, "2", true]);
// array, object 타입지정
const 배열: string[] = ["1", "2"];
const 객체: { age: number } = {
  age: 20,
};
// 숙제1
const 함수 = () => {
  return console.log("이름무");
};
//숙제2

function 함수2(a: string | number): number {
  if (typeof a == "number") {
    return String(a).length;
  } else {
    return a.length;
  }
}
console.log(함수2("245"));
console.log(함수2(9434));
// 숙제3
const 함수3 = (a: number, b: boolean, c: string) => {
  let result = 0;
  result += a;
  if (b === true) {
    result += 500;
  }
  if (c === "상") {
    result += 100;
  }
  if (result >= 600) {
    return "결혼가능";
  }
};
console.log(함수3(100, false, "상"));

//type narrowing
// 클리닝함수(['1',2,'3']) => [1,2,3]
type Cleaner = (a: (string | number)[]) => number[];

const 클리닝함수: Cleaner = (a) => {
  let arr = [];
  a.forEach((x) => {
    if (typeof x == "string") {
      arr.push(Number(x));
    } else {
      arr.push(x);
    }
  });
  return arr;
};
console.log(클리닝함수(["1", "2"]));

// 숙제4
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

// type TeacherType = ( { subject: string | string[] })=> string ????

const 만들함수 = (a: { subject: string | string[] }) => {
  if (typeof a.subject === "string") {
    return a.subject;
  } else {
    return a.subject[a.subject.length - 1];
  }
};
console.log(만들함수(민수쌤));
