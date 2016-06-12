// file:
//   externs/video-js.js
//

var videojs = function() {};
/** constructor */ var Player = function() {};
Player.prototype.pause = function() {};
Player.prototype.dispose = function() {};


/* E: behaviour same as A and D */

/* A: Works in :whitespace mode. Fails in :advanced mode
// window.tt is not a function
// window.tt(qk.c(E(Tk.c(a))),Ii(Lf),function(){C(qk.c(E(Tk.c(a))));C(" initialised")
*/
// Best so far
//videojs = function() {};
//videojs.prototype.pause = function() {};
//videojs.prototype.dispose = function() {};/* E: behaviour same as A and D */
//

/** @constructor */
//videojs = function() {};

/*
videojs.prototype.pause = function() {};
videojs.prototype.dispose = function() {};
*/

/* D: behaviour same as A
videojs = function() {};
videojs.prototype.pause = function(p) {};
videojs.prototype.dispose = function(p) {};
*/

/* C: fails with 'cannot read property pause of null' at one point
videojs = function() {};
*/

/* B: fails in :advanced with:
//
videojs = function() {};
videojs.Player = function() {};
videojs.Player.prototype.pause = function() {};
videojs.Player.prototype.dispose = function() {};
*/


