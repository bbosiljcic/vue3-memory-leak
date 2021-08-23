<template >
    <div v-for="folder in folders" :key="folder.id">
        <router-link :to="`/folder/${folder.id}`">
            <span>{{ folder.name }}</span>
        </router-link>
    </div>
    <hr />
    <reports  />

</template>

<script>

import Reports from './Reports';

export default {
    name: 'Folders',
    components: {
        Reports,
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
