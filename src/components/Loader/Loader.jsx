import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <MagnifyingGlass />
    </LoaderContainer>
  );
};

export default Loader;
