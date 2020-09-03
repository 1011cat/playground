import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <h1>hello shotcat</h1>,
//   document.getElementById('root')
// );
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'shot',
  lastName: 'cat'
};

const element = 
  <h1>
    Hello, {formatName(user)}!
  </h1>
;
// 为了便于阅读，我们会将 JSX 拆分为多行。同时，我们**建议将内容包裹在括号中**，
// 虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。
// 建议：如果是标签结构jsx，且存在换行的情况时，使用括号进行包裹 

// 字符串等静态字面量属性，使用引号包裹
const test1 = (<div tabIndex="0">test1</div>)

//  JavaScript 表达式则使用大括号包裹
const test2 = (<img src={user.avatarUrl}></img>)

// 并且JSX 里的 class 变成了 className，使用小驼峰命名

// Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。 element1 和 element2完全等价
const element1 = (
  <h1 className="greeting">
    {/* 这是jsx中的注释 */}
    Hello, world!
  </h1>
);

const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);



ReactDOM.render(
  element,
  document.getElementById('root')
);

// React 元素是不可变对象。一旦被创建，你就无法更改它的子元素或者属性。唯一的修改方式就是新建一个，然后替换掉

// 组件的后缀可以是js也可以是jsx

// 组件名称必须以大写字母开头
// React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome
// 通常来说，每个新的 React 应用程序的顶层组件都是 App 组件。

// 组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。react中的props是**只读的**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。


// State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

// 当你需要使用state 或生命周期方法等很多其他特性，则需要使用class来创建组件，而不能使用函数

// | 区别 | React class | function component |
// | --- | --- | --- |
// | 写法 | 复杂，继承自React.Component,constructor中接受props参数，render中返回 | 简单、直接接受props作为参数，return返回代码片段 |
// | state状态 | 可以使用this.state,setState()等 | 无状态组件 |
// | 生命周期 | 有 | 无 |
// | 优点 | 1.需要state来改变内部组件的状态；2.需要使用一些周期函数；3.可以提升性能，有些时候我们需要减少组件的渲染次数，我们就需要在组件内部使用shouldComponentUpdate方法来判断，或者继承React.PureComponent类（自动调用shouldComponentUpdate）来实现state和props的浅比较进行判断组件是否需要重新渲染。 | 代码量少，容易编写；无状态组件，更好的体现容器和表现分离。![\color{red}{提倡使用}]

// 生命周期函数：
// componentWillMount:在组建渲染之前执行
// componentDidMount:在组件渲染之后
// shouldComponentUpdate:返回布尔值，true表示允许改变，false代表不允许改变。
// componentWillUpdate:数据改变之前执行（state，props）
// componentWillReveiceProps:props发生改变执行，props改变是指例如：父级组件对传入的props进行修改
// componentWillUnmount:组件卸载前执行

// 注意：16版本中废弃了下面三个生命周期
// componentWillMount  16版中改名为 UNSAFE_componentWillMount，
// componentWillReceiveProps 16版中改名为 UNSAFE_componentWillReceiveProps，
// componentWillUpdate 16版中改名为 UNSAFE_componentWillUpdate
// 这三个生命周期函数 预计17版中会完全废除掉
// 取而代之的是两个新的生命周期函数

// static getDerivedStateFromProps  加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。静态方法包含this关键字，这个this指的是类，而不是实例
// getSnapshotBeforeUpdate

// 我们将React的生命周期分为三个阶段，然后详细讲解每个阶段具体调用了什么函数，这三个阶段是：

// 挂载阶段
// 更新阶段
// 卸载阶段
// https://juejin.im/post/6844903655372488712
