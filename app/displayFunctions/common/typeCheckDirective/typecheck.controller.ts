namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class TypeCheckDirectiveController extends AbstractFunctionController {

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
        }

        protected setDescription():void {}
    }

    applicationModule.controller("TypeCheckDirectiveController", TypeCheckDirectiveController);
}