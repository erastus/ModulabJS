const chalk = require('chalk');

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation((...args) => {
    const pid = process.pid;
    const now = new Date().toLocaleString();
    const prefix = chalk.bgBlue.black(` INFO `) + ` ${pid} - ${now}`;
    const label = chalk.green('LOG');
    const message = args.join(' ');
    process.stdout.write(`${prefix}     ${label} ${chalk.yellow(message)}\n`);
  });
});

afterEach(() => {
  (console.log as jest.Mock).mockRestore();
});
