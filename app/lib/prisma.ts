
import { PrismaClient } from '@prisma/client';

// Declare a global variable to hold the PrismaClient instance.
// This is necessary to avoid re-instantiating the client in development with hot-reloading.
// The `global` object is available in Node.js.
// For TypeScript, we extend the `global` type to include our custom property.
declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  // In production, always create a new instance (no hot-reloading concerns)
  prisma = new PrismaClient();
} else {
  // In development, use the global object to prevent multiple instances
  // due to hot-reloading mechanisms often used by development servers (like Next.js, Vite, etc.)
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;