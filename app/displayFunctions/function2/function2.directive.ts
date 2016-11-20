namespace codino.displayFunctions {

    export class Function2Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function2/function2.html";
        controller = "Function2Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function2", () => {
        return new Function2Directive();
    });
}