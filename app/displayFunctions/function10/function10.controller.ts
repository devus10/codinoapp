namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class Function10Controller extends AbstractFunctionController {
        receivedDomainList: any[];
        typeOfDomainList: string;
        averageAgeOfAllElements: number;

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
            this.onInit();
        }

        private onInit = () => {
            this.setAverageAgeOfAllElements();
        };

        private setAverageAgeOfAllElements = (): void => {
            this.averageAgeOfAllElements = this.sumOfAges() / this.receivedDomainList.length;
        };

        private sumOfAges = (): number => {
            let ageSum: number = 0;
            _.forEach(this.receivedDomainList, (element: any) => {
               ageSum+=element.age;
            });
            return ageSum;
        };

        protected setDescription():void {
            this.description = "wyświetla średnią wieku wszystkich elementów";
        }
    }

    displayFunctionsModule.controller("Function10Controller", Function10Controller);
}