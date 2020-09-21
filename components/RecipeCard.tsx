import cn from 'classnames';
import styled from 'styled-components';
import Card from './Card';
import React from 'react';
import { Recipe } from 'types/types';
import Link from 'next/link';

interface Props {
  className?: string;
  item: Recipe;
}

const RecipeCardBase = (props: Props) => {
  const { className,
    item: {
      title,
      photo: {
        url,
      },
      sys: {
        id
      }
    }
  } = props;

  return (
    <>
      <Card className={cn(className,'recipes-card-item')}>
        <Link  href="/recipe/[id]" as={`/recipe/${id}`}>
          <div className={'link-container'}>
            <div className={'recipe-card-content'}>
              <div className={'recipe-img'}>
                <img src={url} alt='Recipe Image'/>
              </div>
              {/*<div className={'recipe-img'} style={{backgroundImage: `url(${url})`}}/>*/}
              <div className={'recipe-content'}>
                <h3 className={'title'}>{title}</h3>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </>
  )
};

const RecipeCard = styled(RecipeCardBase)`
  &.recipes-card-item{
    
    & .link-container {
      cursor: pointer;
      & .recipe-card-content {
        width: 100%;
        background-color: white;
        border-radius: 0.25rem;
        box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        &:hover {
          & .recipe-img {
            filter: contrast(100%);
          }
        }
    
        & .recipe-img {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        
        & .recipe-content {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
          padding: 1rem;
          
          & .title {
            font-size: 1em;
            font-weight: 300;
            letter-spacing: 2px;
          }
        }
      }
    }
  }
`;

export default RecipeCard;