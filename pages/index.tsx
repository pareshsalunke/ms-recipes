import React from 'react';
import Layout from 'components/Layout';
import GET_ALL_RECIPES from 'graphql/getAllRecipes';
import { GetStaticProps } from 'next';
import { RecipesCollection, Recipe } from 'types/types';
import Error from 'next/error';
import styled from 'styled-components';
import cn from 'classnames';
import RecipeCard from '../components/RecipeCard';
import CustomError from '../components/Error';

interface Props extends GetStaticProps {
  className?: string;
  loading: boolean;
  error: Error;
  data: RecipesCollection;
}

const RecipesBase = (props: Props) => {
  const { loading, error, data, className  } = props;

  if (loading) return <div>Loading..</div>;
  if (error) return <CustomError>Error {error}</CustomError>;

  const { recipeCollection: { items } } = data;
  return (
    <>
    <Layout>
      <ul className={cn(className, 'recipes-card-list')}>
        { items && items.map((item: Recipe) => {
          const id = item.sys.id;
          return (
            <RecipeCard item={item} key={id} />
          )
        })
        }
      </ul>
    </Layout>
    </>
  );
};

RecipesBase.getInitialProps = async ({ apolloClient }) => {
  const { data, loading, error } = await apolloClient.query({
    query: GET_ALL_RECIPES,
  });
  return {
    data,
    loading,
    error,
  };
};

const Recipes = styled(RecipesBase)`
  &.recipes-card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default Recipes;
