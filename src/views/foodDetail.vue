 <template>
  <div class="rating_page">
    <firstHeader :head-title="name" go-back="true"></firstHeader>
    <section class="header_img">
      <img :src="imgBaseUrl + image_path" class="food_img" />
      <div class="cover"></div>
    </section>
    <p class="description">{{description}}</p>
    <section class="detail_container">
      <section class="detail_left">
        <p>{{name}}</p>
        <div class="rating_sale">
          <span>评分</span>
          <div class="rating_container">
            <section class="star_container">
              <svg class="grey_fill" v-for="num in 5" :key="num">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                  <svg id="star" viewBox="0 0 32 32">
                    <path
                      class="path1"
                      d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                    />
                  </svg>
                </use>
              </svg>
            </section>
            <div :style="'width:' + rating*2/5 + 'rem'" class="star_overflow">
              <section class="star_container">
                <svg class="orange_fill" v-for="num in 5" :key="num">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                    <svg id="star" viewBox="0 0 32 32">
                      <path
                        class="path1"
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                      />
                    </svg>
                  </use>
                </svg>
              </section>
            </div>
          </div>
          <span>{{rating.toFixed(1)}}</span>
        </div>
        <p>
          <span>月售 {{month_sales}}单</span>
          <span>售价 ¥{{foods.specfoods[0].price}}</span>
          <span v-if="foods.specfoods.length">起</span>
        </p>
        <p>
          <span>评论数 {{rating_count}}</span>
          <span>好评率 {{satisfy_rate}}%</span>
        </p>
      </section>
    </section>
  </div>
</template>

<script>
import firstHeader from "../components/firstHeader";
export default {
  data() {
    return {
      image_path: null,
      description: null,
      month_sales: null,
      name: null,
      rating: null,
      rating_count: null,
      satisfy_rate: null,
      foods: null,
      shopId: null,
      imgBaseUrl: "//elm.cangdu.org/img/"
    };
  },
  created() {
    this.image_path = this.$route.query.image_path;
    this.description = this.$route.query.description;
    this.month_sales = this.$route.query.month_sales;
    this.name = this.$route.query.name;
    this.rating = this.$route.query.rating;
    this.rating_count = this.$route.query.rating_count;
    this.satisfy_rate = this.$route.query.satisfy_rate;
    this.foods = this.$route.query.foods;
    this.shopId = this.$route.query.shopId;
  },
  components: {
    firstHeader
  },
  props: [],
  methods: {
    getImgPath(path) {
      let suffix;
      if (!path) {
        return "//elm.cangdu.org/img/default.jpg";
      }
      if (path.indexOf("jpeg") !== -1) {
        suffix = ".jpeg";
      } else {
        suffix = ".png";
      }
      let url =
        "/" +
        path.substr(0, 1) +
        "/" +
        path.substr(1, 2) +
        "/" +
        path.substr(3) +
        suffix;
      return "https://fuss10.elemecdn.com" + url;
    }
  }
};
</script>
	
<style lang="scss" scoped>
@import "../style/mixin";

.rating_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 12;
  padding-top: 1.95rem;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.header_img {
  position: relative;
  .food_img {
    width: 100%;
    display: block;
  }
  .cover {
    position: absolute;
    @include wh(100%, 100%);
    top: 0;
    left: 0;
  }
}
.description {
  @include sc(0.6rem, #666);
  margin-top: 0.5rem;
  line-height: 0.8rem;
  bottom: 0.2rem;
  padding: 0 0.4rem;
}
.detail_container {
  padding: 0.5rem;
  @include fj;
  align-items: center;
  .detail_left {
    p:nth-of-type(1) {
      @include sc(0.7rem, #333);
      margin-bottom: 0.2rem;
    }
    .rating_sale {
      display: flex;
      align-items: center;
      span:nth-of-type(1) {
        @include sc(0.6rem, #666);
        margin-right: 0.2rem;
      }
      span:nth-of-type(2) {
        @include sc(0.55rem, #f60);
        margin-left: 0.2rem;
      }
      span:nth-of-type(3) {
        @include sc(0.6rem, #666);
        margin-left: 0.4rem;
      }
    }
    p:nth-of-type(2) {
      font-size: 0;
      margin-top: 0.3rem;
      span:nth-of-type(1) {
        @include sc(0.6rem, #666);
        margin-right: 0.4rem;
      }
      span:nth-of-type(2),
      span:nth-of-type(3) {
        @include sc(0.6rem, #f60);
        margin-right: 0.2rem;
      }
    }
    p:nth-of-type(3) {
      span {
        @include sc(0.6rem, #666);
      }
      span:nth-of-type(2) {
        @include sc(0.6rem, #666);
        margin-left: 0.25rem;
      }
    }
  }
}
.rating_container {
  position: relative;
  top: 0.2rem;
  @include wh(2rem, 0.4rem);
  .star_overflow {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .star_container {
    position: absolute;
    display: flex;
    width: 2rem;
    height: 0.4rem;
    top: -0.02rem;
    left: -0.02rem;
    .grey_fill {
      fill: #d1d1d1;
    }
    .orange_fill {
      fill: #ff9a0d;
    }
  }
}
</style>
