export default
{
  template:
  '<div class="latest-photo">' +
    '<a v-bind:href="link">' +
      '<img v-bind:src="imgsrc">' +
    '</a>' +
  '</div>',

  props: ["link", "imgsrc"]
}