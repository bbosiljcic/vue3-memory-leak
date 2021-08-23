<template>
    <div>
        <base-router-link class="monitoring-grid-item" :href="href" draggable="false" :no-router="itemType === 'report'">
            <div class="column-left">
                <slot name="left" />
            </div>
            <div class="column-right">
                <slot name="right" />
            </div>
        </base-router-link>
    </div>
</template>

<script>

import BaseRouterLink from './Base/BaseRouterLink';
import monitoringService from '../services/monitoringService';

export default {
    name: 'MonitoringGridItem',
    components: {
        BaseRouterLink,
    },
    props: {
        itemType: {
            type: String,
            default: 'folder',
        },
        id: {
            type: Number,
            default: -1,
        },
        href: {
            type: String,
            default: '',
        },
        reportCount: {
            type: Number,
            default: -1,
        },
        folderId: {
            type: Number,
            default: -1,
        },
    },
    emits: ['deleted', 'updateReportCount', 'modalVisibilityChanged'],
    data() {
        return {
            showDeleteReportModal: false,
            showDeleteFolderModal: false,
            showFolderNotEmptyModal: false,
            showMoveReportModal: false,
            moveFolders: null,
            selectedDestinationFolder: null,
            moveDisabled: false,
            deleteDisabled: false,
            isDeleted: false,
        };
    },
    computed: {
        agencyRestriction() {
            return {};
        },
    },
    watch: {
        showMoveReportModal() {
            this.$emit('modalVisibilityChanged', this.showMoveReportModal);
        },
    },
    mounted() {},
    methods: {
        isFolderView() {
            return this.$root.currentRoute.includes('folder');
        },
        async openMoveModal() {
            this.showMoveReportModal = true;
            this.moveDisabled = true;

            const unsortedFolders = [
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

            if (!unsortedFolders) {
                this.$message.error('Please create a folder before moving this report.');
                this.closeMoveModal();
            } else {
                this.moveFolders = unsortedFolders.sort((a, b) => a.name.localeCompare(b.name));
            }
            this.moveDisabled = false;
        },
        closeMoveModal() {
            this.showMoveReportModal = false;
            this.selectedDestinationFolder = null;
            this.moveDisabled = false;
        },
        closeDeleteReportModal() {
            this.showDeleteReportModal = false;
        },
        closeDeleteFolderModal() {
            this.showDeleteFolderModal = false;
        },
        closeFolderNotEmptyModal() {
            this.showFolderNotEmptyModal = false;
        },
        async moveReport() {
            this.moveDisabled = true;
            const response = await monitoringService.moveReport(this.id, this.selectedDestinationFolder);
            if (response.status === 'success') {
                // if we are on the overview page, increase the folders reports count
                if (!this.isFolderView()) {
                    this.$emit('updateReportCount', this.selectedDestinationFolder);
                }
                // moved uses the same logic as deleted
                this.isDeleted = true;
            }
            this.closeMoveModal();
        },
        async deleteReport() {
            this.deleteDisabled = true;
            const response = await monitoringService.deleteReport(this.id);
            if (response.status === 'success') {
                this.isDeleted = true;
            }
            this.showDeleteReportModal = false;
        },
        async deleteFolder() {
            this.deleteDisabled = true;
            const response = await monitoringService.deleteFolder(this.id);
            if (response.status === 'success') {
                this.isDeleted = true;
            }
            this.showDeleteFolderModal = false;
        },
        handleDeleteModalClosed() {
            this.deleteDisabled = false;
            if (this.isDeleted) {
                this.$emit('deleted', this.id);
            }
        },
    },
};
</script>

<style scoped lang="scss">

.monitoring-grid-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-left: 12px;
    border-radius: 4px;
    background-color: #fff;

    .column-right {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .context-menu {
        display: block;
        padding: 12px 18px;
        color: grey;
        font-size: 18px;

        &:hover {
            color: darkgrey;
        }
    }

}

.dropdown-item {
    font-weight: 400;
    font-size: 13px;
}

.move-modal {
    .el-radio-group {
        display: block;

        &.has-overflow {
            overflow-y: scroll;
            max-height: 320px;
        }

        .folder-seperator {
            padding: 10px 22px 0;
            border-bottom: 1px solid lightgray;
            color: lightgray;
            font-weight: 600;
            font-size: 11px;
            line-height: 24px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        label {
            position: relative;
            display: block;
            margin-right: 0;
            padding: 16px 24px;
            border-bottom: 1px solid lightgray;
            font-size: 14px;
            text-align: left;
            transition: background 0.2s ease-in;

            &:first-child {
                border-top: 1px solid lightgray;

            }


            .folder-name {
                font-weight: 500;
            }

            .folder-report-count {
                position: absolute;
                right: 24px;
            }
        }
    }

}

.delete-modal, .not-empty-modal {
    .content {
        padding-right: 20px;
        padding-left: 20px;
        font-weight: 400;
        font-size: 16px;
        word-break: normal;
    }
}

</style>
