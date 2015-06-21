/**
 * simple toggle function that turns the eos light on and off
 * @param  {[type]} eos [description]
 * @return {[type]}     [description]
 */
module.exports = function(eos){
  var toggle = true;
  return {
    run: function run() {
      if(toggle){
        eos.on();
        toggle = false;
      } else {
        eos.off();
        toggle = true;
      }
    }
  }
}
