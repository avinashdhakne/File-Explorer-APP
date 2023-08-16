// containers pure functions
let createNode = (id, type, name) => {
    return `
    <div class="item" onclick="getPath(event)">
        <div class="${type}" id="${id}">
            <span class="expand-collapse-icon"><img src="static/expand-collpse.png" alt="" height="10px" onclick="expandCollapse(event)"></span>
            <label for="">${name}</label>
            <span class="option">
                <span class="add-file-icon"><img src="static/addFile.png" alt="" height="20px" onclick="createFile(event)"></span>
                <span class="add-folder-icon"><img src="static/addFolder.png" alt="" height="20px" onclick="createFolder(event)"></span>
                <span class="delete-item-icon"><img src="static/delete.png" alt="" height="20px" onclick="deleteItem(event)"></span>
            </span>
        </div>
    </div>`
}

let showRootFolder = () => {
    let parentSection = document.getElementById("file-explorer");
    let fileItem = createNode(folderStructure.id, folderStructure.type, folderStructure.name)
    parentSection.innerHTML += fileItem
}

// show folder content by id
let showFolderItems = (ID) => {
    let folder = findItem(folderStructure, ID)
    /* handle it the folder not found */

    let parentSection = document.querySelector(`.item #${ID}`);
    for (let item of folder.child) {
        let fileItem = createNode(item.id, item.type, item.name)
        parentSection.innerHTML += fileItem
    }
}

let hideFolderItems = (ID) => {
    let parentSection = document.querySelectorAll(`.item #${ID} .item`)
    for(let item of parentSection){
        item.style.display = "none"
    }

}

let refreshFolderItems = (ID) => {
    hideFolderItems(ID)
    showFolderItems(ID)
}

// Find the node if present and return the node
function findItem(folderList, index) {
    if (!folderList)
        return null;

    if (folderList.id == index)
        return folderList;

    for (let item of folderList.child) {
        console.log(item.id)
        let result = findItem(item, index);
        if (result) {
            return result;
        }
    }
    return null;
}

let expandCollapse = (event) => {
    let currItemId = event.target.parentNode.parentNode.id
    let arrowIcon = document.querySelector(`.item #${currItemId} img`)
    console.log("Element: ", arrowIcon)
    
    console.log(getRotation(currItemId))
    if (getRotation(currItemId) == "collapsed") {
        arrowIcon.style.transform = "rotate(0deg)"
        console.log("found:", currItemId)
        showFolderItems(currItemId)
    }
    else {
        arrowIcon.style.transform = "rotate(-90deg)"
        hideFolderItems(currItemId)
    }

}

let getRotation = (ID) => {
    let selector = `.item #${ID} .expand-collapse-icon img`
    let item = document.querySelector(selector)
    let itemStyle = window.getComputedStyle(item, null)

    if (itemStyle.getPropertyValue("transform") == "matrix(1, 0, 0, 1, 0, 0)")
        return "expanded"
    else
        return "collapsed"
}

let cleanInputField = () => {
    let inputField = document.getElementById("input-item-name");
    inputField.value = ""
}

let getPath = (event) => {
    console.log(event.target.innerHTML)

}