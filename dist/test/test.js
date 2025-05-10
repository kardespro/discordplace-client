"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const client = new src_1.DiscordPlaceClient({
    apiKey: "Blblabla",
    botID: "3131323838",
});
(async () => {
    const stats = {
        server_count: 31,
        commands_count: 31
    };
    const clientResponse = await client.bot.postBotStats(stats);
    console.log(clientResponse);
})();
