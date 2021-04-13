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
  <!-- <toRef/> -->
  <!-- <toRefs/> -->
  <!-- <customRef/> -->
  <!-- <reason/> -->
  <!-- <getValue/> -->
  <readonly/>

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
import ToRefs from './components/11.toRefs.vue'
import CustomRef from './components/12.cutomRef.vue'
import Reason from './components/13.reason.vue'
import GetValue from './components/14.getValue.vue'
import Readonly from './components/15.readonly.vue'

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
    ToRef,
    ToRefs,
    CustomRef,
    Reason,
    GetValue,
    Readonly
  }
}
</script>
