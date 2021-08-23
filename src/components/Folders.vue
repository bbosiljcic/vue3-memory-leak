<template >
    <div v-for="folder in folders" :key="folder.id">
        <router-link :href="`folder/${folder.id}`">
            <span>{{ folder.name }}</span>
        </router-link>
    </div>
</template>

<script>

import RouterLink from './RouterLink';

export default {
    name: 'Folders',
    components: {
        RouterLink,
    },
    data() {
        return {
            folders: [],
            disableCreate: false,
        };
    },
    async created() {

        this.folders = [...Array(5)].map(() => {
            const random = Math.floor(Math.random() * 1000) + 1;
            return {
                id: random,
                name: `Folder ${random}`,
            }
        });
    },
};
</script>
