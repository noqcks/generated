import * as fs from "fs";
import * as path from "path";
import Generated from "../lib/generated";

function fixturesPath(): string {
  return path.join(__dirname, "fixtures");
}

function samplesPath(): string {
  return path.join(__dirname, "../samples");
}

/**
 * Creates a Generated instance by loading file data and checks if it's generated
 * @param name - The name/path of the file to check
 * @returns Whether the file is detected as generated based on file contents
 */
function generatedLoadingData(name: string): boolean {
  const contents = fs.readFileSync(name, "utf8");
  const g = new Generated(name, Buffer.from(contents));
  return g.isGenerated();
}

/**
 * Creates a Generated instance without loading file data and checks if it's generated
 * @param name - The name/path of the file to check
 * @returns Whether the file is detected as generated based on name alone
 */
function generatedWithoutLoadingData(name: string): boolean {
  const g = new Generated(name, null);
  return g.isGenerated();
}

function generatedSampleLoadingData(name: string): boolean {
  return generatedLoadingData(path.join(samplesPath(), name));
}

function generatedSampleWithoutLoadingData(name: string): boolean {
  return generatedWithoutLoadingData(path.join(fixturesPath(), name));
}

function generatedFixtureWithoutLoadingData(name: string): boolean {
  return generatedWithoutLoadingData(path.join(fixturesPath(), name));
}

function generatedFixtureLoadingData(name: string): boolean {
  return generatedLoadingData(path.join(fixturesPath(), name));
}

export {
  generatedSampleWithoutLoadingData,
  generatedSampleLoadingData,
  generatedFixtureLoadingData,
  generatedFixtureWithoutLoadingData,
  generatedLoadingData,
  generatedWithoutLoadingData,
};
