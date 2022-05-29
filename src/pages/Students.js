const Students = {
    render: async () => {
        // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
        // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
        // 3. fetch nhận vào đường dẫn API endpoint của BE
        const response = await fetch('https://629345787aa3e6af1a08bc3c.mockapi.io/students')
        // 4. lần đợi fetch đầu tiên sẽ trả về obj Response
        console.log('response',response);
        // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
        const students = await response.json();
        console.log("students", students);
        return `<div>
            ${
                students.map((students) => (
                    `<div>
                        <div>${students.id}</div>
                        <div>${students.name}</div>
                        <div>${students.msv}</div>
                    </div>`
                )).join('')
            }
        </div>`;
    }
};
export default Students