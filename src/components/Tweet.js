import React from 'react'
import { formatTweet, formatDate } from '../utils/helpers'
import { connect } from 'react-redux'
// import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'

class Tweet extends React.Component {

    toParent(e, id) {
        e.preventDefault()
        //todo: Redirect to parent
    }

    render() {
        console.log(this.props)

        const { tweet } = this.props
        if(tweet===null) {
            return(
                <p>This tweet doesn't found!</p>
            )
        }

        const {
            name, avatar, timestamp, text, hasLiked, likes, replines, id, parent
        } = tweet
        return(
            <div className='tweet'>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='tweet-info'>
                    <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                    {parent && (
                        <button className='replying-to' onClick={(e)=>this.toParent(e, parent.id)}>
                            Replying to @{parent.author}
                        </button>
                    )}
                </div>
                <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon' />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
    
    const tweet =  tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : 'null'
    return{
        authedUser,
        tweet: tweet ?
                formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
                : 'null'
    }
}

export default connect(mapStateToProps)(Tweet)