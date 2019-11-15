module.exports = {
  name: 'test-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/test-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
