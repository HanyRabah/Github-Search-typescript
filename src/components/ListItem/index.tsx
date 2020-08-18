import React from 'react';
import styled from 'styled-components';
import { UserCard, RepoCard, IssueCard } from '../Cards';
import { ListItemProps } from '../../@types/components';

const ListItem = (props:ListItemProps) => {
  const { data, category } = props
  return (
    <>
      {data && data.map(item => 
        <Wrapper key={item.id }>
          {category === 'users' && <UserCard item={item} /> }
          {category === 'repositories' && <RepoCard item={item} /> }
          {category === 'issues' && <IssueCard item={item} /> }
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.article`
  background: #eee;
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
`;

export default ListItem;
