import instance from "./instance"

export const list = () => {
    const url =  "/products";
    return instance.get(url)
}
export const listD = (id) => {
    const url = `/products/${id}`
    return instance.get(url)
}
export const remove = (id) => {
    const url = `/products/${id}`
    return instance.delete(url)
}
export const productAdd = (data) =>{
    const url = `/products`
    return instance.post(url, data)
}