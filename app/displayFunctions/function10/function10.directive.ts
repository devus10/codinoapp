namespace codino.displayFunctions {

    export class Function10Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function10/function10.html";
        controller = "Function10Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function10", () => {
        return new Function10Directive();
    });
}