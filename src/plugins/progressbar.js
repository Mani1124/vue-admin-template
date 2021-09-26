import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
const options = {
  color: '#05b8a3',
  failedColor: '#f30c0c',
  thickness: '8px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
}

Vue.use(VueProgressBar, options)
