const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: 'EAAKZAgZBXnvBkBADTHGDwjoH6jw3Tt7Sf2nSizlMsdVc0Kqxt6tyFOxDYmWbu1zZCHHa0Y14n3rJQaSW4VT2kSU9S4ZBhg16bwd9aoaFqLZANfk0ro8szEK4ZCjtdLZBq1ead4bUU8bgP0uZCvOxCmVne3iotJWyGEbE8kl7q07hgeSapZBwWf7iH',
    verifyToken: 'cintarojachida',
    appSecret: '628d613c3b0846b37cdeffb0292d981e'
  });

/*
bot.on('message',(payload,chat)=>{
    console.log(payload)
    chat.say(`Echo: ${payload.message.text}`);
});  
*/

//Escuchar saludos
bot.hear(['hola','hi','que onda','holi'],(payload,chat)=>{
    chat.say('Hola soy el bot de Devf de cinta roja en que te puedo ayudar?')
});


//Escuchar despedidias
bot.hear(['adios','bye'],(payload,chat)=>{
    chat.say('Adios... :(')
});

//Mensaje con quickreplice
bot.hear(['comida', 'hambre'], (payload, chat) => {
	chat.say({
		text: 'Que deseas comer hoy????? ',
		quickReplies: ['Mexican', 'Italian', 'American', 'Argentine']
	});
});

//Enviar mensajes con botones
bot.hear(['ayuda'], (payload, chat) => {
	chat.say({
		text: 'En que te puedo ayudar?',
		buttons: [
			{ type: 'postback', title: 'Settings', payload: 'HELP_SETTINGS' },
			{ type: 'postback', title: 'FAQ', payload: 'HELP_FAQ' },
			{ type: 'postback', title: 'Talk to a human', payload: 'HELP_HUMAN' }
		]
	});
});



bot.on('postback:HELP_HUMAN',(payload,chat)=>{
    chat.say('Una persona estará contigo en unos momentos')
});

bot.start()