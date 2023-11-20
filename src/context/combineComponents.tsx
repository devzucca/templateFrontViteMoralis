import React, { ComponentProps, FC } from 'react';

interface CombineComponentsProps {
  children?: React.ReactNode;
}

type ComponentType = FC<ComponentProps<any>>;


export const combineComponents = (...components: ComponentType[]): FC<CombineComponentsProps> => {
  return components.reduce(
    (AccumulatedComponents: ComponentType, CurrentComponent: ComponentType) => {
      return ({ children }: ComponentProps<ComponentType>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: CombineComponentsProps) => <>{children}</>,
  );
};