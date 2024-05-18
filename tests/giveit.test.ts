import test from "ava";
import chalk from "chalk";

import { giveit } from "../src/index";

test("must handle complex nested objects", (t) => {
  const input = {
    name: "John",
    age: 30,
    isMarried: false,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
    hobbies: ["reading", "traveling"],
    scores: [85, 92, 78],
    education: [
      { degree: "Bachelor", major: "Computer Science", year: 2015 },
      { degree: "Master", major: "Data Science", year: 2018 },
    ],
    projects: null,
  };

  const expected = `{
  ${chalk.green('"name"')}: ${chalk.green('"John"')},
  ${chalk.green('"age"')}: ${chalk.yellow("30")},
  ${chalk.green('"isMarried"')}: ${chalk.blue("false")},
  ${chalk.green('"address"')}: {
    ${chalk.green('"street"')}: ${chalk.green('"123 Main St"')},
    ${chalk.green('"city"')}: ${chalk.green('"New York"')},
    ${chalk.green('"country"')}: ${chalk.green('"USA"')}
  },
  ${chalk.green('"hobbies"')}: [
    ${chalk.green('"reading"')},
    ${chalk.green('"traveling"')}
  ],
  ${chalk.green('"scores"')}: [
    ${chalk.yellow("85")},
    ${chalk.yellow("92")},
    ${chalk.yellow("78")}
  ],
  ${chalk.green('"education"')}: [
    {
      ${chalk.green('"degree"')}: ${chalk.green('"Bachelor"')},
      ${chalk.green('"major"')}: ${chalk.green('"Computer Science"')},
      ${chalk.green('"year"')}: ${chalk.yellow("2015")}
    },
    {
      ${chalk.green('"degree"')}: ${chalk.green('"Master"')},
      ${chalk.green('"major"')}: ${chalk.green('"Data Science"')},
      ${chalk.green('"year"')}: ${chalk.yellow("2018")}
    }
  ],
  ${chalk.green('"projects"')}: ${chalk.red("null")}
}`;

  const result = giveit(input);
  t.is(result, expected);
});

test("must handle empty objects and arrays", (t) => {
  const input = {
    emptyObject: {},
    emptyArray: [],
  };

  const expected = `{
  ${chalk.green('"emptyObject"')}: {},
  ${chalk.green('"emptyArray"')}: []
}`;

  const result = giveit(input);
  t.is(result, expected);
});

test("must colorize string values", (t) => {
  const input = { name: "John" };
  const expected = `{
  ${chalk.green('"name"')}: ${chalk.green('"John"')}
}`;

  const result = giveit(input);
  t.is(result, expected);
});

test("must colorize number values", (t) => {
  const input = { age: 25 };
  const expected = `{
  ${chalk.green('"age"')}: ${chalk.yellow("25")}
}`;

  const result = giveit(input);
  t.is(result, expected);
});

test("must colorize boolean values", (t) => {
  const input = { isStudent: true };
  const expected = `{
  ${chalk.green('"isStudent"')}: ${chalk.blue("true")}
}`;

  const result = giveit(input);
  t.is(result, expected);
});

test("must colorize null values", (t) => {
  const input = { address: null };
  const expected = `{
  ${chalk.green('"address"')}: ${chalk.red("null")}
}`;

  const result = giveit(input);
  t.is(result, expected);
});

test("must handle nested objects", (t) => {
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

test("must use the provided indentation", (t) => {
  const input = { name: "John", age: 25 };
  const expected = `{
    ${chalk.green('"name"')}: ${chalk.green('"John"')},
    ${chalk.green('"age"')}: ${chalk.yellow("25")}
}`;

  const result = giveit(input, 4);
  t.is(result, expected);
});
