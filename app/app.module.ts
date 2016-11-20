namespace codino {

    export var applicationModule = angular.module("codino",
        [
            "ui.router",
            "codino.displayFunctions",
            "FileUploadModule"
        ]);
}