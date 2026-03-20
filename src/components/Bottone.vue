<template>
    <component
        :is="as"
        :href="as === 'a' ? href : undefined"
        :target="as === 'a' ? target : undefined"
        :rel="as === 'a' ? rel : undefined"
        :type="as === 'button' ? type : undefined"
        :class="[
            'inline-flex items-center justify-center rounded-full border font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            sizeClasses,
            variantClasses,
        ]"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'full' | 'outline'
type Size = 'sm' | 'md' | 'lg'
type AsTag = 'button' | 'a'

const props = withDefaults(
    defineProps<{
        variant?: Variant
        size?: Size
        as?: AsTag
        href?: string
        target?: string
        rel?: string
        type?: 'button' | 'submit' | 'reset'
    }>(),
    {
        variant: 'full',
        size: 'md',
        as: 'button',
        type: 'button',
    }
)

const sizeClasses = computed(() => {
    if (props.size === 'sm') return 'px-4 py-2 text-xs tracking-[0.12em] uppercase'
    if (props.size === 'lg') return 'px-8 py-4 text-base'
    return 'px-6 py-3 text-sm'
})

const variantClasses = computed(() => {
    if (props.variant === 'outline') {
        return 'border-pink-400 text-pink-600 bg-white hover:bg-pink-50 focus-visible:ring-pink-300'
    }

    return 'border-pink-500 bg-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 focus-visible:ring-pink-300'
})
</script>