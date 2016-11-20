namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;

    export class FunctionDescriptionController implements IFunctionDescriptionScope {
        description:string;

        constructor() {
        }
    }

    displayFunctionsModule.controller("FunctionDescriptionController", FunctionDescriptionController);
}