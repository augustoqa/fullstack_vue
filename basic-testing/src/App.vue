<template>
  <div id="app" class="ui text container">
    <div class="ui text container">
      <table class="ui selectable structured large table">
        <thead>
          <tr>
            <th>Items</th>
          </tr>
        </thead>
        <tbody class="item-list">
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>
              <form class="ui form" @submit="addItem">
                <div class="field">
                  <input
                    type="text"
                    v-model="item"
                    class="prompt"
                    placeholder="Add item..."
                  />
                </div>
                <button type="submit" class="ui button" :disabled="!item">
                  Add
                </button>
                <span class="ui label">Remove all</span>
              </form>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: '',
      items: []
    }
  },
  methods: {
    addItem(e) {
      e.preventDefault()
      this.items.push(this.item)
    }
  }
}
</script>
