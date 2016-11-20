namespace codino.displayFunctions {

    export class Function4Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function4/function4.html";
        controller = "Function4Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function4", () => {
        return new Function4Directive();
    });
}