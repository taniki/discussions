<template>
  <b-list-group>
    <b-list-group-item
      v-for="item in list"
      :key="item.id"
      @click="load(item.id)"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">
          {{ item.title }}
        </h5>
        <small class="text-muted">{{ item.created | moment("from", "now", true) }}</small>
      </div>

      <!-- <p class="mb-1">
        {{ item }}
      </p> -->

      <small class="text-muted">{{ item.user.first_name }} {{ item.user.last_name }}</small>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import Api from '~/services/Api'

const $api = new Api()

export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    $api.get('discussions').then((res) => {
      this.list = res.data.data
    })
  },
  methods: {
    load (id) {
      this.$store.dispatch('discussions/load_discussion', id)
    }
  }
}
</script>
