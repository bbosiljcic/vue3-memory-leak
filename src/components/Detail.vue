<template>
    <div class="folder-details">
        <router-link to="/">
            Go Back
        </router-link>
    </div>
    <hr />
    <reports :folder-id="folderId" />
</template>

<script>

import Reports from './Reports';

export default {
    name: 'Folder',
    components: {
        Reports,
    },
    data() {
        return {
            folderId: this.getFolderIdFromUrl(),
            folderName: '',
            loaded: false,
        };
    },
    async created() {
        if (this.folderId >= 0) {
            const folder = {
                id: 99,
                name: 'Folder'
            };
            this.folderName = folder.name;
        }
    },
    methods: {
        getFolderIdFromUrl() {
            const id = parseInt(this.$route.params.id, 10);
            return Number.isNaN(id) ? -1 : id;
        },
    },
};

</script>
