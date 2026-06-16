import { Markup } from "telegraf";
import { messages } from "./messages.js";

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getUserName(ctx) {
  return ctx.from.username || ctx.from.first_name || "seunome";
}

function getMention(ctx) {
  if (ctx.from.username) {
    return `@${ctx.from.username}`;
  }

  return ctx.from.first_name || "alguém";
}

export const menuKeyboard = Markup.inlineKeyboard([
  [
    Markup.button.callback("😂 Piada", "joke"),
    Markup.button.callback("🎯 Desafio", "challenge")
  ],
  [
    Markup.button.callback("🎲 Dado", "dice"),
    Markup.button.callback("🪙 Cara ou coroa", "coin")
  ],
  [
    Markup.button.callback("🧠 Quiz", "quiz"),
    Markup.button.callback("🏆 Ranking", "ranking")
  ]
]);

function sendMenu(ctx) {
  const username = getUserName(ctx);

  return ctx.reply(messages.menu(username), {
    parse_mode: "Markdown",
    ...menuKeyboard
  });
}

function sendJoke(ctx) {
  return ctx.reply(randomItem(messages.jokes));
}

function sendChallenge(ctx) {
  return ctx.reply(randomItem(messages.challenges));
}

function sendDice(ctx) {
  const number = Math.floor(Math.random() * 6) + 1;

  const comments = [
    "Nada mal. Já vi decisões piores sendo tomadas com menos.",
    "O destino falou. Meio torto, mas falou.",
    "Resultado oficial do instituto tirei da cabeça.",
    "Com esse número aí dá pra fingir que havia estratégia.",
    "Parabéns. Absolutamente nada mudou.",
    "O dado rodou mais que muita gente tentando explicar sumiço."
  ];

  return ctx.reply(messages.diceResult(number, randomItem(comments)), {
    parse_mode: "Markdown"
  });
}

function sendCoin(ctx) {
  const result = Math.random() < 0.5 ? "Cara" : "Coroa";

  const comments = [
    "O destino decidiu. Reclama com ele.",
    "Tá aí. Agora finge que isso ajudou.",
    "A moeda falou com mais clareza que muita reunião.",
    "Se der ruim, a culpa é da física.",
    "Decisão tomada com 0% de responsabilidade emocional."
  ];

  return ctx.reply(messages.coinResult(result, randomItem(comments)), {
    parse_mode: "Markdown"
  });
}

function sendRanking(ctx) {
  return ctx.reply(randomItem(messages.rankings), {
    parse_mode: "Markdown"
  });
}

function sendQuiz(ctx) {
  const quiz = randomItem(messages.quizQuestions);

  const buttons = quiz.options.map((option, index) => [
    Markup.button.callback(option, `quiz_${quiz.correct}_${index}`)
  ]);

  return ctx.reply(quiz.question, {
    parse_mode: "Markdown",
    ...Markup.inlineKeyboard(buttons)
  });
}

function sendDuel(ctx) {
  const text = ctx.message.text || "";
  const opponent = text.replace("/duelo", "").trim();

  if (!opponent) {
    return ctx.reply(messages.duelMissing);
  }

  const challenger = getMention(ctx);
  const theme = randomItem(messages.duelThemes);

  return ctx.reply(messages.duel(challenger, opponent, theme), {
    parse_mode: "Markdown"
  });
}

export function registerCommands(bot) {
  bot.start((ctx) => sendMenu(ctx));

  bot.command("menu", (ctx) => sendMenu(ctx));

  bot.command("piada", (ctx) => sendJoke(ctx));

  bot.command("desafio", (ctx) => sendChallenge(ctx));

  bot.command("dado", (ctx) => sendDice(ctx));

  bot.command("caraoucoroa", (ctx) => sendCoin(ctx));

  bot.command("ranking", (ctx) => sendRanking(ctx));

  bot.command("quiz", (ctx) => sendQuiz(ctx));

  bot.command("duelo", (ctx) => sendDuel(ctx));

  bot.action("joke", async (ctx) => {
    await ctx.answerCbQuery();
    return sendJoke(ctx);
  });

  bot.action("challenge", async (ctx) => {
    await ctx.answerCbQuery();
    return sendChallenge(ctx);
  });

  bot.action("dice", async (ctx) => {
    await ctx.answerCbQuery();
    return sendDice(ctx);
  });

  bot.action("coin", async (ctx) => {
    await ctx.answerCbQuery();
    return sendCoin(ctx);
  });

  bot.action("ranking", async (ctx) => {
    await ctx.answerCbQuery();
    return sendRanking(ctx);
  });

  bot.action("quiz", async (ctx) => {
    await ctx.answerCbQuery();
    return sendQuiz(ctx);
  });

  bot.action(/^quiz_(\d+)_(\d+)$/, async (ctx) => {
    const correct = Number(ctx.match[1]);
    const selected = Number(ctx.match[2]);

    await ctx.answerCbQuery();

    if (correct === selected) {
      return ctx.reply(messages.quizAnswerCorrect);
    }

    return ctx.reply(messages.quizAnswerWrong);
  });

  bot.on("text", (ctx) => {
    const text = ctx.message.text.toLowerCase();

    if (text.includes("quack")) {
      return ctx.reply("Quack detectado. Finalmente alguém falando meu idioma. 🦆");
    }

    if (text.includes("bom dia")) {
      return ctx.reply("Bom dia. Ou boa tentativa de fingir produtividade.");
    }

    if (text.includes("boa noite")) {
      return ctx.reply("Boa noite. Vai dormir antes que mande mensagem emocional.");
    }

    if (text.includes("kkkk")) {
      return ctx.reply("Risada registrada. Sinceridade ainda em análise.");
    }
  });
}