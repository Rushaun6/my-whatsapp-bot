const { create } = require('@open-wa/wa-automate');
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const fs = require('fs');

// Replace with your session ID
create({ sessionId: "Ice~jFPpEt", headless: true }).then(client => start(client));

function start(client) {
    console.log("🤖 WhatsApp Bot is online!");

    client.onMessage(async message => {
        const text = message.body.toLowerCase();

        // ---------- Slot Machine ----------
        if (text === '!slot') {
            const symbols = ['🍒','🍋','🍉','⭐','💎','🍀'];
            let spin = [];
            for (let i = 0; i < 3; i++) spin.push(symbols[Math.floor(Math.random() * symbols.length)]);
            const result = spin.join(' | ');

            if (spin[0] === spin[1] && spin[1] === spin[2]) {
                client.sendText(message.from, `🎉 JACKPOT! You got: ${result} 🎉\nBig win! 💰`);
            } else if (spin[0] === spin[1] || spin[1] === spin[2] || spin[0] === spin[2]) {
                client.sendText(message.from, `😊 Nice! You got: ${result}\nSmall win! 💵`);
            } else {
                client.sendText(message.from, `😢 Oops! You got: ${result}\nBetter luck next time! 🍀`);
            }
        }

        // ---------- Kick All Members ----------
        if (text === '!kickall') {
            try {
                const members = await client.getGroupMembers(message.chatId);
                for (const member of members) {
                    if (!member.isMe) await client.removeParticipant(message.chatId, member.id._serialized).catch(() => {});
                }
                client.sendText(message.from, "⚠️ Attempted to kick all members!");
            } catch (err) {
                client.sendText(message.from, "❌ Failed to kick members. Make sure I am an admin!");
            }
        }

        // ---------- Tag All Members ----------
        if (text === '@all') {
            try {
                const members = await client.getGroupMembers(message.chatId);
                const mentions = members.map(m => m.id._serialized);
                client.sendTextWithMentions(message.from, `👀 Attention everyone!`, mentions);
            } catch (err) {
                client.sendText(message.from, "❌ Failed to tag all members.");
            }
        }

        // ---------- Download Music (by link or search) ----------
        if (text.startsWith('!song ')) {
            const query = text.replace('!song ', '').trim();
            client.sendText(message.from, `🎵 Searching for: ${query}`);

            let url;
            if (ytdl.validateURL(query)) {
                url = query; // direct YouTube link
            } else {
                const r = await yts(query);
                const video = r.videos.length ? r.videos[0] : null;
                if (!video) return client.sendText(message.from, "❌ No results found!");
                url = video.url;
            }

            const filePath = `/tmp/song.mp3`;
            client.sendText(message.from, `🎶 Downloading...`);
            ytdl(url, { filter: 'audioonly' })
                .pipe(fs.createWriteStream(filePath))
                .on('finish', () => {
                    client.sendFile(message.from, filePath, 'song.mp3', `🎵 Here's your song!`);
                });
        }

        // ---------- Download Video (by link or search) ----------
        if (text.startsWith('!video ')) {
            const query = text.replace('!video ', '').trim();
            client.sendText(message.from, `🎬 Searching for: ${query}`);

            let url;
            if (ytdl.validateURL(query)) {
                url = query; // direct link
            } else {
                const r = await yts(query);
                const video = r.videos.length ? r.videos[0] : null;
                if (!video) return client.sendText(message.from, "❌ No results found!");
                url = video.url;
            }

            const filePath = `/tmp/video.mp4`;
            client.sendText(message.from, `🎬 Downloading...`);
            ytdl(url, { quality: 'highest' })
                .pipe(fs.createWriteStream(filePath))
                .on('finish', () => {
                    if (fs.statSync(filePath).size > 16000000) {
                        client.sendText(message.from, `⚠️ Video too large! Watch here: ${url}`);
                    } else {
                        client.sendFile(message.from, filePath, 'video.mp4', `🎬 Here's your video!`);
                    }
                });
        }

        // ---------- Greeting ----------
        if (text === 'hi' || text === 'hello') {
            client.sendText(message.from, "Hey there! 😎 Type *!slot* 🎰 to try your luck, or !song / !video to download content.");
        }
    });
}
