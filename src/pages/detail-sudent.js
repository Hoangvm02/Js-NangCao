import { getD } from "../api/student"

const DetailStudent = {
    render: async (id) => {
        const response = await getD(id)
        const {data} = response;
        return (
            `
            <div>
            <div> ${data.id} </div>
            <div> ${data.name} </div>
            <div> ${data.msv} </div>
            </div>`)
    }
}
export default DetailStudent