"use strict";
exports.__esModule = true;
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.setName = function (name) {
            _this.name = name;
            console.log('Nome alterado com sucesso!');
        };
        this.getName = function () {
            return _this.name;
        };
        this.deposit = function (amount) {
            if (_this.validateStatus()) {
                _this.balance += amount;
                console.log("Depósito realizado com sucesso. Valor Atual: R$" + _this.balance);
                return;
            }
            throw new Error("Depósto NÃO REALIZADO, (status) inválido");
        };
        this.withdraw = function (amount) {
            if (_this.validateStatus()) {
                if (amount < _this.balance) {
                    _this.balance -= amount;
                    console.log("Voc\u00EA retirou ".concat(amount, ", da sua conta. Valor Autal: R").concat(_this.balance));
                    return;
                }
                throw new Error("Você não pode retirar mais do que você tem em sua conta.");
            }
            throw new Error("Saque não autorizado, (status) inválido");
        };
        this.getBalance = function () {
            console.log(_this.balance);
        };
        this.validateStatus = function () {
            if (_this.status) {
                return _this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    return DioAccount;
}());
exports.DioAccount = DioAccount;
