import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home.vue')
    },
    {
      path: '/city/:cityid',
      name: 'city',
      component: () => import('./views/city.vue')
    },
    {
      path: '/waimai',
      name: 'Waimai',
      component: () => import('./views/Waimai.vue')
    },
    {
      path: '/Food',
      name: 'Food',
      component: () => import('./views/Food.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('./views/forget.vue')
    },
    {
      path: '/shop',
      component: () => import('./views/shop.vue')
    },
    {
      path: '/shop/foodDetail', //食品详情页
      component: () => import('./views/foodDetail.vue')
    },
    {
      path: '/shop/shopDetail', //食品详情页
      component: () => import('./views/shopDetail.vue')
    },
    {
      path: '/shop/shopDetail/shopSafe', //食品详情页
      component: () => import('./views/shopSafe.vue')
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: () => import('./views/confirmOrder.vue')
    },
    {
      path: '/confirmOrder/remark', //订单备注
      name: 'remark',
      component: () => import('./views/remark.vue'),
    },
    {
      path: '/confirmOrder/invoice', //发票抬头
      name: 'invoice',
      component: () => import('./views/invoice.vue'),
    },
    {
      path: '/confirmOrder/payment', //发票抬头
      name: 'payment',
      component: () => import('./views/payment.vue'),
    },
    {
      path: '/confirmOrder/userValidation', //发票抬头
      name: 'userValidation',
      component: () => import('./views/userValidation.vue'),
    },
    {
      path: '/confirmOrder/chooseAddress', //增加地址
      name: 'chooseAddress',
      component: () => import('./views/chooseAddress.vue')
    },
    {
      path: '/confirmOrder/chooseAddress/addAddress',
      name: 'addAddress',
      component: () => import('./views/addAddress.vue')
    },
    {
      path: '/confirmOrder/chooseAddress/addAddress/searchAddress',
      name: 'searchAddress',
      component: () => import('./views/searchAddress.vue'),
    },
    {
      path: '/search/:geohash',
      name: 'search',
      component: () => import('./views/search.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/order.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/profile.vue'),
    },
    {
      path: '/profile/info',
      name: 'info',
      component: () => import('./views/info.vue'),
    },
    {
      path: '/profile/info/setusername',
      name: 'setusername',
      component: () => import('./views/setusername.vue'),
    },
    {
      path: '/profile/info/address',
      name: 'address',
      component: () => import('./views/address.vue'),
    },
    {
      path: '/profile/info/address/add',
      name: 'add',
      component: () => import('./views/add.vue'),
    },
    {
      path: '/profile/info/address/add/addDetail',
      name: 'addDetail',
      component: () => import('./views/addDetail.vue'),
    },
    {
      path: '/vipcard',
      name: 'vipcard',
      component: () => import('./views/vipcard.vue'),
    },
    {
      path: '/vipcard/invoiceRecord',
      name: 'invoiceRecord',
      component: () => import('./views/invoiceRecord.vue'),
    },
    {
      path: '/vipcard/useCart',
      name: 'useCart',
      component: () => import('./views/useCart.vue'),
    },
    {
      path: '/vipcard/vipDescription',
      name: 'vipDescription',
      component: () => import('./views/vipDescription.vue'),
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('./views/service.vue'),
    },
    {
      path: '/service/questionDetail',
      name: 'questionDetail',
      component: () => import('./views/questionDetail.vue'),
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/download.vue'),
    },
    {
      path: '/balance',
      name: 'balance',
      component: () => import('./views/balance.vue'),
    },
    {
      path: '/balance/detail',
      name: 'detail',
      component: () => import('./views/detail.vue'),
    },
    {
      path: '/benefit',
      name: 'benefit',
      component: () => import('./views/benefit.vue'),
    },
    {
      path: '/benefit/commend',
      name: 'commend',
      component: () => import('./views/commend.vue'),
    },
    {
      path: '/benefit/coupon',
      name: 'coupon',
      component: () => import('./views/coupon.vue'),
    },
    {
      path: '/benefit/exchange',
      name: 'exchange',
      component: () => import('./views/exchange.vue'),
    },
    {
      path: '/benefit/hbDescription',
      name: 'hbDescription',
      component: () => import('./views/hbDescription.vue'),
    },
    {
      path: '/benefit/hbHistory',
      name: 'hbHistory',
      component: () => import('./views/hbHistory.vue'),
    },
    {
      path: '/points',
      name: 'points',
      component: () => import('./views/points.vue'),
    },
    {
      path: '/points/detail',
      name: 'pointsDetail',
      component: () => import('./views/pointsDetail.vue'),
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
