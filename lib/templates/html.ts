export default function template(assets: any, initialState: any): string {
  const manifest = JSON.parse(assets);

  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>webapp seed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <base href="/">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preload" href='/${manifest["vendors~app.js"]}' as="script">
        <link rel="preload" href='/${manifest["runtime.js"]}' as="script">
        <link rel="preload" href='/${manifest["app.js"]}' as="script">
      </head>
      <body>
        <div id="root"></div>
        <img src="/image/banner-coronavirus-flags--europe-en-16_9.jpg" />
        <img src="/image/banner-coronavirus-flags--europe-en-21_9.jpg" />
        <img src="/image/brexit-homepage-stage--ro-ro-.jpg" />
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(initialState)};
          window.__APP__ENV__SSR__ = ${true};
        </script>
        <script src='/${manifest["vendors~app.js"]}'></script>
        <script src='/${manifest["runtime.js"]}'></script>
        <script src='/${manifest["app.js"]}'></script>
      </body>
    </html>
  `;
}
