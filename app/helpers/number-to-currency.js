import Ember from 'ember';

export function numberToCurrency(input) {
  return numeral(input).format('$0.00');
};

export default Ember.Handlebars.makeBoundHelper(numberToCurrency);
