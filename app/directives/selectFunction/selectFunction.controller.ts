namespace codino.directives {
    import IStateService = angular.ui.IStateService;
    import FileService = codino.services.FileService;
    
    export class SelectFunctionController {
        fileName:string;
        fileUploaded:boolean;
        selectedFunction: number = 1;

        constructor(private $state: IStateService, private FileService: FileService){
            this.onInit();
        }

        private onInit = (): void => {
            this.setFileUploaded();
            this.setFileName();
        };
        
        private setFileUploaded = (): void => {
            this.fileUploaded = this.FileService.isFileLoaded();
        };
        
        private setFileName = (): void => {
            let file: File = this.FileService.getFile();
            if(file){
                this.fileName = this.FileService.getFile().name;
            }
        };

        onSelectDisplayFunction = () => {
            this.$state.go("codino.functionList", {functionId: this.selectedFunction});
        }
    }
    
    applicationModule.controller("SelectFunctionController", SelectFunctionController);
    
}