namespace codino.displayFunctions {

    export class Function8Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function8/function8.html";
        controller = "Function8Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function8", () => {
        return new Function8Directive();
    });
}