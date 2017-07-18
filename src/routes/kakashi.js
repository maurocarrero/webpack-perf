module.exports = {
  path: 'kakashi',
  getComponent(_, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Kakashi').default)
    })
  }
}
