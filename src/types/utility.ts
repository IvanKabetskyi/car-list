type PathJoin<T, Key extends keyof T> = Key extends string
    ? T[Key] extends Record<string, any>
        ?
              | `${Key}.${PathJoin<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
              | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
        : never
    : never;

type PathJoinWrap<T> = PathJoin<T, keyof T> | keyof T;

type Path<T> = PathJoinWrap<T> extends string | keyof T ? PathJoinWrap<T> : keyof T;

type PathValue<T, P extends Path<T>> = P extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
        ? Rest extends Path<T[Key]>
            ? PathValue<T[Key], Rest>
            : never
        : never
    : P extends keyof T
    ? T[P]
    : never;

export type ObjectPath<RootObject, InnerField extends Path<RootObject>> = PathValue<
    RootObject,
    InnerField
> extends never
    ? never
    : InnerField;
