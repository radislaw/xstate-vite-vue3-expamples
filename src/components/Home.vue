<script setup lang="ts">
const pages = [
  {
    title: 'Toggle',
    path: '/toggle'
  },
  {
    title: 'Font',
    path: '/font'
  }
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="{title, path} in pages">
        <router-link :to="path" class="inline-block py-1 text-blue-500">
          {{title}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
