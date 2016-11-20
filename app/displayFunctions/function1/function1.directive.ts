namespace codino.displayFunctions {

    export class Function1Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function1/function1.html";
        controller = "Function1Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function1", () => {
        return new Function1Directive();
    });
}