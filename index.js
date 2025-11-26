const { create, Client } = require('@open-wa/wa-automate');

create({ sessionId: "MY_SESSION", headless: true }).then(client => start(client));

function start(client) {
    console.log("🎰 Slot Bot is running! 🎰");

    client.onMessage(message => {
        const text = message.body.toLowerCase();

        // Greet users
        if (text === 'hi' || text === 'hello') {
            client.sendText(message.from, "Hey there! 😎 Ready to try your luck? Type *!slot* 🎰 to spin!");
        }

        // Slot machine command
        if (text === '!slot') {
            const symbols = ['🍒','🍋','🍉','⭐','💎','🍀'];
            let spin = [];
            for (let i = 0; i < 3; i++) {
                spin.push(symbols[Math.floor(Math.random() * symbols.length)]);
            }

            let result = spin.join(' | ');

            if (spin[0] === spin[1] && spin[1] === spin[2]) {
                client.sendText(message.from, `🎉 JACKPOT! You got: ${result} 🎉\nYou win big! 💰`);
            } else if (spin[0] === spin[1] || spin[1] === spin[2] || spin[0] === spin[2]) {
                client.sendText(message.from, `😊 Nice! You got: ${result}\nSmall win! 💵`);
            } else {
                client.sendText(message.from, `😢 Oops! You got: ${result}\nBetter luck next time! 🍀`);
            }
        }
    });
                            }
