/*
 * @Name:
 * @Description: 用于将模块有效封装，禁止外部直接引用
 * @Author: 刘燕保
 * @Date: 2022-03-08 11:05:11
 */
/// <reference path="./comp_namespace.ts"/>
var Home;
(function (Home) {
    // 只有加上export关键字，才能把命名空间内的元素导出去
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
