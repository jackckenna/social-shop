var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var appDispatcher = require('../dispatchers/appDispatcher.js');
// var Constants = require('../constants/constants.js');

var axios = require('axios');
var _publicPosts = new Array();
var data = [];

var PostStore = merge(EventEmitter.prototype, {
        getPosts: function() {
            return _publicPosts
        },
        getPublicPosts: function() {
            axios.get('http://localhost:3000/posts')
                .then(function(response) {

                    var theJackobites = response.data.publicPosts;
                    for (var i in theJackobites){
                      console.log(theJackobites[i]);
                      _publicPosts.push(theJackobites[i]);
                    }
                    console.log(theJackobites);
                    //_publicPosts.push(response.data.publicPosts);
                })

        }
        // ,
        // setGame: function() {
        //     axios.post('http://localhost:3000/game', [{
        //             "name": player.name,
        //             "isComputer": false
        //         }, {
        //             "name1": "Comp",
        //             "isComputer1": true
        //         }
        //
        //     ]).then(function(response) {
        //
        //         return response;
        //     }).catch(function(error) {
        //         console.log(error);
        //     });
        // },
        // getCards: function() {
        //     axios.get('http://localhost:3000/deal')
        //         .then(function(response) {
        //             _game.players[0].hand.push(response.data.user.hand[0]);
        //             _game.players[0].hand.push(response.data.user.hand[1]);
        //             _game.flop.push(response.data.flop);
        //         }).catch(function(error) {
        //             console.log(error);
        //         });
        //
        // }
    });


module.exports = PostStore;

// appDispatcher.register(handleAction);

// function handleAction(payload) {
//
//     switch (payload.action) {
//         case Constants.HOME_ACTION:
//             GameStore.emit('showHome');
//             break;
//         case Constants.LOGIN_ACTION:
//             GameStore.emit('showLogin');
//             break;
//         case Constants.SUBMIT:
//             GameStore.emit('submitLogin');
//             player.name = payload.data;
//             break;
//         case Constants.DEAL_CARDS:
//             GameStore.getCards();
//             return GameStore.emit('dealCards');
//             break;
//         case Constants.END_ACTION:
//             GameStore.emit('endAction');
//             location.reload();
//             break;
//         default:
//             break;
//     }
//}
