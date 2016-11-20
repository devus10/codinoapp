namespace codino.directives {
    
    export class SelectFunctionDirective implements IGenericDirective {
        restrict = "E";
        controllerAs = "vm";
        bindToController = true;
        templateUrl = "app/directives/selectFunction/selectFunction.html";
        controller = "SelectFunctionController";
        scope = {};
    }

    applicationModule.directive("selectFunction", () => {
        return new SelectFunctionDirective();
    });
}