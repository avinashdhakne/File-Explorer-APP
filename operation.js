// impure functions
let itemId = 100;

let incrementItemId = () => {
    itemId = itemId + 1;
}

// create new file
let createFile = (event, type) => {
    console.log("type of file", type)
    let itemName = document.getElementById("input-item-name").value
    let itemParent = event.target.parentNode.parentNode.parentNode;
    
    let parentDataNode = findItem(folderStructure, itemParent.id);

    // We can append files into the another files 
    if (parentDataNode.type == "file") {
        alert("Can not add File into File")
        return;
    }

    let newItem = {
        id: "Item-" + itemId,
        name: itemName,
        level: parentDataNode.level + 1,
        type: type,
        child: (type == "file") ? null: [],
        parent: itemParent.id
    }

    console.log(document.getElementById("input-item-name"))
    console.log("item added: ", newItem, "| of type: ", type, "| with file name: ", itemName)
    parentDataNode.child.push(newItem)

    // increment item id and clean input field 
    incrementItemId()
    cleanInputField()
    refreshFolderItems(itemParent.id)
}

/* // create new folder
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
} */

let deleteItem = (event) => {
    let itemParentId = event.target.parentNode.parentNode.parentNode.id;
    deleteItemById(folderStructure, itemParentId)
    refreshFolderItems(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id)
    console.log("deleted: ", itemParentId)
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