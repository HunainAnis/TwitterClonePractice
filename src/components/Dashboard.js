import React from 'react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <h3 className='center'>Your Timeline</h3>
                {this.props.tweetsIds.map(i=><h1>{i}</h1>)}
            </div>
        )
    }
}

function mapStateToProps({ tweets }) {
    return {
        tweetsIds : Object.keys(tweets)
        .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)