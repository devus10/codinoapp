namespace codino {
    
    export interface IGenericDirective {
        restrict: string;
        templateUrl?: string;
        controller?: string;
        controllerAs: string;
        bindToController: boolean;
        scope?: any;
    }
}