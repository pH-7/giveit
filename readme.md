# giveit 

Debug with ease any nested objects, arrays, etc. **giveit** (AKA "Give It To Me") is a lightweight `JSON.stringify` wrapper to display nested objects with indentation and color for quick debugging.

## Installation

### Using [NPM](https://www.npmjs.com/package/giveit)

```console
npm i giveit
```

### Using [Yarn](https://yarnpkg.com/package/giveit)

```console
yarn add giveit
```

## Usage

```typescript
import { giveit } from "giveit";

const arrObj = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
    hobbies: ["reading", "cooking"],
    married: false,
    address: {
      street: "123 Main St",
      zip: 12345,
    },
  },
];

// give it! giveit() will nicely show arrObj
console.log("See nested values of arrObj", giveit(arrObj));
```

![Example of showing nested objects](example-giveit-output.png)

## Author

[![Pierre-Henry Soria](https://s.gravatar.com/avatar/a210fe61253c43c869d71eaed0e90149?s=200)](https://ph7.me "Pierre-Henry Soria - Software Data Engineer")

[Pierre-Henry Soria ツ](https://ph7.me) – A [super passionate](https://github.com/pH-7) and enthusiastic Problem-Solver / Senior Software Data Engineer living currently in Sydney. Also, a true cheese 🧀, ristretto ☕️, and dark chocolate lover! 😋 👉 Reach me on [LinkedIn](https://www.linkedin.com/in/ph7enry/) ⚡️

## License

Distributed under the _[MIT](https://opensource.org/licenses/MIT)_ 🎉 Enjoy!
