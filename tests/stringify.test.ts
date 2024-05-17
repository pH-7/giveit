import test from "ava";
import { stringify } from "../src/index";

test("should stringify a simple object", (t) => {
  const obj = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };

  const result = stringify(obj);

  t.true(result.includes('"name": "John Doe"'));
  t.true(result.includes('"age": 30'));
  t.true(result.includes('"city": "New York"'));
});

test("should stringify a nested object", (t) => {
  const obj = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      zip: 12345,
    },
  };

  const result = stringify(obj);

  t.true(result.includes('"name": "John Doe"'));
  t.true(result.includes('"address": {'));
  t.true(result.includes('"street": "123 Main St"'));
  t.true(result.includes('"zip": 12345'));
});

test("should stringify an array", (t) => {
  const obj = {
    hobbies: ["reading", "cooking"],
  };

  const result = stringify(obj);

  t.true(result.includes('"hobbies": ['));
  t.true(result.includes('"reading"'));
  t.true(result.includes('"cooking"'));
});

test("should stringify boolean values", (t) => {
  const obj = {
    married: false,
  };

  const result = stringify(obj);

  t.true(result.includes('"married": false'));
});

test("should stringify null values", (t) => {
  const obj = {
    spouse: null,
  };

  const result = stringify(obj);

  t.true(result.includes('"spouse": null'));
});
