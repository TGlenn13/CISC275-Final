export type DetailedQuestion={
    name:string;
    label:string
    completed:boolean;
}

export const detailedQuestions:DetailedQuestion[]=[
    {name:"strengths",label:"1. Describe a time when you solved a complex problem or overcame a challenge. What approach did you take, and what did you learn about your strengths?",completed:false},
    {name:"interests",label:"2. What are three topics or industries you find fascinating, even if you don’t have direct experience with them?",completed:false},
    {name:"workEnvironment",label:"3. When you imagine your ideal work environment, what does it look and feel like?",completed:false},
    {name:"preferredTasks",label:"4. What activities or tasks make you feel most engaged and in the zone?",completed:false},
    {name:"idealWork",label:"5. If you could design your own job from scratch, what would it include? What tasks would you do daily, and what kind of outcomes would you aim for?",completed:false},
    {name:"role",label:"6. How do you prefer to collaborate with others—leading a team, working independently, or supporting in a team role?",completed:false},
    {name:"skills",label:"7. What skills or abilities come naturally to you, and how have you used them in past experiences—academic, personal, or professional?",completed:false},
    {name:"values",label:"8. What values or causes are most important to you, and how would you like your work to reflect them?",completed:false}
];