export class Question {
    id:number;
    questionText: string;
    options?: Array<any>;
    type: string;
    timer?: number;
    answer1?: string;
    answer2?: string;
    active?: boolean;
}
