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
            this.reports = [
            {
                "id": 4654,
                "name": "Test 4654",
            },
            {
                "id": 4655,
                "name": "Test 4655",
            },
            {
                "id": 4656,
                "name": "Test 4656",
            },
            {
                "id": 4657,
                "name": "Test 4657",
            },
            ];
        },
    },
};
</script>
