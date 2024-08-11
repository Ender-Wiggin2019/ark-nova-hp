import React from 'react';

interface AnimalCardWrapperProps {
  id: string;
  children: React.ReactNode;
}

const AnimalCardWrapper: React.FC<AnimalCardWrapperProps> = ({
  id,
  children,
}) => {
  return (
    <div
      id={`card-${id}`}
      data-id={id}
      className='ark-card zoo-card animal-card tooltipable'
      draggable={false}
    >
      <div className='ark-card-wrapper shadow-none'>{children}</div>
    </div>
  );
};

export default AnimalCardWrapper;
