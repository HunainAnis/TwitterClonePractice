import { saveLikeToggle } from "../utils/api"

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGlE_TWEET = 'TOGGlE_TWEET'

export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

function toggleTweet({ id, authedUser, hasLiked }) {
    return {
        type: TOGGlE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet (info) {
    return(dispatch) => {
        dispatch(toggleTweet(info))

        return saveLikeToggle(info)
            .catch(e=> {
                console.warn('Error in handleToggleTweet:', e)
                dispatch(toggleTweet(info))
                alert('There was an error liking this tweet, try again!')
            })
    }
}