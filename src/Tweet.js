import React, { Component } from "react";
import "./Css/Tweet.css";

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      user: props.user.name,
      photo: props.user.profile_image_url,
      url: props.url
    };
  }

  render() {
    let button;
    if (this.state.url) {
      button = <a className="linkMore" href={this.state.url.url}>More</a>;
    } else {
    }
    return (
      <section>
        <section className="tweetBox" data-aos="fade-up">
          <img src={this.state.photo}></img>
          <p className="userName">{this.state.user}</p>
          <p className="titleTweet">{this.state.text}</p>
          <div>{button}</div>
        </section>
      </section>
    );
  }
}
export default Tweet;
