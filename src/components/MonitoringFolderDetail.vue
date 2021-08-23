<template>
    <div class="folder-details">
        <base-router-link href="/">
            Go Back
        </base-router-link>
    </div>
    <hr />
    <monitoring-reports :folder-id="folderId" />
</template>

<script>

import MonitoringReports from './MonitoringReports';
import BaseRouterLink from './Base/BaseRouterLink';

export default {
    name: 'MonitoringFolder',
    components: {
        BaseRouterLink,
        MonitoringReports,
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

