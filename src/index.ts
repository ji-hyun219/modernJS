import "./moduleAliases";

export {};

const target = "    Hi";
const target2 = "Hello     ";

// 하나 이상의 공백으로 시작하는지 검사
// \s 는 여러가지 공백문자 (스페이스, 탭 등)를 의미한다

const regExp = /^\s+/; // + 를 사용하면 앞선 패턴을 한 번 이상 반복

if (regExp.test(target)) {
  const result = target.replace(regExp, "");
  console.log(result);
}

const lastRegExp = /\s+$/;

if (lastRegExp.test(target2)) {
  const result = target2.replace(lastRegExp, "");
  console.log(result + "end");
}

// 위 둘을 합쳐서 써보기
const str1 = " 문자열의 앞뒤 공백 제거하기    ";
console.log(str1.replace(/^\s+|\s+$/gm, "") + "끝");
