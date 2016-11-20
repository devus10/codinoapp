namespace codino.displayFunctions {

    export class Function9Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function9/function9.html";
        controller = "Function9Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function9", () => {
        return new Function9Directive();
    });
}