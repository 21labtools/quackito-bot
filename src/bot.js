import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { messages } from "./messages.js";
import { registerCommands, menuKeyboard } from "./commands.js";

const bot = new Telegraf(config.botToken);

registerCommands(bot);

bot.on("new_chat_members", async (ctx) => {
  for (const member of ctx.message.new_chat_members) {
    const name = member.username
      ? `@${member.username}`
      : member.first_name || "novo membro";

    await ctx.reply(
      `
Salve, ${name}! 🦆

Bem-vindo ao caos organizado.

Eu sou o QuackitoBot.
Faço piada, puxo desafio, rodo dado, faço quiz e observo o grupo fingindo que tá tudo sob controle.

Como posso te ajudar hoje?
`,
      {
        parse_mode: "Markdown",
        ...menuKeyboard
      }
    );
  }
});

bot.catch((err, ctx) => {
  console.error("Erro no bot:", err);
  console.error("Update com erro:", ctx.update);
});

bot.launch();

console.log("🤖 QuackitoBot interativo iniciado com sucesso!");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));