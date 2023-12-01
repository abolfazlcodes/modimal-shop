interface IMiniAddProps {
  children?: React.ReactNode;
}

const MiniAddBanner: React.FC<IMiniAddProps> = ({ children }) => {
  return (
    <article
      data-testid="miniadd-element"
      className="capitalize text-center text-xs h-6 md:h-7 p-1 bg-miniAddBg md:text-sm text-[#fff] md:font-semibold"
    >
      {children}
    </article>
  );
};

export default MiniAddBanner;
