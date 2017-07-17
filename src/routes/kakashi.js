module.exports = {
  path: 'kakashi',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Kakashi'))
    })
  }
}
