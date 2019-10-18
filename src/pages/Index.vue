<template>
  <Layout>
    <client-only>
      <b-container
        fluid
        class="pt-4"
      >
        <b-row>
          <b-col
            md="3"
            class="mb-3 mb-md-0"
          >
            <DiscussionsList />
          </b-col>
          <b-col md="9">
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
