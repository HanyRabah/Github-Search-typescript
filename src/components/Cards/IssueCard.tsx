import React from 'react';
import { CardDetails, UserProfile } from '../index';
import { CardsProps } from '../../@types/components';

const IssueCard = ({ item }:CardsProps) =>  {
  return (
    <>
    <CardDetails 
      name={item.title} 
      status={item.state}
      url={item.html_url}
      description={item.body}
      created={item.created_at}  />
      {item.user && <UserProfile image={item.user.avatar_url} name={item.user.login} link={item.user.html_url} position="bottom" /> }
    </>
  )
}

export default IssueCard;
