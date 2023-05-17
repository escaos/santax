import { useState } from 'react';

export const usePrevNext = (length: number) => {
  const [assetIdx, setAssetIdx] = useState(0);

  const onPrevious = () => {
    if (!length) return;

    setAssetIdx((idx) => (idx === 0 ? length - 1 : idx - 1));
  };
  const onNext = () => {
    if (!length) return;

    setAssetIdx((idx) => (idx < length - 1 ? idx + 1 : idx));
  };

  return { assetIdx, onPrevious, onNext };
};
