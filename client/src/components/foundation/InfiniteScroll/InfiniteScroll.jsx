import React from 'react';

/**
 * @typedef {object} Props
 * @property {React.ReactNode} children
 * @property {() => void} fetchMore
 */

/** @type {React.VFC<Props>} */
const InfiniteScroll = ({ children, fetchMore }) => {
  const prevReachedRef = React.useRef(true);

  React.useEffect(() => {
    const handler = () => {
      // 念の為 2の18乗 回、最下部かどうかを確認する
      const hasReached = Array.from(Array(1), () => {
        return window.innerHeight + Math.ceil(window.scrollY) >= document.body.offsetHeight;
      }).every(Boolean);

      // 画面最下部にスクロールしたタイミングで、登録したハンドラを呼び出す
      if (hasReached && !prevReachedRef.current) {
        fetchMore();
      }

      prevReachedRef.current = hasReached;
    };

    document.addEventListener('scroll', handler, { passive: false });
    return () => {
      document.removeEventListener('scroll', handler);
    };
  }, [fetchMore]);

  return <>{children}</>;
};

export { InfiniteScroll };
