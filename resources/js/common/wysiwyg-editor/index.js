import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class WYSIWYG extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      editorState: this.convertHtmlToEditorState(this.props.value),
    }

    this.onEditorStateChange = this.onEditorStateChange.bind(this)
  }

  convertHtmlToEditorState(value) {
    if (value) {
      
      const blocksFromHTML = convertFromHTML(value)
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      )

      return EditorState.createWithContent(state)
    }
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    })
    console.log(convertToRaw(editorState.getCurrentContent()));
    if ( convertToRaw(editorState.getCurrentContent()).blocks[0].text.length <=2){  
      this.props.onChange(convertToRaw(editorState.getCurrentContent()).blocks[0].text)
    }else{
      this.props.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }
 
  }

  render() {
    const { editorState } = this.state
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="rich-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    )
  }
}

export default WYSIWYG
