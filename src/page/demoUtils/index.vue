<template>
  <div class="menu">

    <div>
      <n-text>语言切换</n-text>
      <n-button @click="changeLang('en')">English</n-button>
      <n-button @click="changeLang('zh')">中文</n-button>
    </div>
    <template v-if="$t('login.password')">
      <div><n-text>{{ $t("login.password") }}333333333333</n-text></div>
    </template>
    <template v-if="!$utils.isNull(startDate)">
      <div><n-text>{{ $t("login.password") }} $utils.isNull(startDate)</n-text></div>
    </template>
    <template v-if="!$utils.isUrl(startDate)">
      <div><n-text>{{ $t("login.password") }} $utils.isUrl(startDate)</n-text></div>
    </template>
    <template v-if="!$UtilsFN.isUrl(startDate)">
      <div><n-text>{{ $t("login.password") }} $UtilsFN.isUrl(startDate)</n-text></div>
    </template>
    <div v-t="'login.password'"></div>
    <div>{{ startDate }}</div>
    <h1>{{ userName }}</h1>
    <div>{{ endDate }}</div>
    <!--  <div>{{ $utils.toDateString(startDate, 'yyyy-dd-MM HH:mm:ss') }}</div> -->
  </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
import * as utils from '@/utils'
const { t, locale } = useI18n();
const changeLang = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('lang', lang); // 保存用户的语言选择到本地存储
};
const startDate = new Date()
const { ctx }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
const { proxy }: any = getCurrentInstance() // 使用proxy代替ctx，因为ctx只在开发环境有效
const instance: any = getCurrentInstance() as ComponentInternalInstance
const { appContext: { config: { globalProperties: global } } }: any = getCurrentInstance();//3.0.11
const isUrl2 = global.$utils; // .isUrl("ctx")
const userName = global.$cookie('U_NAME')
const endDate = global.$utils.toDateString(new Date(), 'MM/dd/yyyy HH:mm:ss.SSS')
onMounted(() => {
  console.log("vue 1", ctx, proxy, global, instance);
  console.log("vue 2 val", isUrl2, userName, endDate);
  console.log("vue 3", instance.appContext.config.globalProperties)
  console.log("vue $i18n", utils.isUrl("ctx"), t("home.hello"), global.$t("login.password"));
});
</script>