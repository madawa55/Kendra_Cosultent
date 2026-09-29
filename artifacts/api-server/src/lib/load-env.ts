import { existsSync } from "node:fs";
import path from "node:path";
import { config } from "dotenv";

function findEnvFile(): string | undefined {
  let dir = import.meta.dirname;
  for (let i = 0; i < 10; i++) {
    const candidate = path.join(dir, ".env");
    if (existsSync(candidate)) return candidate;
    const parent = path.dirname(dir);
    if (parent === dir) return undefined;
    dir = parent;
  }
  return undefined;
}

const envFile = findEnvFile();
if (envFile) {
  config({ path: envFile });
}
