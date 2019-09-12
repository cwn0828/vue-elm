 <template>
  <div class="address_page">
    <firstHeader head-title="添加地址" go-back="true"></firstHeader>
    <section class="page_text_container">
      <section class="section_list">
        <span class="section_left">联系人</span>
        <section class="section_right">
          <input type="text" name="name" placeholder="你的名字" v-model="name" class="input_style" />
          <div class="choose_sex">
            <span class="choose_option">
              <svg class="address_empty_right" :class="{choosed: sex == 1}" @click="chooseSex(1)">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select">
                  <svg viewBox="0 0 120 120" id="select">
                    <circle cx="60" cy="60" r="60" />
                    <path
                      fill="#FFF"
                      d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"
                    />
                  </svg>
                </use>
              </svg>
              <span>先生</span>
            </span>
            <span class="choose_option">
              <svg class="address_empty_right" :class="{choosed: sex == 2}" @click="chooseSex(2)">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select">
                  <svg viewBox="0 0 120 120" id="select">
                    <circle cx="60" cy="60" r="60" />
                    <path
                      fill="#FFF"
                      d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"
                    />
                  </svg>
                </use>
              </svg>
              <span>女士</span>
            </span>
          </div>
        </section>
      </section>
      <section class="section_list">
        <span class="section_left">联系电话</span>
        <section class="section_right">
          <div class="phone_add">
            <input type="text" name="phone" placeholder="你的手机号" v-model="phone" class="input_style" />
            <img src="../assets/add_phone.png" height="20" width="20" @click="phone_bk = true" />
          </div>
          <input
            v-if="phone_bk"
            type="text"
            name="anntherPhoneNumber"
            placeholder="备选电话"
            v-model="anntherPhoneNumber"
            class="input_style phone_bk"
          />
        </section>
      </section>
      <section class="section_list">
        <span class="section_left">送餐地址</span>
        <section class="section_right">
          <router-link
            to="/confirmOrder/chooseAddress/addAddress/searchAddress"
            tag="div"
            class="choose_address"
          >{{searchAddress? searchAddress.name : '小区/写字楼/学校等'}}</router-link>
          <input
            type="text"
            name="address_detail"
            placeholder="详细地址（如门牌号等）"
            v-model="address_detail"
            class="input_style"
          />
        </section>
      </section>
      <section class="section_list">
        <span class="section_left">标签</span>
        <section class="section_right">
          <input type="text" name="tag" placeholder="无/家/学校/公司" v-model="tag" class="input_style" />
        </section>
      </section>
    </section>
    <div class="determine" @click="addAddress">确定</div>
    <div class="alet_container" v-if="showAlert">
      <section class="tip_text_container">
        <div class="tip_icon">
          <span></span>
          <span></span>
        </div>
        <p class="tip_text">{{alertText}}</p>
        <div class="confrim" @click="closeTip">确认</div>
      </section>
    </div>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import firstHeader from "../components/firstHeader";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      name: null, //姓名
      sex: 1, //性别
      phone: null, //电话
      address_detail: null, //详细地址
      tag: "", //备注
      tag_type: 1, //备注类型
      phone_bk: false, //是否选择备注电话
      anntherPhoneNumber: "", //备注电话
      showAlert: false, //弹出框
      alertText: null, //弹出框信息
      poi_type: 0 //地址类型
    };
  },
  created() {},
  components: {
    firstHeader
  },
  computed: {
    ...mapState(["searchAddress", "geohash", "userInfo"])
  },
  methods: {
    ...mapMutations(["CONFIRM_ADDRESS"]),
    //选择性别
    chooseSex(sex) {
      this.sex = sex;
    },
    //保存地址信息
    async addAddress() {
      if (!(this.userInfo && this.userInfo.user_id)) {
        this.showAlert = true;
        this.alertText = "请登录";
      } else if (!this.name) {
        this.showAlert = true;
        this.alertText = "请输入姓名";
      } else if (!this.phone) {
        this.showAlert = true;
        this.alertText = "请输入电话号码";
      } else if (!this.searchAddress) {
        this.showAlert = true;
        this.alertText = "请选择地址";
      } else if (!this.address_detail) {
        this.showAlert = true;
        this.alertText = "请输入详细地址";
      }
      if (this.tag == "家") {
        this.tag_type = 2;
      } else if (this.tag == "学校") {
        this.tag_type = 3;
      } else if (this.tag == "公司") {
        this.tag_type = 4;
      }
      this.$axios
        .post(
          `https://elm.cangdu.org/v1/users/${this.userInfo.user_id}/addresses`,
          {
            address: this.searchAddress.name,
            address_detail: this.address_detail,
            geohash: this.geohash,
            name: this.name,
            phone: this.phone,
            phone_bk: this.anntherPhoneNumber,
            poi_type: 0,
            sex: this.sex,
            tag: this.tag,
            tag_type: this.tag_type
          }
        )
        .then(response => {
          console.log(response);
          // 如果数据请求到，那么赋值给profile
          let res = response.data;
        })
        .catch(err => {
          res = null;
          // console.log(err);
        });
      //保存成功返回上一页，否则弹出提示框
      if (res.message) {
        this.showAlert = true;
        this.alertText = res.message;
      } else {
        this.CONFIRM_ADDRESS(1);
        this.$router.go(-1);
      }
    },
    closeTip() {
      this.showAlert = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/mixin";

.address_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 204;
  padding-top: 1.95rem;
  p,
  span,
  input {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.page_text_container {
  background-color: #fff;
  padding: 0 0.7rem;
}
.section_list {
  display: flex;
  border-bottom: 0.025rem solid #f5f5f5;
  .section_left {
    @include sc(0.7rem, #333);
    flex: 2;
    line-height: 2.5rem;
  }
  .section_right {
    flex: 5;
    .input_style {
      width: 100%;
      height: 2.5rem;
      @include sc(0.7rem, #999);
    }
    .phone_bk {
      border-top: 0.025rem solid #f5f5f5;
    }
    .phone_add {
      @include fj;
      align-items: center;
    }
    .choose_sex {
      display: flex;
      line-height: 2.5rem;
      border-top: 0.025rem solid #f5f5f5;
      .choose_option {
        @include sc(0.7rem, #333);
        display: flex;
        align-items: center;
        margin-right: 0.8rem;
        .address_empty_right {
          margin-right: 0.3rem;
          @include wh(0.8rem, 0.8rem);
          fill: #ccc;
        }
        .choosed {
          fill: #4cd964;
        }
      }
    }
    .choose_address {
      @include sc(0.7rem, #999);
      line-height: 2.5rem;
      border-bottom: 0.025rem solid #f5f5f5;
    }
  }
}
.determine {
  background-color: #4cd964;
  @include sc(0.7rem, #fff);
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.6rem;
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.4s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
@keyframes tipMove {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.alet_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}
.tip_text_container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6rem;
  margin-left: -6rem;
  width: 12rem;
  animation: tipMove 0.4s;
  background-color: rgba(255, 255, 255, 1);
  border: 1px;
  padding-top: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px;
  border-radius: 0.25rem;
  .tip_icon {
    @include wh(3rem, 3rem);
    border: 0.15rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span:nth-of-type(1) {
      @include wh(0.12rem, 1.5rem);
      background-color: #f8cb86;
    }
    span:nth-of-type(2) {
      @include wh(0.2rem, 0.2rem);
      border: 1px;
      border-radius: 50%;
      margin-top: 0.2rem;
      background-color: #f8cb86;
    }
  }
  .tip_text {
    @include sc(0.7rem, #333);
    line-height: 0.9rem;
    text-align: center;
    margin-top: 0.8rem;
    padding: 0 0.4rem;
  }
  .confrim {
    @include sc(0.8rem, #fff);
    font-weight: bold;
    margin-top: 0.8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
}
</style>
