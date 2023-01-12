"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.GuessAccount = void 0;
var DioAccount_1 = require("./DioAccount");
var GuessAccount = /** @class */ (function (_super) {
    __extends(GuessAccount, _super);
    function GuessAccount(name, accountNumber) {
        return _super.call(this, name, accountNumber) || this;
    }
    GuessAccount.prototype.depositPlusTen = function (amount) {
        if (this.validateStatus()) {
            var deposVal = (amount + 10);
            this.balance += deposVal;
            console.log("Dep\u00F3sito de ".concat(deposVal, " relizado com sucesso. Valor Atual: R").concat(this.balance));
            return;
        }
        throw new Error("Depósito NÃO REALIZADO. (status) inválido.");
    };
    return GuessAccount;
}(DioAccount_1.DioAccount));
exports.GuessAccount = GuessAccount;
