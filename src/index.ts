import "./moduleAliases";

export {};

const target = "Is this all there is?";
const regexp = /is/g; // 문자열 내 모든 패턴을 검색하는 g 플래그

console.log(target.match(regexp)); // 대소문자를 구분해서 길이 2인 배열이 나옴

// 시작 위치로 검색
const jihyunRepo = "https://github.com/ji-hyun219?tab=repositories";

// https 로 시작하는지 검사
const regExp = /^https/;

console.log(regExp.test(jihyunRepo));

// 마지막 위치로 검색
const lastRegExp = /repositories$/;

console.log(lastRegExp.test(jihyunRepo));
