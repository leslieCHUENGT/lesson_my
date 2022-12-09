# JS执行机制 
- JS为何而生
  响应用户的交互，事件，简单的语言
  没必要设计成多线程
  线程是程序运行的最小单元
  JS设计为单线程，简单、脆弱
  同步代码尽快运行完，耗时任务？
- JS = 单线程+Event Loop机制
  setTimeout fetch eventListener异步，放入Event Loop
  同步代码快速运行，js进入idle状态3s后再进入单线程运行 