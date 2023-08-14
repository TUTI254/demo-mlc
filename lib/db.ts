import { PrismaClient } from "@prisma/client";
import "server-only";

// purpose of this file : to make sure that prisma is instantiated only once

declare global {
  var cachedPrisma: PrismaClient;
}

// if we are in production, instantiate prisma directly (no caching)
// else cache it and use the cached version (to avoid memory leaks)

export let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}
