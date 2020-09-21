import React from 'react';
import GET_RECIPE from 'graphql/GetRecipe';
import { GetStaticProps } from 'next';
import Error from 'next/error';
import { IRecipeDetails, Tag } from 'types/types';
import Layout from 'components/Layout';
import cn from 'classnames';
import styled from 'styled-components';
import CustomError from 'components/Error';

type Data = {
  recipe: IRecipeDetails;
}

interface Props extends GetStaticProps {
  className?: string;
  loading: boolean;
  error: Error;
  data: Data;
  id: string;
}

const RecipeDetailsBase = (props: Props) => {
  const { loading, error, data, className, id  } = props;

  if (loading) return <div>Loading..</div>;
  if (error) return <CustomError>Error: {error}</CustomError>;

  const {
    recipe: {
      title,
      description,
      tagsCollection,
      photo: {
        url
      },
      chef,
    }
  } = data;

  return (
    <>
      <Layout>
        <div className={cn(className, 'recipe-details-wrapper')}>
          {!data.recipe && !loading && <CustomError>Invalid Recipe ID: {id}</CustomError>}
          {data.recipe && (
            <>
              <div className={'recipe-img-wrapper'}>
                {/*<picture className={'recipe-img'}>*/}
                {/*  <source srcSet={url} media="(min-width: 720px)" />*/}
                  <img src={url} alt={description} />
                {/*</picture>*/}
              </div>
              <h2 className={'title'}>{title}</h2>
              <p className={'chef-text'}>Presented By: {(chef && chef.name) || 'Unknown'}</p>
              <div className={'tag-container'}>
                <ul className={'tag-list'}>
                  { tagsCollection.items.length > 0 &&
                    tagsCollection.items.map((tag: Tag) => (
                      <li key={tag.name} className={'tag'}>{tag.name}</li>
                    ))
                  }
                </ul>
              </div>
              <div className={'description-container'}>
                <h4>Description</h4>
                <p className={'description-text'}>{description}</p>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

RecipeDetailsBase.getInitialProps = async (ctx) => {
  const {
    apolloClient,
    query: { id },
  } = ctx;

  const { data, loading, error } = await apolloClient.query({
    query: GET_RECIPE,
    variables: {
      id,
    },
  });

  return {
    id,
    data,
    loading,
    error,
  };
};

const RecipeDetails = styled(RecipeDetailsBase)`
  &.recipe-details-wrapper {
    height: 100vh;
    display: flex;
    flex-flow: nowrap column;
    margin: 0 auto;
    max-width: 800px;
    flex: 1 1 auto;
    
    & .title {
      
    }
    
    & .chef-text {
      margin-top: 0;
      margin-bottom: 20px;
    }
    
    & .tag-container {
      margin-bottom: 15px;
      
      & .tag-list {
        color: #716d6a;
        font-size: 12px;
        line-height: 1.5;
        list-style: none;
        margin: 0 0 10px;
        padding: 0;
        
        & .tag {
          margin: 0 2px 5px 0;
          background-color: #f6f6f6;
          color: #716d6a;
          display: inline-block;
          font-size: 10px;
          letter-spacing: 1px;
          line-height: 1.5;
          padding: 5px;
          text-transform: uppercase;
        }
      }
    }
    
    & .recipe-img-wrapper {
      position: relative;
      height: 250px;
      padding-right: 10px;
      width: 100%;
      display: flex;
      border-radius: 0.25rem;
      margin-bottom: 30px;
      
      img {
          width: 95%;
          top: 50%;
          left: 0;
          height: 100%;
          vertical-align: middle;
          object-fit: cover;
      }
    }
  }
  
  @media (max-width: 768px) {
    &.recipe-details-wrapper {
      margin: 10px;
    }
  }
`;

export default RecipeDetails;
