/*import React, { Component } from "react";
import Tweet from "./Tweet";
import TimelineResponse from "./TimelineResponse.json";
import "./Css/Timeline.css";
class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { tweets: [] };
  }
  componentDidMount() {
    let deploy = "https://ancient-temple-88525.herokuapp.com/api/tweets/NASA";
    fetch(deploy)
      .then(data => data.json())
      .then(data =>
        this.setState({
          tweets: data
        })
      );
  }

  render() {
    return (
      <div className="TimelineBox">
        {this.state.tweets.map(function(tweet) {
          return (
            <Tweet
              key={tweet.id}
              text={tweet.text}
              user={tweet.user}
              photo={tweet.photo}
              url={tweet.entities.urls[0]}
            />
          );
        })}
      </div>
    );
  }
}

export default Timeline;*/

import React, { Component } from "react";
import Tweet from "./Tweet";
import "./Css/Timeline.css";
import InfiniteScroll from 'react-infinite-scroller';

const tweetsList = [];
const api = {
  baseUrl: "https://ancient-temple-88525.herokuapp.com/api/tweets/NASA"
};

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      hasMoreItems: true,
      lastId: null
    };
  }

  loadItems(page) {
    var self = this;

    var url = api.baseUrl;
    if (this.state.lastId) {
      url += "?last_id=" + this.state.lastId;
    }
    fetch(url)
      .then(data => data.json())
      .then(data => {
        if (data.lenght == 0) {
          self.setState({
            hasMoreItems: false
          });
        } else {
          var tweets = self.state.tweets;
          data.map(tweet => {
            tweets.push(tweet);
          });
          this.setState({
            tweets: tweets,
            lastId: data[data.length - 1].id_str
          });
        }
      });
  }

  render() {
    const loader = <div className="loader">Loading ...</div>;

    var items = [];
    this.state.tweets.map((tweet, i) => {
      items.push(
        <Tweet
          key={tweet.id}
          text={tweet.text}
          user={tweet.user}
          photo={tweet.photo}
          url={tweet.entities.urls[0]}
        />
      );
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems.bind(this)}
        hasMore={this.state.hasMoreItems}
        loader={loader}
      >
        <div className="TimelineBox">{items}</div>
      </InfiniteScroll>
    );
  }
}
export default Timeline;
