namespace codino.displayFunctions {

    export class ElementListDirective extends AbstractFunctionDirective {
        templateUrl = "app/displayFunctions/common/elementList/elementList.html";
        controller = "ElementListController";
        scope: any = {
            listToShow: "=",
            limitTo: "=",
            sortBy: "@",
        };
    }

    displayFunctionsModule.directive("elementList", () => {
        return new ElementListDirective();
    });
}