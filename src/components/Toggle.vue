<template>
  <div class="container">

    <h1 class="text-2xl mb-4">Toggle Machine</h1>

    <main>
      <button @click="send('TOGGLE')" class="px-3 py-2 bg-blue-500 rounded text-white">
        {{
          state.value === 'inactive'
              ? 'Click to activate'
              : 'Active! Click to deactivate'
        }}
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
import {useMachine} from '@xstate/vue';
import {toggleMachine} from "../Machines/ToggleMachine";

const {state, send} = useMachine(toggleMachine);
</script>
