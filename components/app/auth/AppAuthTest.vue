<template>
  <div>
    <button @click="client.auth.signInWithOAuth({ provider: 'github' })">
      signinwithgithub
    </button>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient();
</script>
