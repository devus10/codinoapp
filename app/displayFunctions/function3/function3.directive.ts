namespace codino.displayFunctions {

    export class Function3Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function3/function3.html";
        controller = "Function3Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function3", () => {
        return new Function3Directive();
    });
}