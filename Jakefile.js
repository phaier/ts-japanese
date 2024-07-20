const { task, desc } = require('jake');

task('clean', async () => {
  const { deleteSync } = await import('del');

  deleteSync(['dist/**/*.js', 'dist/**/*.js.map', 'dist/**/*.d.ts', 'dist/**/*.d.ts.map', '*.tgz']);
});
