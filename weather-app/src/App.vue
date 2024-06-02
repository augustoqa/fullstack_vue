<template>
  <div id="app" class="flex-align has-text-centered">
    <p class="app__date has-text-weight-bold">{{ date }}</p>

    <weather-container></weather-container>

    <div class="app__cities">
      <a href="#" v-for="city in cities" :key="city.id">{{ city.name }}</a>
    </div>
  </div>
</template>

<script>
import WeatherContainer from '@/components/WeatherContainer.vue'

export default {
  components: {
    WeatherContainer
  },
  data() {
    return {
      cities: [
        { id: 5128581, name: 'New York City, New York' },
        { id: 3435910, name: 'Buenos Aires, Argentina' },
        { id: 524901, name: 'Moscow, Russia' },
        { id: 1850147, name: 'Tokyo, Japan' },
        { id: 2147714, name: 'Sydney, Australia' },
        { id: 2332453, name: 'Lagos, Nigeria' }
      ]
    }
  },
  computed: {
    date() {
      return new Date().toDateString()
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app.flex-align {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__date {
  position: absolute;
  top: 10px;
  right: 10px;
}

.app__cities {
  position: absolute;
  bottom: 40px;
}

.app__cities a {
  color: #42b983;
  padding: 0 10px;
}
</style>
