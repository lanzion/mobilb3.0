<template>
  <div class="home">
    <banner :bannerMess = 'HomeData.swiperSlides'/>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";

export default {
  name: "home",
  components: {
    banner
  },
  data() {
    return {};
  },
  computed: {
    HomeData() {
      console.log(this.$store.state.home);
      return this.$store.state.home;
    },
  },
  watch: {
    $route() {
      if (
        this.$store.state.home.swiperSlides.length == 0 &&
        this.$route.meta.index == 0
      ) {
        this.$store.dispatch("getHome");
      }
    }
  },
  created() {
    if (
      this.$store.state.home.swiperSlides.length == 0 &&
      this.$route.meta.index == 0
    ) {
      this.$store.dispatch("getHome");
    }
  }
};
</script>
