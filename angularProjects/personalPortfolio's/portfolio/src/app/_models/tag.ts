export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'green');
    static readonly TYPESCRIPT = new Tag('Typescript', 'red');
    static readonly HTML = new Tag('HTML', 'orange');
    static readonly CSS = new Tag('CSS', 'Magenta');
    static readonly JAVA = new Tag('Java', 'pink');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'brown');
    static readonly MYSQL = new Tag('MySQL', 'purple');
    static readonly ASPNET = new Tag('Asp.net', 'darkred');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'darkred');
    
    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}