

const Header = {
    // render: function() {
    //     return '<div>Header component</div>';
    // }
    // render: () => ('<div>Header component</div>'),
    // render: (name) => ('<div>' + name + '</div>'), 
    render: (name = 'WE17101') => (`<div>${name}</div>`)
    // Sau mũi tên là ngoặc tròn -> return kết quả
};

export default Header;