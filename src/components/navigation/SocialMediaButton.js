import React from "react";
import styled from "styled-components";

export const SocialMediaButton = (props) => {
  const { href, src, alt } = props;
  return (
    <Link href={href}>
      <Logo src={src} alt={alt} />
    </Link>
  );
};

const Link = styled.a``;

const Logo = styled.img``;
