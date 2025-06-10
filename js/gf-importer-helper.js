const { execSync } = require('child_process');
const path = require('path');

class GfImporter {
  constructor(options = {}) {
    this.silent = options.silent ?? true;
    this.packagePath = path.dirname(__dirname);
  }

  runWpCliCommand(command, silent = this.silent) {
    const silentFlag = silent ? ' --quiet' : '';
    try {
      const execOptions = {
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: silent ? ['pipe', 'pipe', 'ignore'] : 'pipe',
      };
      return execSync(
        `npx wp-env run cli ${command}${silentFlag}`,
        execOptions
      );
    } catch (error) {
      if (!silent) {
        console.error(`Command failed: ${command}`);
        console.error(error.message);
      }
      throw error;
    }
  }

  async importForms() {
    const importerPath = path.join(this.packagePath, 'php/gf-importer.php');
    return this.runWpCliCommand(`wp eval-file ${importerPath}`);
  }

  getPhpScriptPath() {
    return path.join(this.packagePath, 'php/gf-importer.php');
  }

  getDataPath(fileName) {
    return path.join(this.packagePath, 'data', fileName);
  }
}

module.exports = GfImporter;
