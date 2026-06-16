import dotenv from "dotenv";

dotenv.config();

export const config = {
  botToken: process.env.BOT_TOKEN,
};

if (!config.botToken) {
  throw new Error("BOT_TOKEN não encontrado no arquivo .env");
}