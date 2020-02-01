import React, {Component} from 'react';
import TimelineResponse from './TimelineResponse.json';
import './Timeline.css';
class Timeline extends Component {
 

	render () {
   
		return (
			<div className="TimelineBox">
          {
            TimelineResponse.map((tweetDetail, index)=>{
              return <div class="tweetBox" data-aos='fade-up'>
                <p>{tweetDetail.data.created_at}</p>
                <p>{tweetDetail.data.text}</p>
              </div>
            })
          };
			</div>
		)
	}
}
export default Timeline;





/*const https = require('https');
const request = require('request');
const util = require('util');

const get = util.promisify(request.get);
const post = util.promisify(request.post);

const consumer_key = ''; // Add your API key here
const consumer_secret = ''; // Add your API secret key here

const bearerTokenURL = new URL('https://api.twitter.com/oauth2/token');
const streamURL = new URL('https://api.twitter.com/labs/1/tweets/stream/sample');

async function bearerToken (auth) {
  const requestConfig = {
    url: bearerTokenURL,
    auth: {
      user: consumer_key,
      pass: consumer_secret,
    },
    form: {
      grant_type: 'client_credentials',
    },
    headers: {
      'User-Agent': 'TwitterDevSampledStreamQuickStartJS',
    },
  };

  const response = await post(requestConfig);
  return JSON.parse(response.body).access_token;
}

function streamConnect(token) {
  // Listen to the stream
  const config = {
    url: 'https://api.twitter.com/labs/1/tweets/stream/sample?format=compact',
    auth: {
      bearer: token,
    },
    headers: {
      'User-Agent': 'TwitterDevSampledStreamQuickStartJS',
    },
    timeout: 20000,
  };

  const stream = request.get(config);

  stream.on('data', data => {
    try {
      const json = JSON.parse(data);
      console.log(json);
    } catch (e) {
      // Keep alive signal received. Do nothing.
    }
  }).on('error', error => {
    if (error.code === 'ETIMEDOUT') {
      stream.emit('timeout');
    }
  });

  return stream;
}

(async () => {
  let token;

  try {
    // Exchange your credentials for a Bearer token
    token = await bearerToken({consumer_key, consumer_secret});
  } catch (e) {
    console.error(`Could not generate a Bearer token. Please check that your credentials are correct and that the Sampled Stream preview is enabled in your Labs dashboard. (${e})`);
    process.exit(-1);
  }

  const stream = streamConnect(token);
  stream.on('timeout', () => {
    // Reconnect on error
    console.warn('A connection error occurred. Reconnecting…');
    streamConnect(token);
  });
})();

*/