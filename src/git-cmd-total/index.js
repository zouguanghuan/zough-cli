// 引入 shelljs 模块
const shell = require('shelljs');

function cancelGitAdd() {
  /**
   * 下面命令中，HEAD 表示当前分支的最新提交，而 . 表示所有文件。通过执行上述命令，你将会把所有文件从暂存区移回工作目录，撤销之前的 git add 操作。

   请注意，执行 git reset 命令后，暂存区的更改会被撤销，但工作目录中的文件修改不会被改变。如果想要丢弃工作目录中的修改并还原到最近的提交状态，可以使用 git checkout . 命令。

   在执行撤销操作之前，请确保确认了自己的操作以及相应的后果，并且在进行任何重要操作之前，建议先备份或提交代码。
   */
  shell.exec('git reset HEAD .');
}

function cancelGitCommitHash(commitHash){
  /**
   * git revert <commit-hash>
   * <commit-hash> 是指提交的哈希值，也称为提交的 SHA-1 标识符或提交的唯一标识。每个 Git 提交都有一个唯一的哈希值，用于表示该提交。

   你可以通过以下命令获取提交的哈希值：
   git log
   执行上述命令后，会显示所有提交的历史记录以及对应的哈希值。你可以复制所需提交的哈希值，并将其替换 <commit-hash> 部分来指定要回滚的具体提交。

   git revert HEAD
   */
  shell.exec('git revert ' + commitHash);
}

function cancelGitCommitLatest() {
  /**
   *例如，如果要回滚最新的提交，可以使用以下命令：
   * git revert HEAD
   */
  shell.exec('git revert HEAD');
}

function cloneBranch(branchName, gitUrl) {
  /**
   * 要克隆 GitLab 上的 three-business 分支的代码，你可以使用以下命令来进行 Git 克隆操作：
   * git clone -b three-business <GitLab仓库URL>
   */
  shell.exec('git clone -b ' + `${branchName} ${gitUrl}`);
}

function connectOrigin(originName, gitUrl) {
  /**
   * 要将本地暂存区中的 three-business 分支上的代码提交到 GitLab 上的 dev 分支，你可以使用以下几个步骤完成：
   * 首先，确保你已经与 GitLab 仓库建立了远程关联。如果没有，请先添加远程仓库关联，命名为 origin（或其他合适的名称）：
   * git remote add origin <GitLab仓库URL>
   */
  shell.exec('git remote add ' +  `${originName} ${gitUrl}`);
}

function pushBranch(originName, branchName, remoteBranch) {
  /**
   * 然后，将本地暂存区的 three-business 分支推送到 GitLab 的 dev 分支：
   * git push origin three-business:dev
   */
  shell.exec('git push ' + `${originName} ${branchName}:${remoteBranch}`);
  /**
   * 上述命令中，origin 是远程仓库的名称，three-business 是本地分支的名称，dev 是要推送至的目标分支名称。
   * 行该命令后，Git 将会把本地暂存区的 three-business 分支上的代码推送到 GitLab 上的 dev 分支。
   */
}


module.exports = {
  cancelGitAdd,
  cancelGitCommitHash,
  cancelGitCommitLatest,
  connectOrigin,
  cloneBranch,
  pushBranch
}
