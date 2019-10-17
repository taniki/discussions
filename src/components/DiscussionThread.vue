<template>
  <div>
    <DatasetCard
      :url="subject.page"
      class="mb-5"
    />

    <b-card>
      <DiscussionThreadItem :comment="comments[0]">
        <DiscussionThreadItem
          v-for="comment in comments.slice(1)"
          :key="comment.id"
          :comment="comment"
        />
      </DiscussionThreadItem>
    </b-card>
  </div>
</template>

<script>
import DiscussionThreadItem from './DiscussionThreadItem'
import DatasetCard from './DatasetCard'

import { mapState } from 'vuex'

export default {
  components: { DiscussionThreadItem, DatasetCard },
  data () {
    return {
    }
  },
  computed: mapState({
    current: state => state.discussions.current,
    comments: state => state.discussions.thread.discussion,
    subject: state => state.discussions.subject
  })
}
</script>
