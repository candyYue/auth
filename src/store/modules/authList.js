import request from "@request";

const state = {
  count: 1,
  // 待审核列表
  pending: [
    {
      name: "王小虎",
      tel: "20160502",
      time: "2016/05/02 12:12"
    },
    {
      name: "王小虎",
      tel: "20160502",
      time: "2016/05/02 12:12"
    },
    {
      name: "王小虎",
      tel: "20160502",
      time: "2016/05/02 12:12"
    }
  ],
  // 已认证列表
  authenticated: [{
    name: "王小猪",
    tel: "20160502",
    time: "2016/05/02 12:12"
  }],
  // 不合格列表
  rejected: [{
    name: "王小牛",
    tel: "20160502",
    time: "2016/05/02 12:12"
  }]
};

const getters = {
  pendinglist: state => state.pending,
  authenticatedlist: state => state.authenticated,
  rejectedlist: state => state.rejected
};

const mutations = {
  increment(state, payload) {
    state.count += payload.amount;
  }
};

const actions = {
  increment(data) {
    const a = request("baidu.com");
    console.log(a);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
