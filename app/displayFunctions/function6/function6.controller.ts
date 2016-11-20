namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;

    export class Function6Controller extends AbstractFunctionController {
        countGreaterThan: number;
        sortedAndLimitedNameCountList: NameCount[];
        nameList: string[] = [];
        nameCountList: NameCount[];

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
            this.onInit();
        }

        private onInit = (): void => {
            this.setSortedListByNamesCount();
        };

        private showNamesAndCounts = (): void => {
            this.sortedAndLimitedNameCountList = _.filter(this.nameCountList, (element: NameCount) => {
                return element.count > this.countGreaterThan;
            });
            console.log(this.sortedAndLimitedNameCountList);
        };

        private setSortedListByNamesCount = (): void => {
            this.setNameList();
            this.createNameCountListFromDictionary();
            this.getSortedListByNameCount();
        };

        private getSortedListByNameCount = (): void => {
            this.nameCountList = _.orderBy(this.nameCountList, ['count'], ['desc']);
        };

        private createNameCountListFromDictionary = (): void => {
            let namesCountDictionary: any = this.createNameCountDictionary();
            let namesCountList: NameCount[] = [];
            for(let key in namesCountDictionary){
                namesCountList.push(new NameCount(key+"", namesCountDictionary[key]));
            }
            this.nameCountList = namesCountList;
        };

        private createNameCountDictionary = (): Object => {
            return _.countBy(this.nameList);
        };

        private setNameList = (): void => {
            _.forEach(this.receivedDomainList, (element: any) => {
                this.nameList.push(element.name);
            });
        };

        protected setDescription():void {
            this.description = "wyświetla wszystkie imiona i liczbę wystąpień elementów o danym imieniu," +
                " których liczba powtórzeń jest większa niż 100, posortowane po liczbie wystąpień";
        }
    }

    displayFunctionsModule.controller("Function6Controller", Function6Controller);

    export class NameCount {
        name: string;
        count: number;

        constructor(name: string, count: number){
            this.name = name;
            this.count = count;
        }
    }
}