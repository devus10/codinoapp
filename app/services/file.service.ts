namespace codino.services {

    export class FileService {
        private domainList: any[];
        private file: File;
        
        constructor() {
        }
        
        public setFile(file: File): void{
            this.file = file;
        }
        
        public getFile(): File {
            return this.file;
        } 

        public setDomainList(receivedDomainList: Array<any>): void {
            this.domainList = receivedDomainList;
        }

        public getDomainList(): Array<any> {
            return this.domainList;
        }

        public isFileLoaded(): boolean {
            return this.file !== undefined;
        }
    }

    applicationModule.factory("FileService", () => {
        return new FileService();
    });
}