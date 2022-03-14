import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GithubRest from '../services/Github'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const github = new GithubRest()

const PostDetail = () => {
  const { file } = useParams()
  const [content, setContent] = useState('')

  const fetchPostDetail = async () => {
    const data = await github.getPostDetail(file)
    setContent(data)
  }

  useEffect(() => {
    if (file) {
      fetchPostDetail()
    }
  }, [file])

  return (
    <div className="container">
      <ReactMarkdown
        remarkPlugins={[gfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default PostDetail
