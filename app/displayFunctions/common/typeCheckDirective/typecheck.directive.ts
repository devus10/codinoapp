namespace codino.displayFunctions {

    export class TypeCheckDirective extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/common/typeCheckDirective/typecheck.html";
        controller = "TypeCheckDirectiveController";
        scope: any = {};
        transclude: boolean =  true;
    }

    applicationModule.directive("typeCheck", () => {
        return new TypeCheckDirective();
    });
}