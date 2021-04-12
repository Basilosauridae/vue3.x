<template>
  <!-- <VueTwo/> -->
  <!-- <VueThree/> -->
  <!-- <Understand/> -->
  <!-- <set-up/> -->
  <!-- <reactive/> -->
  <!-- <ref/> -->
  <!-- <nonrecursion-listening/> -->
  <!-- <toRaw/> -->
  <!-- <markRaw/>-->
  <toRef/>

</template>

<script>
import VueTwo from './components/01.vue-two.vue'
import VueThree from './components/02.vue-three.vue'
import Understand from './components/03. understand.vue'
import SetUp from './components/04.setup.vue'
import Reactive from './components/05.reactive.vue'
import Ref from './components/06.ref.vue'
import NonrecursionListening from './components/07.nonrecursion-listening.vue'
import ToRaw from './components/08.roRaw.vue'
import MarkRaw from './components/09.markRaw.vue'
import ToRef from './components/10.ToRef.vue'

export default {
  name: 'App',
  components: {
    VueTwo,
    VueThree,
    Understand,
    SetUp,
    Reactive,
    Ref,
    NonrecursionListening,
    ToRaw,
    MarkRaw,
    ToRef
  }
}
</script>
