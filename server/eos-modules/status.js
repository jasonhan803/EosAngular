module.exports = function status(eos) {
  return {
    run: function run() {
      // return the status of eos
      console.log(eos.status());
    }
  }
}
