function main(args) {
  const FS = require("fs-extra");
  FS.removeSync("build");
  FS.mkdirsSync("build");
  FS.copySync("src/html/index.html", "build/index.html");
  runOrDie(
    "node_modules/.bin/webpack",
    [
      "--config",
      "webpack.config.js",
      "--progress",
      "--bail",
    ].concat(args.production ? ["-p"] : ["-d"])
  );
}

function runOrDie(command, args) {
  require("child_process").execFileSync(
    command,
    args,
    {
      stdio: [0, 1, 2]
    }
  );
}

main(require("minimist")(process.argv.slice(2)));
