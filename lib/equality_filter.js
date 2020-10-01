// Copyright 2014 Mark Cavage, Inc.  All rights reserved.
// Copyright 2015 Patrick Mooney

import * as  helpers from './helpers.js';

///--- API

function EqualityFilter(options) {
  // assert.optionalObject(options);
  if (options) {
    // assert.string(options.attribute, 'options.attribute');
    this.attribute = options.attribute;
    this.raw = options.value;
  } else {
    throw new Error('invalid value type');
  }
}
Object.defineProperties(EqualityFilter.prototype, {
  type: {
    get: function getType() { return 'equal'; },
    configurable: false
  },
  value: {
    get: function getValue() {
      return this.raw;
    },
    set: function setValue(val) {
      this.raw = val;
    },
    configurable: false
  },
  json: {
    get: function getJson() {
      return {
        type: 'EqualityMatch',
        attribute: this.attribute,
        value: this.value
      };
    },
    configurable: false
  }
});

EqualityFilter.prototype.toString = function toString() {
  var value, decoded, validate;
  if (typeof (this.raw) === 'string') {
    value = this.raw;
  } else {
    throw new Error('invalid value type');
  }
  return ('(' + helpers.escape(this.attribute) +
          '=' + helpers.escape(value) + ')');
};

EqualityFilter.prototype.matches = function matches(target, strictAttrCase) {
  // assert.object(target, 'target');

  var tv = helpers.getAttrValue(target, this.attribute, strictAttrCase);
  var value = this.value;

  return helpers.testValues(function (v) {
    return value === v;
  }, tv);
};


///--- Exports

export { EqualityFilter };
