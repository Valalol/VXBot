// index.js
require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// When the bot is ready
client.on(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
});

// When a message is sent
client.on(Events.MessageCreate, (message) => {
    if (message.author.bot) return; // ignore bot messages


    // Collect all converted links
    const replyLinks = [];

    // Find all https://x.com/... or https://twitter.com/... links
    const xComRegex = /https:\/\/(?:x|twitter)\.com\/([^\s]+)/gi;
    let xMatch;
    while ((xMatch = xComRegex.exec(message.content)) !== null) {
        replyLinks.push(`https://fixvx.com/${xMatch[1]}`);
    }

    // Find all https://www.instagram.com/... links
    const instaRegex = /https:\/\/www\.instagram\.com\/([^\s]+)/gi;
    let instaMatch;
    while ((instaMatch = instaRegex.exec(message.content)) !== null) {
        replyLinks.push(`https://www.instagramez.com/${instaMatch[1]}`);
    }

    // Find all https://www.reddit.com/... links
    const redditRegex = /https:\/\/www\.reddit\.com\/([^\s]+)/gi;
    let redditMatch;
    while ((redditMatch = redditRegex.exec(message.content)) !== null) {
        replyLinks.push(`https://www.rxddit.com/${redditMatch[1]}`);
    }

    // Send all links in one reply if any found
    if (replyLinks.length > 0) {
        message.suppressEmbeds();
        message.reply(replyLinks.join('\n'));
    }
});

// Login using your bot token
client.login(process.env.TOKEN);
