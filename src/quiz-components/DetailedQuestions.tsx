import { FormData } from "../pages/DetailedPage";

export const unformattedDetailedQuestions: {name: keyof FormData, question: string}[]=[
    {
        name:"strengths",
        question:"1. Describe a time when you solved a complex problem or overcame a challenge. What approach did you take, and what did you learn about your strengths?"
    },
    {
        name:"interests",
        question:"2. What are three topics or industries you find fascinating, even if you don’t have direct experience with them?"
    },
    {
        name:"workEnvironment",
        question:"3. When you imagine your ideal work environment, what does it look and feel like?"
    },
    {
        name:"preferredTasks",
        question:"4. What activities or tasks make you feel most engaged and in the zone?"
    },
    {
        name:"idealWork",
        question:"5. If you could design your own job from scratch, what would it include? What tasks would you do daily, and what kind of outcomes would you aim for?"
    },
    {
        name:"role",
        question:"6. How do you prefer to collaborate with others—leading a team, working independently, or supporting in a team role?"
    },
    {
        name:"skills",
        question:"7. What skills or abilities come naturally to you, and how have you used them in past experiences—academic, personal, or professional?"
    },
    {
        name:"values",
        question:"8. What values or causes are most important to you, and how would you like your work to reflect them?"
    }
];