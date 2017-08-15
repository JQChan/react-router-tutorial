import React from 'react';

export default React.createClass({
  render () {
    return (
       <div>
         <h2>{this.props.params.username}：{this.props.params.repoName}</h2>
       </div>
    )
  }
})