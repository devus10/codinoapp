namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class Function1Controller extends AbstractFunctionController {
        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
        }

        protected setDescription():void {
            this.description = "wyświetla wszystkie dane, wszystkich wierszy w przyjaznej dla użytkownika formie" +
                " (różnej w zależności od typu obiektu).";
        }
    }

    displayFunctionsModule.controller("Function1Controller", Function1Controller);
}