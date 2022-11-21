# modernJS

Javascript 연습 공간

### getter, setter 사용하는 이유

`데이터를 보호하기 위해 사용`한다. (특히 클래스를 생성할 때) - `캡슐화`
getter와 setter는 class를 사용하는 사용자가 잘못 사용해도 오류를 방어할 수 있도록 할 수 있습니다.
아래 예시에서 확인해보도록 하겠습니다.

getter 는 인스턴스 변수를 반환하고 setter 는 인스턴스 변수를 대입하거나 수정한다.

관습에 따라 getter은 변수 앞에 get, setter은 변수 앞에 set 이 붙고 그 변수들의 앞글자는 대문자로 한다.

```java
public class Vehicle {
  private String color;

  // Getter
  public String getColor() {
    return color;
  }

  // Setter
  public void setColor(String c) {
    this.color = c;
  }
}
```

getter, setter 가 정의되면 main() 메서드에서 이렇게 사용할 수 있다.

```java
public static void main(String[] args) {
  Vehicle v1 = new Vehicle();
  v1.setColor("Red");
  System.out.println(v1.getColor());
}

// 결과 "Red"
```

getter 와 setter 로 값들을 처리할 수 있다.
setter 에서 값이 할당되기 전에 파라미터의 유효성을 검사 할 수도 있다(validate).

### getter, setter 예시

getter, setter을 통해 값에 대해 얼마나 중요하게 다룰지 조절할 수 있다.
간단히 아래의 예제를 보자.

```java
public void setNumber(int number) {
  if (number < 1 || number > 10) {
    throw new IllegalArgumentException();
  }
  this.number = num;
}
```

위의 setter을 통해 1과 10 사이의 숫자들만 number 변수에 할당 할 수 있다.
아래와 같이 직접 수정하는 것보다 훨씬 나은 방식이다.

```java
obj.number = 13;
```

1과 10 사이의 값만을 원하는데 13 을 할당했다.
이렇게 값을 대입하면 원치 않는 에러나 결과가 나올 수 있다.

number 변수를 `private` 으로 지정하고 `setNumber` 메서드를
이용하면 이와 같은 문제를 예방할 수 있다.

number이 private 이므로 number 을 불러오려면 자연스럽게
getter 메서드가 있어야 한다.

```java
public int getNumber() {
  return this.number;
}
```

데이터에 할당될 값이 어떤 기준 안에 있어야 할때
setter을 사용해 그 기준에 맞게 강제할 수 있다는 점이 중요한 것 같다.
그에 따라 getter은 필연적으로 따라오는 것이다.

```javascript
class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  get age() {
    // getter, User.age를 실행할 때 실행되는 코드
    this._age = this._age + 1;
    return this._age;
  }

  set age(value) {
    // setter, User.age = value 를 실행할 때 실행되는 코드
    if (value < 0) {
      throw Error("age can not be negative");
    }
    this._age = value;
  }
}

const user1 = new User("Steve", "Job", 15);
console.log(user1.age);
```

## 정규식

### 플래그

- i (`Ignore case`) : 대소문자를 구별하지 않고 패턴을 검색한다
- g (`Global`) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다
- m (`Multi line`) : 문자열의 행이 바뀌더라도 패턴 검색을 계속한다

플래그는 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수도 있다.  
어떠한 플래그를 사용하지 않은 경우  
`대소문자를 구별`해서 패턴을 검색한다.  
그리고 문자열에 패턴 검색 매칭 대상이 1개 이상 존재해도 `첫 번째 매칭한 대상만 검색하고 종료`한다.
