import React from 'react'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import { connect } from 'react-redux'

class TweetPage extends React.Component {
    render() {
        const { id, replies } = this.props
        console.log(replies)
        return(
            <div>
                <Tweet id={id} />
                <NewTweet id={id} />
                {this.props.replies.length !== 0 && <h3 className='center'>Replies</h3>}
                <ul>
                    {replies.map(id=>(
                        <li key={id}>
                            <Tweet id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUsers, tweets, users }, props) {
    const { id } = props.match.params

    return {
        id,
        replies: !tweets[id]
        ? []
        :tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(TweetPage)