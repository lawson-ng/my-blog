# Javascript  Cơ bản

![Untitled](Javascript%20e1e27/Untitled.png)

## What is javascript ?

- Invented by **Brendan Eich** in 1995.
- The world's most popular programming language.
- Easy to learn.

```js
console.log('Javascript')
```

## What can it used for ?

- Front-end
- Back-end
- Mobile apps
- Desktop apps
- Add more

![Untitled](Javascript%20e1e27/Untitled%201.png)

## ****JavaScript basics****

### Variables (Biến)

Variables are containers for storing data (storing data values).

In this example, `x`, `y` , `z` are variables.

```jsx
let name = "javascript"
let year = 1995
let author = "Brendan"

const school = 'hcmue'
```

### `let` `const`

```jsx
let x = "John Doe"
let x = 0;
// SyntaxError: 'x' has already been declared

const name = "lawson"
const pi = 3.14

let school = 'hcmue'
school = 'qưeqwe'

const pi = 3.14
pi = 3.15

```

`**function**`

a set of statements that performs a task or calculates a value

```jsx
function square(number) {
  return number * number;
}

function geating(name) {
	console.log('Hello ', name)
}
```

### Data types:

- `undefiend`
- `null`
- `boolean`
- `string`
- `number`
- `object`
- `array`

**Examples:**

```jsx
let foo; // undefiend
let dog = null; // null
let isCorrect = false; // boolean
let name = "lawson"; //string
let age = 30; // number
let people = {job: "dev"}; // object
let numbers = [1, 2, 3]; // array
```

### Strings ( Chuỗi kí tự )

String được sử dụng để thể hiện cho văn bản, chúng được viết bên trong dấu ngoặc.

```jsx
const name = "lawson"
const another_name = 'lawson nguyen'
const text = `something`
```

Chúng ta có thể sử dụng dấu nháy đơn `'`, dấu nháy kép `''`, hoặc dấu backticks ` để đánh dấu `string`

`'` `''` ` ⇒ quotes

 Hầu hết những gì nằm trong quotes là giá trị của một biến string. Nhưng có một số trường hợp đặc biệt ta cần phải chú ý sau:

- Các quotes lồng:

Ví dụ, trong trường hợp chúng ta muốn hiển thị một biến string như thế này  ”hello world”

⇒ Chúng ta sẽ sử dụng các quotes khác để bọc bên vào chuỗi đó

Ví dụ:

‘“hello world”’ ⇒ sử dụng nháy đơn bọc ngoài nháy kép

``"hello world"`` ⇒ sử dụng blackticks bọc ngoài nháy kép

- Thêm kí tự xuống dòng vào chuỗi:

Ví dụ chúng ta muốn hiển thị một chuỗi như sau:

This is my first line

And this is my second line

```jsx
Note: 
Trong một chuỗi kí tự dấu gạch chéo ngược \ thể hiện kí tự ngay sau nó
mang một ý nghĩa đặc biệt.

Việc viết dấu gách chéo ngược \ trước một kí tự, chúng ta gọi là escaping
```

 - `\n`: new line

 - `\t` tab

### Number

```jsx
const year = 2022
const pi = 3.14
```

### Operators ( Toán tử )

1. **Arithmetic ( Số học )**

![Untitled](Javascript%20e1e27/Untitled%202.png)

```jsx
const a = 4
const b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a++)
console.log(a--)

// ** Spcial **

// ** power
console.log(3 ** 4);
// expected output: 81

console.log(10 ** -2);
// expected output: 0.01

console.log(2 ** 3 ** 2);
// expected output: 512

console.log((2 ** 3) ** 2);
// expected output: 64

// *==
let a = 3;

console.log(a **= 2);
// expected output: 9

console.log(a **= 0);
// expected output: 1

console.log(a **= 'hello');
// expected output: NaN

// /= 
let a = 3;

console.log(a /= 2);
// expected output: 1.5

console.log(a /= 0);
// expected output: Infinity

console.log(a /= 'hello');
// expected output: NaN
```

1. **Comparison ( So sánh )**

```jsx
// == ( So sánh bằng ) double equals
const currentYear = 2022
const pastYear = 2021

console.log(currentYear == pastYear) // expected: false
console.log(currentYear == 2022) //expected: true

// === (triple equals)
const pi = 3.14
const PI = '3.14'
console.log(pi === PI) // expected: ???

// != ( So sánh gia tri )
const currentYear = 2022
const pastYear = 2021

console.log(currentYear != pastYear) // expected: true
console.log(currentYear != 2022_ // expected: false

// !== ( So sanh về giá trị và kiểu dữ liệu )
const pi = 3.14
const PI = '3.14'

console.log(pi === PI) // expected: false

// > >= < <=
const x = 8
console.log(x < 8)
console.log(x <= 8)
console.log(x > 8 )
console.log(x >= 8)
```

1. **Conditional ( Điều kiện )**

- Code
    
    ```jsx
    const checkNumber = (number) => {
    	if (number === 3.14) {
    		return 'PI'
    	} else {
    		return 'not PI'
    	}
    }
    ```
    
- Code (Coditional)
    
    ```jsx
    const checkNumber = (number) => number === 3.14 ? 'PI' : 'not PI'
    ```
    

1. **Logical (Logic )**

### Array

```jsx
const a = [1, 2, 3]
const b = ['a', 'b', 'c']
const arr_1 = [1, 'a', 'b', 3.14]

console.log(a[0])
console.log(a[3])
```

- Map
    - Tạo ra một mảng mới có đô dài (length) bằng với độ dài của mảng ban đầu.
    - Mỗi phần tử trong mảng mới được tạo ra bằng việc thực hiện phép biến đổi lên tửng phần tử của mảng ban đầu.

![Screenshot 2022-03-05 at 11.09.20.png](Javascript%20e1e27/Screenshot_2022-03-05_at_11.09.20.png)

![Screenshot 2022-03-05 at 11.10.33.png](Javascript%20e1e27/Screenshot_2022-03-05_at_11.10.33.png)

- Filter
    - Tạo ra một mảng mới có độ dài (length) bằng hoặc nhỏ hơn so với mảng ban đầu.
    - Mỗi phẩn tử trong mảng mới được tạo ra từ những phần tử thoả mãn điều kiện lọc của mảng ban đầu.

![Screenshot 2022-03-05 at 12.26.36.png](Javascript%20e1e27/Screenshot_2022-03-05_at_12.26.36.png)

![Screenshot 2022-03-05 at 12.27.11.png](Javascript%20e1e27/Screenshot_2022-03-05_at_12.27.11.png)

- Find
    - Thực hiện việc tìm kiếm lên mảng bằng cách duyệt qua từng phần tử của mảng.
    - Trả về phẩn tử đầu tiên thoả mãn điều kiện tìm kiếm. Nếu không, trả về `undefined`

![Screenshot 2022-03-05 at 12.28.22.png](Javascript%20e1e27/Screenshot_2022-03-05_at_12.28.22.png)

![Screenshot 2022-03-05 at 12.28.45.png](Javascript%20e1e27/Screenshot_2022-03-05_at_12.28.45.png)

- Reduce

![Screenshot 2022-03-05 at 12.30.39.png](Javascript%20e1e27/Screenshot_2022-03-05_at_12.30.39.png)

![Screenshot 2022-03-05 at 12.31.20.png](Javascript%20e1e27/Screenshot_2022-03-05_at_12.31.20.png)

### Object

```jsx
const person = {
	name: 'lawson',
	job: 'bug creator',
	house: null,
	car: null,
}

person.name

person.job
```

[Exercises 1](https://www.notion.so/Exercises-1-60749e2d8c0846f2a5b00be699195cba)
