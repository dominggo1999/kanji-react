import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    relative
    w-full 
    min-h-screen
    bg-black
    text-white 
  `}
`;

export const Char = styled.h1`
  ${tw`
    text-white 
    font-bold
    text-center
    pt-20
  `}

  font-size:200px;
  line-height: 200px;
`;

export const Indicator = styled.p`
  ${tw`
    text-center
    mt-10
  `}
`;

export const Control = styled.div`
  ${tw`
    mt-10 
    text-center
  `}

  button {
    ${tw`
      bg-red-500
      py-2 
      px-4
      rounded-xl
    `}
  }
`;
