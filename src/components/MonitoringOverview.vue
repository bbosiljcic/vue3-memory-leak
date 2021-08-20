<template>
    <div class="page-container monitoring-overview">
        <div class="monitoring-header">
            <h1 class="base-header">
                Memory Leak
            </h1>
        </div>
        <template v-if="!currentRoute.includes('folder')">
            <monitoring-folders
                ref="monitoringFolders"
            />
            <el-divider />
            <monitoring-reports
                ref="monitoringReports"
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
            direction: 'ASC',
            order: 0,
            droppedReport: -1,
            folderTargeted: false,
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

<style scoped lang="scss">

.monitoring-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

        flex-direction: row;
}

.drag-image {
    position: absolute;
    top: 0;
    left: -1000px;
    width: 64px;
    height: 64px;
}

.drag-icon {
    position: absolute;
    top: 0;
    left: -1000px;
    display: none; //flex
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: #fff;
    pointer-events: none;

    i {
        width: 32px;
        height: 32px;
        border-radius: 32px;
        background: green;
        color: #fff;
        line-height: 32px;
        text-align: center;
    }
}

</style>

<style lang="scss">
    .page-monitoring-overview {
        min-height: calc(100vh - 92px);
    }

</style>
