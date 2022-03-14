import React from 'react'
import Badge from './Badge'

const Post = ({ title, date, tags, onClick }) => {
  return (
    <div className="card" style={{ cursor: 'pointer' }} onClick={onClick}>
      <div className="card-body">
        <h3>{title}</h3>
        {tags.map((tag) => (
          <Badge key={tag} title={tag} />
        ))}
        <p>
          <small>{new Date(Number(date)).toLocaleDateString()}</small>
        </p>
      </div>
    </div>
  )
}

export default Post
