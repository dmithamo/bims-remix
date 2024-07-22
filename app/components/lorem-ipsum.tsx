import React, { useMemo } from 'react';

const IMAGE_URL = 'https://placehold.jp/3d4070/ffffff/150x150.png';
export const PlaceHolderText: React.FC = () => {
  const images = useMemo<Array<string>>(() => {
    const imageArr: Array<string> = [];
    for (const img of Array.from({ length: 100 }).fill(IMAGE_URL)) {
      imageArr.push(img as string);
    }
    return imageArr;
  }, []);
  return (
    <div className={'grid grid-cols-2 sm:grid-cols-8 gap-4'}>
      {images.map((imgUrl: string, index) => (
        <img
          className={'p-4 blur'}
          key={imgUrl + index}
          src={imgUrl}
          alt="jus a placeholder"
        />
      ))}
    </div>
  );
};
