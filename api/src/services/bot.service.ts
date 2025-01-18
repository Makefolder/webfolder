import env from '@/config';
import { Telegraf } from 'telegraf';

export class BotService {
  private token: string;
  private bot: Telegraf;

  constructor(private readonly adminChatId: string) {
    this.token = env.TG_TOKEN;
    this.bot = new Telegraf(this.token);
    if (!env.ADMIN_CHAT_ID) {
      this.bot.start((ctx) =>
        ctx.reply(
          `Please, setup your admin chat id in .env file! \nYour chat id is ${ctx.chat.id.toString()}`
        )
      );
    } else {
      this.bot.start((ctx) =>
        ctx.reply(`Hello, ${env.ADMIN_NAME || 'Makefolder'}!`)
      );
      this.authorizedLogic(this.bot, this.adminChatId);
    }
    this.bot.launch();
  }

  private async authorizedLogic(bot: Telegraf, adminChatId: string) {
    bot.command('about', (ctx) => {
      ctx.reply('This is a bot created by @killer-whale');
    });
    bot.command('help', (ctx) => {
      ctx.reply('This is a bot created by @killer-whale');
    });
    bot.command('ping', (ctx) => {
      ctx.reply('Pong!');
    });
    bot.command('echo', (ctx) => {
      ctx.reply(ctx.message.text);
    });
  }
}
