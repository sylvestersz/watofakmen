module.exports = {
  token: process.env.token || "OTE2MDUwNDg5ODQ4NzY2NDg0.YakggA.xmwpvAZefpAg-oFHQCGFia1vwHM", //Bot's Token
  clientId: process.env.clientId || "916050489848766484", //ID of the bot
  clientSecret: process.env.clientSecret || "jLNKNVDq_y6IiZO2ctYhUbvrlN6_mbVK", //Client Secret of the bot
  port: 3000, //Port of the API and Dashboard
  scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  serverDeafen: true, //If you want bot to stay deafened
  defaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  supportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  permissions: 2205281600, //Bot Inviting Permissions
  // lavalink list https://lavalink-list.darrennathanael.com/
  nodes: [
    {
      identifier: "Main",
      host: "",
      port: 80,
      password: "",
      retryAmount: 5, //- Optional
      retryDelay: 1000, //- Optional
      //secure: true //- Optional | Default: false
    },
  ], //Lavalink servers
  embedColor: "BLUE", //Color of the embeds
  presence: {
    //PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "online", // You can have online, idle, and dnd(invisible too but it make people think the bot is offline)
    activities: [
      {
        name: "Music", //Status Text
        type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
        url: "https://github.com/SudhanPlayz/Discord-MusicBot", // Link streaming url
      },
    ],
  },
  iconURL:
    "https://github.com/SudhanPlayz/Discord-MusicBot/raw/master/assets/logo.gif", //This icon will be in every embed's author field
};
