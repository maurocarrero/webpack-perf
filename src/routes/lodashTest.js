module.exports = {
  path: 'lodash-test',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/LodashTest'))
    })
  }
}
