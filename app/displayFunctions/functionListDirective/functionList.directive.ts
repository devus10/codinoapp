namespace codino.displayFunctions {
    
    export interface IFunctionsScope {
        functionId: string;
    }
    
    export class FunctionListDirective extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/functionListDirective/functionList.html";
        controller = "FunctionsListController";
    }

    displayFunctionsModule.directive("functionList", () => {
        return new FunctionListDirective();
    });
}