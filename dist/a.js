define(["require", "exports"], function (require, exports) {
    var JsAdmin;
    (function (JsAdmin) {
        var A = (function () {
            function A() {
                console.log('a.ts');
            }
            return A;
        })();
        JsAdmin.A = A;
    })(JsAdmin = exports.JsAdmin || (exports.JsAdmin = {}));
});
//# sourceMappingURL=a.js.map