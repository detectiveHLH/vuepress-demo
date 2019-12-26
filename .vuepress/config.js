/**
 * vuepress配置文件
 *
 * @author hulunhao@gmail.com
 * @date 2019-12-24 21:06
 **/
const router = require('./router');

module.exports = {
    smoothScroll: true,
    title: '需要你在config.js里单独配的标题',
    themeConfig: {
        sidebar: router.getSidebar()
    },
    plugins: ['vuepress-plugin-smooth-scroll'],
};

