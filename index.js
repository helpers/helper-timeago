/*!
 * helper-timeago <https://github.com/jonschlinkert/helper-timeago>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function timeago(date) {
  var secs = seconds(date);
  var res, span, i = 0;

  var timespan = [
    [31536000, ' year'],
    [2592000, ' month'],
    [86400, ' day'],
    [3600, ' hour'],
    [60, ' minute']
  ];

  while (span = timespan[i++]) {
    res = Math.floor(secs / span[0]);
    if (res > 1) {
      return res > 1
        ? res + span[1] + 's ago'
        : res + span[1] + ' ago'
    }
  }

  if (Math.floor(secs) === 0) {
    return 'Just now';
  } else {
    return Math.floor(secs) + ' seconds ago';
  }
};

function seconds(time) {
  return Math.floor((new Date() - new Date(time)) / 1000);
}
