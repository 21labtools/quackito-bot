export const messages = {
  menu: (username) => `
Salve, @${username}! 🦆

Sou o QuackitoBot.

Não resolvo sua vida, mas posso deixar esse grupo menos morto.

Escolhe aí o que tu quer fazer:
`,

  jokes: [
    "Esse grupo tá tão parado que se fosse planta já tinha virado decoração seca.",
    "Eu ia contar uma piada boa, mas lembrei que tô em grupo de Telegram.",
    "Tem gente aqui que aparece menos que promoção verdadeira na internet.",
    "O silêncio desse grupo é tão grande que dá pra ouvir o boleto vencendo.",
    "Se sumiço desse ponto, metade do grupo já tava no ranking mundial.",
    "Esse grupo tem mais visualização fantasma que filme de terror barato.",
    "Tem mensagem aqui que recebe menos atenção que termos de uso.",
    "A energia desse grupo hoje tá igual carregador falso: promete, mas não entrega."
  ],

  challenges: [
    "🎯 Desafio: o próximo que mandar mensagem tem que explicar por que sumiu do grupo sem usar a palavra 'correria'.",
    "🎯 Desafio: manda um áudio de até 5 segundos falando 'quack' com dignidade. Spoiler: não tem como.",
    "🎯 Desafio: marque alguém que só aparece quando tem confusão.",
    "🎯 Desafio: o último que reagir nessa mensagem assume oficialmente o cargo de figurante do grupo.",
    "🎯 Desafio: mande uma frase motivacional ruim o suficiente para parecer post de coach.",
    "🎯 Desafio: quem mandar a pior desculpa para não responder mensagem vence moralmente.",
    "🎯 Desafio: descreva seu dia em uma palavra. Se for 'cansado', você desbloqueou o modo CLT espiritual.",
    "🎯 Desafio: marque a pessoa que mais promete participar e desaparece."
  ],

  duelThemes: [
    "quem tem mais cara de que responde 'kkkk' sem ter rido",
    "quem sumiria primeiro em uma reunião importante",
    "quem sobreviveria menos tempo sem internet",
    "quem tem mais energia de administrador cansado",
    "quem parece que já nasceu devendo explicação",
    "quem venceria uma discussão sem argumentos, só no volume",
    "quem tem mais chance de falar 'só mais 5 minutinhos' e sumir por 3 horas",
    "quem mandaria figurinha no momento mais inadequado possível"
  ],

  rankings: [
    `
🏆 *Ranking moral do grupo*

1. O que só observa e nunca fala
2. O que aparece, causa e some
3. O fiscal de figurinha
4. O que promete participar
5. O que manda "vou ver" e nunca vê
`,

    `
🏆 *Top membros duvidosos*

1. O sumido premium
2. O online que não responde
3. O mestre do vácuo
4. O palestrinha ocasional
5. O que entra no grupo e esquece que entrou
`,

    `
🏆 *Ranking de energia do grupo*

1. Caos
2. Vácuo
3. Figurinha aleatória
4. "Bom dia" às 14h
5. Alguém tentando organizar tudo sozinho
`
  ],

  quizQuestions: [
    {
      question: "🧠 Quiz relâmpago:\n\nQual é o maior perigo de um grupo parado?",
      options: [
        "Virar grupo de bom dia",
        "Alguém mandar corrente",
        "O admin surtar",
        "Todas as anteriores"
      ],
      correct: 3
    },
    {
      question: "🧠 Quiz relâmpago:\n\nSe alguém diz 'vou ver e te aviso', isso significa:",
      options: [
        "Vai ver mesmo",
        "Vai avisar em breve",
        "Acabou ali",
        "Depende da lua"
      ],
      correct: 2
    },
    {
      question: "🧠 Quiz relâmpago:\n\nQual frase mais ativa o modo caos no grupo?",
      options: [
        "Tenho uma ideia",
        "Sem querer causar...",
        "Só uma dúvida rápida",
        "Vamos organizar isso"
      ],
      correct: 1
    },
    {
      question: "🧠 Quiz relâmpago:\n\nQual animal representa melhor esse bot?",
      options: [
        "Águia",
        "Leão",
        "Pato debochado",
        "Tubarão de LinkedIn"
      ],
      correct: 2
    }
  ],

  diceResult: (number, comment) => `
🎲 O dado caiu em: *${number}*

${comment}
`,

  coinResult: (result, comment) => `
🪙 Deu: *${result}*

${comment}
`,

  duel: (challenger, opponent, theme) => `
⚔️ *Duelo iniciado!*

${challenger} chamou ${opponent} para o confronto.

Tema do duelo:
*${theme}*

Que vença o menos constrangedor.
`,

  duelMissing: `
⚔️ Marca alguém pra duelar.

Use assim:
/duelo @usuario
`,

  quizAnswerCorrect: `
✅ Acertou.

Infelizmente isso não paga boleto, mas já é alguma coisa.
`,

  quizAnswerWrong: `
❌ Errou.

Mas relaxa, já vi decisões piores sendo defendidas com confiança.
`,

  unknown: `
Não entendi nada, mas respondi com presença.

Usa /menu pra ver o que eu sei fazer.
`
};