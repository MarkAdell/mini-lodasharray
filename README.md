## Installation

Using npm
```shell
$ npm install mini-lodasharray --save
```
## Available Methods

- uniq
- remove
- concat
- range
- shuffle

## Usage

```js
const _ = require('mini-lodasharray');

console.log(_.uniq([1, 1, 2, 2, 3])); // [1, 2, 3]

console.log(_.remove([1, 2, 3, 4, 5], el => el % 2 === 0)); // [1, 3, 5]

console.log(_.remove([{ n: 1 }, { n: 2 }], el => el.n === 1)); // [{n: 2}]

console.log(_.concat([1], [2, 3], 4, { n: 5 })); // [1, 2, 3, 4, {n: 5}]

console.log(_.range(1, 5)); // [1, 2, 3, 4, 5]

console.log(_.range(3)); // [0, 1, 2, 3]

console.log(_.shuffle([1, 2, 3, 4, 5])); // array after shuffling, ex: [3, 5, 2, 1, 4]
```

## License
Code licensed under [MIT License](https://github.com/MarkAdell/mini-lodasharray/blob/master/LICENSE).