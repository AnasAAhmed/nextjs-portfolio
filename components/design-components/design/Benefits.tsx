export const GradientLight = () => {
  return (
    <div className="absolute light:hidden top-[18.25rem] left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div
        style={{ borderRadius: "100px", backgroundImage: "linear-gradient(-90deg, #120842 0%, #1d1947 47%, #121657 50%)", filter: 'blur(200px)' }}
        className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">

      </div>
    </div>
  );
};

export const GradientLightLeft = () => {
  return (
    <div className="absolute light:hidden top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div
        style={{ borderRadius: "100px", backgroundImage: "linear-gradient(-90deg, #0f0930 0%, #131031 47%, #0b0d36 50%)", filter: 'blur(200px)' }}
        className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">

      </div>
    </div>
  );
};
