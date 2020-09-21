import gql from 'graphql-tag';

const GET_ALL_RECIPES = gql`
    query getAllRecipes {
        recipeCollection {
            items {
                sys {
                    id
                }
                title
                photo {
                    url
                    width
                    height
                }
                description
            }
        }
    }
`;

export default GET_ALL_RECIPES;