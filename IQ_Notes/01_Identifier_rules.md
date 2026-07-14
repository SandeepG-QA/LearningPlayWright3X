# JavaScript Identifier Rules

Identifiers are names given to variables, functions, classes, or objects in JavaScript.

## Rules

| Rule | Valid Example | Invalid Example |
|------|---------------|-----------------|
| Must start with a letter, `_`, or `$` | `let name;` `let _count;` `let $price;` | `let 1name;` (starts with digit) |
| Can contain letters, digits, `_`, and `$` | `let userName1;` | `let user-name;` (hyphen not allowed) |
| Case-sensitive | `name` and `Name` are different | — |
| Cannot use reserved keywords | `let total;` | `let let;` `let class;` `let if;` |
| Cannot contain spaces | `let firstName;` | `let first name;` |
| Unicode letters are allowed | `let nombre;` `let 名前;` | — |

## Reserved Keywords (cannot use as identifiers)

| Category | Keywords |
|----------|----------|
| **Declarations** | `let`, `const`, `var`, `class`, `function`, `import`, `export` |
| **Control Flow** | `if`, `else`, `switch`, `case`, `break`, `continue`, `return`, `throw` |
| **Loops** | `for`, `while`, `do`, `in`, `of` |
| **Error Handling** | `try`, `catch`, `finally` |
| **Misc** | `new`, `this`, `super`, `typeof`, `instanceof`, `void`, `delete`, `yield`, `await`, `async` |

## Best Practices

| Practice | Good | Bad |
|----------|------|-----|
| Use camelCase for variables/functions | `let firstName;` | `let first_name;` (snake_case in JS) |
| Use PascalCase for classes | `class UserProfile { }` | `class userProfile { }` |
| Use UPPER_SNAKE for constants | `const MAX_LIMIT = 100;` | `const maxLimit = 100;` |
| Use descriptive names | `let userAge;` | `let x;` |
| Boolean variables | `let isValid;` `let hasAccess;` | `let flag;` `let check;` |
