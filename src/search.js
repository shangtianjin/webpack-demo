import React from 'react'
import ReactDOM from 'react-dom'
import logo from './img/logo.png'
import './search.less'

class Search extends React.Component {
  render () {
    return (
      <div className="csstest">111sd react searcsshsdsd
        <img src={ logo }></img>
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))