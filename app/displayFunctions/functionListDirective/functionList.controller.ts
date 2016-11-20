namespace codino.displayFunctions {
    import IStateParamsService = angular.ui.IStateParamsService;
    import FileService = codino.services.FileService;

    export class FunctionsListController implements IFunctionsScope {
        functionId: string;
        fileName: string;
        
        constructor(private $stateParams: any, private FileService: FileService){
            this.setFunctionIdFromUrlParam();
        }

        private setFunctionIdFromUrlParam = () => {
            this.functionId = this.$stateParams.functionId;
        };
        
        private isFileLoaded = (): boolean => {
            return this.FileService.isFileLoaded();
        };
    }

    displayFunctionsModule.controller("FunctionsListController", FunctionsListController);
}