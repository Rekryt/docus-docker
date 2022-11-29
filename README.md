# Docus Starter

Starter template for [Docus](https://docus.dev).

## Docker Dev
```bash
git clone git@github.com:rekryt/docus-docker.git docus-docker
cd docus-docker
cp .env.example .env
# nano .env # set NUXT_WS_PROXY_HOST with docker-host ip
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up -d
```

## Clone

Clone the repository (using `nuxi`):

```bash
npx nuxi init docs -t nuxt-themes/docus-starter
```

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Edge Side Rendering

Can be deployed to Vercel Functions, Netlify Functions, AWS, and most Node-compatible environments.

Look at all the available presets [here](https://v3.nuxtjs.org/guide/deploy/presets).

```bash
yarn build
```

## Static Generation

Use the `generate` command to build your application.

The HTML files will be generated in the .output/public directory and ready to be deployed to any static compatible hosting.

```bash
yarn generate
```

## Preview build

You might want to preview the result of your build locally, to do so, run the following command:

```bash
yarn preview
```

---

For a detailed explanation of how things work, check out [Docus](https://docus.dev).
