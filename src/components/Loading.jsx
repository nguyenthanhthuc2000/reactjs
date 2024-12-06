import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Loading() {
  
  return (
    <Skeleton className="mb-3" height={442} width={296} style={{ borderRadius: '12px' }} />
  );
}

export default Loading;
