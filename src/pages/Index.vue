<template>
  <Layout>
    <client-only>
      <b-container
        fluid
        class="pt-4"
      >
        <b-row>
          <b-col cols="3">
            <DiscussionsList />
          </b-col>
          <b-col cols="8">
            <DiscussionThread />
          </b-col>
        </b-row>
      </b-container>
    </client-only>
  </Layout>
</template>

<script>
import DiscussionsList from '~/components/DiscussionsList'
import DiscussionThread from '~/components/DiscussionThread'

export default {
  components: { DiscussionsList, DiscussionThread }
}

</script>
