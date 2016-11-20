namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class Function9Controller extends AbstractFunctionController{
        numberOfElements: number;
        randomList: any[];

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
            this.onInit();
        }

        private onInit = () => {
            this.initRandomList();
        };

        private initRandomList = (): void => {
            this.randomList = this.receivedDomainList;
        };
        
        private showRandomList = (): void => {
            this.randomList = _.sampleSize(this.receivedDomainList, this.numberOfElements);
        };

        protected setDescription():void {
            this.description = "wyświetla n losowo wybranych elementów, gdzie n to parametr wejścia";
        }
    }

    displayFunctionsModule.controller("Function9Controller", Function9Controller);
}