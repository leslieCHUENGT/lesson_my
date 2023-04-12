# vue源码

- 测试驱动开发
    什么是好的代码？可以通过所有的测试代码，测试本身也是代码
    在大厂，有专门的test阶段，有test工程师
    工程师要自己会写一些测试用例，jest 测试框架
    测试驱动开发的思想 TDD

- effect 运行了
    get handler 返回了值  使用了es6的反射 Reflect.get(target, key)

- 再修改的时候， 能不能自动相应
    targetMap setter

- Object.defineProperty()和Proxy代理是JavaScript中实现对象属性拦截的两种不同方式，它们之间有以下几个主要区别：

功能：
Object.defineProperty()用于定义对象的属性，可以用来控制属性的访问、修改和删除等行为。而Proxy代理则是一种更为灵活的方式，可以代理整个对象，拦截对象的各种操作，包括读取属性、修改属性、添加属性、删除属性等。

兼容性：
Object.defineProperty()是ES5引入的特性，所以它可以在大多数现代浏览器中使用。而Proxy代理是ES6引入的特性，所以在一些老的浏览器中并不支持，需要通过polyfill或者转译工具进行兼容。

性能：
由于Object.defineProperty()是基于对象属性的读取和修改操作来实现的，所以在一些场景下，它的性能可能会受到一定的影响。而Proxy代理是基于代理对象的操作来实现的，因此在一些高频场景下，可能会更加高效。

支持的拦截操作：
Object.defineProperty()只能拦截对象的读取、写入、删除等基本操作，而Proxy代理可以拦截更多的操作，如函数调用、in操作符、instanceof操作符等。

总的来说，虽然Object.defineProperty()在一些场景下具有其优势，但是相对于Proxy代理来说，它的能力和灵活性都较为有限。所以在需要进行对象属性拦截的场景下，建议使用Proxy代理实现。

