// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onBtnChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const btnTxt = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const classChn = isDarkMode ? 'mini-con' : 'mini-con1'
    const headTxt = isDarkMode ? 'head' : 'head1'
    return (
      <div className="con">
        <div className={classChn}>
          <h1 className={headTxt}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onBtnChange}>
            {btnTxt}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
