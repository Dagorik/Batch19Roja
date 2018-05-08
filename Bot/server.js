const express = require('express')
const bodyParser = require('body-parser')
const Bot = require('./Bot')
const FacebookService = require('./config')
const app = express();

const generic =  [
    {'title': 'La construcción',
    'image_url':'https://urbania.pe/blog/wp-content/uploads/2015/02/edificio-lum1.jpg',
    'subtitle':'Este es el subtitulo :D',
    'buttons':[
     {'type':'postback',
       'title':'Cotizar',
       'payload':'COTIZAR_CONSTRUCCION_POSTBACK'}
   ]},
   {'title': 'Los contenidos',
   'image_url':'http://s3.amazonaws.com/digitaltrends-uploads-prod/2013/08/home-theater-under-3000-k.jpg',
   'subtitle':' ',
   'buttons':[
    {'type':'postback',
      'title':'Cotizar',
      'payload':'COTIZAR_CONTENIDOS_POSTBACK'}
  ]},
  {'title': 'Construcción y contenidos',
  'image_url':'https://www.deinmuebles.com.mx/wp-content/uploads/2016/11/Diseno-de-sala-y-cocina-de-mini-departamento.jpg',
  'subtitle':' ',
  'buttons':[
   {"type":"web_url",
      "title":"Latest News",
      "url":"https://www.messenger.com/",
      "webview_height_ratio":"tall"}
 ]}
]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Bot de cinta roja!!!!!!!')
});

//Este get es para que FB valide nustro verifyToken
app.get('/webhook',(req,res)=>{
    console.log(req.query)
    if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === FacebookService.verifyToken) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }
});

app.post('/webhook',(req,res)=>{
    //console.log(req.body.entry[0].messaging[0].sender.id)
    //console.log(req.body.entry[0].messaging[0].message.text)
    
    console.log(req.body.entry[0].messaging[0].message.nlp.entities.intent)

    let senderId = req.body.entry[0].messaging[0].sender.id
    const respliceBot = new Bot(FacebookService.accessToken);

    respliceBot.getUserProfile(senderId).then(response =>{
        respliceBot.sendTextMessage(senderId,`Hola ${response.first_name}, soy el CintaRojaBot`)
        respliceBot.sendGenericTemplate(senderId,generic)

    });
    res.sendStatus(200);
});

app.listen(3000,()=> console.log('El bot esta vivo en el puerto 30000'))