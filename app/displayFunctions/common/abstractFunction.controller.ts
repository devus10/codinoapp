namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
    
    export abstract class AbstractFunctionController {
        receivedDomainList: any[];
        typeOfDomainList: string;
        description: string;
        
        constructor(private FileService: FileService, private TypeCheckingService: TypeCheckingService){
            this.init();
        }

        protected abstract setDescription(): void;

        private init(): void {
            this.setDescription();
            this.setDomainList();
            this.checkTypeOfDomainList();
        }

        private setDomainList = (): void => {
            this.receivedDomainList = this.FileService.getDomainList();
        };

        private checkTypeOfDomainList = (): void => {
            this.TypeCheckingService.setListToCheckType(this.receivedDomainList);
            this.typeOfDomainList = this.TypeCheckingService.getListType();
        };
    }
}