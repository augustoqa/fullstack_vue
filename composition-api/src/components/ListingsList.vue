<template>
  <div id="listings">
    <Notification
      :notification="notification"
      :toggleNotification="toggleNotification"
      :isDark="isDark"
    />
    <div v-for="listing in listings" :key="listing.id">
      <ListingsListItem :listing="listing" :isDark="isDark" />
    </div>
    <button
      class="button is-light"
      :class="{ 'is-primary': isDark, 'is-info': !isDark }"
      @click="resetListings"
      :disabled="listings.length === 3"
    >
      Reset
    </button>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import ListingsListItem from './ListingsListItem.vue'
import Notification from './Notification.vue'
import useNotification from '../hooks/useNotification'

export default {
  name: 'ListingsList',
  props: ['listings', 'isDark'],
  setup() {
    // access the store
    const store = useStore()
    const { notification, setNotification, toggleNotification } =
      useNotification()

    // methods
    const resetListings = () => {
      setNotification('Listings have been reset!')
      store.dispatch('resetListings')
    }

    // counted lifecycle hook
    onMounted(() => {
      setNotification('Welcome to NewlineBnB!')
    })

    // return properties for component to access
    return {
      notification,
      toggleNotification,
      resetListings,
    }
  },
  components: {
    ListingsListItem,
    Notification,
  },
}
</script>
