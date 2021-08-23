<template>
    <div v-for="report in reports" :key="report.id">
        <div>
            <h2 style="margin: 0">{{report.name}}</h2>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Reports',

    props: {
        folderId: {
            type: Number,
            default: -1,
        },
    },
    data() {
        return {
            reports: [],
        };
    },
    created() {
        this.loadReports();
    },
    methods: {
        async loadReports() {
        this.reports = [...Array(1000)].map(() => {
            const random = Math.floor(Math.random() * 1000) + 1;
            return {
                id: random,
                name: `Report ${random}`,
            }
        });
        },
    },
};
</script>
