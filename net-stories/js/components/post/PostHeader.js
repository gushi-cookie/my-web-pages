export default
{
  template:
  `
  <header class="post-header">
  
    <div class="post-header-container">
      <div class="post-header-img-container">
        <img class="post-header-img" v-bind:src="imgsrc">
      </div>

      <div class="post-title">
        <span class="like-icon" v-bind:class="{ 'like-icon-liked': isliked }"></span>
        <span class="likes">{{ likes }}</span>
        <span class="dot"></span>
        <h1 class="post-header-h1">{{ title }}</h1>
      </div>
    </div>

    <div class="post-header-shadow"></div>
  </header>
  `,

  props: ["imgsrc", "likes", "title", "isliked"]
}