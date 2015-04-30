var View = require('view');
var mqclass = require('mq-class');

/**
 * The cart view
 * @constructor
 */
module.exports = View.extend({

  elements: {
    '.js-hospital-product-name':  'hospitalProductName',
    '.js-extras-product-name':    'extrasProductName',
    '.js-total-price':            'totalPrice'
  },

  /**
   * Initialise the view
   */
  init: function() {

    //add/remove classes based on resolution
    mqclass([this.el]);

  },

  /**
   * Set whether the cart is in a loading state
   * @param   {Boolean} loading
   * @returns {View}
   */
  setLoading: function(loading) {
    if (loading) {
      this.el.classList.add('is-loading');
    } else {
      this.el.classList.remove('is-loading');
    }
    return this;
  },

  /**
   * Set the hospital product name which is displayed
   * @param   {string} name
   * @returns {View}
   */
  setHospitalProductName: function(name) {
    this.hospitalProductName.textContent = name;
    return this;
  },

  /**
   * Set the extras product name which is displayed
   * @param   {string} name
   * @returns {View}
   */
  setExtrasProductName: function(name) {
    this.extrasProductName.textContent = name;
    return this;
  },

  /**
   * Set the cart total price
   * @param   {Number} price
   * @returns {View}
   */
  setTotalPrice: function(price) {
    this.totalPrice.innerHTML = '$'+price+'*';
    return this;
  }

});
