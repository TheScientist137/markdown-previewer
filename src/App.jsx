import { useState } from 'react'
import { defaultMarkdown } from './default'
import ReactMarkdown from 'react-markdown'

function App () {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown)

  return (
    <div className='container-md'>
      <h1 className='text-center fs-1'>Markdown Previewer</h1>
      <div className='row'>
        <div className='col-md-6'>
          <h2 className='mt-4'>Markdown Input</h2>
          <textarea
            className='w-100'
            name='editor'
            id='editor'
            rows='10'
            value={markdownText}
            onChange={e => setMarkdownText(e.target.value)}
          ></textarea>
        </div>
        <div className='col-md-6'>
          <h2 className='mt-4'>HTML Output</h2>
          <div id='previewer' className='markdown-previewer border'>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
