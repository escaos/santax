module.exports = {
  'src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  'src/**/*.(ts|tsx|js)': ['yarn lint:fix', 'yarn prettier --write'],
  'src/**/*.(md|json)': 'yarn prettier --write',
};
