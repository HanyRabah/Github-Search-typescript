import React from 'react';
import { CardDetails, UserProfile } from '../index';
import { CardsProps } from '../../@types/components';

const RepoCard = ({ item }:CardsProps) =>  {
  return (
    <>
      <CardDetails 
        name={item.full_name} 
        forks={item.forks_count  || null} 
        stars={item.stargazers_count  || null}
        language={item.language || null}
        url={item.html_url}
        description={item.description}
        created={item.created_at}  />
        { item.owner && <UserProfile image={item.owner.avatar_url} name={item.owner.login} link={item.owner.html_url} position="bottom" /> }
    </>
  )
}

export default RepoCard;
