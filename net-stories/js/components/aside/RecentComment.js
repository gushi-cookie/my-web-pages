export default
{
  template:
  `
  <div class="recent-comment" v-bind:class="{ 'recent-comment-highlight': highlight }">
    
    <div class="recent-comment-container">
      <a v-bind:href="sourcelink">
        <div class="recent-comment-avatar-container">
          <img class="recent-comment-avatar" v-bind:src="imgsrc">
        </div>
        <p class="recent-comment-text">{{ text }}</p>
      </a>
    </div>

    <div class="recent-comment-shadow"></div>

  </div>
  `,

  props: ["sourcelink", "imgsrc", "text", "highlight"]
}