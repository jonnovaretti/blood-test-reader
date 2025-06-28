# blood-test-reader

This repository contains a full stack monorepo managed with Nx. It includes a Next.js client application, a NestJS server application and a shared library with DTOs used by both sides.

## Apps
- **clients**: Next.js frontend located in `apps/clients`.
- **servers**: NestJS backend located in `apps/servers`.
- **shared**: library with shared DTOs in `libs/shared`.
- Database entities live in server modules under `apps/servers/src`.

## Features
- Tailwind CSS with shadcn UI and Framer Motion on the client.
- Google, Facebook and Instagram sign up using NextAuth.
- Account page to manage personal data and blood tests.
- Chat page that streams responses from the Vercel AI SDK (OpenAI).
- MySQL database configured via TypeORM on the server side with JWT authentication, Swagger docs and Cloudinary storage.

## Development
Install dependencies and run the apps:

```bash
npm install
npm run dev:servers  # start NestJS API on port 3001
npm run dev:clients  # start Next.js app
```
