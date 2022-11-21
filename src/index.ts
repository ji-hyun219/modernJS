import "./moduleAliases";

export {};

const target = " Hi";

// 하나 이상의 공백으로 시작하는지 검사
// \s 는 여러가지 공백문자 (스페이스, 탭 등)를 의미한다

const regExp = /^[\s]+/;

console.log(regExp.test(target));
