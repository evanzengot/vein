const express = require('express');
const { Client, IntentsBitField } = require('discord.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.static('./'));

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.DirectMessages
  ]
});

// Discord user IDs to track (update these with your actual user IDs)
const USER_IDS = [
  '1219896604291633214', // Replace with actual Discord user IDs
  '1460263176884195363',
  '1444236670399676426',
  '450132883248644097',
  '1011825421345624114',
  '1237435631936733286',
  '1488619007350276198',
  '704976099624353883'
];

const statusColors = {
  'online': '#23a55a',
  'idle': '#faa61a',
  'dnd': '#f23f42',
  'offline': '#747f8d'
};

client.once('ready', () => {
  console.log(`✅ Discord Bot logged in as ${client.user.tag}`);
});

// API endpoint to get user data
app.get('/api/users', async (req, res) => {
  try {
    const users = [];

    for (const userId of USER_IDS) {
      try {
        const user = await client.users.fetch(userId);
        const presence = client.guilds.cache.first()?.members.cache.get(userId)?.presence;

        users.push({
          id: userId,
          name: user.username,
          avatar: user.displayAvatarURL({ size: 512 }),
          status: 'online',
          customStatus: presence?.activities.find(a => a.type === 4)?.state || 'No status set',
          statusColor: statusColors.online
        });
      } catch (error) {
        console.error(`Could not fetch user ${userId}:`, error.message);
      }
    }

    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Start bot and server
const BOT_TOKEN = process.env.DISCORD_TOKEN;
if (!BOT_TOKEN) {
  console.error('❌ DISCORD_TOKEN not found in .env file');
  console.error('Please create a .env file with: DISCORD_TOKEN=your_bot_token');
  process.exit(1);
}

client.login(BOT_TOKEN);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
  console.log('📝 Update USER_IDS in server.js with your Discord user IDs');
});
