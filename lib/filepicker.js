'use strict'

import 'console-polyfill'

var filepicker = global.filepicker;

if (filepicker) {
  filepicker.setKey(global.ENV.FILEPICKER_KEY);
} else {
  console.error('Filepicker library is not loaded.');
}

export default filepicker
