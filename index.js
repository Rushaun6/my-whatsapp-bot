const { create, Client } = require('@open-wa/wa-automate');

// Replace 'YOUR_SESSION_ID_HERE' with your actual session ID
create({ sessionId: "Ice~jFPpEt", headless: true }).then(client => start(client));

function start(client) {
    console.log("🎰 WhatsApp Slot Bot is online! 🎰");

    client.onMessage(message => {
        const text = message.body.toLowerCase();

        // Greetings
        if (text === 'hi' || text === 'hello') {
            client.sendText(message.from, "Hey there! 😎 Ready to test your luck? Type *!slot* 🎰 to spin!");
        }

        // Slot machine command
        if (text === '!slot') {
            const symbols = ['🍒','🍋','🍉','⭐','💎','🍀'];
            let spin = [];
            for (let i = 0; i < 3; i++) {
                spin.push(symbols[Math.floor(Math.random() * symbols.length)]);
            }

            const result = spin.join(' | ');

            // Winning logic
            if (spin[0] === spin[1] && spin[1] === spin[2]) {
                client.sendText(message.from, `🎉 JACKPOT! You got: ${result} 🎉\nBig win! 💰`);
            } else if (spin[0] === spin[1] || spin[1] === spin[2] || spin[0] === spin[2]) {
                client.sendText(message.from, `😊 Nice! You got: ${result}\nSmall win! 💵`);
            } else {
                client.sendText(message.from, `😢 Oops! You got: ${result}\nBetter luck next time! 🍀`);
            }
        }
    });
            }
