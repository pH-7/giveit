import test from "ava";
import chalk from "chalk";

import { giveit } from "../src/index";

test("giveit should colorize string values", (t) => {
  const input = { name: "John" };
  const expected = `{
  ${chalk.green('"name"')}: ${chalk.green('"John"')}
}`;
  const result = giveit(input);
  t.is(result, expected);
});

test("giveit should colorize number values", (t) => {
  const input = { age: 25 };
  const expected = `{
  ${chalk.green('"age"')}: ${chalk.yellow("25")}
}`;
  const result = giveit(input);
  t.is(result, expected);
});

test("giveit should colorize boolean values", (t) => {
  const input = { isStudent: true };
  const expected = `{
  ${chalk.green('"isStudent"')}: ${chalk.blue("true")}
}`;
  const result = giveit(input);
  t.is(result, expected);
});

test("giveit should colorize null values", (t) => {
  const input = { address: null };
  const expected = `{
  ${chalk.green('"address"')}: ${chalk.red("null")}
}`;
  const result = giveit(input);
  t.is(result, expected);
});

test("giveit should handle nested objects", (t) => {
  const input = {
    person: {
      name: "John",
      age: 25,
      isStudent: true,
      address: null,
    },
  };
  const expected = `{
  ${chalk.green('"person"')}: {
    ${chalk.green('"name"')}: ${chalk.green('"John"')},
    ${chalk.green('"age"')}: ${chalk.yellow("25")},
    ${chalk.green('"isStudent"')}: ${chalk.blue("true")},
    ${chalk.green('"address"')}: ${chalk.red("null")}
  }
}`;
  const result = giveit(input);
  t.is(result, expected);
});

test("giveit should use the provided indentation", (t) => {
  const input = { name: "John", age: 25 };
  const expected = `{
    ${chalk.green('"name"')}: ${chalk.green('"John"')},
    ${chalk.green('"age"')}: ${chalk.yellow("25")}
}`;
  const result = giveit(input, 4);
  t.is(result, expected);
});
