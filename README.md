# Ronak Tanna — Portfolio

A minimal portfolio about AI systems, product thinking, strategy, and the things I build when curiosity wins.

## Run locally

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production check

```bash
npm run lint
npm run build
npm start
```

## Deploy on Render

The repository includes a Render Blueprint in `render.yaml`.

1. In Render, choose **New > Blueprint**.
2. Connect this GitHub repository.
3. Apply the detected `ronak-tanna-portfolio` web service.

Render will install dependencies, build the Next.js app, and start the Node server. Every push to `main` can then deploy automatically.

Once the first deployment is live, add a custom domain from the service's **Settings > Custom Domains** page.
