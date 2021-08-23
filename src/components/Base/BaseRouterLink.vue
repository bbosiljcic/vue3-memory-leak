<template>
    <a :href="href" @click="go">
        <slot />
    </a>
</template>

<script>


export default {
    name: 'BaseRouterLink',
    props: {
        href: {
            type: String,
            required: true,
        },
    },
    methods: {
        go(event) {
            event.preventDefault();
            if (!this.href) return;
            this.$root.currentRoute = this.href;
            this.scrollToTop();
            window.history.pushState(
                null,
                'Memory Leak',
                this.href,
            );
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>
