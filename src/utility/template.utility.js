import { findIndex, forEach, orderBy } from "lodash";

const SUPPORTED_TAGS = ["p", "ul", "li"];
const SUPPORTED_BRACES = ["}"];
export const transform = (text) => {
  let text_d = `${text}`;
  let maxLength = 1;
  let list = [];
  const tags = SUPPORTED_TAGS.map((tag) => `#${tag}{`);
  let index = 0;

  while (index < text_d.length) {
    const match = /[a-z]+/;
    const buffer = text_d.substring(index, index + 1);

    if (buffer === "}") {
      const firstMatch = list.pop();
      const endMatches = match.exec(firstMatch);
      const reg = new RegExp(`}`);
      text_d = text_d.replace(reg, `</${endMatches[0]}>`);
      index++;
      continue;
    }
    if (!buffer) {
      index++;
      continue;
    }
    const zone = text_d.substring(index + 1, index + 3);

    const matches = match.exec(zone) || [];
    if (matches.length <= 0) {
      index++;
      continue;
    }
    const buffCheck = text_d.substring(index, index + matches[0].length + 2);
    if (
      matches.length > 0 &&
      SUPPORTED_TAGS.map((t) => `#${t}{`).includes(buffCheck)
    ) {
      list.push(buffCheck);
      const reg = new RegExp(`${buffCheck}`);
      text_d = text_d.replace(reg, `<${matches[0]}>`);
      console.log("Transform Test", text_d);
    }

    index++;
  }
  return text_d;
};
