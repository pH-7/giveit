import chalk from "chalk";

export function giveit(variable: any, indent = 2): string {
  const colorize = (value: any): string => {
    if (typeof value === "string") {
      return chalk.green(`"${value}"`);
    }
    if (typeof value === "number") {
      return chalk.yellow(value.toString());
    }
    if (typeof value === "boolean") {
      return chalk.blue(value.toString());
    }
    if (value === null) {
      return chalk.red("null");
    }
    if (Array.isArray(value)) {
      return chalk.cyan(`[${value.map(colorize).join(", ")}]`);
    }
    if (typeof value === "object") {
      const keys = Object.keys(value);
      if (keys.length === 0) {
        return chalk.magenta("{}");
      }
      return chalk.magenta(
        `{${keys
          .map((key) => `${chalk.cyan(key)}: ${colorize(value[key])}`)
          .join(", ")}}`
      );
    }
    return chalk.gray(value.toString()); // Handle other types
  };

  const jsonString = JSON.stringify(variable, null, indent);

  const colorizedString = jsonString.replace(
    /(\".*?\"|true|false|null|\d+|\[.*?\]|\{.*?\})/g,
    (match) => {
      return colorize(JSON.parse(match));
    }
  );

  return colorizedString;
}
