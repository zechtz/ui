export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type AsProp<C extends React.ElementType> = {
  /**
   * An override for the default element type.
   * can also be another React component
   */
  as?: C;
};

/**
 * Allows for extending the props of a component and overriding the default props.
 * @template ExtendedProps - The props to extend
 */
export type ExtendablePops<
  ExtendedProps = object,
  OverrideProps = object,
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = object,
> = InheritableElementProps<C, Props & AsProp<C>>;

export type PolymorphicRef<C, extends React.ElementType > = React.ComponentPropsWithRef < C > ["ref"];
