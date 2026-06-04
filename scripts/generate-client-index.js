const { readdir, readFile, writeFile } = require('fs').promises;
const path = require('path');

async function main() {
  const clientDir = path.resolve(__dirname, '..', 'dist', 'client');
  const assetsDir = path.join(clientDir, 'assets');

  try {
    const files = await readdir(assetsDir);

    // find main JS (index-*.js) and styles-*.css
    const jsFile = files.find((f) => /^index-.*\.js$/.test(f));
    const cssFile = files.find((f) => /^styles-.*\.css$/.test(f));

    if (!jsFile) {
      console.error('No index-*.js found in', assetsDir);
      process.exitCode = 1;
      return;
    }

    const cssLink = cssFile ? `<link rel="stylesheet" href="./assets/${cssFile}">` : '';

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Mpumalanga Provincial Taxi Council</title>
    ${cssLink}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${jsFile}"></script>
  </body>
</html>`;

    await writeFile(path.join(clientDir, 'index.html'), html, 'utf8');
    console.log('Generated', path.join(clientDir, 'index.html'));
  } catch (err) {
    console.error('Error generating client index:', err);
    process.exitCode = 1;
  }
}

main();
