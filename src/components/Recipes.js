import { createClient } from "contentful"

export async function getStatiProps() {

    const client = createClient({
        space: "HERE YOU PUT YOUR SPACE",
        accessToken: "here your access token"
    })

    const res = await client.getEntries({ content_type: "recipe"})

    return {
        props: {
            recipes:res.items
        }
    }
}

export default function Recipes({ recipes }){
    console.log(recipes)
    
    return (
        <div>
            Recipes
        </div>
    )
}