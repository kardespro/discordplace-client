import axios, { AxiosInstance } from 'axios';
import IBotStats from './interfaces/IBotStats';

export class DiscordPlaceClient {
    private apiKey: string;
    private client: AxiosInstance;
    private botID: string;

    public bot: {
        postBotStats: (stats: IBotStats) => Promise<boolean>;
    };

    constructor({ apiKey, botID }: { apiKey: string, botID: string }) {
        this.apiKey = apiKey;
        this.botID = botID;
        this.client = axios.create({
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

    private async postBotStats(stats: IBotStats): Promise<boolean> {
        try {
            const response = await this.client.patch(`/bots/${this.botID}/stats`, stats);
            return response.data.success as boolean;
        } catch (error) {
            console.error('Error posting bot stats:', error);
            return false;
        }
    }
}