var AppDispatcher = require('../dispatcher/AppDispatcher');
var CounterConstants = require('../constants/CounterConstants');
var BaseStore = require('./BaseStore');
var objectAssign = require('object-assign');

var _ticker = 0;
var TickerStore = objectAssign({}, BaseStore, {
    getTicker: function () {
        return _ticker;
    },

    dispatchToken: AppDispatcher.register(function(action){
        switch(action.type){
            case CounterConstants.ADD_ONE:
                _ticker = _ticker + 1;
                TickerStore.emitChange();
                break;
            case CounterConstants.REMOVE_ONE:
                _ticker = _ticker > 0 ? _ticker - 1 : 0;
                TickerStore.emitChange();
                break;
        }
    })
});

module.exports = TickerStore;
