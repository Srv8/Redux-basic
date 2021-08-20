export const  addNew = (data) => {
    return {
        type: "ADD",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const delList = (id) => {
    return {
        type: "DELETE",
        id
    }
}

export const clearList = () => {
    return {
        type: "CLEAR"
    }
}