namespace codino.displayFunctions {

    export class Function11Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function11/function11.html";
        controller = "Function11Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function11", () => {
        return new Function11Directive();
    });
}