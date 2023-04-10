# state
- 每当 store.state.count 变化的时候, **都会重新求取计算属性**，并且触发更新相关联的 DOM。
- Vuex 通过 Vue 的插件系统将 store 实例从根组件中“注入”到所有的子组件里。且子组件能通过 **this.$store** 访问到。
- 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 **mapState 辅助函数帮助我们生成计算属性**，让你少按几次键：
- mapState 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 computed 属性。但是自从有了**对象展开运算符**，我们可以极大地简化写法：
# getters
- Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行**过滤并计数**：
- 注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
- 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
- mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
# Mutation
- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
- 要唤醒一个 mutation 处理函数，你需要以相应的 type 调用 store.commit 方法
- 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
- 一条重要的原则就是要记住 **mutation 必须是同步函数**。为什么？请参考下面的例子：
    - 实质上任何在回调函数中进行的状态的改变都是不可追踪的。
- 你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
# actions
- Action 类似于 mutation，不同在于：
  - Action 提交的是 mutation，而不是直接变更状态。
  - Action 可以包含任意异步操作。
- Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。**当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。**
- Action 通过 store.dispatch 方法触发：
- 注意我们正在进行一系列的异步操作，并且**通过提交 mutation 来记录 action 产生的副作用（即状态变更）。**
- 你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：
- Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程?首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：
















