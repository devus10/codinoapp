namespace codino.services {
    
    export const BIKER_PERSON_TYPE: string = "BikerPerson";
    export const SHELTER_DOG_TYPE: string = "ShelterDog";
    export const PERSON_TYPE: string = "Person";
    export const NO_TYPE: string = "NoType";
    
    export class TypeCheckingService {
        private listToCheckType: any[];
        
        public setListToCheckType = (list: any[]): void => {
            this.listToCheckType = list;
        };
        
        public getListType = (): string => {
            let listType: string = NO_TYPE;
            _.forEach(this.listToCheckType, (element: any) => {
                if(this.isPerson(element)){
                    listType = PERSON_TYPE;
                } else if (this.isBikerPerson(element)){
                    listType = BIKER_PERSON_TYPE;
                } else if (this.isShelterDog(element)){
                    listType = SHELTER_DOG_TYPE;
                }
            });
            return listType;
        };

        private isShelterDog(object: any): boolean {
            return object.owner || object.vaccine;
        }

        private isPerson(object: any): boolean {
            return object.surname || object.parent_id && object.vaccine == undefined && object.owner == undefined && object.record == undefined;
        }

        private isBikerPerson(object: any): boolean {
            return  object.id && object.name && object.age && object.city && object.parent_id == undefined || object.record != undefined
        }
    }

    applicationModule.factory("TypeCheckingService", () => {
        return new TypeCheckingService();
    })
}