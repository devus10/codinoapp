namespace codino.displayFunctions {

    export interface IFunctionDescriptionScope {
        description: string;
    }
    
    export class FunctionDescriptionDirective extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/common/functionDescriptionDirective/functionDescription.html";
        controller = "FunctionDescriptionController";
        scope = {
            description: "@"
        }
    }

    displayFunctionsModule.directive("functionDescription", () => {
        return new FunctionDescriptionDirective();
    });
}