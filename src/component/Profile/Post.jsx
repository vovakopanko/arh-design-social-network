import React from 'react'

const Post = (props) => {
    return(
        <div>
            <div><img src={require(`../../assets/images/${props.photo}`)} alt="photouser" width="60px" height="60px"></img></div>
            <div><b>{props.name}:</b></div>
            <div>{props.message} </div> LIKE : <span>{props.likesCount}</span>
        </div>
    )
}

export default Post;