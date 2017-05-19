import IComponentOptions = angular.IComponentOptions;
import {ILogService, IRootScopeService} from "angular";
import {gameManager} from "./gameManager";

class ControlsComponent {
    get game() {
        return gameManager;
    }

    constructor(private $log: ILogService,
                private $rootScope: IRootScopeService) {
    }
}

export const controlsComponent: IComponentOptions = {
    controller: ControlsComponent,
    template: `<table style="margin: 24px;">
    <tr>
        <td></td>
        <td><img src="./img/arrow_up.png" ng-click="$ctrl.game.stepUp()"/></td>
        <td></td>
    </tr>
    <tr>
        <td><img src="./img/arrow_left.png" ng-click="$ctrl.game.stepLeft()"/></td>
        <td></td>
        <td><img src="./img/arrow_right.png" ng-click="$ctrl.game.stepRight()"/></td>
    </tr>
    <tr>
        <td></td>
        <td><img src="./img/arrow_down.png" ng-click="$ctrl.game.stepDown()"/></td>
        <td></td>
    </tr>
</table>
`
};