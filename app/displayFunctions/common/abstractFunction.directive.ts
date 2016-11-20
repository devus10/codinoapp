namespace codino.displayFunctions {
    
    export abstract class AbstractFunctionDirective implements IGenericDirective {
        restrict: string = "E";
        controllerAs: string = "vm";
        bindToController: boolean = true;
        controller: string;
        templateUrl: string;
    }
}