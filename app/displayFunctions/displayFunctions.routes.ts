namespace codino.displayFunctions {
        import IStateProvider = angular.ui.IStateProvider;
        import fileUploadModule = codino.fileupload.fileUploadModule;

        export class FunctionsRoutes {
            constructor($stateProvider:IStateProvider) {
                $stateProvider
                    .state("codino.functionList", {
                        url: "/function/:functionId",
                        views: {
                            "mainContent": {
                                template: "<function-list></function-list>"
                            }
                        }
                    });
            }
        }

    displayFunctionsModule.config(FunctionsRoutes);
}