export default
{
  template:
  `
  <div class="random-post">
    <div class="random-post-container">
      <div class="random-post-top">
        <span class="like-icon" v-bind:class="{ 'like-icon-liked': isliked }"></span>
        <span class="random-post-likes"> {{ likes }} </span>
        <span class="dot"></span>
        <h4 class="random-post-header"> {{ title }} </h4>
      </div>

      <div class="random-post-bottom">
        <a v-bind:href="sourcelink">
          <div class="random-post-img-container">
            <img v-bind:src="imgsrc">
          </div>

          <p class="random-post-text">{{ text }}</p>
        </a>
      </div>
    </div>

    <div class="random-post-shadow"></div>
  </div>
  `,

  props: ["sourcelink", "isliked", "likes", "title", "imgsrc", "text"]
}