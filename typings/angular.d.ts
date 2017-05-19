import {IAngularStatic} from "angular";

declare global {
    interface Window {
        angular: IAngularStatic;
    }

    var angular: IAngularStatic;
}
