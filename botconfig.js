module.exports = {
  Admins: ["405543536042311701"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "OTE2MDUwNDg5ODQ4NzY2NDg0.YakggA.4K85VhEqRMnQF_KRKowT-5Pcxv8", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "916050489848766484", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "jLNKNVDq_y6IiZO2ctYhUbvrlN6_mbVK", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Agista is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "0.0.0.0", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "host name or IP",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "your password",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "3f27651f6b1d4261be1d224d72a9bed9", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "48aec246d4f5480a8f31996505f3aea2", //Spotify Client Secret
  },
};
