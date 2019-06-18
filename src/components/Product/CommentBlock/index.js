import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCommentsAsync, addCommentAsync, deleteCommentAsync, acceptComentAsync } from 'api/comments';
import { toggleToastAsync } from 'api/toast';

const OPTIONS = {
  hour: 'numeric',
  minute: 'numeric',
}

class Comments extends Component {

  state = {
    text: ''
  }

  componentDidMount () {
    const { match: { params } } = this.props;
    const productId = Number(params.number);
    this.props.getComments({ productId });
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  addComment = () => {
    const { text } = this.state;
    if (!text.trim()) {
      this.props.toggleToast('Введите текст комментария');
      return;
    };
    const { match: { params }, user: { name } } = this.props;
    const date = new Date().toLocaleDateString('ru', OPTIONS);
    const productId = parseInt(params.number, 10);
    
    const data = { name, date, text, productId };
    this.props.addComment(data)
      .then(() => this.setState({ text: '' }))
      .catch(err => {
        this.setState({ text: '' });
        console.log(err);
      })
  }
  
  render () {
    const { user: { isadmin }, comments, acceptComment, deleteComment } = this.props;

    return (
      <Fragment>
        <ul>
          {comments.map(comment => {
            if (!isadmin && !comment.moderated) return;
            return(
              <li className='comment' key={comment.id}>
                <p>
                  <span className='comment-name'>{comment.name}</span> 
                  {comment.date}
                  {!comment.moderated && (
                    <Fragment>
                      <button onClick={() => acceptComment(comment.id)} className='comment-action'>Принять</button>
                      <button onClick={() => deleteComment(comment.id)} className='comment-action'>Удалить</button>
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

const mapStateToProps = ({ user, comments }) => ({
  comments,
  user: !user ? { name: 'Анонимно', isadmin: false } : user
})

const mapDispatchToProps = dispatch => ({
  getComments: id => dispatch(getCommentsAsync(id)),
  addComment: data => dispatch(addCommentAsync(data)),
  deleteComment: id => dispatch(deleteCommentAsync(id)),
  acceptComment: id => dispatch(acceptComentAsync(id)),
  toggleToast: text => dispatch(toggleToastAsync(text))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));