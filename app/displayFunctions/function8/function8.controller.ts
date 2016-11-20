namespace codino.displayFunctions {
    import FileService = codino.services.FileService;
    import TypeCheckingService = codino.services.TypeCheckingService;
   
    export class Function8Controller extends AbstractFunctionController {
        randomMatchingElement: any[] = [];
        
        constructor(FileService: FileService, TypeCheckingService: TypeCheckingService) {
            super(FileService, TypeCheckingService);
            this.onInit();
        }

        private onInit = () => {
            console.log("8");
            this.setRandomMatchingElement();
        };

        private setRandomMatchingElement  = (): any => {
            let randomMatchingElement: any = _.sample(this.findMatchingElements());
            this.randomMatchingElement.push(randomMatchingElement);
        };

        private findMatchingElements = (): any[] => {
            return _.filter(this.receivedDomainList, (element: any) => {
                return this.nameMatchesPattern(element.name);
            })
        };

        private nameMatchesPattern = (name: string): boolean => {
            name = _.toUpper(name);
            return _.startsWith(name, "P") && _.endsWith(name, "R")
                && name.indexOf("I") !== -1 && name.indexOf("Z") === -1 && name.indexOf("J") === -1;
        };

        protected setDescription():void {
            this.description = "wyświetla jeden losowo wybrany element z pliku, którego imię zaczyna się na 'p', " +
                "kończy na 'r', zawiera 'i', ale nie zawiera 'z' ani 'j.";
        }
    }

    displayFunctionsModule.controller("Function8Controller", Function8Controller);
}