import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../img/logo.png'
import '../../common'
import './search.less'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null
    }
  }
  
  loadTest() {
    import('./test.js').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }
  render () {
    const { Text } = this.state
    return (
      <div className="csstest">listener react WDS wds
        {Text ? <Text /> : null}
        <img src={ logo } onClick={this.loadTest.bind(this)}></img>
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))