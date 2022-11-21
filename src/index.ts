import "./moduleAliases";

export {};

const target = "IS";
const regexp = /is/i; // 플래그 i 는 대소문자를 구별하지 않고 검색한다

if (regexp.test(target)) {
  console.log("True");
}
