/* globals numeral */

import Ember from 'ember';

export default Ember.Controller.extend({

  setDefaultAmounts: function () {
    this.set('billAmount', 10);
    this.set('tipPercentage', 18);
  }.on('init'),

  billAmount: function (key, newValue, oldValue) {
    if (arguments.length !== 1) { return parseInt(newValue, 10); }
  }.property(),

  tipPercentage: function (key, newValue, oldValue) {
    if (arguments.length !== 1) { return parseInt(newValue, 10); }
  }.property(),

  tipAsPercentage: function () {
    return this.get('tipPercentage') / 100;
  }.property('tipPercentage'),

  tipAmount: function () {
    return this.get('billAmount') * this.get('tipAsPercentage');
  }.property('tipAsPercentage', 'billAmount'),

  totalBill: function () {
    return this.get('billAmount') + this.get('tipAmount');
  }.property('billAmount', 'tipAmount'),

  tipAmountFormattedForHumans: function () {
    return numeral(this.get('tipAmount')).format('0.00');
  }.property('tipAmount'),

  totalBillFormattedForHumans: function () {
    return numeral(this.get('totalBill')).format('0.00');
  }.property('totalBill'),

  isCheapskate: function () {
    var tipPercentage = this.get('tipPercentage');
    return tipPercentage < 15;
  }.property('tipPercentage'),

  fifteenPercentTip: function () {
  var amount = this.get('billAmount') * 0.15;
    return numeral(amount).format('0.00');
  }.property('billAmount'),

  eighteenPercentTip: function () {
    var amount = this.get('billAmount') * 0.18;
    return numeral(amount).format('0.00');
  }.property('billAmount'),

  twentyPercentTip: function () {
    var amount = this.get('billAmount' * 0.2;
    return numeral(amount).format('0.00');
  }.property('billAmount'),

  actions: {

    setTipPercentage: function (amount) {
      this.set('tipPercentage', amount);
    }

  }

});
