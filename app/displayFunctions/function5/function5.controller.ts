namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
   
    export class Function5Controller extends AbstractFunctionController{
        receivedDomainList: any[];
        typeOfDomainList: string;
        idElementFrom: number;
        idElementTo: number;
        filteredList: any[];

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
            this.onInit();
        }

        private onInit = () => {
            this.initFilteredList();
        };

        private initFilteredList = (): void => {
            this.filteredList = this.receivedDomainList;
        };

        private showFilteredList = (): void => {
            this.filteredList = this.getListFilteredByIdFromRange();
            console.log(this.filteredList);
        };

        private getListFilteredByIdFromRange = (): any[] => {
            return _.filter(this.receivedDomainList, (element: any) => {
                return element.id > this.idElementFrom && element.id < this.idElementTo;
            })
        };

        protected setDescription():void {
            this.description = "wyświetla liczbę elementów których id zawiera się między podanymi wartościami";
        }
    }

    displayFunctionsModule.controller("Function5Controller", Function5Controller);
}