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

  tipAmount: function () {
    return this.get('billAmount') * this.get('tipPercentage') / 100;
  }.property('tipPercentage', 'billAmount'),

  totalBill: function () {
    return this.get('billAmount') + this.get('tipAmount');
  }.property('billAmount', 'tipAmount'),

  isCheapskate: function () {
    var tipPercentage = this.get('tipPercentage');
    return tipPercentage < 15;
  }.property('tipPercentage'),

  fifteenPercentTip: function () {
    return this.get('billAmount') * 0.15;
  }.property('billAmount'),

  eighteenPercentTip: function () {
    return this.get('billAmount') * 0.18;
  }.property('billAmount'),

  twentyPercentTip: function () {
    return this.get('billAmount') * 0.2;
  }.property('billAmount'),

  actions: {

    setTipPercentage: function (amount) {
      this.set('tipPercentage', amount);
    }

  }

});
