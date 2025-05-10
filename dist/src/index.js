"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordPlaceClient = void 0;
const axios_1 = __importDefault(require("axios"));
class DiscordPlaceClient {
    apiKey;
    client;
    botID;
    bot;
    constructor({ apiKey, botID }) {
        this.apiKey = apiKey;
        this.botID = botID;
        this.client = axios_1.default.create({
            baseURL: 'https://api.discord.place',
            headers: {
                'Authorization': `${this.apiKey}`,
                'Content-Type': 'application/json',
                'user-agent': 'Discord.place Client Nodejs',
            },
        });
        this.bot = {
            postBotStats: this.postBotStats.bind(this),
        };
    }
    async postBotStats(stats) {
        try {
            const response = await this.client.patch(`/bots/${this.botID}/stats`, stats);
            return response.data.success;
        }
        catch (error) {
            console.error('Error posting bot stats:', error);
            return false;
        }
    }
}
exports.DiscordPlaceClient = DiscordPlaceClient;
