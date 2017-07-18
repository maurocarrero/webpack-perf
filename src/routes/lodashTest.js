module.exports = {
  path: 'lodash-test',
  getComponent(_, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/LodashTest').default)
    })
  }
}
