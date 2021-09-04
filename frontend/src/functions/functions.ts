export function subString(string: string, num: number) {
  const name = string;
  if (name.length > num) {
    const splitName = name.substring(0, num);
    return splitName + '...';
  } else {
    return name;
  }
}
