var AppDispatcher    = require('../dispatcher/AppDispatcher');
var CounterConstants = require('../constants/CounterConstants');

var CounterActions = {

    createAddOne: function(){
        AppDispatcher.dispatch({
            type: CounterConstants.ADD_ONE
        });
    },
    removeOne: function(){
        AppDispatcher.dispatch({
            type: CounterConstants.REMOVE_ONE
        });
    },

};

module.exports = CounterActions;
