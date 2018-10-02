export class Format {
  static interpolate(...args: string[]) {
    let str = args[0];
    if (str && str.length > 0 && args && Object.keys(args).length > 0) {
      for (let i = 0; i <= args.length; i += 1) {
        str = (args[i + 1]) ?
          str.split(['{', i, '}'].join('')).join(args[i + 1])
          : str.replace(/{([^{}]*)}/g, () => '');
      }
    }
    return str;
  }
}
