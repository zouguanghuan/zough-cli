console.log("您好，欢迎使用 zough 工具命令!");
const { program } = require('commander');
// 引入 shelljs 模块
const shell = require('shelljs');
const { startHotspot, stopHotspot } = require('./open-share-network');
const {cancelGitAdd, cancelGitCommitHash, cancelGitCommitLatest, connectOrigin, cloneBranch, pushBranch } = require('./git-cmd-total');

program
  .version('1.0.0')
  .option('-c, --create <value>', 'Specify a create') // 关键词
  .option('-k, --keyword <value>', 'Specify a keyword') // 关键词
  .option('-p, --param <value>', 'Specify a parameter') // 作为关键词后面要携带的参数
  .option('-g, --git <value>', 'Specify a git') // 作为git关键词
  .option('-e, --edit <value>', 'Specify a edit') // 编辑某个文件关键词
  .parse();
const create = program.opts().create;
const keyword = program.opts().keyword;
const parameter = program.opts().param;
const git = program.opts().git;
const edit = program.opts().edit;
//
// console.log('keyword：', keyword);
console.log('parameter：', parameter);
console.log('git：', git);
// 常见的编吗有65001 936
shell.exec('chcp 65001');
if (keyword === 'stoprd') {
  console.log('关闭共享热点');
  stopHotspot();
}

if (keyword === 'startrd') {
  console.log('启动共享热点');
  startHotspot();
}

// if (keyword === 'package' || (keyword === undefined && parameter === undefined && git === undefined)) {
//   shell.exec('type package.json');
// }
/**
 * -c 创建前端工程项目关键词
 */
if (create === 'createwin') {
  shell.exec(' npx @winner-fed/create-win@latest')
}

/**
 * -g关键词
 */
if (git === 'canceladd.') {
  cancelGitAdd();
}

if (git === 'cancelcommithash') {
  if (!parameter) {
    console.log('正确命令：zough -g cancelcommithash -p url')
  } else {
    cancelGitCommitHash(parameter);
  }
}

if (git === 'cancelcommitlatest') {
  cancelGitCommitLatest();
}

if (edit) {
  shell.exec(`edit ${edit}`);
}
