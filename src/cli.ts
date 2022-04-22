import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient();

const repl = require('repl');

const replServer = repl.start('> ');

replServer.context.prisma = prisma;
