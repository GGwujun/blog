<template>
  <div id="vuepress-theme-blog__post-layout">
    <div class="vuepress-blog-theme-content">
      <h1 class="post-title">{{ $frontmatter.title }}</h1>

      <Content />
      <Newsletter v-if="$service.email.enabled" />
      <hr />
      <Comment />
    </div>
    <Toc />
  </div>
</template>

<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Comment,
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.vuepress-blog-theme-content
  @extend $wrapper
  font-size 16px
  letter-spacing 0px
  font-family PT Serif, Serif
  color $textColor
  position relative
  @media (min-width: $MQNarrow)
    box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)
  .post-title
    padding-top 0
@media (max-width: $MQMobile)
  .vuepress-blog-theme-content
    padding-top 0
  .post-title
    margin-top 0
</style>
