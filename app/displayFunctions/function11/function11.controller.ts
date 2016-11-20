namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class Function11Controller extends AbstractFunctionController {
        sortedIdList: number[];

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
            this.onInit();
        }

        private onInit = () => {
            this.setSortedIdList();
        };

        private setSortedIdList = (): void => {
            this.sortedIdList = _.sortBy(this.getIdList(), (id: number) => {
                return id;
            }).reverse();
        };

        private getIdList = (): number[] => {
            let idList: number[] = [];
            _.forEach(this.receivedDomainList, (element: any) => {
                idList.push(element.id);
            });
            return idList;
        };

        protected setDescription():void {
            this.description = "wyświetla listę występująych id, posortowanych " +
                "od najwiekszej, w postaci: 1324,242,128,121,93,34,10,7";
        }
    }
    

    displayFunctionsModule.controller("Function11Controller", Function11Controller);
}