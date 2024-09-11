import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import './index.css'

class MainOne extends Component {
  state = {inputOne: '', isBold: false, isItalic: false, underLine: false}

  onChangeOne = event => {
    this.setState({inputOne: event.target.value})
  }

  onClickBoldOne = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalicOne = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderlineOne = () => {
    this.setState(prevState => ({underLine: !prevState.underLine}))
  }

  render() {
    const {inputOne, isBold, isItalic, underLine} = this.state
    return (
      <div className="initial-cont">
        <div className="main-cont">
          <div className="left-cont">
            <h1 className="left-head">Text Editor</h1>
            <img
              className="left-image"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="right-cont">
            <ul className="right-top-cont">
              <li className="every-button-one">
                <button
                  data-testid="bold"
                  label="bold"
                  value="bold"
                  className={`${isBold && 'special-one'} right-top-button`}
                  type="button"
                  onClick={this.onClickBoldOne}
                >
                  <VscBold size={20} />
                </button>
              </li>

              <li className="every-button-one">
                <button
                  data-testid="italic"
                  className={`${isItalic && 'special-one'} right-top-button`}
                  type="button"
                  onClick={this.onClickItalicOne}
                >
                  <GoItalic size={20} />
                </button>
              </li>

              <li className="every-button-one">
                <button
                  className={`${underLine && 'special-one'} right-top-button`}
                  type="button"
                  onClick={this.onClickUnderlineOne}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={20} />
                </button>
              </li>
            </ul>

            <div>
              <textarea
                id="w3review"
                name="w3review"
                rows="25"
                className={`input-one ${isBold && 'bold-one'} ${
                  isItalic && 'italic-one'
                } ${underLine && 'under-line-one'}`}
                cols="50"
                value={inputOne}
                onChange={this.onChangeOne}
              >
                {inputOne}
              </textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainOne
