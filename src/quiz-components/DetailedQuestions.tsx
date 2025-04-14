export type Question={
    name:string;
    label:string
    completed:boolean;
}

export const detailedQuestions:Question[]=[
    {name:"strengths",label:"What are your strengths?",completed:false},
    {name:"interests",label:"What kind of careers interest you?",completed:false},
    {name:"workEnvironment",label:"What is your preferred work environment?",completed:false}
];