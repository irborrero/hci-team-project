import React from "react";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ConversationsComponent extends React.Component{

    state = {
        newComment: ""
    }

    render() {
        return(
            <div className="col-9">
                <div className="list-group">
                    <text className="list-group-item border-0">
                        <h4 className="d-inline">DISCUSSIONS FOR TOPIC</h4>
                        <button type="button" className="btn btn-primary float-right"
                                onClick={() => {this.props.addingComment(this.props.topicId)
                                }}>Add Comment</button>
                    </text>
                </div>


                <div className="list-group">
                    {this.props.discussions.adding === 0 &&
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start bg-light">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Comment Title</label>
                                <input type="email" className="form-control"
                                       placeholder="Write your new comment here"/>
                            </div>
                            <div className="form-group">
                                <label >Comment Body</label>
                                <textarea className="form-control"
                                          placeholder="Write your new comment here"/>
                            </div>
                        </form>
                        <button type="button" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-danger">Cancel</button>
                    </a>
                    }
                    {
                        this.props.discussions && this.props.discussions.discussions.map(discussion =>
                            discussion.topic === this.props.topicId &&
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1"> {discussion.title}</h5>
                                    <small>Today</small>
                                </div>
                                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                                    eget risus varius blandit.</p>
                                <small>By {discussion.user}</small>
                            </a>
                        )

                    }

                </div>
            </div>

        )
    }

}

const stateToPropertyMapper = (state) => {
    return {
        discussions: state.discussions,
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        updateDiscussions: (topicId) =>
            dispatch({
                type: 'UPDATE_DISCUSSIONS',
                topicId: topicId
            }),
        addingComment: (topicId) => {
            dispatch({
                type: 'ADDING_COMMENT',
            })
        }



    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ConversationsComponent)