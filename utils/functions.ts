export function toTitleCase(str: string) {
  return str
    .split(/\b/)
    .map((word) => {
      return /^[a-zA-Z]+$/.test(word)
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word;
    })
    .join("");
}