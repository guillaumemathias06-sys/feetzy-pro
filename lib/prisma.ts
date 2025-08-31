import { PrismaClient } from '@prisma/client'; export const prisma=(global as any).__p||new PrismaClient(); if(process.env.NODE_ENV!=='production')(global as any).__p=prisma;
