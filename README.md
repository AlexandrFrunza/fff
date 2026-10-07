# fff.cy

Landing page for fff.cy, an independent digital studio.

## Development

Requires Node.js and Yarn.

```sh
yarn install
yarn dev        # http://localhost:8080
```

## Scripts

- `yarn build`: production build into `.output/`
- `yarn preview`: serve the production build locally
- `yarn test`: run the tests
- `yarn lint` / `yarn format`: ESLint and Prettier

## Deployment

The build targets Cloudflare Workers (`nitro({ preset: "cloudflare-module" })` in `vite.config.ts`). After `yarn build`, deploy with `npx wrangler deploy --config .output/server/wrangler.json`. To host elsewhere, change the Nitro preset (e.g. `vercel`, `netlify`, `node-server`).

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
