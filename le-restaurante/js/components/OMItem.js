export default
{
  template:
  `
  <div class="om-item">
    <div class="om-item-left">
      <div class="om-item-img" v-bind:style="{ 'background-image': imgSrcUrl }"></div>
      <div class="om-item-img-border"></div>
    </div>
    <div class="om-item-right">
      <h4 class="om-item-h4">online menu</h4>
      <h3 class="om-item-header">{{ header }}</h3>
      <p class="om-item-description">{{ description }}</p>
      <div class="om-item-btn-container">
        <div class="btn btn-detailed">{{ buttontext }}</div>
      </div>
    </div>
  </div>
  `,

  computed: {
    imgSrcUrl: function() {
      return "url('"+this.imgsrc+"')";
    }
  },

  props: ["imgsrc", "header", "description", "buttontext"]
}