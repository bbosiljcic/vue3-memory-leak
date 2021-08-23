class MonitoringService {
    static async getFolders() {
        return [
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
        ]
    }


    static async getFolderById(folderId) {

        return {
            "id": folderId,
            "customer": 1,
            "creator": 2,
            "dateModified": "2021-04-23 09:15:28.41935",
            "name": `Folder ${folderId}`,
            "reportCount": 2
          }
    }


    static async getReportsLonely() {


        return [
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
    }


}

export default MonitoringService;
