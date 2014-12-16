/* globals numeral */

import Ember from 'ember';

export default Ember.Controller.extend({

  billAmount: 0,
  tipPercentage: 18,

  tipAsPercentage: function () {
    return this.get('tipPercentage') / 100;
  }.property('tipPercentage'),

  tipAmount: function () {
    return this.get('billAmount') * this.get('tipAsPercentage');
  }.property('tipAsPercentage', 'billAmount'),

  totalBill: function () {
    return parseInt(this.get('billAmount'), 10) + this.get('tipAmount');
  }.property('billAmount', 'tipAmount'),

  tipAmountFormattedForHumans: function () {
    return numeral(this.get('tipAmount')).format('0.00');
  }.property('tipAmount'),

  totalBillFormattedForHumans: function () {
    return numeral(this.get('totalBill')).format('0.00');
  }.property('totalBill'),

  isCheapskate: function () {
    var tipPercentage = this.get('tipPercentage');
    return parseInt(tipPercentage, 10) < 15;
  }.property('tipPercentage'),

  fifteenPercentTip: function () {
  var amount = parseInt(this.get('billAmount'), 10) * 0.15;
    return numeral(amount).format('0.00');
  }.property('billAmount'),

  eighteenPercentTip: function () {
    var amount = parseInt(this.get('billAmount'), 10) * 0.18;
    return numeral(amount).format('0.00');
  }.property('billAmount'),

  twentyPercentTip: function () {
    var amount = parseInt(this.get('billAmount'), 10) * 0.2;
    return numeral(amount).format('0.00');
  }.property('billAmount'),

  actions: {

    setTipPercentage: function (amount, multiplier) {
      multiplier = multiplier || 1;
      this.set('tipPercentage', amount * multiplier);
    }

  }

});
