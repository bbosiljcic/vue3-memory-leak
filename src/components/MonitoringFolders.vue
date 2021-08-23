<template>
    <div v-for="folder in folders" :key="folder.id">
        <base-router-link class="monitoring-grid-item" :href="`/monitoring/folder/${folder.id}`" draggable="false">
        {{ folder.name }}
        </base-router-link>
    </div>
</template>

<script>

import BaseRouterLink from './Base/BaseRouterLink';

export default {
    name: 'MonitoringFolders',
    components: {
        BaseRouterLink,
    },
    data() {
        return {
            folders: [],
        };
    },
    async created() {
        this.folders = [
                        {
                "id": 53,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 53",
                "reportCount": 2
            },
            {
                "id": 11,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 11",
                "reportCount": 5
            },
            {
                "id": 13,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 13",
                "reportCount": 2
            },
            {
                "id": 89,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 89",
                "reportCount": 0
            },
            {
                "id": 135,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 135",
                "reportCount": 1
            },
            {
                "id": 54,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 54",
                "reportCount": 2
            },
            {
                "id": 5,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 5",
                "reportCount": 11
            },
            {
                "id": 2,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 2",
                "reportCount": 10
            },
            {
                "id": 127,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 127",
                "reportCount": 47
            },
            {
                "id": 64,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 64",
                "reportCount": 5
            },
            {
                "id": 51,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 51",
                "reportCount": 2
            },
            {
                "id": 128,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 128",
                "reportCount": 7
            },
            {
                "id": 130,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 130",
                "reportCount": 5
            },
            {
                "id": 129,
                "customer": 1,
                "creator": 2,
                "name": "New Folder 129",
                "reportCount": 2
            }
        ];
    },
};
</script>
