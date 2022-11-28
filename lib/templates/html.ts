/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
export default function template(assets: any, initialState: any): string {
  const manifest = JSON.parse(assets);

  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Calin Ciupei | Front End Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <base href="/">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preload" href='/${manifest["app.js"]}' as="script">
        <link rel="preload" href='/${manifest["runtime.js"]}' as="script">
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(initialState)};
          window.__APP__ENV__SSR__ = ${true};
        </script>
        <script src='/${manifest["app.js"]}'></script>
        <script src='/${manifest["runtime.js"]}'></script>
      </body>
    </html>
  `;
}
