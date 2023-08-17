// containers pure functions
let createNode = (id, type, name) => {
    return `
    <div class="item">
        <div class="${type}" id="${id}">
            <span class="file-content">
                <span class="icon" id="expand-collapse-icon"><img src="static/expand-collpse.png" alt="" height="13px" onclick="expandCollapse(event)"></span> 
                <label for="">${name}</label>
            </span>
            <span class="option">
                    <span class="icon" id="add-file-icon"><img src="static/addFile.png" alt="" height="20px" onclick="createFile(event, 'file')"></span>
                    <span class="icon" id="add-folder-icon"><img src="static/addFolder.png" alt="" height="20px" onclick="createFile(event, 'folder')"></span>
                    <span class="icon" id="delete-item-icon"><img src="static/delete.png" alt="" height="20px" onclick="deleteItem(event)"></span>
            </span>
        </div>
    </div>`
}

let searchTable = () => {
    return `<div id="file-info">
        <div id="search-count">
        See your search results here
        </div>
        <table id="search-result-table">
            <tr>
                <th>Item-ID</th>
                <th>Item-Name</th>
                <th>Item-Type</th>
            </tr>
        </table>
    </div>`
}

let showRootFolder = () => {
    let parentSection = document.getElementById("file-explorer");
    let fileItem = createNode(folderStructure.id, folderStructure.type, folderStructure.name)
    parentSection.innerHTML += fileItem
}

let loadSearchTable = () => {
    let parentSection = document.getElementById("search-results");
    let tableContent = searchTable();
    parentSection.innerHTML = tableContent;
}

let updateSearchTable = (searchResults) => {
    loadSearchTable();
    let searchCount = document.getElementById("search-count")
    let searchTable = document.getElementById("search-result-table")
    searchCount.innerHTML = `${searchResults.length} Match Found`

    for(let item of searchResults){
        searchTable.innerHTML += 
        `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.type}</td>
        </tr>`
    }
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
    for (let item of parentSection) {
        item.style.display = "none"
    }

}

let refreshFolderItems = (ID) => {
    hideFolderItems(ID)
    showFolderItems(ID)
}

// Find the node if present and return the node
function findItem(folderList, index) {
    if (folderList == null)
        return null;

    if (folderList.id == index)
        return folderList;

    if (folderList.child == null) 
        return null;

    console.log(folderList,  folderList.child)
    console.log("------------------------------")
    for (let item of folderList.child) {
        let result = findItem(item, index);
        if (result) {
            return result;
        }
    }
    return null;
}

let expandCollapse = (event) => {
    let currItemId = event.target.parentNode.parentNode.parentNode.id
    let arrowIcon = document.querySelector(`.item #${currItemId} #expand-collapse-icon img`)

    if (getRotation(currItemId) == "collapsed") {
        arrowIcon.style.transform = "rotate(0deg)"
        showFolderItems(currItemId)
    }
    else {
        arrowIcon.style.transform = "rotate(-90deg)"
        hideFolderItems(currItemId)
    }

}

let getRotation = (ID) => {
    let selector = `.item #${ID} #expand-collapse-icon img`
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

let searchFiles = () => {
    let searchedNames = []
    let searchFileByName = (items, inputQuery) => {
        if (items.child == [] || items.child == null) return;
        for (let item of items.child) {
            if (item.name == inputQuery) {
                searchedNames.push(item)
            }
            searchFileByName(item, inputQuery);
        }
    }

    let inputQuery = document.getElementById("search-field").value
    searchFileByName(folderStructure, inputQuery)
    updateSearchTable(searchedNames)
}

let getPath = (event) => {
   console.log("path of file.....")

}