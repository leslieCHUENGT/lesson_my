# html5
- html5 标签
    audio 网易云
    video 爱奇艺
- background-size
    1.移动端rem、wh是多变的
    2.移动端retina 3倍retina
    40X40的盒子可放120*120的图片因为像素点多
    3.background-size；cover 
        等比例缩放背景图片填满容器
        还是超出则剪裁
        contain 完整保留 
- 库文件引入的位置
    1.css放到head，css应该尽早参与网页渲染
    2.js放在body最下面，会阻塞页面渲染
- swiper 滑动组件库的使用
    1.引入swiper组件库
        js和css
    2.固定的html结构
        .swiper-container(滑动的区域大小)>.swiper-wrapper>.swiper-slide
    2.new Swiper(selector，{
        direction:''
    })实例化，可以有多个滑块
- translate3d(-50%,0,0) 启动3d加速器GPU渲染
  translate(-50%,0) 2d
- 使用linear-gradient 生成背景图片
    1.颜色渐变的图片
        #f8ddd1,#faece5 73%,#fad2c0
    2.性能优化 