import { FC, useCallback } from 'preact/compat';
import { RewardTier } from './RewardTier';

interface ProgressBarProps {
  cartTotalPrice?: number;
  cartOriginalTotalPrice: number;
  maxPrice: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ maxPrice, cartOriginalTotalPrice }) => {
  const progress = useCallback(
    () => Math.max(0, Math.min(100, (cartOriginalTotalPrice / maxPrice) * 100)),
    [cartOriginalTotalPrice]
  );
  const rewardTiers: { tierLevel: string; maxPrice: number }[] = [
    {
      tierLevel: '5% off!',
      maxPrice: 18,
    },
    {
      tierLevel: '10% off!',
      maxPrice: 38,
    },
    {
      tierLevel: '15% off!',
      maxPrice: 54,
    },
    {
      tierLevel: '20% off!',
      maxPrice: 71.73,
    },
  ];
  return (
    <>
      <div className={`cart-toast__progress-bar-wrapper`}>
        <div className={`cart-toast__progress-bar`}>
          <div
            className={`cart-toast__progress-bar-fill`}
            style={`display: inline-block; width: calc(${progress()}% + 1px);`}
          ></div>
        </div>

        <div className={`cart-toast__tier-bar`}>
          {rewardTiers.map((tier, index) => {
            return (
              <>
                <RewardTier
                  key={index}
                  tierLevel={tier.tierLevel}
                  maxPrice={tier.maxPrice}
                  cartOriginalTotalPrice={cartOriginalTotalPrice}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
