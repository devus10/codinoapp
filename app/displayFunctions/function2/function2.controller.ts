namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class Function2Controller extends AbstractFunctionController{

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
        }

        protected setDescription():void {
            this.description = "wyświetla pierwsze 10 elementów z pliku w przyjaznej dla " +
                "użytkownika formie (różnej w zależności od typu obiektu).";
        }
    }

    displayFunctionsModule.controller("Function2Controller", Function2Controller);
}