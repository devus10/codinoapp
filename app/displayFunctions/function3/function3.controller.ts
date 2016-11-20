namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class Function3Controller extends AbstractFunctionController {
        elementsNumber: number;

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
            this.onInit();
        }

        private onInit = () => {
            this.setElementsNumber();
        };

        private setElementsNumber = (): void => {
            if(this.receivedDomainList){
                this.elementsNumber = this.receivedDomainList.length;
            }
        };

        protected setDescription():void {
            this.description = "wyświetla liczbę elementów zapisanych w pliku."
        }
    }

    displayFunctionsModule.controller("Function3Controller", Function3Controller);
}