/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

/** @type {import('@maizzle/framework').Config} */
export default {
  baseURL: {
    url: 'https://cstoeber.github.io/ubu-maizzle-newsletter/assets/',
    tags: ['img', 'source'],
  },
  build: {
    output: {
      path: 'docs',
      extension: 'html',
    },
  },
  css: {
    inline: true,
    purge: true,
    shorthand: true,
  },
  prettify: true,
}
