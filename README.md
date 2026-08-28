'# Vein - Discord Team Showcase

A beautiful, real-time Discord team showcase with automatic status syncing.

## Setup Instructions

### 1. Create a Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and name it "Vein"
3. Go to **Bot** section and click "Add Bot"
4. Under TOKEN, click "Copy" - **save this token safely**
5. Enable these **Intents**:
   - ✅ Server Members Intent
   - ✅ Presence Intent
6. Go to **OAuth2 → URL Generator**
7. Select scopes: `bot`
8. Select permissions: `Read Messages/View Channels`
9. Copy the generated URL and join the bot to your server

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Bot Token

1. Open `.env` file
2. Replace `your_bot_token_here` with your bot token:
   ```
   DISCORD_TOKEN=your_actual_bot_token_here
   ```

### 4. Add Discord User IDs

1. Open `server.js`
2. Find the `USER_IDS` array (around line 18)
3. Replace with your team members' Discord user IDs:
   ```javascript
   const USER_IDS = [
     '123456789',  // Your user ID
     '987654321',  // Team member 1
     // ... etc
   ];
   ```

**How to get Discord User IDs:**
- Enable Developer Mode in Discord (User Settings → Advanced → Developer Mode)
- Right-click any user and select "Copy User ID"

### 5. Start the Server

```bash
npm start
```

The server will run at `http://localhost:3000`

### 6. Open in Browser

Open `http://localhost:3000` in your browser. The site will:
- ✨ Show the typing animation intro
- 🔄 Auto-sync Discord statuses every 10 seconds
- 🎯 Display real avatars and custom statuses
- 🟢 Show live online/idle/dnd/offline status

## Features

- ⚡ Real-time Discord status syncing
- 🎨 Beautiful dark theme with pink accents
- 3️⃣ 3D tilt effect on cards
- ⌨️ Typing animation intro
- 🔄 Auto-refresh every 10 seconds
- 🟢 Color-coded status indicators

## Troubleshooting

**"⚠️ Make sure the backend server is running"**
- Run `npm start` in terminal

**Bot doesn't show user statuses**
- Make sure bot is in the same server as the users
- Verify Presence Intent is enabled in Developer Portal
- Check that user IDs are correct

**CORS errors**
- Backend is set up with CORS - should work fine

## File Structure

```
/ccapcom
├── index.html       # Frontend (open this in browser)
├── server.js        # Backend (run with npm start)
├── package.json     # Dependencies
├── .env             # Bot token (keep secret!)
└── users.json       # (Optional) Manual user data
```
