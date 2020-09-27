export default
{
  template:
  `
  <div class="dm-item">
    <div class="dm-item-img-container">
      <img class="dm-item-img" v-bind:src="imgsrc">
    </div>
    <div class="dm-item-info">
      <div class="dm-item-top">
        <h3 class="dm-item-header">
          <a class="dm-item-link" v-bind:href="link">{{ header }}</a>
        </h3>
        <div class="dm-item-black-dots"></div>
        <div class="dm-item-cost">
          <div class="dm-item-cost-text">{{ cost }}</div>
        </div>
      </div>
      <div class="dm-item-bottom">
        <div class="dm-item-allergens">Alergens</div>
        <div class="dm-item-gray-dots"></div>
        <div class="dm-item-allergens-list">{{ allergens }}</div>
      </div>
    </div>
  </div>
  `,

  props: ["imgsrc", "header", "cost", "allergens", "veganfood", "link"]
}