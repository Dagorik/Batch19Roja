var rp = require('request-promise')
var request = require('request')
var facebook_service = require('./config')

class Bot {
  constructor(TOKEN) {
    this.page_token = TOKEN;
  }

  getUserProfile(userId) {
    const url = `https://graph.facebook.com/v2.2/${userId}?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=${this.page_token}`;
    return rp(url)
      .then(res => JSON.parse(res))
      .catch(err => console.log(`Error getting user profile: ${err}`));
  }

  sendTextMessage(recipientId, messageText, quickReplies=[], messageType = 'RESPONSE') {
    if(quickReplies.length > 0){
      var messageData = {
        messaging_type: messageType,
        recipient: {
          id: recipientId
        },
        message: {
          text: messageText,
          quick_replies: quickReplies
        }
      };
    }
    else{
      var messageData = {
        messaging_type: messageType,
        recipient: {
          id: recipientId
        },
        message: {
          text: messageText
        }
      };
    }
    return this.callSendAPI(messageData);
  }

  sendGenericTemplate(recipientId, elements, ratio = 'horizontal', messageType = 'RESPONSE'){
    var messageData = {
      messaging_type: messageType,
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type:"template",
          payload: {
            template_type:"generic",
            image_aspect_ratio: ratio,
            elements: elements
          }
        }
      }
    };
    return this.callSendAPI(messageData);
  }

  sendListTemplate(recipientId, elements, buttons, top_element_style = 'LARGE', messageType = 'RESPONSE'){
    var messageData = {
      messaging_type: messageType,
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type:"template",
          payload: {
            template_type:"receipt",
            top_element_style,
            elements,
            buttons
          }
        }
      }
    };
    //console.log(messageData.message.elements)
    return this.callSendAPI(messageData);
  }

  sendButtonTemplate(recipientId, texts, button, messageType = 'RESPONSE'){
    var messageData = {
      messaging_type: messageType,
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type:"template",
          payload:{
            template_type:"button",
            text:texts,
            buttons:button
          }
        }
      }
    };
    return this.callSendAPI(messageData);
  }

  sendOpenGraphTemplate(recipientId, elements, messageType = 'RESPONSE'){
    var messageData = {
      messaging_type: messageType,
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type:"template",
          payload:{
            template_type:"open_graph",
            elements
          }
        }
      }
    };
    return this.callSendAPI(messageData);
  }

  sendMediaTemplate(recipientId, elements, messageType = 'RESPONSE'){
    var messageData = {
      messaging_type: messageType,
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type:"template",
          payload:{
            template_type:"media",
            elements
          }
        }
      }
    };
    return this.callSendAPI(messageData);
  }

  sendReceiptTemplate(recipientId, data, messageType = 'RESPONSE'){
    var messageData = {
      messaging_type: messageType,
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type:"template",
          payload: {
            template_type:"receipt",
            recipient_name: data.recipient_name,
            order_number: data.order_number,
            currency: data.currency,
            payment_method: data.payment_method,        
            order_url: data.order_url,
            timestamp: data.timestamp,         
            address: data.address,
            summary: data.summary,
            adjustments: data.adjustments,
            elements: data.elements
          }
        }
      }
    };
    return this.callSendAPI(messageData);
  }

  senderAction(recipientId, sender_action){
    var messageData = {
      recipient: {
        id: recipientId
      },
      sender_action
    };
    return this.callSendAPI(messageData);
  }

  // callSendAPI(messageData) { 
  //   request({
  //     uri: 'https://graph.facebook.com/v2.2/me/messages',
  //     qs: { access_token: this.page_token },
  //     method: 'POST',
  //     json: messageData
  
  //   }, function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       var recipientId = body.recipient_id;
  //       var messageId = body.message_id;
  
  //       console.log("Successfully sent generic message with id %s to recipient %s", 
  //         messageId, recipientId);
  //     } else {
  //       console.error("Unable to send message.");
  //       console.error(response);
  //       console.error(error);
  //     }
  //   });  
  // }

  callSendAPI(messageData) { 
    var options = {
      method: 'POST',
      uri: facebook_service.url,
      qs: { access_token: this.page_token },
      json: messageData
    };
    return rp(options)
    .then(res => res)
  }
}

module.exports = Bot;