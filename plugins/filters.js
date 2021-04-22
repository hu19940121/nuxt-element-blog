import Vue from 'vue'
import moment from 'moment'
Vue.filter('parseTime', (value,format)=>{
  return moment(value).format(format)
})