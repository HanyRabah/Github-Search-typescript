import React, { useState } from "react";
import styled, { css } from "styled-components";
import { UserProfileProps, StyledUserProfileLink, StyledImageProp } from "../../@types/components";
import Placeholder from "../../assets/icons/profilePlaceholder.svg";

const UserProfile = ({ image, name, link, position }: UserProfileProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <UserProfileHeader>
      <UserProfileLink position={position}>
        <UserProfileImageWrapper position={position}>
          <PlaceholderImage src={Placeholder} loaded={imageLoaded} />
          <UserProfileImage
            src={image}
            alt={name}
            loaded={imageLoaded}
            onLoad={handleImageLoaded}
          />
        </UserProfileImageWrapper>
        <UserProfileName>{name}</UserProfileName>
        <UserProfileFollow href={link} target="_blank">
          follow
        </UserProfileFollow>
      </UserProfileLink>
    </UserProfileHeader>
  );
}

const ellipsis = () => `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const UserProfileHeader = styled.header`
  width: 100%;
`;

const UserProfileLink = styled.div<StyledUserProfileLink>`
  text-decoration: none;
  display: block;
  padding: 0;
  color: ${({ theme }) => theme.color.dark_gray};
  ${(props) =>
    props.position === "bottom" &&
    css`
      margin-top: 10px;
      border-top: 1px solid ${({ theme }) => theme.color.white};
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${UserProfileImageWrapper} {
        width: 32px;
        height: 32px;
        margin: 0;
      }
      ${UserProfileFollow} {
        margin: 0;
        max-width: 60px;
      }
      ${UserProfileName} {
        max-width: 100px;
        ${ellipsis()}
      }
    `}
`;

const UserProfileImageWrapper = styled.div<StyledUserProfileLink>`
  position: relative;
  width: 75px;
  height: 75px;
  margin: 0 auto;
`;

const UserProfileImage = styled.img<StyledImageProp>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 6px 1px #ccc;
  ${(props) =>
    props.loaded &&
    css`
      opacity: 1;
    `}
`;

const PlaceholderImage = styled(UserProfileImage)`
  opacity: 1;
  ${(props) =>
    props.loaded &&
    css`
      opacity: 0;
    `}
`;

const UserProfileName = styled.p`
  margin: 12px 0;
  text-align: center;
  font-weight: bold;
`;

const UserProfileFollow = styled.a`
  font-size: ${({theme}) => theme.fontSize.small};
  font-weight: bold;
  background: ${({ theme }) => theme.color.green};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.white};
  padding: 4px 10px;
  text-decoration: none;
  width: 100px;
  height: 20px;
  margin: 0 auto;
  &:hover {
    background: ${({ theme }) => theme.color.dark_green};
  }
`;

export default UserProfile;
