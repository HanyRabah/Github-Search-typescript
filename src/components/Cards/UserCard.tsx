import React from 'react';
import { UserProfile } from '../index';
import { CardsProps } from '../../@types/components';

const UserCard = ({ item }:CardsProps) =>  {
  return (
    <UserProfile image={item.avatar_url} name={item.login} link={item.html_url} />
  )
}

export default UserCard
