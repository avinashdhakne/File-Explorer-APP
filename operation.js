// impure functions
let itemId = 1;

let incrementItemId = () => {
    itemId = itemId + 1;
}

// create new file
let createFile = (event) => {
    let itemName = document.getElementById("input-item-name").value
    let itemParent = event.target.parentNode.parentNode.parentNode;
    let parentDataNode = findItem(folderStructure, itemParent.id);

    // We can append files into the another files 
    if (parentDataNode.type == "file") {
        alert("Can not add File into File")
        return;
    }

    let newItem = {
        id: "item-" + itemId,
        name: itemName,
        level: parentDataNode.level + 1,
        type: "file",
        child: null,
        parent: itemParent.id
    }

    console.log(newItem)
    parentDataNode.child.push(newItem)

    // increment item id and clean input field 
    incrementItemId()
    cleanInputField()
    refreshFolderItems(itemParent.id)
}

// create new folder
let createFolder = (event) => {
    let itemName = document.getElementById("input-item-name").value
    let itemParent = event.target.parentNode.parentNode.parentNode;
    let parentDataNode = findItem(folderStructure, itemParent.id);
    console.log(parentDataNode)

    let newItem = {
        id: "item-" + itemId,
        name: itemName,
        level: parentDataNode.level + 1,
        type: "folder",
        child: []
    }

    console.log(newItem)
    parentDataNode.child.push(newItem)

    // increment item id and clean input field 
    incrementItemId()
    cleanInputField()
    refreshFolderItems(itemParent.id)
}

let deleteItem = (event) => {
    let itemParentId = event.target.parentNode.parentNode.parentNode.id;
    console.log("deleting: ", itemParentId)
    deleteItemById(folderStructure, itemParentId)
    refreshFolderItems(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id)
}

let deleteItemById = (items, index) => {
    if(items.child == [] || items.child == null) return;
    for(let i in items.child){
        console.log("Searching...", items.child[i].id)
        if(items.child[i].id == index){
            items.child.splice(i, 1)
            return;
        }
        deleteItemById(items.child[i], index)
    }
}