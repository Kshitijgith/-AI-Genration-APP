import { SurpriseMePrompts } from "../constants";
export function Getrandomprompt(prompt){
    const Getrandom=Math.floor(Math.random() *
    SurpriseMePrompts.length)
    const Randomprompt=SurpriseMePrompts[Getrandom];
    if(Randomprompt===prompt){
       return Getrandomprompt(prompt)
    }
    return Randomprompt;

}