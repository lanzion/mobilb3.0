import { LoadAdvertList, HandleImageData } from "../sreves/getData.js";
export default {
  getHome: function (state, id) {
    var This = this;
    var CheckTime = ''
    LoadAdvertList("IMAGE", "HOME_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.home.swiperSlides = HandleImageData(res)
      This.state.home.loadingFlag++;
    })
  }
}