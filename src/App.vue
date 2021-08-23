<template>
    <div>
        <h1>
            Memory Leak
        </h1>
        <div v-if="!currentRoute.includes('folder')">
            <folders />
            <hr />
            <reports />
        </div>
        <div v-else>
            <detail />
        </div>
    </div>
</template>

<script>

import Folders from './components/Folders';
import Reports from './components/Reports';
import Detail from './components/Detail';

export default {
    name: 'MonitoringOverview',
    components: {
        Folders,
        Reports,
        Detail,
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
