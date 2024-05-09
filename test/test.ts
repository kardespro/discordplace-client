import { DiscordPlaceClient } from "../src";
const client = new DiscordPlaceClient({
  apiKey: "Blblabla",
  botID: "3131323838",
});
 
(async() => {
    const stats = {
        server_count: 31,
        commands_count: 31
    }
  const clientResponse = await client.bot.postBotStats(stats)
  console.log(clientResponse)
})()
