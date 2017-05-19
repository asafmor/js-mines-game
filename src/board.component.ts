import {IComponentOptions, ILogService, IRootScopeService} from "angular";
import {gameManager} from "./gameManager";

class BoardComponent {
    get game() {
        return gameManager;
    }

    constructor(private $log: ILogService,
                private $rootScope: IRootScopeService) {
    }
}

export const boardComponent: IComponentOptions = {
    controller: BoardComponent,
    template: `
<div>
    <table cellspacing="0" cellpadding="0"
           style="padding: 0px; border-spacing: 0; border-collapse: collapse; margin-top: 24px;">
        <tr height="32">
            <td><img src="./img/edge_top_left.png"/></td>
            <td ng-repeat="n in [].constructor($ctrl.game.boardSize) track by $index"><img src="./img/edge_top.png"/></td>
            <td><img src="./img/edge_top_right.png"/></td>
        </tr>
        <tr height="64" ng-repeat="n in [].constructor($ctrl.game.boardSize) track by $index">
            <td><img src="./img/edge_left.png"/></td>
            <td ng-repeat="m in [].constructor($ctrl.game.boardSize) track by $index"
                style="background-image: url('./img/tile_grass.png')">
                <img ng-src="{{$ctrl.game.getTileImage($parent.$index, $index)}}" width="64" height="64"/>
            </td>
            <td><img src="./img/edge_right.png"/></td>
        </tr>
        <tr height="32">
            <td><img src="./img/edge_bottom_left.png"/></td>
            <td ng-repeat="n in [].constructor($ctrl.game.boardSize) track by $index"><img src="./img/edge_bottom.png"/>
            </td>
            <td><img src="./img/edge_bottom_right.png"/></td>
        </tr>
    </table>
</div>   
`
};