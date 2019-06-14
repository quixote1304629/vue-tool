/**
 * setTimeout 的 promise 封装
 * @param {Number} time(ms)
 * @returns
 */
function timeout(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

module.exports = timeout;