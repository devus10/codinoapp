namespace codino {
    import IStateProvider = angular.ui.IStateProvider;
    import fileUploadModule = codino.fileupload.fileUploadModule;

    export class ApplicationRoutes {
        constructor($stateProvider:IStateProvider) {
            $stateProvider
                .state("codino", {
                    abstract: true,
                    url: "",
                    views: {
                        "main": {
                            template: "<div ui-view='mainContent'></div>"
                        }
                    }
                })
                .state("codino.fileupload", {
                    url: "/uploadfile",
                    views: {
                        "mainContent": {
                            templateUrl: "app/fileupload/fileupload.html",
                            controller: "FileUploadController",
                            controllerAs: "vm"
                        }
                    }
                })
                .state("codino.selectFunction", {
                    url: "/selectFunction",
                    views: {
                        "mainContent": {
                            template: "<select-function></select-function>  ",
                        }
                    }
                });
        }
    }

    applicationModule.config(ApplicationRoutes);
}