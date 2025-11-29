import wa from '@open-wa/wa-automate';
import { readFileSync } from 'fs';

const config = JSON.parse(readFileSync('./config.json', 'utf-8'));
const sessionId = config.sessionId;

wa.create({
    sessionId: sessionId,
    multiDevice: true,
    useChrome: true
}).then(client => startBot(client));

function startBot(client) {
    console.log('🚀 WhatsApp bot started!');

    client.onMessage(async message => {
        const text = message.body.toLowerCase();

        if (text === '/menu') {
            await client.sendText(message.from, '📜 Bot Commands:\n1. /menu - Show commands\n2. /ping - Test bot\n3. /download <url> - Download media');
        }

        if (text.startsWith('/ping')) {
            await client.sendText(message.from, '🏓 Pong!');
        }

        if (text.startsWith('/download')) {
            const url = text.split(' ')[1];
            if (!url) return client.sendText(message.from, '❌ Please provide a URL');
            // Simple download placeholder
            await client.sendText(message.from, `Downloading from: ${url}`);
        }
    });
    }
