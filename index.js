let sudoMain = () => {
    showRootFolder()
    loadSearchTable()


    // add event listener to the search field 
    let searchField = document.getElementById("search-field");
    searchField.addEventListener("change", searchFiles);
}