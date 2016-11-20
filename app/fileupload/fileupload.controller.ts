namespace codino.fileupload {
    import FileService = codino.services.FileService;
    import IStateService = angular.ui.IStateService;

    export class FileUploadController {
        fileName: string;
        
        constructor(private FileService: FileService, private $state: IStateService){
            this.setFileName();
        }

        uploadFile(file:File):void {
            this.$state.reload();
            let reader: FileReader = new FileReader();
            reader.onload = this.onReaderLoad;
            reader.readAsText(file);
            this.fileName = file.name;
            this.FileService.setFile(file);

        }

        private onReaderLoad = (event: any) => {
            let parsedDomainList: any[] = JSON.parse(event.target.result);
            this.FileService.setDomainList(parsedDomainList);
        };

        private setFileName = () => {
            if(this.FileService.getFile()){
                this.fileName = this.FileService.getFile().name;
            }
        };

        private isFileLoaded = () => {
            return this.FileService.isFileLoaded();
        };
    }

    fileUploadModule.controller("FileUploadController", FileUploadController);
}