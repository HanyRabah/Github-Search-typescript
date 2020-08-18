import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Language } from '../../assets/icons/language.svg';
import { ReactComponent as Fork } from '../../assets/icons/fork.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { DetailsProps, StyledDetailsProps } from "../../@types/components";

const CardDetails = ({
  name,
  forks,
  stars,
  language,
  url,
  description,
  created,
  status,
}: DetailsProps) => {
  const trimText = (text: string) => {
    return text;
  };
  
  const humanizeDate = (date: string) => {
    const newDate = new Date(date);
    return `${
      newDate.getMonth() + 1
    }-${+newDate.getDate()}-${newDate.getFullYear()}`;
  };

  return (
    <Wrapper>
      <TitleLink href={url} title={trimText(name)} target="_blank">{name && trimText(name)}</TitleLink>
      <Body>
        {description && (
          <Description>Description: {trimText(description)}</Description>
        )}
        {status && (
          <DetailsItem status={status}>
            Status: <span>{status}</span>
          </DetailsItem>
        )}
        {created && (
          <DetailsItem>Created at: {humanizeDate(created)}</DetailsItem>
        )}
      </Body>
      <Footer>
        {language && (
          <Badge title="Language">
            <Language/> {language}
          </Badge>
        )}
        {forks && (
          <Badge title="Total Forks">
            <Fork/>
            {forks}
          </Badge>
        )}
        {stars && (
          <Badge title="Total Stars">
            <Star/>
            {stars}
          </Badge>
        )}
      </Footer>
    </Wrapper>
  );
};

const ellipsis = () => `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div`
  text-align: left;
`;

const TitleLink = styled.a`
  text-decoration: none;
  display: block;
  font-size: ${({theme}) => theme.fontSize.default};
  color: ${({theme}) => theme.color.link};
  font-weight: bold;
  margin-bottom: 8px;
  margin: 0 0 8px;
  ${ellipsis()}
  &:hover {
    color: ${({theme}) => theme.color.link}; // fallback
    background: ${({theme}) => theme.color.link_hover};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-shadow: none;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: ${({theme}) => theme.fontSize.small};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
`;

const DetailsItem = styled.p<StyledDetailsProps>`
  margin: 0 0 8px;
  font-size: ${({theme}) => theme.fontSize.small};
  ${(props) =>
    props.status === "open" &&
    css`
      span {
        background: ${({theme}) => theme.color.green};
        padding: 2px 4px;
        border-radius: 6px;
        color: ${({theme}) => theme.color.white};
        font-weight: normal;
        font-size: ${({theme}) => theme.fontSize.small};
      }
    `}
  ${(props) =>
    props.status === "closed" &&
    css`
      span {
        background: ${({theme}) => theme.color.red};
        padding: 4px;
        border-radius: 6px;
        color: ${({theme}) => theme.color.white};
        font-weight: normal;
        font-size: ${({theme}) => theme.fontSize.small};
      }
    `}
`;

const Body = styled.div`
  height: 100px;
`;

const Footer = styled.div`
  width: 100%;
  padding: 4px 0;
  display: flex;
  justify-content: start;
`;

const Badge = styled.div`
  background: ${({theme}) => theme.color.yellow};
  color: ${({theme}) => theme.color.black};
  width: auto;
  font-size: ${({theme}) => theme.fontSize.extra_small};
  padding: 5px;
  border-radius: 4px;
  margin-right: 8px;
  display: flex;
  justify-content: left;
  align-content: center;
  svg {
    margin-right: 4px;
  }
`;

export default CardDetails;
