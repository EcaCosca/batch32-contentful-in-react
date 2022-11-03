import {createClient} from 'contentful'

const useContentful = () => {

    const client = createClient({
        space: "orl8clq37c3c",
        accessToken: "08FKtGTCHgdnFeS-x_lhng6cvbt95WARJY7jpuQfBkI",
        host: "preview.contentful.com"
    })

    const getRecipes = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "recipe"
            });
            return entries;
        } catch (error) {
            console.log(error)
        }
    }
    return {getRecipes}
};

export default useContentful