/**
 * 侧边栏的抽象路由文件
 * 这是对原生的做了一个封装,原来的children需要写成 /groupA/类别A的李四
 * 这样显得十分多余, 于是我简单的做了一层封装,自动的去拼接上父类别的path
 *
 * @author hulunhao@gmail.com
 * @date 2019-12-24 21:07
 **/
let data = [
    {
        'title': '类别A',
        'path': '/groupA/',
        'children': [
            '类别A的李四',
        ]
    },
    {
        'title': '类别B',
        'path': '/groupB/',
        'children': [
            '类别B的张三',
        ]
    }
];

/**
 * 生成sidebar数据
 *
 * @param data 上面定义的抽象侧边栏路由静态文件
 */
exports.getSidebar = () => {
    let sidebar = [];
    data.forEach((item) => {
        if (item.children.length === 0) {
            sidebar.push(item);
            return;
        }

        for (let i = 0; i < item.children.length; i++) {
            let childrenPath = item.children[i];
            item.children[i] = item.path + childrenPath;
        }
        sidebar.push(item);
    });
    return sidebar;
};
