<template>
                <div v-for="report in reports" :key="report.id">
                            <h2 style="margin: 0">{{report.name}}</h2>
                            <span>{{report.customerAccountName}}</span>
                </div>
</template>

<script>

export default {
    name: 'MonitoringReports',
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
                "customerAccountId": 1,
                "name": "Test 4654",
                "customerAccountName": "User 1"
            },
            {
                "id": 4655,
                "customerAccountId": 1,
                "name": "Test 4655",
                "customerAccountName": "User 2"
            },
            {
                "id": 4656,
                "customerAccountId": 1,
                "name": "Test 4656",
                "customerAccountName": "User 1"
            },
            {
                "id": 4657,
                "customerAccountId": 1,
                "name": "Test 4657",
                "customerAccountName": "User 2"
            },
            {
                "id": 4658,
                "customerAccountId": 1,
                "name": "Test 4658",
                "customerAccountName": "User 1"
            },
            ]
        },
    },
};
</script>
x