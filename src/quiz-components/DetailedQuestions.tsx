export type Question={
    name:string;
    label:string
    completed:boolean;
}

export const detailedQuestions:Question[]=[
    {name:"strengths",label:"Describe a time when you solved a complex problem or overcame a challenge. What approach did you take, and what did you learn about your strengths?",completed:false},
    {name:"interests",label:"What are three topics or industries you find fascinating, even if you don’t have direct experience with them?",completed:false},
    {name:"workEnvironment",label:"When you imagine your ideal work environment, what does it look and feel like?",completed:false},
    {name:"preferredTasks",label:"What activities or tasks make you feel most engaged and in the zone?",completed:false},
    {name:"idealWork",label:"If you could design your own job from scratch, what would it include? What tasks would you do daily, and what kind of outcomes would you aim for?",completed:false},
    {name:"role",label:"How do you prefer to collaborate with others—leading a team, working independently, or supporting in a team role?",completed:false},
    {name:"skills",label:"What skills or abilities come naturally to you, and how have you used them in past experiences—academic, personal, or professional?",completed:false},
    {name:"values",label:"What values or causes are most important to you, and how would you like your work to reflect them?",completed:false}
];