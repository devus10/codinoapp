namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class ElementListController {
        listToShow: any[];
        limitTo: number;
        typeOfDomainList: string;
        sortBy: string;

        constructor(private TypeCheckingService: TypeCheckingService) {
            this.init();
        }

        private init = () => {
            this.checkTypeOfDomainList();
            this.limitElements();
            this.sortElements();
        };

        private checkTypeOfDomainList = (): void => {
            this.TypeCheckingService.setListToCheckType(this.listToShow);
            this.typeOfDomainList = this.TypeCheckingService.getListType();
        };

        private limitElements = (): void => {
            if(angular.isDefined(this.limitTo)){
                this.listToShow = this.listToShow.slice(0, this.limitTo);
            }
        };

        private sortElements = (): void => {
            if(angular.isDefined(this.sortBy)){
                console.log(this.sortBy);
                this.listToShow = _.sortBy(this.listToShow, (element: any) => {
                    return element[this.sortBy];
                })
            }
        };
    }

    displayFunctionsModule.controller("ElementListController", ElementListController);
}