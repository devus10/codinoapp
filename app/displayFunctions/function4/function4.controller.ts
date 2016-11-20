namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
   
    export class Function4Controller extends AbstractFunctionController {
        elementId: number;
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

        private showSortedFilteredList = (): void => {
            this.filteredList = _.sortBy(this.getListFilteredById(), (element: any) => {
                return element.id;
            });
        };

        private getListFilteredById = (): any[] => {
            return _.filter(this.receivedDomainList, (element: any) => {
                return element.id > this.elementId;
            })
        };

        protected setDescription():void {
            this.description = "wyświetla elementy których id jest większe niż podane," +
                " wyniki posortowane po id";
        }
    }

    displayFunctionsModule.controller("Function4Controller", Function4Controller);
}