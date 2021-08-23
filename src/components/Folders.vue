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
        this.folders = [
             {
                "id": 53,
                "name": "Folder 53",
            },
            {
                "id": 11,
                "name": "Folder 11",
            },
            {
                "id": 13,
                "name": "Folder 13",
            },
            {
                "id": 89,
                "name": "Folder 89",
            },
        ];
    },
};
</script>
