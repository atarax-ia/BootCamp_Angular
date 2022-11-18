export class Curso {
    public id: string | undefined;
    public title: string | undefined;
    public description: string | undefined;
    public category: string | undefined;
    public duration: number | undefined;


    constructor(id: string | undefined, title: string | undefined, description: string | undefined, category: string | undefined, duration: number | undefined) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.duration = duration;
    }
}
