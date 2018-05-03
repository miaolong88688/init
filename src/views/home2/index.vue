<template>
    <div>
        <div class="home2">
          <div>首页2</div>
        </div>
    </div>
</template>

<script>
import * as connectURL from "@/http/common/connectURL";
import * as mutationTypes from "@/vuex/mutations/types";
import * as actionTypes from "@/vuex/actions/types";
import { 
  mapState, 
  mapGetters, 
  mapMutations, 
  mapActions 
} from "vuex";

export default {
  name: "home2",
  data() {
    return {
      msg: "欢迎来到Vue",
      msg1: "我是组件计算属性"
    };
  },
  computed: {
    ...mapState(["count", "resultData"]),
    ...mapGetters(["calcNumber"]),
    currentComputed() {
      return this.msg1;
    }
  },
  methods: {
    ...mapMutations({
      triggerMutation: mutationTypes.SET_MUTATION_DEFAULT
    }),
    ...mapActions({
      triggerAction: actionTypes.SET_ACTION_DEFAULT
    })
  }
};
</script>

<style lang="less" src="./index.less"> </style>