<template>
    <div class="page-container monitoring-overview">
        <div class="monitoring-header">
            <h1 class="base-header">
                Memory Leak
            </h1>
        </div>
        <template v-if="!currentRoute.includes('folder')">
            <monitoring-folders
            />
            <monitoring-reports
            />
        </template>
        <template v-else>
            <monitoring-folder-detail />
        </template>
    </div>
</template>

<script>

import MonitoringFolders from './MonitoringFolders';
import MonitoringReports from './MonitoringReports';
import MonitoringFolderDetail from './MonitoringFolderDetail';

export default {
    name: 'MonitoringOverview',
    components: {
        MonitoringFolderDetail,
        MonitoringReports,
        MonitoringFolders,
    },
    data() {
        return {
            currentRoute: window.location.pathname,
        };
    },
    mounted() {
        window.addEventListener('popstate', this.browserHistoryListener);
    },
    unmounted() {
        window.removeEventListener('popstate', this.browserHistoryListener);
    },
    methods: {

        browserHistoryListener() {
            if (window.location.pathname !== this.currentRoute) this.currentRoute = window.location.pathname;
        },
    },
};

</script>


