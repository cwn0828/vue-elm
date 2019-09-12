 <template>
  <div class="rating_page">
    <firstHeader head-title="选择发票抬头" go-back="true"></firstHeader>
    <section class="choose_invoice">
      <span>不需要开发票</span>
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select">
          <svg
            viewBox="0 0 120 120"
            id="select"
            :class="{choosed: invoice}"
            @click="chooseInvoice"
          >
            <circle cx="60" cy="60" r="60" />
            <path
              fill="#FFF"
              d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"
            />
          </svg>
        </use>
      </svg>
    </section>
    <div class="determine" @click="confrimInvoice">确定</div>
  </div>
</template>

<script>
import firstHeader from "../components/firstHeader";
import state from "../store/index";
export default {
  data() {
    return {
      invoice: false //是否需要发票
    };
  },
  components: {
    firstHeader
  },
  methods: {
    //是否选择发票
    chooseInvoice() {
      this.invoice = !this.invoice;
    },
    //保存发票信息
    confrimInvoice() {
      state.invoice = this.invoice;
      this.$router.go(-1);
    }
  }
};
</script>
  
<style lang="scss" scoped>
@import "../style/mixin";

.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 204;
  padding-top: 1.95rem;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.choose_invoice {
  @include fj;
  align-items: center;
  background-color: #fff;
  line-height: 2.5rem;
  margin-top: 0.5rem;
  padding: 0 0.7rem;
  span {
    @include sc(0.75rem, #333);
  }
  svg {
    @include wh(0.8rem, 0.8rem);
    fill: #999;
  }
  .choosed {
    fill: #4cd964;
  }
}
.determine {
  background-color: #4cd964;
  @include sc(0.7rem, #fff);
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
}
</style>
