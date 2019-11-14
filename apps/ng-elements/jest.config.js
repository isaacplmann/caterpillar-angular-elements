module.exports = {
  name: 'ng-elements',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-elements',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
