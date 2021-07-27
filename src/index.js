import ReactDOM from 'react-dom'
import React, {useState} from 'react'
import Stage1 from './Stage1'
import Stage1Solution from './Stage1Solution'
import Stage2 from './Stage2'
import Stage2Solution from './Stage2Solution'
import Stage3Solution from './Stage3Solution'
import Stage3 from './Stage3'
import Stage4 from './Stage4'
import Stage4Solution from './Stage4Solution'
import Stage5 from './Stage5'
import Stage5Solution from './Stage5Solution'
import KentDemo from './KentDemo'

const tips = [
  {
    tips:
      '问题起源于 Kent 的一篇讨论 Context 中使用 useMemo 来规避更新的文章。（详情点击 article）',
    Component: KentDemo,
    title: 'kent',
  },
  {
    tips: '问题：setState 会让所有子组件更新（因为 createElement 重新执行）',
    Component: Stage1,
    title: '',
  },
  {
    tips:
      '解决： React.memo 化解（因为 props 实际上并没有变化。shouldComponentUpdate 回避了无用的更新）',
    Component: Stage1Solution,
    title: 'React.memo',
  },
  {
    tips:
      '问题：当层级较深时，我们需要借助 Context。但每当 Provider 所在的父组件 render 的时候，都就会让所有 Consumer 被迫更新',
    Component: Stage2,
    title: 'Provider1',
  },
  {
    tips:
      '解决：通过 useMemo 包装 vlaue。达到仅在变更的时候才更新。Provider 有了稳定的 value 作为引用。但是仍然有 state 更新时 setState 方法也会连带着更新的窘境（因为 state 和 setState 在一个 Object 里面）',
    Component: Stage2Solution,
    title: 'useMemo',
  },
  {
    tips:
      '解决：通过拆分 Provider 的方案。将变化的 count，和不变的 setCount 分离开。可以更精准的控制子组件渲染',
    Component: Stage3Solution,
    title: 'useMemo + Provider split',
  },
  {
    tips:
      '问题：这不够完美。这是基于所有组件都包裹了 React.memo 的前提。实践中如果忘记掉了 React.memo 来规避父组件渲染造成的更新，哪怕有 UseMemo 也毫无意义。这会造成性能隐患（这也是我和小伙伴最开始讨论的问题）',
    Component: Stage3,
  },
  {
    tips:
      '重新回到问题1  除了 React.memo 还有别的方案吗？有的。可以通过将 state 抽离到容器组件中，这样 setCount 就不会造成全局的 rerender',
    Component: Stage4,
  },
  {
    tips:
      '解决：结合拆分了的 Provider，借鉴抽离容器组件的思想。可以让更新得到最细颗粒度的控制',
    Component: Stage4Solution,
  },
  {
    tips:
      '但是，由于没有使用任何 React.memo 面对 Provider 所在组件不经意的 render ，Provider 内部所有组件，仍然会重新渲染。也就是说在父组件 render 时造成整个树的 render',
    Component: Stage5,
  },
  {
    tips:
      '通过在最顶层，增加一个 Barrier。这样只需要 Barrier 去通过 React.memo 在父组件 render 触发到 Barrier 是，去判断并规避父组件无意义的更新就好了。这保护了 Barrier 中定义的用户自定义组件。这应该是很合适的方案了（吧）',
    Component: Stage5Solution,
  },
]

const App = () => {
  const [currentIndex, setIndex] = useState(0)
  const [hideTips, setHideTips] = useState(true)
  const {Component} = tips[currentIndex]
  return (
    <div>
      <ul style={{width: '70%', padding: '0'}}>
        <li
          onClick={() => {
            setHideTips((c) => !c)
          }}
        >
          {hideTips ? 'open' : 'close'}
        </li>
        {tips.map(({Component, tips, title}, index) => (
          <li
            style={{
              textAlign: 'left',
              marginBottom: '10px',
              color: currentIndex === index ? 'red' : '',
            }}
            key={Component.name}
            onClick={() => {
              setIndex(index)
            }}
          >
            {Component.name}: {title}
            <br />
            {!hideTips && tips}
          </li>
        ))}
      </ul>
      <div style={{position: 'fixed', top: '20vh', right: '0', width: '30%'}}>
        <Component />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
