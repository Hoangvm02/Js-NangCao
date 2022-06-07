import instance from "./instance"

export const getAll = () => {
    const url =  "/students";
    return instance.get(url)
}
export const getD = (id) => {
    const url = `/students/${id}`
    return instance.get(url)
}
export const remove = (id) => {
    const url = `/students/${id}`
    return instance.delete(url)
}
export const add = (data) =>{
    const url = `/students`
    return instance.post(url, data)
}
export const update = (student) => {
    const url = `/students/${student.id}`;
    return instance.put(url, student);
}