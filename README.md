# Stock Market

This project uses Next.js and MongoDB via Mongoose.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Database Connection Test

A database test script is included so you can verify your MongoDB connection without starting the whole app.

Run it with:

```bash
npm run db:test
```

If the connection works, you should see output similar to:

```bash
MongoDB connection test passed.
Protocol: mongodb+srv
Requested host: cluster.mongodb.net
Connected host: ac-xxxxx.mongodb.net
Connected port: 27017
Requested database: (default)
Database name: test
Ready state: 1
```

If it fails, the command will print the error message and exit with a non-zero status.

## Step-By-Step: Test MongoDB Yourself

1. Open `.env` and make sure `MONGODB_URI` is present.
2. Keep the env format simple, for example:

```env
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0
```

3. Install dependencies if you have not already:

```bash
npm install
```

4. Run the database test:

```bash
npm run db:test
```

5. Confirm the result:
   `MongoDB connection test passed.` means the URI is valid and the database is reachable.
6. If it fails, check:
   your username/password in `MONGODB_URI`
   your MongoDB Atlas network access settings
   whether the cluster is running

## Relevant Files

- `database/moongoose.ts`: shared Mongoose connection helper
- `scripts/test-db-connection.ts`: standalone MongoDB test script
