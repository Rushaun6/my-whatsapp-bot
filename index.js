// WhatsApp Bot using open-wa with SESSION ID

import { create, Client } from '@open-wa/wa-automate';

create({
    sessionId: "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dVVERSVGNFekRuam81ek9NeHJCUk5vUk1PWEtsRXNHSFpOelFCd1Qxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGpOUndoVWpycGx3NDl4SHl6T3BBMzJUTE9vZkd6RXhnM1Awb0dYSTNtRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRk5TV0tnZVBxM09KSE9GbTdRZWh3RHJ6QzBwa0R0aDFkODdrVWJIWEhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ckxDNmdwaWtEcW5qZXFGSHI4T2crVnA3YkEwdlNsM1puL1FPU1RBUG1RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklLMWRZb3ZOWUJudGFaVDJYRzV3T2hOMjFUeVlRb0Y4N2R3dFp2dUoxblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlTV1AvQ1lDZmFtM2FzQWJCNXJiYUE5TmRHZk1jT1lBUHdpWjdocTlkekk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Zid3h3T3pFOGVmMEdwbGtoUG9LMW1XSE9TdDFIc1lsZjBLaUdNMEZrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTJudWs1Mkx0KzdrQUNRMzJNUXQ3VWliUmRGcCsvT3VqUHhHNXVzNHEyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcwczQ2L0VMdlJici9kVUllSzErSjJKajY2eGlDZzhhUElXa2hWeksxYXRyZzFabWlMSkxCT1E3MXRUclRRaVdxN2I3YzBxUnlWWVViZmh0ZWEwdWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJUSnd0bm5CUk5hZ3Y5c0ZJRmdwdVMwb1FlUDJXcGJrU2VTbHl4ZElteXFvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVY2N4eHJsUlMxbVNjWkFQNFllS1ZRIiwicGhvbmVJZCI6ImYxZTk3YjZhLTIxYjctNDIyNi05ZmY5LTY2MzJjMzgyNzNjOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0aC9aeUVDbzg3aTJROGgwZHRwbTJka3pkY2c9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhkdGZwbzJPQ3B5c2Uycy84SGptTWRIN1cwOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05qMzQ5b0VFSlMwcThrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZSZkdXbWYvM1ZSVkd0UUJHeWFPd2piQU5OUHg4OFdmZVBzaWROY0gyelk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRBaVlCMnhMMTJERHpYZWFEbzF1R0RZOWFpSnAvd1pRNmtMR3lORU9SU2ZVSDNRTXJkVktCV2lmZmp2TVpKbnJkVkphckhpWjRybTRJRnRkaVhiVERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUZEtzbjFlWUtBUEU5eGFObU1uejR2elBGQ1NuWm4vQXNvOFR2OGdzRk9PbVpHZWxpaXFQd212MW1WSldiVUxyK0d6YzJDTFdJaklRSGV6UXVFUG1nUT09In0sIm1lIjp7ImlkIjoiMTg3NjM5OTE0ODU6MTNAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTg3NjM5OTE0ODU6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlVYeGxwbi85MVVWUnJVQVJzbWpzSTJ3RFRUOGZQRm4zajdJblRYQjlzMiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NDQxNjAzNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMKzgifQ==",
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
