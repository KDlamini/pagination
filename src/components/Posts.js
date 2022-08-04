import React from 'react'

const Posts = ({post}) => {
    const { id, title, body } = post;

  return (
    <div class="card border-0">
        <div class="card-body">
            <h5 class="card-title">{id}. {title}</h5>
            <p class="card-text">{body}</p>
        </div>
    </div>
  )
}

export default Posts