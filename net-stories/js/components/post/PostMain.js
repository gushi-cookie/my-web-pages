export default
{
  template:
  `
  <div class="post-main">
    <div class="post-main-container">

      <div class="post-content">
        <div v-if="ishtml" v-html="content"></div>
        <p v-else v-for="text in content" class="post-content-text">{{ text }}</p>
      </div>

      <div class="post-sharing-bar">
        <div class="post-share-text">Liked it? Share it!</div>
        <div class="post-socials">
          <div class="post-social" v-for="social in socialsforshare">
            <a v-bind:href="social.link">
              <img class="post-social-img" v-bind:src="social.imgSrc">
            </a>
          </div>
        </div>
      </div>

    </div>
    <div class="post-main-shadow"></div>
  </div>
  `,

  props: ["content", "socialsforshare", "ishtml"]
}