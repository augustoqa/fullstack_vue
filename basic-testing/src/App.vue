<template>
  <div id='app' class='ui text container'>
    <div class='ui text container'>
      <table class='ui selectable structured large table'>
        <thead>
        <tr>
          <th>Items</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
          <th>
            <form class='ui form'>
              <div class='field'>
                <input type='text' class='prompt' placeholder='Add item...'>
              </div>
              <button type='submit' class='ui button' disabled>Add</button>
              <span class='ui label'>Remove all</span>
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
  }
}
</script>