import chalk from "chalk";

export function stringify(obj: any, indent = 2): string {
  const colorize = (value: any): string | number | boolean | null => {
    if (typeof value === "string") {
      return chalk.green(`"${value}"`);
    } else if (typeof value === "number") {
      return chalk.yellow(value);
    } else if (typeof value === "boolean") {
      return chalk.blue(value);
    } else if (value === null) {
      return chalk.red("null");
    }
    return value;
  };

  return JSON.stringify(
    obj,
    (key: string, value: any) => {
      if (typeof value === "object" && value !== null) {
        return value;
      }
      return colorize(value);
    },
    indent
  );
}
