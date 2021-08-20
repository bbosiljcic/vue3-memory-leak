<template>
    <div class="folder-details">
        <base-router-link href="/">
            Go Back
        </base-router-link>
        <label>
            <input
                ref="nameInput"
                v-model="folderName"
                type="text"
                class="folder-name-input"
                :style="inputStyle"
                :disabled="disabledInput"
                :placeholder="inputPlaceholder"
                @keyup.esc="cancelInput"
                @keyup.enter="onSubmitFolderName"
                @blur="onSubmitFolderName"
            >
        </label>
        <span ref="textMeasure" class="text-measure">{{ folderName }}</span>
        <i v-if="editIconVisible" class="far fa-pen edit-folder-name" @click="enableInput" />
    </div>
    <el-divider />
    <monitoring-reports :folder-id="folderId" />
</template>

<script>

import monitoringService from '../services/monitoringService';
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
            oldFolderName: '',
            disabledInput: false,
            inputWidth: 'auto',
            loaded: false,
        };
    },
    computed: {
        inputPlaceholder() {
            return this.disabledInput ? '' : 'Type a folder name';
        },
        inputStyle() {
            return {
                width: this.inputWidth > 0 ? `${this.inputWidth + 8}px` : 'auto',
            };
        },
        editIconVisible() {
            return this.disabledInput && this.loaded;
        },
    },
    watch: {
        folderName() {
            this.resizeInputToTextLength();
        },
    },
    async created() {
        /**
         * @typedef {Object} folder
         * @property {int} id
         * @property {string} name
         */
        if (this.folderId >= 0) {
            this.disabledInput = true;
            const folder = await monitoringService.getFolderById(this.folderId);
            this.folderName = folder.name;
            this.loaded = true;
        }
    },
    methods: {
        async onSubmitFolderName(event) {
            event.target.blur();
            this.disableInput();
            if (this.folderName !== '') {
                await monitoringService.updateFolder(this.folderId, this.folderName);
            } else {
                this.folderName = this.oldFolderName;
            }
        },
        getFolderIdFromUrl() {
            const id = parseInt(window.location.href.substring(window.location.href.lastIndexOf('/') + 1), 10);
            return Number.isNaN(id) ? -1 : id;
        },
        enableInput() {
            this.disabledInput = false;
            this.oldFolderName = this.folderName;
            this.$nextTick(() => this.$refs.nameInput.focus());
        },
        disableInput() {
            this.disabledInput = true;
        },
        cancelInput() {
            this.folderName = this.oldFolderName;
            this.disableInput();
        },
        resizeInputToTextLength() {
            //Using $nextTick to ensure dom has been updated with new text and width is correct
            this.$nextTick(() => {
                this.inputWidth = this.$refs.textMeasure.getBoundingClientRect().width;
            });
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
    margin-bottom: 7px;

        flex-direction: row;
}
.folder-details {
    display: flex;
    align-items: center;
}

.folder-name-input {
    margin-left: 12px;
    font-size: 20px;

    &:disabled {
        color: #000;
    }
}

.edit-folder-name {
    margin-left: 12px;
    cursor: pointer;
}

.text-measure {
    position: absolute;
    top: -1000px;
    left: -1000px;
    font-size: 20px;
}

</style>
