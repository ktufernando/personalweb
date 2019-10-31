# Personal Web developed with Gatsby. [FernandoValdes.me](https://ktufernando.github.io/)

## Gatsby Starter: Minimal Blog

Typography driven, focus on the content & minimal style. Powered by MDX.

## Features

- Articles in MDX ([gatsby-mdx](https://github.com/ChristopherBiscardi/gatsby-mdx))
- Code highlighting (with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)) and live preview (with [react-live](https://github.com/FormidableLabs/react-live))
- Styled Components 💅
- Categories
- Offline Support
- WebApp Manifest Support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

Install and run with this command:

```
npm run develop
```

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

**Attention:** You also need to edit `static/robots.txt` to include your domain!
