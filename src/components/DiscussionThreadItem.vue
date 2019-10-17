<template>
  <b-media>
    <template v-slot:aside>
      <b-img
        :src="comment.posted_by.avatar"
        blank-color="#ccc"
        width="64"
        alt="placeholder"
      />
    </template>
    <h5 class="mt-0">
      {{ comment.posted_by.first_name }} {{ comment.posted_by.last_name }}
    </h5>
    <small class="text-muted">{{ comment.posted_on | moment("from", "now", true) }} ago</small>
    <div
      v-html="parse(comment.content)"
      class="mt-2 mb-4"
    />

    <slot />
  </b-media>
</template>

<script>
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

const $processor = unified()
  .use(markdown)
  .use(html)

export default {
  props: {
    comment: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    parse (md) {
      return $processor.processSync(md).toString()
    }
  }
}
</script>
