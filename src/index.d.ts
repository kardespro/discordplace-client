// index.d.ts

declare module '@discordplace/client' {
    export interface IBotStats {
        server_count: number;
        commands_count: number;
    }

    export class DiscordPlaceClient {
        constructor(options: { apiKey: string; botID: string });
        
        bot: {
            postBotStats(stats: IBotStats): Promise<boolean>;
        };
    }
}