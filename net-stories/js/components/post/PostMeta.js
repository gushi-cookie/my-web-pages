export default
{
  template:
  `
  <div class="post-meta">
    <div class="post-date">{{ date }}</div>
    <div class="post-vertical-line"></div>
    <div class="post-tags">
      <div v-for="tag in tags" class="post-tag">{{ tag }}</div>
    </div>
    <div class="post-vertical-line"></div>
    <div class="post-comments-amount">{{ commentsamount }} comments.</div>
  </div>
  `,

  props: ["date", "tags", "commentsamount"]
}