<template>
    <div class="folder-details">
        <router-link href="/" style="margin-right: 32px">
            Go Back
        </router-link>
    </div>
    <hr />
    <reports :folder-id="folderId" />
</template>

<script>

import Reports from './Reports';
import RouterLink from './RouterLink';

export default {
    name: 'Folder',
    components: {
        RouterLink,
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
            const id = parseInt(window.location.href.substring(window.location.href.lastIndexOf('/') + 1), 10);
            return Number.isNaN(id) ? -1 : id;
        },
    },
};

</script>
