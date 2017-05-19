import {boardComponent} from "./board.component";
import {controlsComponent} from "./controls.component";
import {statusComponent} from "./status.component";

export const appModule = angular.module('minesGameApp', ['sap.imageloader'])
    .component('board', boardComponent)
    .component('status', statusComponent)
    .component('controls', controlsComponent);

