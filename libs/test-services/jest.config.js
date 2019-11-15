module.exports = {
  name: 'test-services',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/test-services',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
