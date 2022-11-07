export const Data = () => {
    return {
        type: "data",
    }
}
export const propertyType = (type) => {
    return {
        type: "property_type",
        payload: type
    }
}
export const propertyAddress = (address) => {
    return {
        type: "property_address",
        payload: address
    }
}
export const Selected = (id) => {
    return {
        type: "selected",
        payload: id
    }
}
