# Typescript, Express, Prisma

## Setup

run `npm install`

## Run Webserver

run `npm run start`

## Run Repl

run `npm run cli`

When in the CLI, you can interact with prisma. It's defined as a global.

```
> await prisma.user.findMany()
[
  { id: 1, name: 'Test McGee' },
  { id: 2, name: 'Test McGee' },
  { id: 3, name: 'Test McGee' },
  { id: 4, name: 'Test McGee' },
  { id: 5, name: 'Test McGee' }
]
```

## Prisma

If you want to make db changes, you can update the Sqlite database manually and then run the following:

Update the schema:
```
npx prisma db pull
```

Update the prisma client and types:
```
npx prisma generate
```
