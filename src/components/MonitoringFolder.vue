<template>
    <monitoring-grid-item
        :id="folder.id"
        :href="folderUrl"
        class="monitoring-folder"
        item-type="folder"
        :report-count="folder.reportCount"
    >
        <template #left>
            <div class="horizontal">
                <i class="far fa-folder folder-icon" />
                <div class="title">
                    {{ folder.name }}
                </div>
            </div>
        </template>
        <template #right>
            <div class="report-count">
                {{ folder.reportCount }}
            </div>
        </template>
    </monitoring-grid-item>
</template>

<script>

import MonitoringGridItem from './MonitoringGridItem';

export default {
    name: 'MonitoringFolder',
    components: {
        MonitoringGridItem,
    },
    props: {
        folder: {
            type: Object,
            default: () => {},
        },
    },
    emits: ['folderTargeted', 'folderDeleted'],
    data() {
        return {
            targeted: false,
            previouslyTargeted: false,
        };
    },
    computed: {
        folderUrl() {
            return `/monitoring/folder/${this.folder.id}`;
        },
    },
    mounted() {

    },
    methods: {
    },
};
</script>

<style scoped lang="scss">

.monitoring-folder {

    position: relative;

    .horizontal {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .folder-icon {
        display: block;
        margin-right: 12px;
        color: grey;
        font-size: 18px;
    }

    .title {
        font-weight: 500;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 130px;
    }

    .report-count {
        color: lightgray;
        font-size: 12px;
    }

    &::before {
        content: '';
        position: absolute;
        top: -7px;
        left: -7px;
        z-index: -1;
        width: calc(100% + 14px);
        height: calc(100% + 14px);
        border: 1px solid green;
        border-radius: 8px;
        background: greenyellow;
        opacity: 0;
        pointer-events: none;
        transition: all 0.1s linear;
    }

}

</style>
