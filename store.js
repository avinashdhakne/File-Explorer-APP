// reference of state 

var folderStructure = {
    id: "Item-0",
    level: 0,
    name: "ROOT",
    type: "folder",
    parent: null,
    child: [
        {
            id: "Item-1",
            name: "Folder-1",
            level: 1,
            parent: "Item-0",
            child: [
                {
                    id: "Item-2",
                    name: "File-1",
                    level: 3,
                    type: "file",
                    parent: "Item-1",
                    child: null
                }],
            type: "folder"
        },
        {
            id: "Item-3",
            name: "File-1",
            level: 3,
            type: "file",
            parent: "Item-0",
            child: null
        },
        {
            id: "Item-4",
            name: "Folder-2",
            level: 1,
            type: "folder",
            parent:"Item-0",
            child: [
                { 
                    id: "Item-5",
                    name: "File-3",
                    level: 3,
                    type: "folder",
                    parent: "Item-2",
                    child: []
                },
                {
                    id: "Item-6",
                    name: "Folder-4",
                    level: 3,
                    type: "folder",
                    parent: "Item-2",
                    child: [
                        {
                            id: "Item-7",
                            name: "File-2",
                            level: 3,
                            type: "folder",
                            parent: "Item-4",
                            child: []
                        }
                    ]
                }
            ],
        }
    ],
}








