# Local setup and production link issue

## Start the client locally

From the project root:

```bash
cd client
npm install
npm run dev:local
```

Then open:

```text
http://localhost:3000
```

If you want to run without the local API override:

```bash
cd client
npm run dev
```

## Start the server locally

Open a second terminal and run:

```bash
cd server
npm install
npm start
```

Or run it directly with:

```bash
cd server
node index.js
```

Then the API will be available at:

```text
http://localhost:5000
```

## Production link

The current deployed frontend is:

```text
https://portfolio-roan-two-48.vercel.app
```

The API used by the frontend is configured in [client/app/menu/[pageId]/page.tsx](client/app/menu/[pageId]/page.tsx):

```ts
const apiUrl = process.env.API_URL ?? "https://server-lac-two.vercel.app";
```

## Where the last problem was

The last production issue was in the backend CORS config in [server/index.js](server/index.js):

```js
app.use(
  cors({
    origin: "portfolio-roan-two-48.vercel.app",
    method: ["POST", "GET"],
    credentials: true,
  })
);
```

This is the part that needed to match the production frontend domain. If the frontend domain changes, the CORS origin must also be updated there.
