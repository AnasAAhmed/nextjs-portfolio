export const GradientLight = () => {
  return (
    <div className="absolute not-dark:hidden top-[18.25rem] left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div
        style={{ borderRadius: "100px", backgroundImage: "linear-gradient(-90deg, #10092e 0%, #100b3a 47%, #0b0e36 50%)", filter: 'blur(200px)' }}
        className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">

      </div>
    </div>
  );
};

export const GradientLightLeft = () => {
  return (
    <div className="absolute not-dark:hidden top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div
        style={{ borderRadius: "100px", backgroundImage: "linear-gradient(-90deg, #10092e 0%, #3a0b0d 47%, #071a24 30%)", filter: 'blur(200px)' }}
        className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">

      </div>
    </div>
  );
};
