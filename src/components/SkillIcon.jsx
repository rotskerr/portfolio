import React from 'react'
import figma from "../assets/Skills/figma.svg"
import github from "../assets/Skills/github-icon.svg"
import html from "../assets/Skills/html-5.svg"
import postgresql from "../assets/Skills/postgresql.svg"
import react from "../assets/Skills/react.svg"
import tailwindcss from "../assets/Skills/tailwindcss-icon.svg"
import threejs from "../assets/Skills/threejs.svg"
export default function (props) {
    const SkillImg = (name) => {
        const skill_data = {
            "figma": figma,
            "github": github,
            "html": html,
            "postgresql": postgresql,
            "react": react,
            "tailwindcss": tailwindcss,
            "threejs": threejs,
        }
        return skill_data[name]
    }
    return (
        <img src={SkillImg(props.skill)} width={props.size} height={props.size} />
    )
}
