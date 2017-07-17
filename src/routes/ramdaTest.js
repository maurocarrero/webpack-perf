module.exports = {
  path: 'ramda-test',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/RamdaTest'))
    })
  }
}
