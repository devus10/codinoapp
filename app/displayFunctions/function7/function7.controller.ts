namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export class Function7Controller extends AbstractFunctionController {
        elementId: number;
        parentsCountResult: number;
        elementName: string;
        searchedDomainObject: any;
        idNotFound: boolean;

        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
        }

        private getParentsCountForElement = (): void => {
            this.searchObjectById();
            this.getResult();
        };
        
        private searchObjectById = (): void => {
            this.searchedDomainObject = _.find(this.receivedDomainList, ['id', this.elementId])
        };
        
        private getResult = (): void => {
            if(this.searchedDomainObject){
                this.setNameAndParentsCount();
                this.idNotFound = false;
            } else  {
                this.idNotFound = true;
            }
        };

        private setNameAndParentsCount = (): void => {
            this.elementName = this.searchedDomainObject.name;
            if(this.searchedDomainObject.parent_id){
                this.parentsCountResult = this.countParents();
            }
        };

        private countParents = (): number => {
            let node: any = this.searchedDomainObject;
            let parentsCount: number = 0;
            while(node.parent_id != 0){
                parentsCount+=1;
                node = _.find(this.receivedDomainList, ['id', node.parent_id])
            }
            return parentsCount;
        };

        protected setDescription():void {
            this.description = "wyświetla imię elementu o zadanym id oraz jeśli element ten posiada parametr parent_id to liczbę jego " +
                "'rodziców' do samej góry hierarchii (do elementu o parent_id = 0," +
                " w hierarchii tylko jeden obiekt może mieć parent_id = 0 i wszystkie elementy tworzą jedno drzewo)";
        }
    }

    displayFunctionsModule.controller("Function7Controller", Function7Controller);
}