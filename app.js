
const { Telegraf } = require('telegraf');

const bot = new Telegraf('5705992621:AAFQ4-5woNSs8PjOEZIMRJy_CdySzTYdMDQ');
bot.use((ctx)=>{
    ctx.reply("hi,human!!");
})
bot.launch();
