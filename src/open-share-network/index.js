// 引入 shelljs 模块
const shell = require('shelljs');
// 定义启动移动热点的函数
function startHotspot() {
  // 使用 netsh 命令启动移动热点
  shell.exec('netsh wlan set hostednetwork mode=allow ssid=zhangwei key=zough1212');
  shell.exec('netsh wlan start hostednetwork');
}
// 定义关闭移动热点的函数
function stopHotspot() {
  // 使用 netsh 命令关闭移动热点
  shell.exec('netsh wlan stop hostednetwork');
}

module.exports = {
  startHotspot,
  stopHotspot
};
