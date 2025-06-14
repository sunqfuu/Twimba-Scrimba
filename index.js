import { tweetsData } from './data.js';

const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');

tweetBtn.addEventListener('click', function () {
    console.log(tweetInput.value);
})

function getFeedHtml() {
    let feedHtml = '';
    tweetsData.forEach(function (tweet) {
        feedHtml += `
        <div class="tweet">
        <div class="tweet-header">
        <img class="profile-pic" src="${tweet.profilePic}" alt="Profile picture of ${tweet.handle}">
        </div>
         <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet"></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
        `
    })
    return feedHtml;
}

function render() {
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render();