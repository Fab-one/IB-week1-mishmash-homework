function giveItBackLater(value, callback) {
          callback(value)
}
setTimeout(giveItBackLater, 2000)

function promiseToGiveItBackLater(value) {

}

function addSomePromises(somePromise) {

}

module.exports = {  giveItBackLater, addSomePromises, promiseToGiveItBackLater}
