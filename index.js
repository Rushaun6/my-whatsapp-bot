// WhatsApp Bot using open-wa with SESSION ID

import { create, Client } from '@open-wa/wa-automate';

create({
    sessionId: "Ice~bN9ecK",
    useChrome: false,
    headless: true,
    qrTimeout: 0,
    authTimeout: 0,
    killProcessOnBrowserClose: true,
    cacheEnabled: false
}).then((client) => start(client));

function start(client) {
    console.log("🔥 Bot Started Successfully!");

    client.onMessage(async (message) => {
        const text = message.body.toLowerCase();

        // --- KICK ALL ---
        if (text === "kick all" && message.isGroupMsg) {
            const group = await client.getGroupMembers(message.chatId);
            for (let member of group) {
                if (member.id !== message.sender.id) {
                    await client.removeParticipant(message.chatId, member.id);
                }
            }
            await client.sendText(message.chatId, "👢 All members removed.");
        }

        // --- TAG ALL ---
        if (text === "@all" && message.isGroupMsg) {
            const members = await client.getGroupMembers(message.chatId);
            const tags = members.map(m => `@${m.id.replace(/@c.us/, "")}`).join(" ");
            await client.sendTextWithMentions(message.chatId, `📢 *TAG ALL*\n${tags}`);
        }

        // --- SONG DOWNLOAD (YouTube MP3) ---
        if (text.startsWith("song ")) {
            const query = text.replace("song ", "");
            await client.sendText(message.chatId, `🎵 Searching for: *${query}* ...`);

            try {
                const response = await fetch(`https://api.vihangayt.com/downloader/ytmp3?query=${encodeURIComponent(query)}`);
                const data = await response.json();

                if (data.status === "ok") {
                    await client.sendFile(message.chatId, data.data.download_mp3, `${query}.mp3`, "🎶 Here is your song");
                } else {
                    await client.sendText(message.chatId, "❌ Couldn't download the song.");
                }
            } catch (e) {
                await client.sendText(message.chatId, "⚠️ Error while downloading.");
            }
        }

        // --- VIDEO / LINK DOWNLOADER ---
        if (text.startsWith("dl ")) {
            const url = text.replace("dl ", "");
            await client.sendText(message.chatId, `📥 Downloading: ${url}`);

            try {
                const response = await fetch(`https://api.vihangayt.com/downloader?url=${encodeURIComponent(url)}`);
                const data = await response.json();

                if (data && data.data && data.data.url) {
                    await client.sendFile(message.chatId, data.data.url, "file", "📥 Here is your download");
                } else {
                    await client.sendText(message.chatId, "❌ Couldn't download the file.");
                }
            } catch (e) {
                await client.sendText(message.chatId, "⚠️ Error while downloading link.");
            }
        }
    });
}
