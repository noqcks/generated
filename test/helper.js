const fs = require('fs');
const path = require('path');
const Generated = require('../lib/generated');

function fixturesPath() {
  return path.join(__dirname, 'fixtures');
}

function samplesPath() {
  return path.join(__dirname, '../samples');
}

function generatedLoadingData(name) {
  const contents = fs.readFileSync(name, 'utf8');
  const g = new Generated(name, contents);
  return g.isGenerated();
}

function generatedWithoutLoadingData(name) {
  const contents = '';
  const g = new Generated(name, contents);
  return g.isGenerated();
}

function generatedSampleLoadingData(name) {
  return generatedLoadingData(path.join(samplesPath(), name));
}

function generatedSampleWithoutLoadingData(name) {
  return generatedWithoutLoadingData(path.join(fixturesPath(), name));
}

function generatedFixtureWithoutLoadingData(name) {
  return generatedWithoutLoadingData(path.join(fixturesPath(), name));
}

function generatedFixtureLoadingData(name) {
  return generatedLoadingData(path.join(fixturesPath(), name));
}

module.exports = {
  generatedSampleWithoutLoadingData,
  generatedSampleLoadingData,
  generatedFixtureLoadingData,
  generatedFixtureWithoutLoadingData,
};
