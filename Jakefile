const { task, desc } = require('jake');

task('clean', async () => {
  const { deleteSync } = await import('del');

  deleteSync(['lib/**/*.js', 'lib/**/*.js.map', 'lib/**/*.d.ts', '*.tgz']);
});
