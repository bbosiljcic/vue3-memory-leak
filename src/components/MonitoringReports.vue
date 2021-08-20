<template>
    <el-skeleton :loading="!loaded" animated>
        <template #template>
            <el-row :gutter="24" class="report-grid">
                <template v-for="i in 11" :key="i">
                    <el-col :sm="24" :md="12" :lg="8">
                        <el-skeleton-item />
                    </el-col>
                </template>
            </el-row>
        </template>
        <template #default>
            <el-row v-infinite-scroll="showMoreReports" :infinite-scroll-distance="800" :gutter="24" class="report-grid">
                <el-col v-if="!agencyRestriction" :sm="24" :md="12" :lg="8">

                </el-col>
                <template v-for="report in orderedReports" :key="report.id">
                    <el-col :sm="24" :md="12" :lg="8">
                        <div>
                            <h2 style="margin: 0">{{report.name}}</h2>
                            <span>{{report.customerAccountName}}</span>
                        </div>
                    </el-col>
                </template>
            </el-row>
        </template>
    </el-skeleton>
    <div v-if="noReportsFound" class="no-reports">
        <img alt="placeholder image" src="http://placekitten.com/g/200/300" class="icon">
        <template v-if="!agencyRestriction">
            <h2 class="title">
                Create the first report in this folder
            </h2>
        </template>
        <template v-else>
            <h2 class="title">
                No reports found
            </h2>
        </template>
    </div>
</template>

<script>

import monitoringService from '../services/monitoringService';

export default {
    name: 'MonitoringReports',

    props: {
        orderDirection: {
            type: String,
            default: 'ASC',
        },
        orderBy: {
            type: String,
            default: 'Title',
        },
        folderId: {
            type: Number,
            default: -1,
        },
    },
    emits: ['updateReportCount'],
    data() {
        return {
            reports: [],
            loaded: false,
            shownReportsCount: 89,
            shownReports: [],
        };
    },
    computed: {
        agencyRestriction() {
            return {};
        },
        orderedReports() {
            this.orderReports(this.shownReportsCount);
            return this.shownReports;
        },
        addReportUrl() {
            const folderParam = this.folderId > 0 ? `?folderId=${this.folderId}` : '';
            return `/add${folderParam}`;
        },
        noReportsFound() {
            return this.loaded && this.reports.length === 0;
        },
    },
    watch: {
        droppedReport() {
            this.reports = this.reports.filter((report) => report.id !== this.droppedReport);
        },
    },
    created() {
        this.loadReports();
    },
    methods: {
        async loadReports() {
            this.reports = await monitoringService.getReportsLonely();
            this.loaded = true;
        },
        showMoreReports() {
            this.shownReportsCount += 90;
        },
        orderReports(limit) {
            if (!this.reports) {
                this.reports = [];
                this.shownReports = [];
                return;
            }
            this.shownReports = this.reports.sort((a, b) => a.name.localeCompare(b.name));
            this.shownReports = this.shownReports.slice(0, limit);
        },
        handleReportDeleted(reportId) {
            this.reports = this.reports.filter((report) => report.id !== reportId);
        },
        handleUpdateReportCount(folderId) {
            this.$emit('updateReportCount', folderId);
        },
    },
};
</script>

<style scoped lang="scss">

.report-grid {
    .el-col {
        margin-bottom: 12px;
        > *, > a > *, ::v-deep(.monitoring-grid-item) {
            height: 64px;
        }
    }
}

.no-reports {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;

    .icon {
        width: 230px;
        height: 230px;
        margin-bottom: 12px;
    }

    .title {
        margin-bottom: 12px;
        font-weight: 500;
        font-size: 24px;
    }

    .text {
        margin-bottom: 10px;
        color: lightgray;
        font-weight: 400;
        font-size: 14px;
    }
}

</style>
