var React = require('react');
var TickerStore = require('../stores/TickerStore');
var TickerActions = require('../actions/CounterActions');
var RaisedButton = require('material-ui/lib/raised-button');

var Ticker = React.createClass({
    _getStateFromStores: function(){
        return {
            ticker: TickerStore.getTicker()
        };
    },
    _onChange: function(){
        this.setState(this._getStateFromStores());
    },
    getInitialState: function() {
        return this._getStateFromStores();
    },
    componentDidMount: function(){
        TickerStore.addChangeListener(this._onChange)
    },
    componentWillUnmount: function(){
        TickerStore.removeChangeListener(this._onChange)
    },
    _onPlus: function(){
        TickerActions.createAddOne();
    },
    _onMinus: function(){
        TickerActions.removeOne();
    },
    render: function() {
        return (
            <div>
                <h3>{this.state.ticker}</h3>
                <RaisedButton secondary={true} onClick={this._onPlus}  label="+"/>
                <RaisedButton secondary={true} onClick={this._onMinus} label="-"/>
            </div>
        );
    }
});

module.exports = Ticker;
