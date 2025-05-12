const getStoreBook = () => {
    
    const storeBookSTR = localStorage.getItem("readList");

    if (storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
        
    }

    else {
        return [];

    }
}


const addToStoreDB = (id) => {


    const storeBookData = getStoreBook();
    if (storeBookData.includes(id)) {
        console.log("hello");
        
        alert("Book already exists in the list");
    }
    else {
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData)
        localStorage.setItem("readList", data);
        
    }
}
export {addToStoreDB,getStoreBook};