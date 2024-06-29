<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="placeholder-gray-300 dark:placeholder-gray-400 border-gray-300 dark:border-gray-800 dark:bg-gray-500 hover:border-gray-400 dark:hover:border-gray-200 dark:text-gray-100 focus:border-primary focus:ring-primary rounded-md shadow-sm  transition ease-in-out duration-150 disabled:opacity-25 "
        v-model="model"
        ref="input"
    />
</template>
