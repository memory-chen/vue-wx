/* ********根据meta的属性，使得在不同屏幕的按比例的进行显示***********/
// 初始化计时器。
var viewTimer = null;
// 主函数
function viewPort(userAgent, pageWidth) {
    // userAgent：检查设备的是什么iOS和Android？
    // 选择id为'viewport';
    var oView = document.getElementById('viewport');
    // oView是否为真，若是为真，则移除这个
    if (oView) {
        document.head.removeChild(oView);
    }
    // 若是pageWidth为false，则设置为640.
    if (!pageWidth) {
        pageWidth = 320;
    }
    // 获得这个设备的屏幕screenW,屏幕与pageWidth的比例。
    var screenW = parseInt(window.screen.width);
    var scale = screenW / pageWidth;
    // 如果是安卓
    if (/Android (\d+\.\d+)/.test(userAgent)) {
        var creteMate = document.createElement('meta');
        creteMate.name = 'viewport';
        creteMate.id = 'viewport';
        var version = parseFloat(RegExp.$1);
        // 检查安卓的版本。
        if (version > 2.3) {
            creteMate.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ',user-scalable=1, minimum-scale = ' + scale + ', maximum-scale = ' + scale;
        } else {
            creteMate.content = '"width=' + pageWidth;
        }
        document.head.appendChild(creteMate);
    } else {
        var creteMate = document.createElement('meta');
        creteMate.name = 'viewport';
        creteMate.id = 'viewport';
        // 是否是竖屏
        if (window.orientation === '-90' || window.orientation === '90') {
            scale = window.screen.height / pageWidth;
            creteMate.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ' ,minimum-scale = ' + scale + ', maximum-scale = ' + scale;
        } else {
            creteMate.content = 'width=' + pageWidth + ', initial-scale = ' + scale + ' ,minimum-scale = ' + scale + ', maximum-scale = ' + scale;
        }
        document.head.appendChild(creteMate);
    }
}
viewPort(navigator.userAgent);
// 加载onresize事件
window.onresize = function () {
    clearTimeout(viewTimer);
    viewTimer = setTimeout(function () {
        viewPort(navigator.userAgent);
    }, 0);
};
