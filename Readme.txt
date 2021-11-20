https://gitalk.github.io/
https://github.com/gitalk/gitalk
https://github.com/pusher-community/realtime-commenting
https://www.monperrus.net/martin/open+source+ajax+commenting+system
https://react-commenting-system.vercel.app/


https://github.com/philbot9/youtube-comment-api
{
  id: {{ comment id}},
  author: {{ comment author name }},
  authorLink: {{ comment author link (channel) }},
  authorThumb: {{ comment author avatar thumb url }},
  text: {{ comment text }},
  likes: {{ comment up-votes }},
  time: {{ how long ago the comment was posted (relative, e.g. '1 year ago') }},
  timestamp: {{ timestamp when comment was posted in milliseconds (absolute, e.g. 1457661439642 }},
  edited: {{ whether the comment was edited by the author (true/false) }},
  hasReplies: {{ whether the comment has replies (true/false) }},
  repliesToken: {{ token used to fetch replies for the comment }},
  numReplies: {{ number of replies }},
  replies: [ {{ reply objects (same fields as comments) }} ]
}
https://tugayyaldiz.github.io/vue-comment-grid/#/fullscreen