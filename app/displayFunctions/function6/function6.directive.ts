namespace codino.displayFunctions {

    export class Function6Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function6/function6.html";
        controller = "Function6Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function6", () => {
        return new Function6Directive();
    });
}