import IComponentOptions = angular.IComponentOptions;
import {ILogService, IRootScopeService} from "angular";
import {gameManager} from "./gameManager";

class StatusComponent {
    get game() {
        return gameManager;
    }

    constructor(private $log: ILogService,
                private $rootScope: IRootScopeService) {
    }
}

export const statusComponent: IComponentOptions = {
    controller: StatusComponent,
    template: `<div>

    <div class="panel panel-default">
        <div class="panel-body">
            <!-- Board Size Selector -->
            <div style="display:inline-block;">
                Board Size:
            </div>
            <div style="display:inline-block; padding-right: 24px;">
                <select class="form-control" style="background-color: #f9f9f9;" ng-model="$ctrl.game.tiles"
                        ng-options="x for x in $ctrl.game.numberOfTilesOptions">
                </select>
            </div>

            <!-- Difficulty Level Selector -->
            <div style="display:inline-block;">
                Difficulty Level:
            </div>
            <div style="display:inline-block; padding-right: 24px;">
                <select class="form-control" style="background-color: #f9f9f9;" ng-model="$ctrl.game.difficultyLevel"
                        ng-options="x for x in $ctrl.game.difficultyLevelOptions">
                </select>
            </div>

            <!-- Play Button -->
            <div style="display:inline-block; padding-right: 24px;">
                <button class="btn btn-success" ng-click="$ctrl.game.play()">Play!</button>
            </div>

            <!-- Score Readout -->
            <div style="display:inline-block; font-weight: bold;">
                Score: {{$ctrl.game.score}}
            </div>

        </div>

    </div>
</div>
</div>
`
};