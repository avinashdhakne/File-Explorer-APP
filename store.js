// reference of state 

var folderStructure = {
    id: "item-0",
    level: 0,
    name: "ROOT",
    type: "folder",
    parent: null,
    child: [
        {
            id: "item-1",
            name: "target",
            level: 1,
            parent: "item-0",
            child: [
                {
                    id: "item-8",
                    name: "file2",
                    level: 3,
                    type: "folder",
                    parent: "item-1",
                    child: []
                }],
            type: "folder"
        },
        {
            id: "item-5",
            name: "file2",
            level: 3,
            type: "folder",
            parent: "item-0",
            child: []
        },
        {
            id: "item-2",
            name: "file1",
            level: 1,
            type: "folder",
            parent:"item-0",
            child: [
                { 
                    id: "item-3",
                    name: "file2",
                    level: 3,
                    type: "folder",
                    parent: "item-2",
                    child: []
                },
                {
                    id: "item-4",
                    name: "file2",
                    level: 3,
                    type: "folder",
                    parent: "item-2",
                    child: [
                        {
                            id: "item-7",
                            name: "file2",
                            level: 3,
                            type: "folder",
                            parent: "item-4",
                            child: []
                        }
                    ]
                }
            ],
        }
    ],
}








