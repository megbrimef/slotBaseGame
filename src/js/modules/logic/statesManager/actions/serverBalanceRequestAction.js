class ModulesStatesManagerConfigStatesActionsServerBalanceRequestAction extends Urso.Core.Modules.StatesManager.Action {

    guard() {
        return true;
    }

    _balanceResponse = (data) => {
        Urso.observer.remove('modules.logic.main.balanceResponce', this._balanceRequestHandler, true);
        super._onFinish();
    }

    _balanceRequestHandler = (data) => this._balanceResponse(data);

    _onFinish() {
        Urso.observer.add('modules.logic.main.balanceResponce', this._balanceRequestHandler, true);
        Urso.observer.fire('modules.logic.main.balanceRequest');
    }
};

module.exports = ModulesStatesManagerConfigStatesActionsServerBalanceRequestAction;
