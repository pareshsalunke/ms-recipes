import gql from 'graphql-tag';

const GET_RECIPE = gql`
    query getARecipe($id: String!) {
        recipe(id: $id) {
            title
            description
            photo {
                url
            }
            chef {
                name
            }
            tagsCollection {
                items {
                    name
                }
            }
        }
    }
`;

export default GET_RECIPE;