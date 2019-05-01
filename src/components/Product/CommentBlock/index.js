import React, { Component, Fragment } from 'react';
import { addComment, getComments } from 'api';

const OPTIONS = {
  hour: 'numeric',
  minute: 'numeric',
}

export default class Comments extends Component {

  componentDidMount () {
    const { productId } = this.props;
    getComments({ productId })
      .then(comments => {
        this.setState({ comments });
      })
      .catch(error => {
        console.log(error);
        this.setState({ comments: [] });
      })
  }

  state = {
    text: '',
    comments: []
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  addComment = () => {
    if (!this.state.text.trim()) return;
    const { name, productId } = this.props;
    const { text, comments } = this.state;
    const date = new Date().toLocaleDateString('ru', OPTIONS);
    const data = { name, date, text, productId };
    addComment(data)
    .then(() => {
      this.setState({
        text: '',
        comments: [...comments, data]
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({ text: '' });
    })
  }

  acceptComment = () => {

  }

  deleteComment = () => {

  }

  render () {
    const { comments } = this.state;
    const { isAdmin } = this.props;

    return (
      <Fragment>
        <ul>
          {comments.map(comment => {
            if (!isAdmin && !comment.moderated) return;
            return(
              <li className='comment' key={comment.id}>
                <p>
                  <span className='comment-name'>{comment.name}</span> 
                  {comment.date}
                  {!comment.moderated && (
                    <Fragment>
                      <button onClick={this.acceptComment} className='comment-action'>Принять</button>
                      <button onClick={this.deleteComment} className='comment-action'>Удалить</button>
                    </Fragment>
                  )}
                </p>
                <p style={{ color: !comment.moderated ? 'red' : 'inherit'}}>{comment.text}</p>
              </li>
            )
          })}
        </ul>
        <textarea value={this.state.text} className='comment-field' onChange={this.onChange} placeholder='Оставить комментарий' />
        <button onClick={this.addComment} className='button-blue--comment'>Отправить</button>
      </Fragment>
    )
  }
}