import * as theatre from "@theatre/core";
import studio from "@theatre/studio";
studio.initialize();
export class AnimationTheater{
    sheets:Array<theatre.ISheet> = [];
    constructor(){
        console.log("Animation theatre Initalized");
    }

    createProject(name:string){
        return theatre.getProject(name);
    }

    createObjectSheet(name:string, project:theatre.IProject, instanceName?:string){
        let sheet = project.sheet(name, instanceName);
        this.sheets.push(sheet);
        return sheet;
    }

    getProject(name:string){
        return theatre.getProject(name);
    }

    getObjectSheet(name:string, project:theatre.IProject, instance?:string){
        const sheet = this.sheets.filter((sheet) => {
                if(sheet.address.sheetId === name){
                    return sheet;
                }
            }
        )
    }

  
}

export function createProject(name:string){
    return theatre.getProject(name);
}

export function createObjectSheet(name:string, project:theatre.IProject): theatre.ISheet{
    return project.sheet(name);
}

export function getObjectSheet(name:string, project:theatre.IProject):theatre.ISheet{
    return project.sheet(name);
}