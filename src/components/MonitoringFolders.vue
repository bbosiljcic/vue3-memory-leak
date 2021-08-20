<template>
    <el-skeleton :loading="!loaded" animated>
        <template #template>
            <el-row :gutter="24" class="folder-grid">
                <template v-for="i in 8" :key="i">
                    <el-col :sm="24" :md="12" :lg="6">
                        <el-skeleton-item />
                    </el-col>
                </template>
            </el-row>
        </template>
        <template #default>
            <el-row :gutter="24" class="folder-grid">
                <template v-for="folder in orderedFolders" :key="folder.id">
                    <el-col :sm="24" :md="12" :lg="6">
                        <monitoring-folder
                            :folder="folder"
                            @folder-deleted="handleFolderDeleted"
                        />
                    </el-col>
                </template>
            </el-row>
        </template>
    </el-skeleton>
</template>

<script>

import monitoringService from '../services/monitoringService';
import MonitoringFolder from './MonitoringFolder';

export default {
    name: 'MonitoringFolders',
    components: {
        MonitoringFolder,
    },
    props: {
        orderDirection: {
            type: String,
            default: 'ASC',
        },
        orderBy: {
            type: String,
            default: 'Title',
        },
    },
    data() {
        return {
            folders: [],
            loaded: false,
            disableCreate: false,
        };
    },
    computed: {
        orderedFolders() {
            this.orderFolders();
            return this.folders;
        },
    },
    async created() {
        this.folders = await monitoringService.getFolders();
        this.loaded = true;
    },
    methods: {
        orderFolders() {
            this.folders ;
        },
        handleFolderDeleted(folderId) {
            this.folders = this.folders.filter((folder) => folder.id !== folderId);
        },
    },
};
</script>
