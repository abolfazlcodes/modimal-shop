export type TailwindIntellisenseProps<T extends keyof JSX.IntrinsicElements> =
  React.ComponentProps<T>["className"];
