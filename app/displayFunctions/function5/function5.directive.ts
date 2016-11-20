namespace codino.displayFunctions {

    export class Function5Directive extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/function5/function5.html";
        controller = "Function5Controller";
        scope: any = {};
    }

    displayFunctionsModule.directive("function5", () => {
        return new Function5Directive();
    });
}