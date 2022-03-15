# Javascript  Cơ bản

## Biến (Variable)

Biến dùng để chứa dữ liệu. Trước khi sử dụng biến ta cần phải khai báo biến. 

![Value](https://github.com/lawson-ng/my-blog/blob/documents/public/value.png?raw=true)

Cấu trúc khi báo biến:

```js
<từ khoá> <tên biến> [= <giá trị>]

```

- từ khoá: `let`, hoặc `const` (Ngoài ra ta còn có từ khoá `var` tuy nhiên hiện nay từ khoá này không còn được sử dụng phổ biến.)
- tên biến: tên của biến mà ta muốn khai báo.
- = giá trị: giá trị mà ta muốn gán cho biến. Nếu không gán giá trị cho biến thì biến sẽ có giá trị là `undefined`

Ví dụ khai báo biến trong javascript:

```jsx
let name = "javascript" // name có giá trị là "javascript"
let year = 1995 // year có giá trị là 1995

const author = "Brendan"
const school; // school có giá trị là undefined
```


### let và const

let va const là những từ khoá dùng để khai báo biến.

- Những biến được khai báo bằng từ `let` và `const` không thể được khai báo lại

```js
let name = "John Doe"
let name = "another name"
// SyntaxError: 'name' has already been declared
```

-> Biến `name` đã được khai báo trước đó nên khi đa khai báo `let name = "another name"` thì sẽ bị lỗi `SyntaxError: 'name' has already been declared`

- Để thay đổi giá trị của một biến ta chỉ gán giá trị mới cho biến đó mà không cần phải khai báo lại.
Ví dụ

```js
let name = "Michael"
console.log(name) // in ra màn hình là Michael
name = "another name"
console.log(name) // in ra màn hình là another name
```

- Chúng ta không thể gán giá trị mới cho những biến đã được khai báo với từ khoá `const`
```js
const name = "Michael"
console.log(name) // in ra màn hình là Michael
name = "another name"
// Uncaught TypeError: Assignment to constant variable.
```

### Function

Khi chúng ta muốn tái sử dụng một đoạn code thay vì viết lại đoạn code đó ở nhiều nơi, chúng ta có thể đóng gói đoạn code đó vào một function và chỉ cần gọi function đó khi muốn sử dụng. Như vậy, function là tập hợp của những dòng lệnh (a set of statements) giúp chúng ta thực hiện một tác vụ hoặc tính toán một giá trị nào đó,

Ví dụ:

```js
const square = function(x) {
  return x * x;
};

console.log(square(5)) // 25

const greeting = function(name, year) {
  console.log('Hello ', name, year)
}

greeting('Alice', 2022) // Hello Alice 2022
```

- Function được tạo ra bằng một biểu thức bắt đầu với tự khoá `function`
- Function có thể không nhận vào đối số nào hoặc nhận vào một hoặc một vài đối số (parameters).
Ví dụ: function `square` nhận vào một đối số là `x`, function `greeting` nhận vào 2 đối số là `name` và `year`
- Phần thân funcion (Function body) chứa nhiều câu lệnh sẽ được thực thi khi function được gọi.
- Từ khoá `return` cho ta biết được giá trị của function trả về.
Ví dụ: Khi gọi `square(5)` thì giá trị trả về sẽ là 25 (return x * x => return 5 * 5)

### Kiểu dữ liệu (Data types)

### Numbers

```js
const year = 2022
const pi = 3.14
```

### Operators ( Toán tử )

![Value](https://github.com/lawson-ng/my-blog/blob/documents/public/JavaScript-Arithmetic-operators.jpeg?raw=true)


1. **Arithmetic ( Số học )**


```js
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

2. **Comparison ( So sánh )**

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

#### Strings ( Chuỗi kí tự )

String được sử dụng để thể hiện cho văn bản, chúng được viết bên trong dấu ngoặc.

```jsx
const name = "lawson"
const another_name = 'lawson nguyen'
const text = `something`
```

Chúng ta có thể sử dụng quotes (dấu nháy đơn `'`, dấu nháy kép `''`, hoặc dấu backticks \` ) để thể hiện một chuỗi kí tự (`string`)


 Hầu hết những gì nằm trong quotes là giá trị của một biến string. Nhưng có một số trường hợp đặc biệt ta cần phải chú ý sau:

- ***Các quotes lồng:***

Ví dụ, trong trường hợp chúng ta muốn hiển thị một chuỗi kí tự như thế này:  

```
”hello world”
```

⇒ Chúng ta sẽ sử dụng các quotes khác để bọc bên vào chuỗi đó

Ví dụ:

‘“hello world”’ ⇒ sử dụng nháy đơn bọc ngoài nháy kép

``"hello world"`` ⇒ sử dụng blackticks bọc ngoài nháy kép

- ***Thêm kí tự xuống dòng vào chuỗi:***

Ví dụ chúng ta muốn hiển thị một chuỗi như sau:

```
This is my first line

And this is my second line
```


```jsx
Note: 
Trong một chuỗi kí tự dấu gạch chéo ngược \ thể hiện kí tự ngay sau nó
mang một ý nghĩa đặc biệt.

Việc viết dấu gách chéo ngược \ trước một kí tự, chúng ta gọi là escaping
```

```bash
\n : new line

\t : tab
```

### Mảng (Array)

Array là tập hợp của những giá trị có cùng hoặc không cùng kiểu dữ liệu

```js
// Mảng của numbers
const a = [1, 2, 3]

console.log(a[0]) // 1
console.log(a[2]) // 3
console.log(a[3]) // undefined

// Mảng của number và string
const arr = [1, 'a', 'c']
```

#### 4 Phương thức sử dụng mảng thông dụng

**Map**
  - Tạo ra một mảng mới có đô dài (length) bằng với độ dài của mảng ban đầu.
  - Mỗi phần tử trong mảng mới được tạo ra bằng việc thực hiện phép biến đổi lên tửng phần tử của mảng ban đầu.

```js
const arr = [1, 2, 3];
const double = x => x * 2;
arr.map(double); // [2, 4, 6]
```

**Filter**
  - Tạo ra một mảng mới có độ dài (length) bằng hoặc nhỏ hơn so với mảng ban đầu.
  - Mỗi phẩn tử trong mảng mới được tạo ra từ những phần tử thoả mãn điều kiện lọc của mảng ban đầu.

```js
const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.filter(isOdd); // [1, 3]
```
**Find**
  - Thực hiện việc tìm kiếm lên mảng bằng cách duyệt qua từng phần tử của mảng.
  - Trả về phẩn tử đầu tiên thoả mãn điều kiện tìm kiếm. Nếu không, trả về `undefined`

```js
const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.find(isOdd); // 1
```

**Reduce**
- Trả về một giá trị tuỳ biến tuỳ thuộc vào function xử lý được truyền vào và giá trị khởi tạo.


```js
const arr = [1, 2, 3];

const sum = (x, y) => x + y;
arr.reduce(sum, 0); // 6

const increment = (x, y) => [...x, x[x.length - 1] + y];
arr.reduce(increment, [0]); // [0, 1, 3, 6]
```
### Object

- Là một đối tượng có nhiều thuộc tính (properties). Mỗi thuộc tính được viết dưới dạng (`key: value`).
- Những thuộc tính của object được viết bên trong dấu ngoặc nhọn `{ }`
- Các thuộc tính được ngăn cách với nhau bằng dấu phẩy

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
