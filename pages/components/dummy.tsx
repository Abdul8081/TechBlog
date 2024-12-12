import React from 'react';

const Dummy: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .dummy {
          background: yellow;
          color: black;
        }
      `}</style>
      <div className="dummy">This is the dummy file</div>
    </>
  );
};

export default Dummy;
