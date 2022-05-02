<template>
  <div class="container">

    <h1 class="text-2xl mb-3">Fonts</h1>

    <main>
      <div class="flex gap-3 mb-4">
        <button
            @click="send('B')"
            class="px-3 py-2 rounded border border-current"
            :class="state.value.bold === 'on' ? 'bg-blue-500 text-white' : 'bg-white text-black'"
        >
          Bold
        </button>

        <button
            @click="send('I')"
            class="px-3 py-2 rounded border border-current"
            :class="state.value.italic === 'on' ? 'bg-blue-500 text-white' : 'bg-white text-black'"
        >
          Italic
        </button>

        <button
            @click="send('UNDERLINE');"
            class="px-3 py-2 rounded border border-current"
            :class="state.value.line === 'u' ? 'bg-blue-500 text-white' : 'bg-white text-black'"
        >
          Underline
        </button>

        <button
            @click="send('LINE_THROUGH');"
            class="px-3 py-2 rounded border border-current"
            :class="state.value.line === 'lt' ? 'bg-blue-500 text-white' : 'bg-white text-black'"
        >
          Line Through
        </button>
      </div>

      <p class="mb-4"
         :class="{
          'font-bold': state.value.bold === 'on',
          'italic': state.value.italic === 'on',
          'underline': state.value.line === 'u',
          'line-through': state.value.line === 'lt'
        }"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consectetur, cum et libero neque
        ratione sequi veniam?
        Accusantium atque cumque distinctio eum eveniet optio sint voluptates? Aliquam dolores eaque enim error eum
        excepturi fuga laborum magni
        minima molestiae natus non nostrum possimus quo repudiandae sed, sequi tempora vitae! Neque.
      </p>

      <iframe
          width="100%"
          height="500px"
          src="https://stately.ai/viz/embed/c1c20765-f079-47bd-88e1-a63adf5e4e3c?mode=viz&panel=code&showOriginalLink=1&readOnly=1&pan=1&zoom=1&controls=1"
          sandbox="allow-same-origin allow-scripts"></iframe>
    </main>
  </div>
</template>

<script setup lang="ts">
import {useMachine} from '@xstate/vue';
import {fontMachine} from "../Machines/FontMachine";

const {state, send} = useMachine(fontMachine);
</script>
