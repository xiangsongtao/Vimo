<template>
    <Page>
        <Header>
            <Navbar>
                <Title>Indicator</Title>
            </Navbar>
        </Header>
        <Content padding class="outer-content">
            <h1>Indicator组件</h1>
            <p>Loading的简单版, 用于无提示的Loading使用场景, 且开启最多存在10s, 10s后自动关闭.</p>
            <p>如果路由切换则关闭组件</p>
            <Button block @click="openIndicatorInfinity">Open infinity(max 10s)</Button>
            <Button block @click="openIndicator1000">Open 1000ms</Button>
            <Button block @click="openIndicatorReverse1000">Open 1000ms In Reverse Color</Button>
            <Button block @click="openIndicator300">Open 300ms</Button>
            <Button block @click="openIndicator100">Open 100ms</Button>
            <Button block @click="openIndicator70">Open 70ms</Button>
            <p>时间过短不开启, 开启的动作被cancel</p>
            <Button block @click="openIndicator50">Open 50ms</Button>
            <Button block @click="openIndicator5">Open 5ms</Button>
            <p>present多次执行, dismiss异步多次执行的特殊场景</p>
            <Button block @click="special">Special</Button>

            <article>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eos et ex facilis ipsam mollitia obcaecati officiis omnis perferendis sed, tempore velit voluptates? Aperiam cupiditate debitis provident quis quo.</p>
            </article>
        </Content>
    </Page>
</template>
<style scoped lang="scss">

</style>
<script type="text/javascript">
  export default {
    name: 'name',
    data () {
      return {}
    },
    methods: {
      special () {
        this.$indicator.present()
        this.$indicator.present()
        this.$indicator.present()
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 20)
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 100)
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 200)

        setTimeout(() => {
          this.$indicator.present()
        }, 200)
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 400)
      },
      openIndicatorInfinity () {
        this.$indicator.present()
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 10000)
      },

      openIndicator1000 () {
        this.$indicator.present()
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 1000)
      },

      openIndicatorReverse1000 () {
        this.$indicator.present(true)
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 1000)
      },

      openIndicator300 () {
        this.$indicator.present()
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 300)
      },

      openIndicator100 () {
        this.$indicator.present()
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 100)
      },
      openIndicator70 () {
        this.$indicator.present()
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 70)
      },
      openIndicator50 () {
        this.$indicator.present()
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 50)
      },
      openIndicator5 () {
        this.$indicator.present()
        setTimeout(() => {
          this.$indicator.dismiss()
        }, 5)
      }
    },
    created () {},
    mounted () {},
    activated () {},
    components: {}
  }
</script>
