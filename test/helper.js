var fs = require('fs');
var path = require('path');
const generated = require("../lib/generated");

function fixturesPath() {
  return path.join(__dirname, 'fixtures')
}

function samplesPath() {
  return path.join(__dirname, '../samples')
}

function generatedLoadingData(path) {
  let contents = fs.readFileSync(path, 'utf8');
  g = new generated(path, contents)
  return g.isGenerated()
}

function generatedWithoutLoadingData(name) {
  let contents = ''
  g = new generated(name, contents)
  return g.isGenerated()
}

function generatedSampleLoadingData(name) {
  return generatedLoadingData(path.join(samplesPath(), name))
}

function generatedSampleWithoutLoadingData(name) {
  return generatedWithoutLoadingData(path.join(fixturesPath(), name))
}

function generatedFixtureWithoutLoadingData(name) {
  return generatedWithoutLoadingData(path.join(fixturesPath(), name))
}

function generatedFixtureLoadingData(name) {
  return generatedLoadingData(path.join(fixturesPath(), name))
}

module.exports = {
  generatedSampleWithoutLoadingData,
  generatedSampleLoadingData,
  generatedFixtureLoadingData,
  generatedFixtureWithoutLoadingData,
}
