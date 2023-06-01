export class Formatter {
  formatNumber(
    initialValue: string,
    willHavesSpaces = true,
    length = 10,
    groupLength = 10
  ) {
    const value = initialValue.replace(/[^\d]/g, '').substring(0, length);

    const groups: string[] = [];

    for (let i = 0; i < value.length; i += groupLength) {
      groups.push(value.substring(i, i + groupLength));
    }

    return groups.join(willHavesSpaces ? ' ' : '');
  }
}
