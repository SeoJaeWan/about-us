const PX = 16;

const toRem = (px: number): string => {
  return `${px / PX}rem`;
};

export default toRem;
