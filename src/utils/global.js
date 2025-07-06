global.html = (strings, ...values) =>
  strings.reduce((acc, str, i) => acc + str + (values[i] ?? ''), '');
