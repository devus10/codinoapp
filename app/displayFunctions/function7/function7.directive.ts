namespace codino.displayFunctions {

    export class Function7Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function7/function7.html";
        controller = "Function7Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function7", () => {
        return new Function7Directive();
    });
}