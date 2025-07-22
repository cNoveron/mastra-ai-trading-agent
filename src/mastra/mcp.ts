import { MCPClient } from "@mastra/mcp"

export const mcp = new MCPClient({
  servers: {
    "recall-competitions-mcp": {
      command: "npx",
      args: ["-y", "../js-recall/packages/api-mcp/dist/index.js"],
      env: {
        API_KEY: process.env.RECALL_API_KEY || "",
        API_SERVER_URL: "https://api.sandbox.competitions.recall.network",
        WALLET_PRIVATE_KEY: process.env.RECALL_WALLET_PRIVATE_KEY || "",
        LOG_LEVEL: "info"
      },
    },
  },
});
