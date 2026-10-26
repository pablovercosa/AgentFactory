import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const secretsDirectory = fileURLToPath(
  new URL("../../.fontes/Secrets/", import.meta.url),
);
const projectDirectory = fileURLToPath(new URL("../../", import.meta.url));
const envPath = new URL("../../.fontes/Secrets/obsidian.env", import.meta.url);
const certificatePath = fileURLToPath(
  new URL("../../.fontes/Secrets/obsidian-local-rest-api.crt", import.meta.url),
);

function readEnvValue(contents, name) {
  const line = contents
    .split(/\r?\n/)
    .find((entry) => new RegExp(`^\\s*(?:export\\s+)?${name}\\s*=`).test(entry));

  if (!line) throw new Error(`${name} ausente em .fontes/Secrets/obsidian.env`);

  let value = line.replace(new RegExp(`^\\s*(?:export\\s+)?${name}\\s*=\\s*`), "").trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  } else {
    value = value.replace(/\s+#.*$/, "").trim();
  }

  if (!value) throw new Error(`${name} vazio em .fontes/Secrets/obsidian.env`);
  return value;
}

let apiKey;
let port;
try {
  const contents = await readFile(envPath, "utf8");
  apiKey = readEnvValue(contents, "API_KEY");
  port = Number(readEnvValue(contents, "PORT"));
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT inválida em .fontes/Secrets/obsidian.env");
  }
} catch (error) {
  console.error(`Não foi possível carregar a credencial do Obsidian: ${error.message}`);
  process.exit(1);
}

const authorization = /^Bearer\s+/i.test(apiKey) ? apiKey : `Bearer ${apiKey}`;

const child = spawn(
  "npx",
  [
    "--yes",
    "mcp-remote",
    `https://127.0.0.1:${port}/mcp/`,
    "--header",
    "Authorization: ${AUTH_HEADER}",
  ],
  {
    env: {
      ...process.env,
      AUTH_HEADER: authorization,
      NODE_EXTRA_CA_CERTS: certificatePath,
    },
    stdio: "inherit",
    cwd: projectDirectory,
  },
);

child.on("error", (error) => {
  console.error(`Falha ao iniciar o cliente MCP do Obsidian: ${error.message}`);
  process.exitCode = 1;
});
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exitCode = code ?? 1;
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
