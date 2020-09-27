export default
{
  template:
  `
  <div class="comment">
    <div class="comment-avatar-container">
      <img class="comment-avatar" v-bind:src="avatar">
    </div>
    
    <div class="comment-chip"></div>

    <div class="comment-content">
      <div class="comment-text">{{ text }}</div>
      <div class="comment-shadow"></div>
      <div class="comment-meta">
        <div class="comment-date">posted on {{ date }}</div>
        <div class="comment-username">by {{ username }}</div>
      </div>
    </div>
  </div>
  `,

  props: ["avatar", "text", "date", "username"]
}