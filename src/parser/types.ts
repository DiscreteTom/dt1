import binaryen from "binaryen";

/**
 * You can define your own types in your programming language.
 * For simplicity, we only define a single type here.
 */
export enum TypeKind {
  Int32,
}

/**
 * This class stores the information of a type.
 * For simplicity, we don't define a type hierarchy here, and user can't define their own types.
 */
export class Type {
  private constructor(
    /**
     * The name of the type. For display purpose only.
     */
    public readonly name: string,
    /**
     * The kind of the type.
     */
    public readonly kind: TypeKind,
    /**
     * The underlying binaryen/wasm type.
     */
    public readonly proto: binaryen.Type
  ) {}

  static readonly Int32 = new Type("int32", TypeKind.Int32, binaryen.i32);
}
