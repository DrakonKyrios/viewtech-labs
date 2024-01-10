export const VITE_ENVIRONMENT = "local";
export const VITE_ALGOD_TOKEN =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
export const VITE_ALGOD_SERVER = "http://localhost";
export const VITE_ALGOD_PORT = 4001;
export const VITE_ALGOD_NETWORK = "";

export const VITE_INDEXER_TOKEN =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
export const VITE_INDEXER_SERVER = "http://localhost";
export const VITE_INDEXER_PORT = 8980;

export const VITE_KMD_TOKEN =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
export const VITE_KMD_SERVER = "http://localhost";
export const VITE_KMD_PORT = 4002;
export const VITE_KMD_WALLET = "unencrypted-default-wallet";
export const VITE_KMD_PASSWORD = "";

export function getAlgodConfigFromViteEnvironment() {
  if (!VITE_ALGOD_SERVER) {
    throw new Error(
      "Attempt to get default algod configuration without specifying VITE_ALGOD_SERVER in the environment variables"
    );
  }

  return {
    server: VITE_ALGOD_SERVER,
    port: VITE_ALGOD_PORT,
    token: VITE_ALGOD_TOKEN,
    network: VITE_ALGOD_NETWORK,
  };
}

export function getIndexerConfigFromViteEnvironment() {
  if (!VITE_INDEXER_SERVER) {
    throw new Error(
      "Attempt to get default algod configuration without specifying VITE_INDEXER_SERVER in the environment variables"
    );
  }

  return {
    server: VITE_INDEXER_SERVER,
    port: VITE_INDEXER_PORT,
    token: VITE_INDEXER_TOKEN,
    network: VITE_ALGOD_NETWORK,
  };
}

export function getKmdConfigFromViteEnvironment() {
  if (!VITE_KMD_SERVER) {
    throw new Error(
      "Attempt to get default kmd configuration without specifying VITE_KMD_SERVER in the environment variables"
    );
  }

  return {
    server: VITE_KMD_SERVER,
    port: VITE_KMD_PORT,
    token: VITE_KMD_TOKEN,
    wallet: VITE_KMD_WALLET,
    password: VITE_KMD_PASSWORD,
  };
}
