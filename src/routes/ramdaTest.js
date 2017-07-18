module.exports = {
  path: 'ramda-test',
  getComponent(_, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/RamdaTest').default)
    })
  }
}
