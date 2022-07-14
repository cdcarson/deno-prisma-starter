
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  createdAt: Date
}

/**
 * Model UserAccount
 * 
 */
export type UserAccount = {
  userId: string
  createdAt: Date
  updatedAt: Date
  lastSignedInAt: Date
  email: string
  password: string
  emailVerified: boolean
}

/**
 * Model UserProfile
 * 
 */
export type UserProfile = {
  userId: string
  createdAt: Date
  updatedAt: Date
  name: string
  bio: string | null
  location: string | null
  photo: Prisma.JsonValue | null
}

/**
 * Model UserStripeCustomer
 * 
 */
export type UserStripeCustomer = {
  userId: string
  createdAt: Date
  updatedAt: Date
  stripeCustomerId: string
  customer: Prisma.JsonValue
}

/**
 * Model UserBalanceItem
 * 
 */
export type UserBalanceItem = {
  id: string
  createdAt: Date
  userId: string
  amount: number
  type: UserBalancItemType
}

/**
 * Model UserMagicLink
 * 
 */
export type UserMagicLink = {
  id: string
  userId: string
  createdAt: Date
  secret: string
  used: boolean
  remember: boolean
  action: MagicLinkAction
  newEmail: string | null
}

/**
 * Model Publication
 * 
 */
export type Publication = {
  id: string
  name: string
  url: string
  organizationName: string
  logo: Prisma.JsonValue | null
  tagline: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model PublicationDashboardUser
 * 
 */
export type PublicationDashboardUser = {
  publicationId: string
  userId: string
  updatedAt: Date
  permission: PublicationPermission
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserBalancItemType: {
  INITIAL: 'INITIAL',
  PURCHASE: 'PURCHASE',
  BALANCE_ADDITION: 'BALANCE_ADDITION'
};

export type UserBalancItemType = (typeof UserBalancItemType)[keyof typeof UserBalancItemType]


export const MagicLinkAction: {
  SIGN_IN: 'SIGN_IN',
  VERIFY_EMAIL: 'VERIFY_EMAIL',
  CHANGE_EMAIL: 'CHANGE_EMAIL'
};

export type MagicLinkAction = (typeof MagicLinkAction)[keyof typeof MagicLinkAction]


export const PublicationPermission: {
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER'
};

export type PublicationPermission = (typeof PublicationPermission)[keyof typeof PublicationPermission]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userAccount`: Exposes CRUD operations for the **UserAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAccounts
    * const userAccounts = await prisma.userAccount.findMany()
    * ```
    */
  get userAccount(): Prisma.UserAccountDelegate<GlobalReject>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<GlobalReject>;

  /**
   * `prisma.userStripeCustomer`: Exposes CRUD operations for the **UserStripeCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStripeCustomers
    * const userStripeCustomers = await prisma.userStripeCustomer.findMany()
    * ```
    */
  get userStripeCustomer(): Prisma.UserStripeCustomerDelegate<GlobalReject>;

  /**
   * `prisma.userBalanceItem`: Exposes CRUD operations for the **UserBalanceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBalanceItems
    * const userBalanceItems = await prisma.userBalanceItem.findMany()
    * ```
    */
  get userBalanceItem(): Prisma.UserBalanceItemDelegate<GlobalReject>;

  /**
   * `prisma.userMagicLink`: Exposes CRUD operations for the **UserMagicLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMagicLinks
    * const userMagicLinks = await prisma.userMagicLink.findMany()
    * ```
    */
  get userMagicLink(): Prisma.UserMagicLinkDelegate<GlobalReject>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<GlobalReject>;

  /**
   * `prisma.publicationDashboardUser`: Exposes CRUD operations for the **PublicationDashboardUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicationDashboardUsers
    * const publicationDashboardUsers = await prisma.publicationDashboardUser.findMany()
    * ```
    */
  get publicationDashboardUser(): Prisma.PublicationDashboardUserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.0.0
   * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    UserAccount: 'UserAccount',
    UserProfile: 'UserProfile',
    UserStripeCustomer: 'UserStripeCustomer',
    UserBalanceItem: 'UserBalanceItem',
    UserMagicLink: 'UserMagicLink',
    Publication: 'Publication',
    PublicationDashboardUser: 'PublicationDashboardUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    balanceItems: number
    magicLinks: number
    publicationDashboards: number
  }

  export type UserCountOutputTypeSelect = {
    balanceItems?: boolean
    magicLinks?: boolean
    publicationDashboards?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PublicationCountOutputType
   */


  export type PublicationCountOutputType = {
    dashboardUsers: number
  }

  export type PublicationCountOutputTypeSelect = {
    dashboardUsers?: boolean
  }

  export type PublicationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PublicationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PublicationCountOutputType
    : S extends undefined
    ? never
    : S extends PublicationCountOutputTypeArgs
    ?'include' extends U
    ? PublicationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PublicationCountOutputType ? PublicationCountOutputType[P] : never
  } 
    : PublicationCountOutputType
  : PublicationCountOutputType




  // Custom InputTypes

  /**
   * PublicationCountOutputType without action
   */
  export type PublicationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PublicationCountOutputType
     * 
    **/
    select?: PublicationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    account?: boolean | UserAccountArgs
    profile?: boolean | UserProfileArgs
    stripeCustomer?: boolean | UserStripeCustomerArgs
    balanceItems?: boolean | UserBalanceItemFindManyArgs
    magicLinks?: boolean | UserMagicLinkFindManyArgs
    publicationDashboards?: boolean | PublicationDashboardUserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    account?: boolean | UserAccountArgs
    profile?: boolean | UserProfileArgs
    stripeCustomer?: boolean | UserStripeCustomerArgs
    balanceItems?: boolean | UserBalanceItemFindManyArgs
    magicLinks?: boolean | UserMagicLinkFindManyArgs
    publicationDashboards?: boolean | PublicationDashboardUserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'account' ? UserAccountGetPayload<S['include'][P]> | null :
        P extends 'profile' ? UserProfileGetPayload<S['include'][P]> | null :
        P extends 'stripeCustomer' ? UserStripeCustomerGetPayload<S['include'][P]> | null :
        P extends 'balanceItems' ? Array < UserBalanceItemGetPayload<S['include'][P]>>  :
        P extends 'magicLinks' ? Array < UserMagicLinkGetPayload<S['include'][P]>>  :
        P extends 'publicationDashboards' ? Array < PublicationDashboardUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'account' ? UserAccountGetPayload<S['select'][P]> | null :
        P extends 'profile' ? UserProfileGetPayload<S['select'][P]> | null :
        P extends 'stripeCustomer' ? UserStripeCustomerGetPayload<S['select'][P]> | null :
        P extends 'balanceItems' ? Array < UserBalanceItemGetPayload<S['select'][P]>>  :
        P extends 'magicLinks' ? Array < UserMagicLinkGetPayload<S['select'][P]>>  :
        P extends 'publicationDashboards' ? Array < PublicationDashboardUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    account<T extends UserAccountArgs = {}>(args?: Subset<T, UserAccountArgs>): CheckSelect<T, Prisma__UserAccountClient<UserAccount | null >, Prisma__UserAccountClient<UserAccountGetPayload<T> | null >>;

    profile<T extends UserProfileArgs = {}>(args?: Subset<T, UserProfileArgs>): CheckSelect<T, Prisma__UserProfileClient<UserProfile | null >, Prisma__UserProfileClient<UserProfileGetPayload<T> | null >>;

    stripeCustomer<T extends UserStripeCustomerArgs = {}>(args?: Subset<T, UserStripeCustomerArgs>): CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer | null >, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T> | null >>;

    balanceItems<T extends UserBalanceItemFindManyArgs = {}>(args?: Subset<T, UserBalanceItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserBalanceItem>>, PrismaPromise<Array<UserBalanceItemGetPayload<T>>>>;

    magicLinks<T extends UserMagicLinkFindManyArgs = {}>(args?: Subset<T, UserMagicLinkFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserMagicLink>>, PrismaPromise<Array<UserMagicLinkGetPayload<T>>>>;

    publicationDashboards<T extends PublicationDashboardUserFindManyArgs = {}>(args?: Subset<T, PublicationDashboardUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PublicationDashboardUser>>, PrismaPromise<Array<PublicationDashboardUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model UserAccount
   */


  export type AggregateUserAccount = {
    _count: UserAccountCountAggregateOutputType | null
    _min: UserAccountMinAggregateOutputType | null
    _max: UserAccountMaxAggregateOutputType | null
  }

  export type UserAccountMinAggregateOutputType = {
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastSignedInAt: Date | null
    email: string | null
    password: string | null
    emailVerified: boolean | null
  }

  export type UserAccountMaxAggregateOutputType = {
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastSignedInAt: Date | null
    email: string | null
    password: string | null
    emailVerified: boolean | null
  }

  export type UserAccountCountAggregateOutputType = {
    userId: number
    createdAt: number
    updatedAt: number
    lastSignedInAt: number
    email: number
    password: number
    emailVerified: number
    _all: number
  }


  export type UserAccountMinAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    lastSignedInAt?: true
    email?: true
    password?: true
    emailVerified?: true
  }

  export type UserAccountMaxAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    lastSignedInAt?: true
    email?: true
    password?: true
    emailVerified?: true
  }

  export type UserAccountCountAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    lastSignedInAt?: true
    email?: true
    password?: true
    emailVerified?: true
    _all?: true
  }

  export type UserAccountAggregateArgs = {
    /**
     * Filter which UserAccount to aggregate.
     * 
    **/
    where?: UserAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAccounts
    **/
    _count?: true | UserAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAccountMaxAggregateInputType
  }

  export type GetUserAccountAggregateType<T extends UserAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAccount[P]>
      : GetScalarType<T[P], AggregateUserAccount[P]>
  }




  export type UserAccountGroupByArgs = {
    where?: UserAccountWhereInput
    orderBy?: Enumerable<UserAccountOrderByWithAggregationInput>
    by: Array<UserAccountScalarFieldEnum>
    having?: UserAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAccountCountAggregateInputType | true
    _min?: UserAccountMinAggregateInputType
    _max?: UserAccountMaxAggregateInputType
  }


  export type UserAccountGroupByOutputType = {
    userId: string
    createdAt: Date
    updatedAt: Date
    lastSignedInAt: Date
    email: string
    password: string
    emailVerified: boolean
    _count: UserAccountCountAggregateOutputType | null
    _min: UserAccountMinAggregateOutputType | null
    _max: UserAccountMaxAggregateOutputType | null
  }

  type GetUserAccountGroupByPayload<T extends UserAccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAccountGroupByOutputType[P]>
            : GetScalarType<T[P], UserAccountGroupByOutputType[P]>
        }
      >
    >


  export type UserAccountSelect = {
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastSignedInAt?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    user?: boolean | UserArgs
  }

  export type UserAccountInclude = {
    user?: boolean | UserArgs
  }

  export type UserAccountGetPayload<
    S extends boolean | null | undefined | UserAccountArgs,
    U = keyof S
      > = S extends true
        ? UserAccount
    : S extends undefined
    ? never
    : S extends UserAccountArgs | UserAccountFindManyArgs
    ?'include' extends U
    ? UserAccount  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserAccount ? UserAccount[P] : never
  } 
    : UserAccount
  : UserAccount


  type UserAccountCountArgs = Merge<
    Omit<UserAccountFindManyArgs, 'select' | 'include'> & {
      select?: UserAccountCountAggregateInputType | true
    }
  >

  export interface UserAccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserAccount that matches the filter.
     * @param {UserAccountFindUniqueArgs} args - Arguments to find a UserAccount
     * @example
     * // Get one UserAccount
     * const userAccount = await prisma.userAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserAccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserAccount'> extends True ? CheckSelect<T, Prisma__UserAccountClient<UserAccount>, Prisma__UserAccountClient<UserAccountGetPayload<T>>> : CheckSelect<T, Prisma__UserAccountClient<UserAccount | null >, Prisma__UserAccountClient<UserAccountGetPayload<T> | null >>

    /**
     * Find the first UserAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccountFindFirstArgs} args - Arguments to find a UserAccount
     * @example
     * // Get one UserAccount
     * const userAccount = await prisma.userAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserAccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserAccount'> extends True ? CheckSelect<T, Prisma__UserAccountClient<UserAccount>, Prisma__UserAccountClient<UserAccountGetPayload<T>>> : CheckSelect<T, Prisma__UserAccountClient<UserAccount | null >, Prisma__UserAccountClient<UserAccountGetPayload<T> | null >>

    /**
     * Find zero or more UserAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAccounts
     * const userAccounts = await prisma.userAccount.findMany()
     * 
     * // Get first 10 UserAccounts
     * const userAccounts = await prisma.userAccount.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userAccountWithUserIdOnly = await prisma.userAccount.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserAccountFindManyArgs>(
      args?: SelectSubset<T, UserAccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserAccount>>, PrismaPromise<Array<UserAccountGetPayload<T>>>>

    /**
     * Create a UserAccount.
     * @param {UserAccountCreateArgs} args - Arguments to create a UserAccount.
     * @example
     * // Create one UserAccount
     * const UserAccount = await prisma.userAccount.create({
     *   data: {
     *     // ... data to create a UserAccount
     *   }
     * })
     * 
    **/
    create<T extends UserAccountCreateArgs>(
      args: SelectSubset<T, UserAccountCreateArgs>
    ): CheckSelect<T, Prisma__UserAccountClient<UserAccount>, Prisma__UserAccountClient<UserAccountGetPayload<T>>>

    /**
     * Create many UserAccounts.
     *     @param {UserAccountCreateManyArgs} args - Arguments to create many UserAccounts.
     *     @example
     *     // Create many UserAccounts
     *     const userAccount = await prisma.userAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAccountCreateManyArgs>(
      args?: SelectSubset<T, UserAccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserAccount.
     * @param {UserAccountDeleteArgs} args - Arguments to delete one UserAccount.
     * @example
     * // Delete one UserAccount
     * const UserAccount = await prisma.userAccount.delete({
     *   where: {
     *     // ... filter to delete one UserAccount
     *   }
     * })
     * 
    **/
    delete<T extends UserAccountDeleteArgs>(
      args: SelectSubset<T, UserAccountDeleteArgs>
    ): CheckSelect<T, Prisma__UserAccountClient<UserAccount>, Prisma__UserAccountClient<UserAccountGetPayload<T>>>

    /**
     * Update one UserAccount.
     * @param {UserAccountUpdateArgs} args - Arguments to update one UserAccount.
     * @example
     * // Update one UserAccount
     * const userAccount = await prisma.userAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAccountUpdateArgs>(
      args: SelectSubset<T, UserAccountUpdateArgs>
    ): CheckSelect<T, Prisma__UserAccountClient<UserAccount>, Prisma__UserAccountClient<UserAccountGetPayload<T>>>

    /**
     * Delete zero or more UserAccounts.
     * @param {UserAccountDeleteManyArgs} args - Arguments to filter UserAccounts to delete.
     * @example
     * // Delete a few UserAccounts
     * const { count } = await prisma.userAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAccountDeleteManyArgs>(
      args?: SelectSubset<T, UserAccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAccounts
     * const userAccount = await prisma.userAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAccountUpdateManyArgs>(
      args: SelectSubset<T, UserAccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAccount.
     * @param {UserAccountUpsertArgs} args - Arguments to update or create a UserAccount.
     * @example
     * // Update or create a UserAccount
     * const userAccount = await prisma.userAccount.upsert({
     *   create: {
     *     // ... data to create a UserAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAccount we want to update
     *   }
     * })
    **/
    upsert<T extends UserAccountUpsertArgs>(
      args: SelectSubset<T, UserAccountUpsertArgs>
    ): CheckSelect<T, Prisma__UserAccountClient<UserAccount>, Prisma__UserAccountClient<UserAccountGetPayload<T>>>

    /**
     * Find one UserAccount that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserAccountFindUniqueOrThrowArgs} args - Arguments to find a UserAccount
     * @example
     * // Get one UserAccount
     * const userAccount = await prisma.userAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserAccountFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserAccountClient<UserAccount>, Prisma__UserAccountClient<UserAccountGetPayload<T>>>

    /**
     * Find the first UserAccount that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccountFindFirstOrThrowArgs} args - Arguments to find a UserAccount
     * @example
     * // Get one UserAccount
     * const userAccount = await prisma.userAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserAccountFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserAccountClient<UserAccount>, Prisma__UserAccountClient<UserAccountGetPayload<T>>>

    /**
     * Count the number of UserAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccountCountArgs} args - Arguments to filter UserAccounts to count.
     * @example
     * // Count the number of UserAccounts
     * const count = await prisma.userAccount.count({
     *   where: {
     *     // ... the filter for the UserAccounts we want to count
     *   }
     * })
    **/
    count<T extends UserAccountCountArgs>(
      args?: Subset<T, UserAccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAccountAggregateArgs>(args: Subset<T, UserAccountAggregateArgs>): PrismaPromise<GetUserAccountAggregateType<T>>

    /**
     * Group by UserAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAccountGroupByArgs['orderBy'] }
        : { orderBy?: UserAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAccountGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserAccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserAccount base type for findUnique actions
   */
  export type UserAccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserAccount
     * 
    **/
    select?: UserAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAccountInclude | null
    /**
     * Filter, which UserAccount to fetch.
     * 
    **/
    where: UserAccountWhereUniqueInput
  }

  /**
   * UserAccount: findUnique
   */
  export interface UserAccountFindUniqueArgs extends UserAccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAccount base type for findFirst actions
   */
  export type UserAccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserAccount
     * 
    **/
    select?: UserAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAccountInclude | null
    /**
     * Filter, which UserAccount to fetch.
     * 
    **/
    where?: UserAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccounts.
     * 
    **/
    cursor?: UserAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccounts.
     * 
    **/
    distinct?: Enumerable<UserAccountScalarFieldEnum>
  }

  /**
   * UserAccount: findFirst
   */
  export interface UserAccountFindFirstArgs extends UserAccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAccount findMany
   */
  export type UserAccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserAccount
     * 
    **/
    select?: UserAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAccountInclude | null
    /**
     * Filter, which UserAccounts to fetch.
     * 
    **/
    where?: UserAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAccounts.
     * 
    **/
    cursor?: UserAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserAccountScalarFieldEnum>
  }


  /**
   * UserAccount create
   */
  export type UserAccountCreateArgs = {
    /**
     * Select specific fields to fetch from the UserAccount
     * 
    **/
    select?: UserAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAccountInclude | null
    /**
     * The data needed to create a UserAccount.
     * 
    **/
    data: XOR<UserAccountCreateInput, UserAccountUncheckedCreateInput>
  }


  /**
   * UserAccount createMany
   */
  export type UserAccountCreateManyArgs = {
    /**
     * The data used to create many UserAccounts.
     * 
    **/
    data: Enumerable<UserAccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserAccount update
   */
  export type UserAccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserAccount
     * 
    **/
    select?: UserAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAccountInclude | null
    /**
     * The data needed to update a UserAccount.
     * 
    **/
    data: XOR<UserAccountUpdateInput, UserAccountUncheckedUpdateInput>
    /**
     * Choose, which UserAccount to update.
     * 
    **/
    where: UserAccountWhereUniqueInput
  }


  /**
   * UserAccount updateMany
   */
  export type UserAccountUpdateManyArgs = {
    /**
     * The data used to update UserAccounts.
     * 
    **/
    data: XOR<UserAccountUpdateManyMutationInput, UserAccountUncheckedUpdateManyInput>
    /**
     * Filter which UserAccounts to update
     * 
    **/
    where?: UserAccountWhereInput
  }


  /**
   * UserAccount upsert
   */
  export type UserAccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserAccount
     * 
    **/
    select?: UserAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAccountInclude | null
    /**
     * The filter to search for the UserAccount to update in case it exists.
     * 
    **/
    where: UserAccountWhereUniqueInput
    /**
     * In case the UserAccount found by the `where` argument doesn't exist, create a new UserAccount with this data.
     * 
    **/
    create: XOR<UserAccountCreateInput, UserAccountUncheckedCreateInput>
    /**
     * In case the UserAccount was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserAccountUpdateInput, UserAccountUncheckedUpdateInput>
  }


  /**
   * UserAccount delete
   */
  export type UserAccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserAccount
     * 
    **/
    select?: UserAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAccountInclude | null
    /**
     * Filter which UserAccount to delete.
     * 
    **/
    where: UserAccountWhereUniqueInput
  }


  /**
   * UserAccount deleteMany
   */
  export type UserAccountDeleteManyArgs = {
    /**
     * Filter which UserAccounts to delete
     * 
    **/
    where?: UserAccountWhereInput
  }


  /**
   * UserAccount: findUniqueOrThrow
   */
  export type UserAccountFindUniqueOrThrowArgs = UserAccountFindUniqueArgsBase
      

  /**
   * UserAccount: findFirstOrThrow
   */
  export type UserAccountFindFirstOrThrowArgs = UserAccountFindFirstArgsBase
      

  /**
   * UserAccount without action
   */
  export type UserAccountArgs = {
    /**
     * Select specific fields to fetch from the UserAccount
     * 
    **/
    select?: UserAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAccountInclude | null
  }



  /**
   * Model UserProfile
   */


  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    bio: string | null
    location: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    bio: string | null
    location: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    createdAt: number
    updatedAt: number
    name: number
    bio: number
    location: number
    photo: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    bio?: true
    location?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    bio?: true
    location?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    bio?: true
    location?: true
    photo?: true
    _all?: true
  }

  export type UserProfileAggregateArgs = {
    /**
     * Filter which UserProfile to aggregate.
     * 
    **/
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     * 
    **/
    orderBy?: Enumerable<UserProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs = {
    where?: UserProfileWhereInput
    orderBy?: Enumerable<UserProfileOrderByWithAggregationInput>
    by: Array<UserProfileScalarFieldEnum>
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }


  export type UserProfileGroupByOutputType = {
    userId: string
    createdAt: Date
    updatedAt: Date
    name: string
    bio: string | null
    location: string | null
    photo: JsonValue | null
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect = {
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    bio?: boolean
    location?: boolean
    photo?: boolean
    user?: boolean | UserArgs
  }

  export type UserProfileInclude = {
    user?: boolean | UserArgs
  }

  export type UserProfileGetPayload<
    S extends boolean | null | undefined | UserProfileArgs,
    U = keyof S
      > = S extends true
        ? UserProfile
    : S extends undefined
    ? never
    : S extends UserProfileArgs | UserProfileFindManyArgs
    ?'include' extends U
    ? UserProfile  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserProfile ? UserProfile[P] : never
  } 
    : UserProfile
  : UserProfile


  type UserProfileCountArgs = Merge<
    Omit<UserProfileFindManyArgs, 'select' | 'include'> & {
      select?: UserProfileCountAggregateInputType | true
    }
  >

  export interface UserProfileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserProfile'> extends True ? CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>> : CheckSelect<T, Prisma__UserProfileClient<UserProfile | null >, Prisma__UserProfileClient<UserProfileGetPayload<T> | null >>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserProfile'> extends True ? CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>> : CheckSelect<T, Prisma__UserProfileClient<UserProfile | null >, Prisma__UserProfileClient<UserProfileGetPayload<T> | null >>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs>(
      args?: SelectSubset<T, UserProfileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserProfile>>, PrismaPromise<Array<UserProfileGetPayload<T>>>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs>(
      args: SelectSubset<T, UserProfileCreateArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Create many UserProfiles.
     *     @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     *     @example
     *     // Create many UserProfiles
     *     const userProfile = await prisma.userProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs>(
      args?: SelectSubset<T, UserProfileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs>(
      args: SelectSubset<T, UserProfileDeleteArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs>(
      args: SelectSubset<T, UserProfileUpdateArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs>(
      args: SelectSubset<T, UserProfileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs>(
      args: SelectSubset<T, UserProfileUpsertArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Find one UserProfile that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserProfileFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserProfileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserProfile base type for findUnique actions
   */
  export type UserProfileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserProfile
     * 
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserProfileInclude | null
    /**
     * Filter, which UserProfile to fetch.
     * 
    **/
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile: findUnique
   */
  export interface UserProfileFindUniqueArgs extends UserProfileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserProfile base type for findFirst actions
   */
  export type UserProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserProfile
     * 
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserProfileInclude | null
    /**
     * Filter, which UserProfile to fetch.
     * 
    **/
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     * 
    **/
    orderBy?: Enumerable<UserProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     * 
    **/
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     * 
    **/
    distinct?: Enumerable<UserProfileScalarFieldEnum>
  }

  /**
   * UserProfile: findFirst
   */
  export interface UserProfileFindFirstArgs extends UserProfileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
     * 
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserProfileInclude | null
    /**
     * Filter, which UserProfiles to fetch.
     * 
    **/
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     * 
    **/
    orderBy?: Enumerable<UserProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     * 
    **/
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserProfileScalarFieldEnum>
  }


  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
     * 
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserProfileInclude | null
    /**
     * The data needed to create a UserProfile.
     * 
    **/
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }


  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs = {
    /**
     * The data used to create many UserProfiles.
     * 
    **/
    data: Enumerable<UserProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
     * 
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserProfileInclude | null
    /**
     * The data needed to update a UserProfile.
     * 
    **/
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     * 
    **/
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs = {
    /**
     * The data used to update UserProfiles.
     * 
    **/
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     * 
    **/
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
     * 
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserProfileInclude | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     * 
    **/
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     * 
    **/
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }


  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
     * 
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserProfileInclude | null
    /**
     * Filter which UserProfile to delete.
     * 
    **/
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs = {
    /**
     * Filter which UserProfiles to delete
     * 
    **/
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile: findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs = UserProfileFindUniqueArgsBase
      

  /**
   * UserProfile: findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs = UserProfileFindFirstArgsBase
      

  /**
   * UserProfile without action
   */
  export type UserProfileArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
     * 
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserProfileInclude | null
  }



  /**
   * Model UserStripeCustomer
   */


  export type AggregateUserStripeCustomer = {
    _count: UserStripeCustomerCountAggregateOutputType | null
    _min: UserStripeCustomerMinAggregateOutputType | null
    _max: UserStripeCustomerMaxAggregateOutputType | null
  }

  export type UserStripeCustomerMinAggregateOutputType = {
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    stripeCustomerId: string | null
  }

  export type UserStripeCustomerMaxAggregateOutputType = {
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    stripeCustomerId: string | null
  }

  export type UserStripeCustomerCountAggregateOutputType = {
    userId: number
    createdAt: number
    updatedAt: number
    stripeCustomerId: number
    customer: number
    _all: number
  }


  export type UserStripeCustomerMinAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
  }

  export type UserStripeCustomerMaxAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
  }

  export type UserStripeCustomerCountAggregateInputType = {
    userId?: true
    createdAt?: true
    updatedAt?: true
    stripeCustomerId?: true
    customer?: true
    _all?: true
  }

  export type UserStripeCustomerAggregateArgs = {
    /**
     * Filter which UserStripeCustomer to aggregate.
     * 
    **/
    where?: UserStripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStripeCustomers to fetch.
     * 
    **/
    orderBy?: Enumerable<UserStripeCustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserStripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStripeCustomers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStripeCustomers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStripeCustomers
    **/
    _count?: true | UserStripeCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStripeCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStripeCustomerMaxAggregateInputType
  }

  export type GetUserStripeCustomerAggregateType<T extends UserStripeCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStripeCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStripeCustomer[P]>
      : GetScalarType<T[P], AggregateUserStripeCustomer[P]>
  }




  export type UserStripeCustomerGroupByArgs = {
    where?: UserStripeCustomerWhereInput
    orderBy?: Enumerable<UserStripeCustomerOrderByWithAggregationInput>
    by: Array<UserStripeCustomerScalarFieldEnum>
    having?: UserStripeCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStripeCustomerCountAggregateInputType | true
    _min?: UserStripeCustomerMinAggregateInputType
    _max?: UserStripeCustomerMaxAggregateInputType
  }


  export type UserStripeCustomerGroupByOutputType = {
    userId: string
    createdAt: Date
    updatedAt: Date
    stripeCustomerId: string
    customer: JsonValue
    _count: UserStripeCustomerCountAggregateOutputType | null
    _min: UserStripeCustomerMinAggregateOutputType | null
    _max: UserStripeCustomerMaxAggregateOutputType | null
  }

  type GetUserStripeCustomerGroupByPayload<T extends UserStripeCustomerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserStripeCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStripeCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStripeCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], UserStripeCustomerGroupByOutputType[P]>
        }
      >
    >


  export type UserStripeCustomerSelect = {
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stripeCustomerId?: boolean
    customer?: boolean
    user?: boolean | UserArgs
  }

  export type UserStripeCustomerInclude = {
    user?: boolean | UserArgs
  }

  export type UserStripeCustomerGetPayload<
    S extends boolean | null | undefined | UserStripeCustomerArgs,
    U = keyof S
      > = S extends true
        ? UserStripeCustomer
    : S extends undefined
    ? never
    : S extends UserStripeCustomerArgs | UserStripeCustomerFindManyArgs
    ?'include' extends U
    ? UserStripeCustomer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserStripeCustomer ? UserStripeCustomer[P] : never
  } 
    : UserStripeCustomer
  : UserStripeCustomer


  type UserStripeCustomerCountArgs = Merge<
    Omit<UserStripeCustomerFindManyArgs, 'select' | 'include'> & {
      select?: UserStripeCustomerCountAggregateInputType | true
    }
  >

  export interface UserStripeCustomerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserStripeCustomer that matches the filter.
     * @param {UserStripeCustomerFindUniqueArgs} args - Arguments to find a UserStripeCustomer
     * @example
     * // Get one UserStripeCustomer
     * const userStripeCustomer = await prisma.userStripeCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserStripeCustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserStripeCustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserStripeCustomer'> extends True ? CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer>, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T>>> : CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer | null >, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T> | null >>

    /**
     * Find the first UserStripeCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStripeCustomerFindFirstArgs} args - Arguments to find a UserStripeCustomer
     * @example
     * // Get one UserStripeCustomer
     * const userStripeCustomer = await prisma.userStripeCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserStripeCustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserStripeCustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserStripeCustomer'> extends True ? CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer>, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T>>> : CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer | null >, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T> | null >>

    /**
     * Find zero or more UserStripeCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStripeCustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStripeCustomers
     * const userStripeCustomers = await prisma.userStripeCustomer.findMany()
     * 
     * // Get first 10 UserStripeCustomers
     * const userStripeCustomers = await prisma.userStripeCustomer.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userStripeCustomerWithUserIdOnly = await prisma.userStripeCustomer.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserStripeCustomerFindManyArgs>(
      args?: SelectSubset<T, UserStripeCustomerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserStripeCustomer>>, PrismaPromise<Array<UserStripeCustomerGetPayload<T>>>>

    /**
     * Create a UserStripeCustomer.
     * @param {UserStripeCustomerCreateArgs} args - Arguments to create a UserStripeCustomer.
     * @example
     * // Create one UserStripeCustomer
     * const UserStripeCustomer = await prisma.userStripeCustomer.create({
     *   data: {
     *     // ... data to create a UserStripeCustomer
     *   }
     * })
     * 
    **/
    create<T extends UserStripeCustomerCreateArgs>(
      args: SelectSubset<T, UserStripeCustomerCreateArgs>
    ): CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer>, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T>>>

    /**
     * Create many UserStripeCustomers.
     *     @param {UserStripeCustomerCreateManyArgs} args - Arguments to create many UserStripeCustomers.
     *     @example
     *     // Create many UserStripeCustomers
     *     const userStripeCustomer = await prisma.userStripeCustomer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserStripeCustomerCreateManyArgs>(
      args?: SelectSubset<T, UserStripeCustomerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserStripeCustomer.
     * @param {UserStripeCustomerDeleteArgs} args - Arguments to delete one UserStripeCustomer.
     * @example
     * // Delete one UserStripeCustomer
     * const UserStripeCustomer = await prisma.userStripeCustomer.delete({
     *   where: {
     *     // ... filter to delete one UserStripeCustomer
     *   }
     * })
     * 
    **/
    delete<T extends UserStripeCustomerDeleteArgs>(
      args: SelectSubset<T, UserStripeCustomerDeleteArgs>
    ): CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer>, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T>>>

    /**
     * Update one UserStripeCustomer.
     * @param {UserStripeCustomerUpdateArgs} args - Arguments to update one UserStripeCustomer.
     * @example
     * // Update one UserStripeCustomer
     * const userStripeCustomer = await prisma.userStripeCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserStripeCustomerUpdateArgs>(
      args: SelectSubset<T, UserStripeCustomerUpdateArgs>
    ): CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer>, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T>>>

    /**
     * Delete zero or more UserStripeCustomers.
     * @param {UserStripeCustomerDeleteManyArgs} args - Arguments to filter UserStripeCustomers to delete.
     * @example
     * // Delete a few UserStripeCustomers
     * const { count } = await prisma.userStripeCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserStripeCustomerDeleteManyArgs>(
      args?: SelectSubset<T, UserStripeCustomerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStripeCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStripeCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStripeCustomers
     * const userStripeCustomer = await prisma.userStripeCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserStripeCustomerUpdateManyArgs>(
      args: SelectSubset<T, UserStripeCustomerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStripeCustomer.
     * @param {UserStripeCustomerUpsertArgs} args - Arguments to update or create a UserStripeCustomer.
     * @example
     * // Update or create a UserStripeCustomer
     * const userStripeCustomer = await prisma.userStripeCustomer.upsert({
     *   create: {
     *     // ... data to create a UserStripeCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStripeCustomer we want to update
     *   }
     * })
    **/
    upsert<T extends UserStripeCustomerUpsertArgs>(
      args: SelectSubset<T, UserStripeCustomerUpsertArgs>
    ): CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer>, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T>>>

    /**
     * Find one UserStripeCustomer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserStripeCustomerFindUniqueOrThrowArgs} args - Arguments to find a UserStripeCustomer
     * @example
     * // Get one UserStripeCustomer
     * const userStripeCustomer = await prisma.userStripeCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserStripeCustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserStripeCustomerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer>, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T>>>

    /**
     * Find the first UserStripeCustomer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStripeCustomerFindFirstOrThrowArgs} args - Arguments to find a UserStripeCustomer
     * @example
     * // Get one UserStripeCustomer
     * const userStripeCustomer = await prisma.userStripeCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserStripeCustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserStripeCustomerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserStripeCustomerClient<UserStripeCustomer>, Prisma__UserStripeCustomerClient<UserStripeCustomerGetPayload<T>>>

    /**
     * Count the number of UserStripeCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStripeCustomerCountArgs} args - Arguments to filter UserStripeCustomers to count.
     * @example
     * // Count the number of UserStripeCustomers
     * const count = await prisma.userStripeCustomer.count({
     *   where: {
     *     // ... the filter for the UserStripeCustomers we want to count
     *   }
     * })
    **/
    count<T extends UserStripeCustomerCountArgs>(
      args?: Subset<T, UserStripeCustomerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStripeCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStripeCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStripeCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStripeCustomerAggregateArgs>(args: Subset<T, UserStripeCustomerAggregateArgs>): PrismaPromise<GetUserStripeCustomerAggregateType<T>>

    /**
     * Group by UserStripeCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStripeCustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStripeCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStripeCustomerGroupByArgs['orderBy'] }
        : { orderBy?: UserStripeCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStripeCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStripeCustomerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStripeCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserStripeCustomerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserStripeCustomer base type for findUnique actions
   */
  export type UserStripeCustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserStripeCustomer
     * 
    **/
    select?: UserStripeCustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserStripeCustomerInclude | null
    /**
     * Filter, which UserStripeCustomer to fetch.
     * 
    **/
    where: UserStripeCustomerWhereUniqueInput
  }

  /**
   * UserStripeCustomer: findUnique
   */
  export interface UserStripeCustomerFindUniqueArgs extends UserStripeCustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserStripeCustomer base type for findFirst actions
   */
  export type UserStripeCustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserStripeCustomer
     * 
    **/
    select?: UserStripeCustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserStripeCustomerInclude | null
    /**
     * Filter, which UserStripeCustomer to fetch.
     * 
    **/
    where?: UserStripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStripeCustomers to fetch.
     * 
    **/
    orderBy?: Enumerable<UserStripeCustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStripeCustomers.
     * 
    **/
    cursor?: UserStripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStripeCustomers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStripeCustomers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStripeCustomers.
     * 
    **/
    distinct?: Enumerable<UserStripeCustomerScalarFieldEnum>
  }

  /**
   * UserStripeCustomer: findFirst
   */
  export interface UserStripeCustomerFindFirstArgs extends UserStripeCustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserStripeCustomer findMany
   */
  export type UserStripeCustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserStripeCustomer
     * 
    **/
    select?: UserStripeCustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserStripeCustomerInclude | null
    /**
     * Filter, which UserStripeCustomers to fetch.
     * 
    **/
    where?: UserStripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStripeCustomers to fetch.
     * 
    **/
    orderBy?: Enumerable<UserStripeCustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStripeCustomers.
     * 
    **/
    cursor?: UserStripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStripeCustomers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStripeCustomers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserStripeCustomerScalarFieldEnum>
  }


  /**
   * UserStripeCustomer create
   */
  export type UserStripeCustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the UserStripeCustomer
     * 
    **/
    select?: UserStripeCustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserStripeCustomerInclude | null
    /**
     * The data needed to create a UserStripeCustomer.
     * 
    **/
    data: XOR<UserStripeCustomerCreateInput, UserStripeCustomerUncheckedCreateInput>
  }


  /**
   * UserStripeCustomer createMany
   */
  export type UserStripeCustomerCreateManyArgs = {
    /**
     * The data used to create many UserStripeCustomers.
     * 
    **/
    data: Enumerable<UserStripeCustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserStripeCustomer update
   */
  export type UserStripeCustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserStripeCustomer
     * 
    **/
    select?: UserStripeCustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserStripeCustomerInclude | null
    /**
     * The data needed to update a UserStripeCustomer.
     * 
    **/
    data: XOR<UserStripeCustomerUpdateInput, UserStripeCustomerUncheckedUpdateInput>
    /**
     * Choose, which UserStripeCustomer to update.
     * 
    **/
    where: UserStripeCustomerWhereUniqueInput
  }


  /**
   * UserStripeCustomer updateMany
   */
  export type UserStripeCustomerUpdateManyArgs = {
    /**
     * The data used to update UserStripeCustomers.
     * 
    **/
    data: XOR<UserStripeCustomerUpdateManyMutationInput, UserStripeCustomerUncheckedUpdateManyInput>
    /**
     * Filter which UserStripeCustomers to update
     * 
    **/
    where?: UserStripeCustomerWhereInput
  }


  /**
   * UserStripeCustomer upsert
   */
  export type UserStripeCustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserStripeCustomer
     * 
    **/
    select?: UserStripeCustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserStripeCustomerInclude | null
    /**
     * The filter to search for the UserStripeCustomer to update in case it exists.
     * 
    **/
    where: UserStripeCustomerWhereUniqueInput
    /**
     * In case the UserStripeCustomer found by the `where` argument doesn't exist, create a new UserStripeCustomer with this data.
     * 
    **/
    create: XOR<UserStripeCustomerCreateInput, UserStripeCustomerUncheckedCreateInput>
    /**
     * In case the UserStripeCustomer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserStripeCustomerUpdateInput, UserStripeCustomerUncheckedUpdateInput>
  }


  /**
   * UserStripeCustomer delete
   */
  export type UserStripeCustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserStripeCustomer
     * 
    **/
    select?: UserStripeCustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserStripeCustomerInclude | null
    /**
     * Filter which UserStripeCustomer to delete.
     * 
    **/
    where: UserStripeCustomerWhereUniqueInput
  }


  /**
   * UserStripeCustomer deleteMany
   */
  export type UserStripeCustomerDeleteManyArgs = {
    /**
     * Filter which UserStripeCustomers to delete
     * 
    **/
    where?: UserStripeCustomerWhereInput
  }


  /**
   * UserStripeCustomer: findUniqueOrThrow
   */
  export type UserStripeCustomerFindUniqueOrThrowArgs = UserStripeCustomerFindUniqueArgsBase
      

  /**
   * UserStripeCustomer: findFirstOrThrow
   */
  export type UserStripeCustomerFindFirstOrThrowArgs = UserStripeCustomerFindFirstArgsBase
      

  /**
   * UserStripeCustomer without action
   */
  export type UserStripeCustomerArgs = {
    /**
     * Select specific fields to fetch from the UserStripeCustomer
     * 
    **/
    select?: UserStripeCustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserStripeCustomerInclude | null
  }



  /**
   * Model UserBalanceItem
   */


  export type AggregateUserBalanceItem = {
    _count: UserBalanceItemCountAggregateOutputType | null
    _avg: UserBalanceItemAvgAggregateOutputType | null
    _sum: UserBalanceItemSumAggregateOutputType | null
    _min: UserBalanceItemMinAggregateOutputType | null
    _max: UserBalanceItemMaxAggregateOutputType | null
  }

  export type UserBalanceItemAvgAggregateOutputType = {
    amount: number | null
  }

  export type UserBalanceItemSumAggregateOutputType = {
    amount: number | null
  }

  export type UserBalanceItemMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    amount: number | null
    type: UserBalancItemType | null
  }

  export type UserBalanceItemMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    amount: number | null
    type: UserBalancItemType | null
  }

  export type UserBalanceItemCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    amount: number
    type: number
    _all: number
  }


  export type UserBalanceItemAvgAggregateInputType = {
    amount?: true
  }

  export type UserBalanceItemSumAggregateInputType = {
    amount?: true
  }

  export type UserBalanceItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    amount?: true
    type?: true
  }

  export type UserBalanceItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    amount?: true
    type?: true
  }

  export type UserBalanceItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    amount?: true
    type?: true
    _all?: true
  }

  export type UserBalanceItemAggregateArgs = {
    /**
     * Filter which UserBalanceItem to aggregate.
     * 
    **/
    where?: UserBalanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalanceItems to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBalanceItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserBalanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalanceItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalanceItems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBalanceItems
    **/
    _count?: true | UserBalanceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBalanceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBalanceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBalanceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBalanceItemMaxAggregateInputType
  }

  export type GetUserBalanceItemAggregateType<T extends UserBalanceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBalanceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBalanceItem[P]>
      : GetScalarType<T[P], AggregateUserBalanceItem[P]>
  }




  export type UserBalanceItemGroupByArgs = {
    where?: UserBalanceItemWhereInput
    orderBy?: Enumerable<UserBalanceItemOrderByWithAggregationInput>
    by: Array<UserBalanceItemScalarFieldEnum>
    having?: UserBalanceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBalanceItemCountAggregateInputType | true
    _avg?: UserBalanceItemAvgAggregateInputType
    _sum?: UserBalanceItemSumAggregateInputType
    _min?: UserBalanceItemMinAggregateInputType
    _max?: UserBalanceItemMaxAggregateInputType
  }


  export type UserBalanceItemGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    amount: number
    type: UserBalancItemType
    _count: UserBalanceItemCountAggregateOutputType | null
    _avg: UserBalanceItemAvgAggregateOutputType | null
    _sum: UserBalanceItemSumAggregateOutputType | null
    _min: UserBalanceItemMinAggregateOutputType | null
    _max: UserBalanceItemMaxAggregateOutputType | null
  }

  type GetUserBalanceItemGroupByPayload<T extends UserBalanceItemGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserBalanceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBalanceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBalanceItemGroupByOutputType[P]>
            : GetScalarType<T[P], UserBalanceItemGroupByOutputType[P]>
        }
      >
    >


  export type UserBalanceItemSelect = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    user?: boolean | UserArgs
  }

  export type UserBalanceItemInclude = {
    user?: boolean | UserArgs
  }

  export type UserBalanceItemGetPayload<
    S extends boolean | null | undefined | UserBalanceItemArgs,
    U = keyof S
      > = S extends true
        ? UserBalanceItem
    : S extends undefined
    ? never
    : S extends UserBalanceItemArgs | UserBalanceItemFindManyArgs
    ?'include' extends U
    ? UserBalanceItem  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserBalanceItem ? UserBalanceItem[P] : never
  } 
    : UserBalanceItem
  : UserBalanceItem


  type UserBalanceItemCountArgs = Merge<
    Omit<UserBalanceItemFindManyArgs, 'select' | 'include'> & {
      select?: UserBalanceItemCountAggregateInputType | true
    }
  >

  export interface UserBalanceItemDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserBalanceItem that matches the filter.
     * @param {UserBalanceItemFindUniqueArgs} args - Arguments to find a UserBalanceItem
     * @example
     * // Get one UserBalanceItem
     * const userBalanceItem = await prisma.userBalanceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserBalanceItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserBalanceItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserBalanceItem'> extends True ? CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem>, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T>>> : CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem | null >, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T> | null >>

    /**
     * Find the first UserBalanceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceItemFindFirstArgs} args - Arguments to find a UserBalanceItem
     * @example
     * // Get one UserBalanceItem
     * const userBalanceItem = await prisma.userBalanceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserBalanceItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserBalanceItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserBalanceItem'> extends True ? CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem>, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T>>> : CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem | null >, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T> | null >>

    /**
     * Find zero or more UserBalanceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBalanceItems
     * const userBalanceItems = await prisma.userBalanceItem.findMany()
     * 
     * // Get first 10 UserBalanceItems
     * const userBalanceItems = await prisma.userBalanceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBalanceItemWithIdOnly = await prisma.userBalanceItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserBalanceItemFindManyArgs>(
      args?: SelectSubset<T, UserBalanceItemFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserBalanceItem>>, PrismaPromise<Array<UserBalanceItemGetPayload<T>>>>

    /**
     * Create a UserBalanceItem.
     * @param {UserBalanceItemCreateArgs} args - Arguments to create a UserBalanceItem.
     * @example
     * // Create one UserBalanceItem
     * const UserBalanceItem = await prisma.userBalanceItem.create({
     *   data: {
     *     // ... data to create a UserBalanceItem
     *   }
     * })
     * 
    **/
    create<T extends UserBalanceItemCreateArgs>(
      args: SelectSubset<T, UserBalanceItemCreateArgs>
    ): CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem>, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T>>>

    /**
     * Create many UserBalanceItems.
     *     @param {UserBalanceItemCreateManyArgs} args - Arguments to create many UserBalanceItems.
     *     @example
     *     // Create many UserBalanceItems
     *     const userBalanceItem = await prisma.userBalanceItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserBalanceItemCreateManyArgs>(
      args?: SelectSubset<T, UserBalanceItemCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserBalanceItem.
     * @param {UserBalanceItemDeleteArgs} args - Arguments to delete one UserBalanceItem.
     * @example
     * // Delete one UserBalanceItem
     * const UserBalanceItem = await prisma.userBalanceItem.delete({
     *   where: {
     *     // ... filter to delete one UserBalanceItem
     *   }
     * })
     * 
    **/
    delete<T extends UserBalanceItemDeleteArgs>(
      args: SelectSubset<T, UserBalanceItemDeleteArgs>
    ): CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem>, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T>>>

    /**
     * Update one UserBalanceItem.
     * @param {UserBalanceItemUpdateArgs} args - Arguments to update one UserBalanceItem.
     * @example
     * // Update one UserBalanceItem
     * const userBalanceItem = await prisma.userBalanceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserBalanceItemUpdateArgs>(
      args: SelectSubset<T, UserBalanceItemUpdateArgs>
    ): CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem>, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T>>>

    /**
     * Delete zero or more UserBalanceItems.
     * @param {UserBalanceItemDeleteManyArgs} args - Arguments to filter UserBalanceItems to delete.
     * @example
     * // Delete a few UserBalanceItems
     * const { count } = await prisma.userBalanceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserBalanceItemDeleteManyArgs>(
      args?: SelectSubset<T, UserBalanceItemDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBalanceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBalanceItems
     * const userBalanceItem = await prisma.userBalanceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserBalanceItemUpdateManyArgs>(
      args: SelectSubset<T, UserBalanceItemUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBalanceItem.
     * @param {UserBalanceItemUpsertArgs} args - Arguments to update or create a UserBalanceItem.
     * @example
     * // Update or create a UserBalanceItem
     * const userBalanceItem = await prisma.userBalanceItem.upsert({
     *   create: {
     *     // ... data to create a UserBalanceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBalanceItem we want to update
     *   }
     * })
    **/
    upsert<T extends UserBalanceItemUpsertArgs>(
      args: SelectSubset<T, UserBalanceItemUpsertArgs>
    ): CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem>, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T>>>

    /**
     * Find one UserBalanceItem that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserBalanceItemFindUniqueOrThrowArgs} args - Arguments to find a UserBalanceItem
     * @example
     * // Get one UserBalanceItem
     * const userBalanceItem = await prisma.userBalanceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserBalanceItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserBalanceItemFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem>, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T>>>

    /**
     * Find the first UserBalanceItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceItemFindFirstOrThrowArgs} args - Arguments to find a UserBalanceItem
     * @example
     * // Get one UserBalanceItem
     * const userBalanceItem = await prisma.userBalanceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserBalanceItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserBalanceItemFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserBalanceItemClient<UserBalanceItem>, Prisma__UserBalanceItemClient<UserBalanceItemGetPayload<T>>>

    /**
     * Count the number of UserBalanceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceItemCountArgs} args - Arguments to filter UserBalanceItems to count.
     * @example
     * // Count the number of UserBalanceItems
     * const count = await prisma.userBalanceItem.count({
     *   where: {
     *     // ... the filter for the UserBalanceItems we want to count
     *   }
     * })
    **/
    count<T extends UserBalanceItemCountArgs>(
      args?: Subset<T, UserBalanceItemCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBalanceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBalanceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBalanceItemAggregateArgs>(args: Subset<T, UserBalanceItemAggregateArgs>): PrismaPromise<GetUserBalanceItemAggregateType<T>>

    /**
     * Group by UserBalanceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBalanceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBalanceItemGroupByArgs['orderBy'] }
        : { orderBy?: UserBalanceItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBalanceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBalanceItemGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBalanceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserBalanceItemClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserBalanceItem base type for findUnique actions
   */
  export type UserBalanceItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserBalanceItem
     * 
    **/
    select?: UserBalanceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBalanceItemInclude | null
    /**
     * Filter, which UserBalanceItem to fetch.
     * 
    **/
    where: UserBalanceItemWhereUniqueInput
  }

  /**
   * UserBalanceItem: findUnique
   */
  export interface UserBalanceItemFindUniqueArgs extends UserBalanceItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserBalanceItem base type for findFirst actions
   */
  export type UserBalanceItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserBalanceItem
     * 
    **/
    select?: UserBalanceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBalanceItemInclude | null
    /**
     * Filter, which UserBalanceItem to fetch.
     * 
    **/
    where?: UserBalanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalanceItems to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBalanceItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBalanceItems.
     * 
    **/
    cursor?: UserBalanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalanceItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalanceItems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBalanceItems.
     * 
    **/
    distinct?: Enumerable<UserBalanceItemScalarFieldEnum>
  }

  /**
   * UserBalanceItem: findFirst
   */
  export interface UserBalanceItemFindFirstArgs extends UserBalanceItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserBalanceItem findMany
   */
  export type UserBalanceItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserBalanceItem
     * 
    **/
    select?: UserBalanceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBalanceItemInclude | null
    /**
     * Filter, which UserBalanceItems to fetch.
     * 
    **/
    where?: UserBalanceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalanceItems to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBalanceItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBalanceItems.
     * 
    **/
    cursor?: UserBalanceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalanceItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalanceItems.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserBalanceItemScalarFieldEnum>
  }


  /**
   * UserBalanceItem create
   */
  export type UserBalanceItemCreateArgs = {
    /**
     * Select specific fields to fetch from the UserBalanceItem
     * 
    **/
    select?: UserBalanceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBalanceItemInclude | null
    /**
     * The data needed to create a UserBalanceItem.
     * 
    **/
    data: XOR<UserBalanceItemCreateInput, UserBalanceItemUncheckedCreateInput>
  }


  /**
   * UserBalanceItem createMany
   */
  export type UserBalanceItemCreateManyArgs = {
    /**
     * The data used to create many UserBalanceItems.
     * 
    **/
    data: Enumerable<UserBalanceItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserBalanceItem update
   */
  export type UserBalanceItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserBalanceItem
     * 
    **/
    select?: UserBalanceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBalanceItemInclude | null
    /**
     * The data needed to update a UserBalanceItem.
     * 
    **/
    data: XOR<UserBalanceItemUpdateInput, UserBalanceItemUncheckedUpdateInput>
    /**
     * Choose, which UserBalanceItem to update.
     * 
    **/
    where: UserBalanceItemWhereUniqueInput
  }


  /**
   * UserBalanceItem updateMany
   */
  export type UserBalanceItemUpdateManyArgs = {
    /**
     * The data used to update UserBalanceItems.
     * 
    **/
    data: XOR<UserBalanceItemUpdateManyMutationInput, UserBalanceItemUncheckedUpdateManyInput>
    /**
     * Filter which UserBalanceItems to update
     * 
    **/
    where?: UserBalanceItemWhereInput
  }


  /**
   * UserBalanceItem upsert
   */
  export type UserBalanceItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserBalanceItem
     * 
    **/
    select?: UserBalanceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBalanceItemInclude | null
    /**
     * The filter to search for the UserBalanceItem to update in case it exists.
     * 
    **/
    where: UserBalanceItemWhereUniqueInput
    /**
     * In case the UserBalanceItem found by the `where` argument doesn't exist, create a new UserBalanceItem with this data.
     * 
    **/
    create: XOR<UserBalanceItemCreateInput, UserBalanceItemUncheckedCreateInput>
    /**
     * In case the UserBalanceItem was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserBalanceItemUpdateInput, UserBalanceItemUncheckedUpdateInput>
  }


  /**
   * UserBalanceItem delete
   */
  export type UserBalanceItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserBalanceItem
     * 
    **/
    select?: UserBalanceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBalanceItemInclude | null
    /**
     * Filter which UserBalanceItem to delete.
     * 
    **/
    where: UserBalanceItemWhereUniqueInput
  }


  /**
   * UserBalanceItem deleteMany
   */
  export type UserBalanceItemDeleteManyArgs = {
    /**
     * Filter which UserBalanceItems to delete
     * 
    **/
    where?: UserBalanceItemWhereInput
  }


  /**
   * UserBalanceItem: findUniqueOrThrow
   */
  export type UserBalanceItemFindUniqueOrThrowArgs = UserBalanceItemFindUniqueArgsBase
      

  /**
   * UserBalanceItem: findFirstOrThrow
   */
  export type UserBalanceItemFindFirstOrThrowArgs = UserBalanceItemFindFirstArgsBase
      

  /**
   * UserBalanceItem without action
   */
  export type UserBalanceItemArgs = {
    /**
     * Select specific fields to fetch from the UserBalanceItem
     * 
    **/
    select?: UserBalanceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBalanceItemInclude | null
  }



  /**
   * Model UserMagicLink
   */


  export type AggregateUserMagicLink = {
    _count: UserMagicLinkCountAggregateOutputType | null
    _min: UserMagicLinkMinAggregateOutputType | null
    _max: UserMagicLinkMaxAggregateOutputType | null
  }

  export type UserMagicLinkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    secret: string | null
    used: boolean | null
    remember: boolean | null
    action: MagicLinkAction | null
    newEmail: string | null
  }

  export type UserMagicLinkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    secret: string | null
    used: boolean | null
    remember: boolean | null
    action: MagicLinkAction | null
    newEmail: string | null
  }

  export type UserMagicLinkCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    secret: number
    used: number
    remember: number
    action: number
    newEmail: number
    _all: number
  }


  export type UserMagicLinkMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    secret?: true
    used?: true
    remember?: true
    action?: true
    newEmail?: true
  }

  export type UserMagicLinkMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    secret?: true
    used?: true
    remember?: true
    action?: true
    newEmail?: true
  }

  export type UserMagicLinkCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    secret?: true
    used?: true
    remember?: true
    action?: true
    newEmail?: true
    _all?: true
  }

  export type UserMagicLinkAggregateArgs = {
    /**
     * Filter which UserMagicLink to aggregate.
     * 
    **/
    where?: UserMagicLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMagicLinks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMagicLinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserMagicLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMagicLinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMagicLinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMagicLinks
    **/
    _count?: true | UserMagicLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMagicLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMagicLinkMaxAggregateInputType
  }

  export type GetUserMagicLinkAggregateType<T extends UserMagicLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMagicLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMagicLink[P]>
      : GetScalarType<T[P], AggregateUserMagicLink[P]>
  }




  export type UserMagicLinkGroupByArgs = {
    where?: UserMagicLinkWhereInput
    orderBy?: Enumerable<UserMagicLinkOrderByWithAggregationInput>
    by: Array<UserMagicLinkScalarFieldEnum>
    having?: UserMagicLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMagicLinkCountAggregateInputType | true
    _min?: UserMagicLinkMinAggregateInputType
    _max?: UserMagicLinkMaxAggregateInputType
  }


  export type UserMagicLinkGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    secret: string
    used: boolean
    remember: boolean
    action: MagicLinkAction
    newEmail: string | null
    _count: UserMagicLinkCountAggregateOutputType | null
    _min: UserMagicLinkMinAggregateOutputType | null
    _max: UserMagicLinkMaxAggregateOutputType | null
  }

  type GetUserMagicLinkGroupByPayload<T extends UserMagicLinkGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserMagicLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMagicLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMagicLinkGroupByOutputType[P]>
            : GetScalarType<T[P], UserMagicLinkGroupByOutputType[P]>
        }
      >
    >


  export type UserMagicLinkSelect = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    secret?: boolean
    used?: boolean
    remember?: boolean
    action?: boolean
    newEmail?: boolean
    user?: boolean | UserArgs
  }

  export type UserMagicLinkInclude = {
    user?: boolean | UserArgs
  }

  export type UserMagicLinkGetPayload<
    S extends boolean | null | undefined | UserMagicLinkArgs,
    U = keyof S
      > = S extends true
        ? UserMagicLink
    : S extends undefined
    ? never
    : S extends UserMagicLinkArgs | UserMagicLinkFindManyArgs
    ?'include' extends U
    ? UserMagicLink  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserMagicLink ? UserMagicLink[P] : never
  } 
    : UserMagicLink
  : UserMagicLink


  type UserMagicLinkCountArgs = Merge<
    Omit<UserMagicLinkFindManyArgs, 'select' | 'include'> & {
      select?: UserMagicLinkCountAggregateInputType | true
    }
  >

  export interface UserMagicLinkDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserMagicLink that matches the filter.
     * @param {UserMagicLinkFindUniqueArgs} args - Arguments to find a UserMagicLink
     * @example
     * // Get one UserMagicLink
     * const userMagicLink = await prisma.userMagicLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserMagicLinkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserMagicLinkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserMagicLink'> extends True ? CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink>, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T>>> : CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink | null >, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T> | null >>

    /**
     * Find the first UserMagicLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMagicLinkFindFirstArgs} args - Arguments to find a UserMagicLink
     * @example
     * // Get one UserMagicLink
     * const userMagicLink = await prisma.userMagicLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserMagicLinkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserMagicLinkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserMagicLink'> extends True ? CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink>, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T>>> : CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink | null >, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T> | null >>

    /**
     * Find zero or more UserMagicLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMagicLinkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMagicLinks
     * const userMagicLinks = await prisma.userMagicLink.findMany()
     * 
     * // Get first 10 UserMagicLinks
     * const userMagicLinks = await prisma.userMagicLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMagicLinkWithIdOnly = await prisma.userMagicLink.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserMagicLinkFindManyArgs>(
      args?: SelectSubset<T, UserMagicLinkFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserMagicLink>>, PrismaPromise<Array<UserMagicLinkGetPayload<T>>>>

    /**
     * Create a UserMagicLink.
     * @param {UserMagicLinkCreateArgs} args - Arguments to create a UserMagicLink.
     * @example
     * // Create one UserMagicLink
     * const UserMagicLink = await prisma.userMagicLink.create({
     *   data: {
     *     // ... data to create a UserMagicLink
     *   }
     * })
     * 
    **/
    create<T extends UserMagicLinkCreateArgs>(
      args: SelectSubset<T, UserMagicLinkCreateArgs>
    ): CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink>, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T>>>

    /**
     * Create many UserMagicLinks.
     *     @param {UserMagicLinkCreateManyArgs} args - Arguments to create many UserMagicLinks.
     *     @example
     *     // Create many UserMagicLinks
     *     const userMagicLink = await prisma.userMagicLink.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserMagicLinkCreateManyArgs>(
      args?: SelectSubset<T, UserMagicLinkCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserMagicLink.
     * @param {UserMagicLinkDeleteArgs} args - Arguments to delete one UserMagicLink.
     * @example
     * // Delete one UserMagicLink
     * const UserMagicLink = await prisma.userMagicLink.delete({
     *   where: {
     *     // ... filter to delete one UserMagicLink
     *   }
     * })
     * 
    **/
    delete<T extends UserMagicLinkDeleteArgs>(
      args: SelectSubset<T, UserMagicLinkDeleteArgs>
    ): CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink>, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T>>>

    /**
     * Update one UserMagicLink.
     * @param {UserMagicLinkUpdateArgs} args - Arguments to update one UserMagicLink.
     * @example
     * // Update one UserMagicLink
     * const userMagicLink = await prisma.userMagicLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserMagicLinkUpdateArgs>(
      args: SelectSubset<T, UserMagicLinkUpdateArgs>
    ): CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink>, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T>>>

    /**
     * Delete zero or more UserMagicLinks.
     * @param {UserMagicLinkDeleteManyArgs} args - Arguments to filter UserMagicLinks to delete.
     * @example
     * // Delete a few UserMagicLinks
     * const { count } = await prisma.userMagicLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserMagicLinkDeleteManyArgs>(
      args?: SelectSubset<T, UserMagicLinkDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMagicLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMagicLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMagicLinks
     * const userMagicLink = await prisma.userMagicLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserMagicLinkUpdateManyArgs>(
      args: SelectSubset<T, UserMagicLinkUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMagicLink.
     * @param {UserMagicLinkUpsertArgs} args - Arguments to update or create a UserMagicLink.
     * @example
     * // Update or create a UserMagicLink
     * const userMagicLink = await prisma.userMagicLink.upsert({
     *   create: {
     *     // ... data to create a UserMagicLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMagicLink we want to update
     *   }
     * })
    **/
    upsert<T extends UserMagicLinkUpsertArgs>(
      args: SelectSubset<T, UserMagicLinkUpsertArgs>
    ): CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink>, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T>>>

    /**
     * Find one UserMagicLink that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserMagicLinkFindUniqueOrThrowArgs} args - Arguments to find a UserMagicLink
     * @example
     * // Get one UserMagicLink
     * const userMagicLink = await prisma.userMagicLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserMagicLinkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserMagicLinkFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink>, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T>>>

    /**
     * Find the first UserMagicLink that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMagicLinkFindFirstOrThrowArgs} args - Arguments to find a UserMagicLink
     * @example
     * // Get one UserMagicLink
     * const userMagicLink = await prisma.userMagicLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserMagicLinkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserMagicLinkFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserMagicLinkClient<UserMagicLink>, Prisma__UserMagicLinkClient<UserMagicLinkGetPayload<T>>>

    /**
     * Count the number of UserMagicLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMagicLinkCountArgs} args - Arguments to filter UserMagicLinks to count.
     * @example
     * // Count the number of UserMagicLinks
     * const count = await prisma.userMagicLink.count({
     *   where: {
     *     // ... the filter for the UserMagicLinks we want to count
     *   }
     * })
    **/
    count<T extends UserMagicLinkCountArgs>(
      args?: Subset<T, UserMagicLinkCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMagicLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMagicLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMagicLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMagicLinkAggregateArgs>(args: Subset<T, UserMagicLinkAggregateArgs>): PrismaPromise<GetUserMagicLinkAggregateType<T>>

    /**
     * Group by UserMagicLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMagicLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMagicLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMagicLinkGroupByArgs['orderBy'] }
        : { orderBy?: UserMagicLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMagicLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMagicLinkGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMagicLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserMagicLinkClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserMagicLink base type for findUnique actions
   */
  export type UserMagicLinkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserMagicLink
     * 
    **/
    select?: UserMagicLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMagicLinkInclude | null
    /**
     * Filter, which UserMagicLink to fetch.
     * 
    **/
    where: UserMagicLinkWhereUniqueInput
  }

  /**
   * UserMagicLink: findUnique
   */
  export interface UserMagicLinkFindUniqueArgs extends UserMagicLinkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserMagicLink base type for findFirst actions
   */
  export type UserMagicLinkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserMagicLink
     * 
    **/
    select?: UserMagicLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMagicLinkInclude | null
    /**
     * Filter, which UserMagicLink to fetch.
     * 
    **/
    where?: UserMagicLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMagicLinks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMagicLinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMagicLinks.
     * 
    **/
    cursor?: UserMagicLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMagicLinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMagicLinks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMagicLinks.
     * 
    **/
    distinct?: Enumerable<UserMagicLinkScalarFieldEnum>
  }

  /**
   * UserMagicLink: findFirst
   */
  export interface UserMagicLinkFindFirstArgs extends UserMagicLinkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserMagicLink findMany
   */
  export type UserMagicLinkFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserMagicLink
     * 
    **/
    select?: UserMagicLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMagicLinkInclude | null
    /**
     * Filter, which UserMagicLinks to fetch.
     * 
    **/
    where?: UserMagicLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMagicLinks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMagicLinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMagicLinks.
     * 
    **/
    cursor?: UserMagicLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMagicLinks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMagicLinks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserMagicLinkScalarFieldEnum>
  }


  /**
   * UserMagicLink create
   */
  export type UserMagicLinkCreateArgs = {
    /**
     * Select specific fields to fetch from the UserMagicLink
     * 
    **/
    select?: UserMagicLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMagicLinkInclude | null
    /**
     * The data needed to create a UserMagicLink.
     * 
    **/
    data: XOR<UserMagicLinkCreateInput, UserMagicLinkUncheckedCreateInput>
  }


  /**
   * UserMagicLink createMany
   */
  export type UserMagicLinkCreateManyArgs = {
    /**
     * The data used to create many UserMagicLinks.
     * 
    **/
    data: Enumerable<UserMagicLinkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserMagicLink update
   */
  export type UserMagicLinkUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserMagicLink
     * 
    **/
    select?: UserMagicLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMagicLinkInclude | null
    /**
     * The data needed to update a UserMagicLink.
     * 
    **/
    data: XOR<UserMagicLinkUpdateInput, UserMagicLinkUncheckedUpdateInput>
    /**
     * Choose, which UserMagicLink to update.
     * 
    **/
    where: UserMagicLinkWhereUniqueInput
  }


  /**
   * UserMagicLink updateMany
   */
  export type UserMagicLinkUpdateManyArgs = {
    /**
     * The data used to update UserMagicLinks.
     * 
    **/
    data: XOR<UserMagicLinkUpdateManyMutationInput, UserMagicLinkUncheckedUpdateManyInput>
    /**
     * Filter which UserMagicLinks to update
     * 
    **/
    where?: UserMagicLinkWhereInput
  }


  /**
   * UserMagicLink upsert
   */
  export type UserMagicLinkUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserMagicLink
     * 
    **/
    select?: UserMagicLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMagicLinkInclude | null
    /**
     * The filter to search for the UserMagicLink to update in case it exists.
     * 
    **/
    where: UserMagicLinkWhereUniqueInput
    /**
     * In case the UserMagicLink found by the `where` argument doesn't exist, create a new UserMagicLink with this data.
     * 
    **/
    create: XOR<UserMagicLinkCreateInput, UserMagicLinkUncheckedCreateInput>
    /**
     * In case the UserMagicLink was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserMagicLinkUpdateInput, UserMagicLinkUncheckedUpdateInput>
  }


  /**
   * UserMagicLink delete
   */
  export type UserMagicLinkDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserMagicLink
     * 
    **/
    select?: UserMagicLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMagicLinkInclude | null
    /**
     * Filter which UserMagicLink to delete.
     * 
    **/
    where: UserMagicLinkWhereUniqueInput
  }


  /**
   * UserMagicLink deleteMany
   */
  export type UserMagicLinkDeleteManyArgs = {
    /**
     * Filter which UserMagicLinks to delete
     * 
    **/
    where?: UserMagicLinkWhereInput
  }


  /**
   * UserMagicLink: findUniqueOrThrow
   */
  export type UserMagicLinkFindUniqueOrThrowArgs = UserMagicLinkFindUniqueArgsBase
      

  /**
   * UserMagicLink: findFirstOrThrow
   */
  export type UserMagicLinkFindFirstOrThrowArgs = UserMagicLinkFindFirstArgsBase
      

  /**
   * UserMagicLink without action
   */
  export type UserMagicLinkArgs = {
    /**
     * Select specific fields to fetch from the UserMagicLink
     * 
    **/
    select?: UserMagicLinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMagicLinkInclude | null
  }



  /**
   * Model Publication
   */


  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    organizationName: string | null
    tagline: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    organizationName: string | null
    tagline: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationCountAggregateOutputType = {
    id: number
    name: number
    url: number
    organizationName: number
    logo: number
    tagline: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicationMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    organizationName?: true
    tagline?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    organizationName?: true
    tagline?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    organizationName?: true
    logo?: true
    tagline?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicationAggregateArgs = {
    /**
     * Filter which Publication to aggregate.
     * 
    **/
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs = {
    where?: PublicationWhereInput
    orderBy?: Enumerable<PublicationOrderByWithAggregationInput>
    by: Array<PublicationScalarFieldEnum>
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }


  export type PublicationGroupByOutputType = {
    id: string
    name: string
    url: string
    organizationName: string
    logo: JsonValue | null
    tagline: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PublicationCountAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    organizationName?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dashboardUsers?: boolean | PublicationDashboardUserFindManyArgs
    _count?: boolean | PublicationCountOutputTypeArgs
  }

  export type PublicationInclude = {
    dashboardUsers?: boolean | PublicationDashboardUserFindManyArgs
    _count?: boolean | PublicationCountOutputTypeArgs
  }

  export type PublicationGetPayload<
    S extends boolean | null | undefined | PublicationArgs,
    U = keyof S
      > = S extends true
        ? Publication
    : S extends undefined
    ? never
    : S extends PublicationArgs | PublicationFindManyArgs
    ?'include' extends U
    ? Publication  & {
    [P in TrueKeys<S['include']>]:
        P extends 'dashboardUsers' ? Array < PublicationDashboardUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? PublicationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'dashboardUsers' ? Array < PublicationDashboardUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? PublicationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Publication ? Publication[P] : never
  } 
    : Publication
  : Publication


  type PublicationCountArgs = Merge<
    Omit<PublicationFindManyArgs, 'select' | 'include'> & {
      select?: PublicationCountAggregateInputType | true
    }
  >

  export interface PublicationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublicationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Publication'> extends True ? CheckSelect<T, Prisma__PublicationClient<Publication>, Prisma__PublicationClient<PublicationGetPayload<T>>> : CheckSelect<T, Prisma__PublicationClient<Publication | null >, Prisma__PublicationClient<PublicationGetPayload<T> | null >>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublicationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Publication'> extends True ? CheckSelect<T, Prisma__PublicationClient<Publication>, Prisma__PublicationClient<PublicationGetPayload<T>>> : CheckSelect<T, Prisma__PublicationClient<Publication | null >, Prisma__PublicationClient<PublicationGetPayload<T> | null >>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublicationFindManyArgs>(
      args?: SelectSubset<T, PublicationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Publication>>, PrismaPromise<Array<PublicationGetPayload<T>>>>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
    **/
    create<T extends PublicationCreateArgs>(
      args: SelectSubset<T, PublicationCreateArgs>
    ): CheckSelect<T, Prisma__PublicationClient<Publication>, Prisma__PublicationClient<PublicationGetPayload<T>>>

    /**
     * Create many Publications.
     *     @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
     *     @example
     *     // Create many Publications
     *     const publication = await prisma.publication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PublicationCreateManyArgs>(
      args?: SelectSubset<T, PublicationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
    **/
    delete<T extends PublicationDeleteArgs>(
      args: SelectSubset<T, PublicationDeleteArgs>
    ): CheckSelect<T, Prisma__PublicationClient<Publication>, Prisma__PublicationClient<PublicationGetPayload<T>>>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicationUpdateArgs>(
      args: SelectSubset<T, PublicationUpdateArgs>
    ): CheckSelect<T, Prisma__PublicationClient<Publication>, Prisma__PublicationClient<PublicationGetPayload<T>>>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicationDeleteManyArgs>(
      args?: SelectSubset<T, PublicationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicationUpdateManyArgs>(
      args: SelectSubset<T, PublicationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
    **/
    upsert<T extends PublicationUpsertArgs>(
      args: SelectSubset<T, PublicationUpsertArgs>
    ): CheckSelect<T, Prisma__PublicationClient<Publication>, Prisma__PublicationClient<PublicationGetPayload<T>>>

    /**
     * Find one Publication that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PublicationFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PublicationClient<Publication>, Prisma__PublicationClient<PublicationGetPayload<T>>>

    /**
     * Find the first Publication that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PublicationFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PublicationClient<Publication>, Prisma__PublicationClient<PublicationGetPayload<T>>>

    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublicationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    dashboardUsers<T extends PublicationDashboardUserFindManyArgs = {}>(args?: Subset<T, PublicationDashboardUserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PublicationDashboardUser>>, PrismaPromise<Array<PublicationDashboardUserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Publication base type for findUnique actions
   */
  export type PublicationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Publication
     * 
    **/
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationInclude | null
    /**
     * Filter, which Publication to fetch.
     * 
    **/
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication: findUnique
   */
  export interface PublicationFindUniqueArgs extends PublicationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Publication base type for findFirst actions
   */
  export type PublicationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Publication
     * 
    **/
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationInclude | null
    /**
     * Filter, which Publication to fetch.
     * 
    **/
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     * 
    **/
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     * 
    **/
    distinct?: Enumerable<PublicationScalarFieldEnum>
  }

  /**
   * Publication: findFirst
   */
  export interface PublicationFindFirstArgs extends PublicationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Publication
     * 
    **/
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationInclude | null
    /**
     * Filter, which Publications to fetch.
     * 
    **/
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     * 
    **/
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PublicationScalarFieldEnum>
  }


  /**
   * Publication create
   */
  export type PublicationCreateArgs = {
    /**
     * Select specific fields to fetch from the Publication
     * 
    **/
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationInclude | null
    /**
     * The data needed to create a Publication.
     * 
    **/
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }


  /**
   * Publication createMany
   */
  export type PublicationCreateManyArgs = {
    /**
     * The data used to create many Publications.
     * 
    **/
    data: Enumerable<PublicationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Publication update
   */
  export type PublicationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Publication
     * 
    **/
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationInclude | null
    /**
     * The data needed to update a Publication.
     * 
    **/
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     * 
    **/
    where: PublicationWhereUniqueInput
  }


  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs = {
    /**
     * The data used to update Publications.
     * 
    **/
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     * 
    **/
    where?: PublicationWhereInput
  }


  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Publication
     * 
    **/
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationInclude | null
    /**
     * The filter to search for the Publication to update in case it exists.
     * 
    **/
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     * 
    **/
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }


  /**
   * Publication delete
   */
  export type PublicationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Publication
     * 
    **/
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationInclude | null
    /**
     * Filter which Publication to delete.
     * 
    **/
    where: PublicationWhereUniqueInput
  }


  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs = {
    /**
     * Filter which Publications to delete
     * 
    **/
    where?: PublicationWhereInput
  }


  /**
   * Publication: findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs = PublicationFindUniqueArgsBase
      

  /**
   * Publication: findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs = PublicationFindFirstArgsBase
      

  /**
   * Publication without action
   */
  export type PublicationArgs = {
    /**
     * Select specific fields to fetch from the Publication
     * 
    **/
    select?: PublicationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationInclude | null
  }



  /**
   * Model PublicationDashboardUser
   */


  export type AggregatePublicationDashboardUser = {
    _count: PublicationDashboardUserCountAggregateOutputType | null
    _min: PublicationDashboardUserMinAggregateOutputType | null
    _max: PublicationDashboardUserMaxAggregateOutputType | null
  }

  export type PublicationDashboardUserMinAggregateOutputType = {
    publicationId: string | null
    userId: string | null
    updatedAt: Date | null
    permission: PublicationPermission | null
  }

  export type PublicationDashboardUserMaxAggregateOutputType = {
    publicationId: string | null
    userId: string | null
    updatedAt: Date | null
    permission: PublicationPermission | null
  }

  export type PublicationDashboardUserCountAggregateOutputType = {
    publicationId: number
    userId: number
    updatedAt: number
    permission: number
    _all: number
  }


  export type PublicationDashboardUserMinAggregateInputType = {
    publicationId?: true
    userId?: true
    updatedAt?: true
    permission?: true
  }

  export type PublicationDashboardUserMaxAggregateInputType = {
    publicationId?: true
    userId?: true
    updatedAt?: true
    permission?: true
  }

  export type PublicationDashboardUserCountAggregateInputType = {
    publicationId?: true
    userId?: true
    updatedAt?: true
    permission?: true
    _all?: true
  }

  export type PublicationDashboardUserAggregateArgs = {
    /**
     * Filter which PublicationDashboardUser to aggregate.
     * 
    **/
    where?: PublicationDashboardUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationDashboardUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicationDashboardUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PublicationDashboardUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationDashboardUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationDashboardUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicationDashboardUsers
    **/
    _count?: true | PublicationDashboardUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationDashboardUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationDashboardUserMaxAggregateInputType
  }

  export type GetPublicationDashboardUserAggregateType<T extends PublicationDashboardUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicationDashboardUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicationDashboardUser[P]>
      : GetScalarType<T[P], AggregatePublicationDashboardUser[P]>
  }




  export type PublicationDashboardUserGroupByArgs = {
    where?: PublicationDashboardUserWhereInput
    orderBy?: Enumerable<PublicationDashboardUserOrderByWithAggregationInput>
    by: Array<PublicationDashboardUserScalarFieldEnum>
    having?: PublicationDashboardUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationDashboardUserCountAggregateInputType | true
    _min?: PublicationDashboardUserMinAggregateInputType
    _max?: PublicationDashboardUserMaxAggregateInputType
  }


  export type PublicationDashboardUserGroupByOutputType = {
    publicationId: string
    userId: string
    updatedAt: Date
    permission: PublicationPermission
    _count: PublicationDashboardUserCountAggregateOutputType | null
    _min: PublicationDashboardUserMinAggregateOutputType | null
    _max: PublicationDashboardUserMaxAggregateOutputType | null
  }

  type GetPublicationDashboardUserGroupByPayload<T extends PublicationDashboardUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PublicationDashboardUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationDashboardUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationDashboardUserGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationDashboardUserGroupByOutputType[P]>
        }
      >
    >


  export type PublicationDashboardUserSelect = {
    publicationId?: boolean
    userId?: boolean
    updatedAt?: boolean
    permission?: boolean
    publication?: boolean | PublicationArgs
    user?: boolean | UserArgs
  }

  export type PublicationDashboardUserInclude = {
    publication?: boolean | PublicationArgs
    user?: boolean | UserArgs
  }

  export type PublicationDashboardUserGetPayload<
    S extends boolean | null | undefined | PublicationDashboardUserArgs,
    U = keyof S
      > = S extends true
        ? PublicationDashboardUser
    : S extends undefined
    ? never
    : S extends PublicationDashboardUserArgs | PublicationDashboardUserFindManyArgs
    ?'include' extends U
    ? PublicationDashboardUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'publication' ? PublicationGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'publication' ? PublicationGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof PublicationDashboardUser ? PublicationDashboardUser[P] : never
  } 
    : PublicationDashboardUser
  : PublicationDashboardUser


  type PublicationDashboardUserCountArgs = Merge<
    Omit<PublicationDashboardUserFindManyArgs, 'select' | 'include'> & {
      select?: PublicationDashboardUserCountAggregateInputType | true
    }
  >

  export interface PublicationDashboardUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PublicationDashboardUser that matches the filter.
     * @param {PublicationDashboardUserFindUniqueArgs} args - Arguments to find a PublicationDashboardUser
     * @example
     * // Get one PublicationDashboardUser
     * const publicationDashboardUser = await prisma.publicationDashboardUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicationDashboardUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublicationDashboardUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PublicationDashboardUser'> extends True ? CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser>, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T>>> : CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser | null >, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T> | null >>

    /**
     * Find the first PublicationDashboardUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationDashboardUserFindFirstArgs} args - Arguments to find a PublicationDashboardUser
     * @example
     * // Get one PublicationDashboardUser
     * const publicationDashboardUser = await prisma.publicationDashboardUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicationDashboardUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublicationDashboardUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PublicationDashboardUser'> extends True ? CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser>, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T>>> : CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser | null >, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T> | null >>

    /**
     * Find zero or more PublicationDashboardUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationDashboardUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicationDashboardUsers
     * const publicationDashboardUsers = await prisma.publicationDashboardUser.findMany()
     * 
     * // Get first 10 PublicationDashboardUsers
     * const publicationDashboardUsers = await prisma.publicationDashboardUser.findMany({ take: 10 })
     * 
     * // Only select the `publicationId`
     * const publicationDashboardUserWithPublicationIdOnly = await prisma.publicationDashboardUser.findMany({ select: { publicationId: true } })
     * 
    **/
    findMany<T extends PublicationDashboardUserFindManyArgs>(
      args?: SelectSubset<T, PublicationDashboardUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PublicationDashboardUser>>, PrismaPromise<Array<PublicationDashboardUserGetPayload<T>>>>

    /**
     * Create a PublicationDashboardUser.
     * @param {PublicationDashboardUserCreateArgs} args - Arguments to create a PublicationDashboardUser.
     * @example
     * // Create one PublicationDashboardUser
     * const PublicationDashboardUser = await prisma.publicationDashboardUser.create({
     *   data: {
     *     // ... data to create a PublicationDashboardUser
     *   }
     * })
     * 
    **/
    create<T extends PublicationDashboardUserCreateArgs>(
      args: SelectSubset<T, PublicationDashboardUserCreateArgs>
    ): CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser>, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T>>>

    /**
     * Create many PublicationDashboardUsers.
     *     @param {PublicationDashboardUserCreateManyArgs} args - Arguments to create many PublicationDashboardUsers.
     *     @example
     *     // Create many PublicationDashboardUsers
     *     const publicationDashboardUser = await prisma.publicationDashboardUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PublicationDashboardUserCreateManyArgs>(
      args?: SelectSubset<T, PublicationDashboardUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PublicationDashboardUser.
     * @param {PublicationDashboardUserDeleteArgs} args - Arguments to delete one PublicationDashboardUser.
     * @example
     * // Delete one PublicationDashboardUser
     * const PublicationDashboardUser = await prisma.publicationDashboardUser.delete({
     *   where: {
     *     // ... filter to delete one PublicationDashboardUser
     *   }
     * })
     * 
    **/
    delete<T extends PublicationDashboardUserDeleteArgs>(
      args: SelectSubset<T, PublicationDashboardUserDeleteArgs>
    ): CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser>, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T>>>

    /**
     * Update one PublicationDashboardUser.
     * @param {PublicationDashboardUserUpdateArgs} args - Arguments to update one PublicationDashboardUser.
     * @example
     * // Update one PublicationDashboardUser
     * const publicationDashboardUser = await prisma.publicationDashboardUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicationDashboardUserUpdateArgs>(
      args: SelectSubset<T, PublicationDashboardUserUpdateArgs>
    ): CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser>, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T>>>

    /**
     * Delete zero or more PublicationDashboardUsers.
     * @param {PublicationDashboardUserDeleteManyArgs} args - Arguments to filter PublicationDashboardUsers to delete.
     * @example
     * // Delete a few PublicationDashboardUsers
     * const { count } = await prisma.publicationDashboardUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicationDashboardUserDeleteManyArgs>(
      args?: SelectSubset<T, PublicationDashboardUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicationDashboardUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationDashboardUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicationDashboardUsers
     * const publicationDashboardUser = await prisma.publicationDashboardUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicationDashboardUserUpdateManyArgs>(
      args: SelectSubset<T, PublicationDashboardUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicationDashboardUser.
     * @param {PublicationDashboardUserUpsertArgs} args - Arguments to update or create a PublicationDashboardUser.
     * @example
     * // Update or create a PublicationDashboardUser
     * const publicationDashboardUser = await prisma.publicationDashboardUser.upsert({
     *   create: {
     *     // ... data to create a PublicationDashboardUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicationDashboardUser we want to update
     *   }
     * })
    **/
    upsert<T extends PublicationDashboardUserUpsertArgs>(
      args: SelectSubset<T, PublicationDashboardUserUpsertArgs>
    ): CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser>, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T>>>

    /**
     * Find one PublicationDashboardUser that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PublicationDashboardUserFindUniqueOrThrowArgs} args - Arguments to find a PublicationDashboardUser
     * @example
     * // Get one PublicationDashboardUser
     * const publicationDashboardUser = await prisma.publicationDashboardUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicationDashboardUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PublicationDashboardUserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser>, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T>>>

    /**
     * Find the first PublicationDashboardUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationDashboardUserFindFirstOrThrowArgs} args - Arguments to find a PublicationDashboardUser
     * @example
     * // Get one PublicationDashboardUser
     * const publicationDashboardUser = await prisma.publicationDashboardUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicationDashboardUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PublicationDashboardUserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PublicationDashboardUserClient<PublicationDashboardUser>, Prisma__PublicationDashboardUserClient<PublicationDashboardUserGetPayload<T>>>

    /**
     * Count the number of PublicationDashboardUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationDashboardUserCountArgs} args - Arguments to filter PublicationDashboardUsers to count.
     * @example
     * // Count the number of PublicationDashboardUsers
     * const count = await prisma.publicationDashboardUser.count({
     *   where: {
     *     // ... the filter for the PublicationDashboardUsers we want to count
     *   }
     * })
    **/
    count<T extends PublicationDashboardUserCountArgs>(
      args?: Subset<T, PublicationDashboardUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationDashboardUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicationDashboardUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationDashboardUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationDashboardUserAggregateArgs>(args: Subset<T, PublicationDashboardUserAggregateArgs>): PrismaPromise<GetPublicationDashboardUserAggregateType<T>>

    /**
     * Group by PublicationDashboardUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationDashboardUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationDashboardUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationDashboardUserGroupByArgs['orderBy'] }
        : { orderBy?: PublicationDashboardUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationDashboardUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationDashboardUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicationDashboardUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublicationDashboardUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    publication<T extends PublicationArgs = {}>(args?: Subset<T, PublicationArgs>): CheckSelect<T, Prisma__PublicationClient<Publication | null >, Prisma__PublicationClient<PublicationGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PublicationDashboardUser base type for findUnique actions
   */
  export type PublicationDashboardUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PublicationDashboardUser
     * 
    **/
    select?: PublicationDashboardUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationDashboardUserInclude | null
    /**
     * Filter, which PublicationDashboardUser to fetch.
     * 
    **/
    where: PublicationDashboardUserWhereUniqueInput
  }

  /**
   * PublicationDashboardUser: findUnique
   */
  export interface PublicationDashboardUserFindUniqueArgs extends PublicationDashboardUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicationDashboardUser base type for findFirst actions
   */
  export type PublicationDashboardUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PublicationDashboardUser
     * 
    **/
    select?: PublicationDashboardUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationDashboardUserInclude | null
    /**
     * Filter, which PublicationDashboardUser to fetch.
     * 
    **/
    where?: PublicationDashboardUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationDashboardUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicationDashboardUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicationDashboardUsers.
     * 
    **/
    cursor?: PublicationDashboardUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationDashboardUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationDashboardUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicationDashboardUsers.
     * 
    **/
    distinct?: Enumerable<PublicationDashboardUserScalarFieldEnum>
  }

  /**
   * PublicationDashboardUser: findFirst
   */
  export interface PublicationDashboardUserFindFirstArgs extends PublicationDashboardUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicationDashboardUser findMany
   */
  export type PublicationDashboardUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the PublicationDashboardUser
     * 
    **/
    select?: PublicationDashboardUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationDashboardUserInclude | null
    /**
     * Filter, which PublicationDashboardUsers to fetch.
     * 
    **/
    where?: PublicationDashboardUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicationDashboardUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<PublicationDashboardUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicationDashboardUsers.
     * 
    **/
    cursor?: PublicationDashboardUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicationDashboardUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicationDashboardUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PublicationDashboardUserScalarFieldEnum>
  }


  /**
   * PublicationDashboardUser create
   */
  export type PublicationDashboardUserCreateArgs = {
    /**
     * Select specific fields to fetch from the PublicationDashboardUser
     * 
    **/
    select?: PublicationDashboardUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationDashboardUserInclude | null
    /**
     * The data needed to create a PublicationDashboardUser.
     * 
    **/
    data: XOR<PublicationDashboardUserCreateInput, PublicationDashboardUserUncheckedCreateInput>
  }


  /**
   * PublicationDashboardUser createMany
   */
  export type PublicationDashboardUserCreateManyArgs = {
    /**
     * The data used to create many PublicationDashboardUsers.
     * 
    **/
    data: Enumerable<PublicationDashboardUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PublicationDashboardUser update
   */
  export type PublicationDashboardUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the PublicationDashboardUser
     * 
    **/
    select?: PublicationDashboardUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationDashboardUserInclude | null
    /**
     * The data needed to update a PublicationDashboardUser.
     * 
    **/
    data: XOR<PublicationDashboardUserUpdateInput, PublicationDashboardUserUncheckedUpdateInput>
    /**
     * Choose, which PublicationDashboardUser to update.
     * 
    **/
    where: PublicationDashboardUserWhereUniqueInput
  }


  /**
   * PublicationDashboardUser updateMany
   */
  export type PublicationDashboardUserUpdateManyArgs = {
    /**
     * The data used to update PublicationDashboardUsers.
     * 
    **/
    data: XOR<PublicationDashboardUserUpdateManyMutationInput, PublicationDashboardUserUncheckedUpdateManyInput>
    /**
     * Filter which PublicationDashboardUsers to update
     * 
    **/
    where?: PublicationDashboardUserWhereInput
  }


  /**
   * PublicationDashboardUser upsert
   */
  export type PublicationDashboardUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the PublicationDashboardUser
     * 
    **/
    select?: PublicationDashboardUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationDashboardUserInclude | null
    /**
     * The filter to search for the PublicationDashboardUser to update in case it exists.
     * 
    **/
    where: PublicationDashboardUserWhereUniqueInput
    /**
     * In case the PublicationDashboardUser found by the `where` argument doesn't exist, create a new PublicationDashboardUser with this data.
     * 
    **/
    create: XOR<PublicationDashboardUserCreateInput, PublicationDashboardUserUncheckedCreateInput>
    /**
     * In case the PublicationDashboardUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PublicationDashboardUserUpdateInput, PublicationDashboardUserUncheckedUpdateInput>
  }


  /**
   * PublicationDashboardUser delete
   */
  export type PublicationDashboardUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the PublicationDashboardUser
     * 
    **/
    select?: PublicationDashboardUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationDashboardUserInclude | null
    /**
     * Filter which PublicationDashboardUser to delete.
     * 
    **/
    where: PublicationDashboardUserWhereUniqueInput
  }


  /**
   * PublicationDashboardUser deleteMany
   */
  export type PublicationDashboardUserDeleteManyArgs = {
    /**
     * Filter which PublicationDashboardUsers to delete
     * 
    **/
    where?: PublicationDashboardUserWhereInput
  }


  /**
   * PublicationDashboardUser: findUniqueOrThrow
   */
  export type PublicationDashboardUserFindUniqueOrThrowArgs = PublicationDashboardUserFindUniqueArgsBase
      

  /**
   * PublicationDashboardUser: findFirstOrThrow
   */
  export type PublicationDashboardUserFindFirstOrThrowArgs = PublicationDashboardUserFindFirstArgsBase
      

  /**
   * PublicationDashboardUser without action
   */
  export type PublicationDashboardUserArgs = {
    /**
     * Select specific fields to fetch from the PublicationDashboardUser
     * 
    **/
    select?: PublicationDashboardUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PublicationDashboardUserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserAccountScalarFieldEnum: {
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastSignedInAt: 'lastSignedInAt',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified'
  };

  export type UserAccountScalarFieldEnum = (typeof UserAccountScalarFieldEnum)[keyof typeof UserAccountScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    bio: 'bio',
    location: 'location',
    photo: 'photo'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const UserStripeCustomerScalarFieldEnum: {
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    stripeCustomerId: 'stripeCustomerId',
    customer: 'customer'
  };

  export type UserStripeCustomerScalarFieldEnum = (typeof UserStripeCustomerScalarFieldEnum)[keyof typeof UserStripeCustomerScalarFieldEnum]


  export const UserBalanceItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    amount: 'amount',
    type: 'type'
  };

  export type UserBalanceItemScalarFieldEnum = (typeof UserBalanceItemScalarFieldEnum)[keyof typeof UserBalanceItemScalarFieldEnum]


  export const UserMagicLinkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    secret: 'secret',
    used: 'used',
    remember: 'remember',
    action: 'action',
    newEmail: 'newEmail'
  };

  export type UserMagicLinkScalarFieldEnum = (typeof UserMagicLinkScalarFieldEnum)[keyof typeof UserMagicLinkScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    organizationName: 'organizationName',
    logo: 'logo',
    tagline: 'tagline',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const PublicationDashboardUserScalarFieldEnum: {
    publicationId: 'publicationId',
    userId: 'userId',
    updatedAt: 'updatedAt',
    permission: 'permission'
  };

  export type PublicationDashboardUserScalarFieldEnum = (typeof PublicationDashboardUserScalarFieldEnum)[keyof typeof PublicationDashboardUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    account?: XOR<UserAccountRelationFilter, UserAccountWhereInput> | null
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput> | null
    stripeCustomer?: XOR<UserStripeCustomerRelationFilter, UserStripeCustomerWhereInput> | null
    balanceItems?: UserBalanceItemListRelationFilter
    magicLinks?: UserMagicLinkListRelationFilter
    publicationDashboards?: PublicationDashboardUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    account?: UserAccountOrderByWithRelationInput
    profile?: UserProfileOrderByWithRelationInput
    stripeCustomer?: UserStripeCustomerOrderByWithRelationInput
    balanceItems?: UserBalanceItemOrderByRelationAggregateInput
    magicLinks?: UserMagicLinkOrderByRelationAggregateInput
    publicationDashboards?: PublicationDashboardUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserAccountWhereInput = {
    AND?: Enumerable<UserAccountWhereInput>
    OR?: Enumerable<UserAccountWhereInput>
    NOT?: Enumerable<UserAccountWhereInput>
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    lastSignedInAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    emailVerified?: BoolFilter | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserAccountOrderByWithRelationInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSignedInAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAccountWhereUniqueInput = {
    userId?: string
    email?: string
  }

  export type UserAccountOrderByWithAggregationInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSignedInAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    _count?: UserAccountCountOrderByAggregateInput
    _max?: UserAccountMaxOrderByAggregateInput
    _min?: UserAccountMinOrderByAggregateInput
  }

  export type UserAccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserAccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserAccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserAccountScalarWhereWithAggregatesInput>
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    lastSignedInAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    emailVerified?: BoolWithAggregatesFilter | boolean
  }

  export type UserProfileWhereInput = {
    AND?: Enumerable<UserProfileWhereInput>
    OR?: Enumerable<UserProfileWhereInput>
    NOT?: Enumerable<UserProfileWhereInput>
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    bio?: StringNullableFilter | string | null
    location?: StringNullableFilter | string | null
    photo?: JsonNullableFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    photo?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = {
    userId?: string
  }

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    photo?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    bio?: StringNullableWithAggregatesFilter | string | null
    location?: StringNullableWithAggregatesFilter | string | null
    photo?: JsonNullableWithAggregatesFilter
  }

  export type UserStripeCustomerWhereInput = {
    AND?: Enumerable<UserStripeCustomerWhereInput>
    OR?: Enumerable<UserStripeCustomerWhereInput>
    NOT?: Enumerable<UserStripeCustomerWhereInput>
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    stripeCustomerId?: StringFilter | string
    customer?: JsonFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserStripeCustomerOrderByWithRelationInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    customer?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserStripeCustomerWhereUniqueInput = {
    userId?: string
    stripeCustomerId?: string
  }

  export type UserStripeCustomerOrderByWithAggregationInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    customer?: SortOrder
    _count?: UserStripeCustomerCountOrderByAggregateInput
    _max?: UserStripeCustomerMaxOrderByAggregateInput
    _min?: UserStripeCustomerMinOrderByAggregateInput
  }

  export type UserStripeCustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserStripeCustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserStripeCustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserStripeCustomerScalarWhereWithAggregatesInput>
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    stripeCustomerId?: StringWithAggregatesFilter | string
    customer?: JsonWithAggregatesFilter
  }

  export type UserBalanceItemWhereInput = {
    AND?: Enumerable<UserBalanceItemWhereInput>
    OR?: Enumerable<UserBalanceItemWhereInput>
    NOT?: Enumerable<UserBalanceItemWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    amount?: IntFilter | number
    type?: EnumUserBalancItemTypeFilter | UserBalancItemType
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserBalanceItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserBalanceItemWhereUniqueInput = {
    id?: string
  }

  export type UserBalanceItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    _count?: UserBalanceItemCountOrderByAggregateInput
    _avg?: UserBalanceItemAvgOrderByAggregateInput
    _max?: UserBalanceItemMaxOrderByAggregateInput
    _min?: UserBalanceItemMinOrderByAggregateInput
    _sum?: UserBalanceItemSumOrderByAggregateInput
  }

  export type UserBalanceItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserBalanceItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserBalanceItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserBalanceItemScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    type?: EnumUserBalancItemTypeWithAggregatesFilter | UserBalancItemType
  }

  export type UserMagicLinkWhereInput = {
    AND?: Enumerable<UserMagicLinkWhereInput>
    OR?: Enumerable<UserMagicLinkWhereInput>
    NOT?: Enumerable<UserMagicLinkWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    secret?: StringFilter | string
    used?: BoolFilter | boolean
    remember?: BoolFilter | boolean
    action?: EnumMagicLinkActionFilter | MagicLinkAction
    newEmail?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserMagicLinkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    secret?: SortOrder
    used?: SortOrder
    remember?: SortOrder
    action?: SortOrder
    newEmail?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserMagicLinkWhereUniqueInput = {
    id?: string
  }

  export type UserMagicLinkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    secret?: SortOrder
    used?: SortOrder
    remember?: SortOrder
    action?: SortOrder
    newEmail?: SortOrder
    _count?: UserMagicLinkCountOrderByAggregateInput
    _max?: UserMagicLinkMaxOrderByAggregateInput
    _min?: UserMagicLinkMinOrderByAggregateInput
  }

  export type UserMagicLinkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserMagicLinkScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserMagicLinkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserMagicLinkScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    secret?: StringWithAggregatesFilter | string
    used?: BoolWithAggregatesFilter | boolean
    remember?: BoolWithAggregatesFilter | boolean
    action?: EnumMagicLinkActionWithAggregatesFilter | MagicLinkAction
    newEmail?: StringNullableWithAggregatesFilter | string | null
  }

  export type PublicationWhereInput = {
    AND?: Enumerable<PublicationWhereInput>
    OR?: Enumerable<PublicationWhereInput>
    NOT?: Enumerable<PublicationWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    organizationName?: StringFilter | string
    logo?: JsonNullableFilter
    tagline?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    dashboardUsers?: PublicationDashboardUserListRelationFilter
  }

  export type PublicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    organizationName?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dashboardUsers?: PublicationDashboardUserOrderByRelationAggregateInput
  }

  export type PublicationWhereUniqueInput = {
    id?: string
  }

  export type PublicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    organizationName?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublicationScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublicationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublicationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    organizationName?: StringWithAggregatesFilter | string
    logo?: JsonNullableWithAggregatesFilter
    tagline?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PublicationDashboardUserWhereInput = {
    AND?: Enumerable<PublicationDashboardUserWhereInput>
    OR?: Enumerable<PublicationDashboardUserWhereInput>
    NOT?: Enumerable<PublicationDashboardUserWhereInput>
    publicationId?: StringFilter | string
    userId?: StringFilter | string
    updatedAt?: DateTimeFilter | Date | string
    permission?: EnumPublicationPermissionFilter | PublicationPermission
    publication?: XOR<PublicationRelationFilter, PublicationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PublicationDashboardUserOrderByWithRelationInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
    publication?: PublicationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PublicationDashboardUserWhereUniqueInput = {
    userId_publicationId?: PublicationDashboardUserUserIdPublicationIdCompoundUniqueInput
  }

  export type PublicationDashboardUserOrderByWithAggregationInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
    _count?: PublicationDashboardUserCountOrderByAggregateInput
    _max?: PublicationDashboardUserMaxOrderByAggregateInput
    _min?: PublicationDashboardUserMinOrderByAggregateInput
  }

  export type PublicationDashboardUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublicationDashboardUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublicationDashboardUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublicationDashboardUserScalarWhereWithAggregatesInput>
    publicationId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    permission?: EnumPublicationPermissionWithAggregatesFilter | PublicationPermission
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerUncheckedCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemUncheckedCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkUncheckedCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUncheckedUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUncheckedUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccountCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSignedInAt?: Date | string
    email: string
    password: string
    emailVerified: boolean
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type UserAccountUncheckedCreateInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSignedInAt?: Date | string
    email: string
    password: string
    emailVerified: boolean
  }

  export type UserAccountUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type UserAccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAccountCreateManyInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSignedInAt?: Date | string
    email: string
    password: string
    emailVerified: boolean
  }

  export type UserAccountUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserProfileCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    location?: string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    location?: string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileCreateManyInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    location?: string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId: string
    customer: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStripeCustomerInput
  }

  export type UserStripeCustomerUncheckedCreateInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId: string
    customer: JsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    customer?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStripeCustomerNestedInput
  }

  export type UserStripeCustomerUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    customer?: JsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerCreateManyInput = {
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId: string
    customer: JsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    customer?: JsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    customer?: JsonNullValueInput | InputJsonValue
  }

  export type UserBalanceItemCreateInput = {
    id?: string
    createdAt?: Date | string
    amount: number
    type: UserBalancItemType
    user: UserCreateNestedOneWithoutBalanceItemsInput
  }

  export type UserBalanceItemUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    amount: number
    type: UserBalancItemType
  }

  export type UserBalanceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumUserBalancItemTypeFieldUpdateOperationsInput | UserBalancItemType
    user?: UserUpdateOneRequiredWithoutBalanceItemsNestedInput
  }

  export type UserBalanceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumUserBalancItemTypeFieldUpdateOperationsInput | UserBalancItemType
  }

  export type UserBalanceItemCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    amount: number
    type: UserBalancItemType
  }

  export type UserBalanceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumUserBalancItemTypeFieldUpdateOperationsInput | UserBalancItemType
  }

  export type UserBalanceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumUserBalancItemTypeFieldUpdateOperationsInput | UserBalancItemType
  }

  export type UserMagicLinkCreateInput = {
    id?: string
    createdAt?: Date | string
    secret: string
    used?: boolean
    remember: boolean
    action: MagicLinkAction
    newEmail?: string | null
    user: UserCreateNestedOneWithoutMagicLinksInput
  }

  export type UserMagicLinkUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    secret: string
    used?: boolean
    remember: boolean
    action: MagicLinkAction
    newEmail?: string | null
  }

  export type UserMagicLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secret?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    remember?: BoolFieldUpdateOperationsInput | boolean
    action?: EnumMagicLinkActionFieldUpdateOperationsInput | MagicLinkAction
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMagicLinksNestedInput
  }

  export type UserMagicLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secret?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    remember?: BoolFieldUpdateOperationsInput | boolean
    action?: EnumMagicLinkActionFieldUpdateOperationsInput | MagicLinkAction
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserMagicLinkCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    secret: string
    used?: boolean
    remember: boolean
    action: MagicLinkAction
    newEmail?: string | null
  }

  export type UserMagicLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secret?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    remember?: BoolFieldUpdateOperationsInput | boolean
    action?: EnumMagicLinkActionFieldUpdateOperationsInput | MagicLinkAction
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserMagicLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secret?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    remember?: BoolFieldUpdateOperationsInput | boolean
    action?: EnumMagicLinkActionFieldUpdateOperationsInput | MagicLinkAction
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationCreateInput = {
    id?: string
    name: string
    url: string
    organizationName: string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dashboardUsers?: PublicationDashboardUserCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    organizationName: string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dashboardUsers?: PublicationDashboardUserUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type PublicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardUsers?: PublicationDashboardUserUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardUsers?: PublicationDashboardUserUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type PublicationCreateManyInput = {
    id?: string
    name: string
    url: string
    organizationName: string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationDashboardUserCreateInput = {
    updatedAt?: Date | string
    permission: PublicationPermission
    publication: PublicationCreateNestedOneWithoutDashboardUsersInput
    user: UserCreateNestedOneWithoutPublicationDashboardsInput
  }

  export type PublicationDashboardUserUncheckedCreateInput = {
    publicationId: string
    userId: string
    updatedAt?: Date | string
    permission: PublicationPermission
  }

  export type PublicationDashboardUserUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
    publication?: PublicationUpdateOneRequiredWithoutDashboardUsersNestedInput
    user?: UserUpdateOneRequiredWithoutPublicationDashboardsNestedInput
  }

  export type PublicationDashboardUserUncheckedUpdateInput = {
    publicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
  }

  export type PublicationDashboardUserCreateManyInput = {
    publicationId: string
    userId: string
    updatedAt?: Date | string
    permission: PublicationPermission
  }

  export type PublicationDashboardUserUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
  }

  export type PublicationDashboardUserUncheckedUpdateManyInput = {
    publicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserAccountRelationFilter = {
    is?: UserAccountWhereInput | null
    isNot?: UserAccountWhereInput | null
  }

  export type UserProfileRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type UserStripeCustomerRelationFilter = {
    is?: UserStripeCustomerWhereInput | null
    isNot?: UserStripeCustomerWhereInput | null
  }

  export type UserBalanceItemListRelationFilter = {
    every?: UserBalanceItemWhereInput
    some?: UserBalanceItemWhereInput
    none?: UserBalanceItemWhereInput
  }

  export type UserMagicLinkListRelationFilter = {
    every?: UserMagicLinkWhereInput
    some?: UserMagicLinkWhereInput
    none?: UserMagicLinkWhereInput
  }

  export type PublicationDashboardUserListRelationFilter = {
    every?: PublicationDashboardUserWhereInput
    some?: PublicationDashboardUserWhereInput
    none?: PublicationDashboardUserWhereInput
  }

  export type UserBalanceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMagicLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationDashboardUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserAccountCountOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSignedInAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserAccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSignedInAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserAccountMinOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastSignedInAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    photo?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    location?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    location?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type UserStripeCustomerCountOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
    customer?: SortOrder
  }

  export type UserStripeCustomerMaxOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserStripeCustomerMinOrderByAggregateInput = {
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stripeCustomerId?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumUserBalancItemTypeFilter = {
    equals?: UserBalancItemType
    in?: Enumerable<UserBalancItemType>
    notIn?: Enumerable<UserBalancItemType>
    not?: NestedEnumUserBalancItemTypeFilter | UserBalancItemType
  }

  export type UserBalanceItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
  }

  export type UserBalanceItemAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserBalanceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
  }

  export type UserBalanceItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
  }

  export type UserBalanceItemSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumUserBalancItemTypeWithAggregatesFilter = {
    equals?: UserBalancItemType
    in?: Enumerable<UserBalancItemType>
    notIn?: Enumerable<UserBalancItemType>
    not?: NestedEnumUserBalancItemTypeWithAggregatesFilter | UserBalancItemType
    _count?: NestedIntFilter
    _min?: NestedEnumUserBalancItemTypeFilter
    _max?: NestedEnumUserBalancItemTypeFilter
  }

  export type EnumMagicLinkActionFilter = {
    equals?: MagicLinkAction
    in?: Enumerable<MagicLinkAction>
    notIn?: Enumerable<MagicLinkAction>
    not?: NestedEnumMagicLinkActionFilter | MagicLinkAction
  }

  export type UserMagicLinkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    secret?: SortOrder
    used?: SortOrder
    remember?: SortOrder
    action?: SortOrder
    newEmail?: SortOrder
  }

  export type UserMagicLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    secret?: SortOrder
    used?: SortOrder
    remember?: SortOrder
    action?: SortOrder
    newEmail?: SortOrder
  }

  export type UserMagicLinkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    secret?: SortOrder
    used?: SortOrder
    remember?: SortOrder
    action?: SortOrder
    newEmail?: SortOrder
  }

  export type EnumMagicLinkActionWithAggregatesFilter = {
    equals?: MagicLinkAction
    in?: Enumerable<MagicLinkAction>
    notIn?: Enumerable<MagicLinkAction>
    not?: NestedEnumMagicLinkActionWithAggregatesFilter | MagicLinkAction
    _count?: NestedIntFilter
    _min?: NestedEnumMagicLinkActionFilter
    _max?: NestedEnumMagicLinkActionFilter
  }

  export type PublicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    organizationName?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    organizationName?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    organizationName?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPublicationPermissionFilter = {
    equals?: PublicationPermission
    in?: Enumerable<PublicationPermission>
    notIn?: Enumerable<PublicationPermission>
    not?: NestedEnumPublicationPermissionFilter | PublicationPermission
  }

  export type PublicationRelationFilter = {
    is?: PublicationWhereInput
    isNot?: PublicationWhereInput
  }

  export type PublicationDashboardUserUserIdPublicationIdCompoundUniqueInput = {
    userId: string
    publicationId: string
  }

  export type PublicationDashboardUserCountOrderByAggregateInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
  }

  export type PublicationDashboardUserMaxOrderByAggregateInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
  }

  export type PublicationDashboardUserMinOrderByAggregateInput = {
    publicationId?: SortOrder
    userId?: SortOrder
    updatedAt?: SortOrder
    permission?: SortOrder
  }

  export type EnumPublicationPermissionWithAggregatesFilter = {
    equals?: PublicationPermission
    in?: Enumerable<PublicationPermission>
    notIn?: Enumerable<PublicationPermission>
    not?: NestedEnumPublicationPermissionWithAggregatesFilter | PublicationPermission
    _count?: NestedIntFilter
    _min?: NestedEnumPublicationPermissionFilter
    _max?: NestedEnumPublicationPermissionFilter
  }

  export type UserAccountCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAccountCreateWithoutUserInput, UserAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAccountCreateOrConnectWithoutUserInput
    connect?: UserAccountWhereUniqueInput
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserStripeCustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStripeCustomerCreateWithoutUserInput, UserStripeCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStripeCustomerCreateOrConnectWithoutUserInput
    connect?: UserStripeCustomerWhereUniqueInput
  }

  export type UserBalanceItemCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserBalanceItemCreateWithoutUserInput>, Enumerable<UserBalanceItemUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserBalanceItemCreateOrConnectWithoutUserInput>
    createMany?: UserBalanceItemCreateManyUserInputEnvelope
    connect?: Enumerable<UserBalanceItemWhereUniqueInput>
  }

  export type UserMagicLinkCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserMagicLinkCreateWithoutUserInput>, Enumerable<UserMagicLinkUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserMagicLinkCreateOrConnectWithoutUserInput>
    createMany?: UserMagicLinkCreateManyUserInputEnvelope
    connect?: Enumerable<UserMagicLinkWhereUniqueInput>
  }

  export type PublicationDashboardUserCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PublicationDashboardUserCreateWithoutUserInput>, Enumerable<PublicationDashboardUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicationDashboardUserCreateOrConnectWithoutUserInput>
    createMany?: PublicationDashboardUserCreateManyUserInputEnvelope
    connect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
  }

  export type UserAccountUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAccountCreateWithoutUserInput, UserAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAccountCreateOrConnectWithoutUserInput
    connect?: UserAccountWhereUniqueInput
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserStripeCustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStripeCustomerCreateWithoutUserInput, UserStripeCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStripeCustomerCreateOrConnectWithoutUserInput
    connect?: UserStripeCustomerWhereUniqueInput
  }

  export type UserBalanceItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserBalanceItemCreateWithoutUserInput>, Enumerable<UserBalanceItemUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserBalanceItemCreateOrConnectWithoutUserInput>
    createMany?: UserBalanceItemCreateManyUserInputEnvelope
    connect?: Enumerable<UserBalanceItemWhereUniqueInput>
  }

  export type UserMagicLinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserMagicLinkCreateWithoutUserInput>, Enumerable<UserMagicLinkUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserMagicLinkCreateOrConnectWithoutUserInput>
    createMany?: UserMagicLinkCreateManyUserInputEnvelope
    connect?: Enumerable<UserMagicLinkWhereUniqueInput>
  }

  export type PublicationDashboardUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PublicationDashboardUserCreateWithoutUserInput>, Enumerable<PublicationDashboardUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicationDashboardUserCreateOrConnectWithoutUserInput>
    createMany?: PublicationDashboardUserCreateManyUserInputEnvelope
    connect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserAccountUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAccountCreateWithoutUserInput, UserAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAccountCreateOrConnectWithoutUserInput
    upsert?: UserAccountUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserAccountWhereUniqueInput
    update?: XOR<UserAccountUpdateWithoutUserInput, UserAccountUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserStripeCustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStripeCustomerCreateWithoutUserInput, UserStripeCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStripeCustomerCreateOrConnectWithoutUserInput
    upsert?: UserStripeCustomerUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserStripeCustomerWhereUniqueInput
    update?: XOR<UserStripeCustomerUpdateWithoutUserInput, UserStripeCustomerUncheckedUpdateWithoutUserInput>
  }

  export type UserBalanceItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserBalanceItemCreateWithoutUserInput>, Enumerable<UserBalanceItemUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserBalanceItemCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserBalanceItemUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserBalanceItemCreateManyUserInputEnvelope
    set?: Enumerable<UserBalanceItemWhereUniqueInput>
    disconnect?: Enumerable<UserBalanceItemWhereUniqueInput>
    delete?: Enumerable<UserBalanceItemWhereUniqueInput>
    connect?: Enumerable<UserBalanceItemWhereUniqueInput>
    update?: Enumerable<UserBalanceItemUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserBalanceItemUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserBalanceItemScalarWhereInput>
  }

  export type UserMagicLinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserMagicLinkCreateWithoutUserInput>, Enumerable<UserMagicLinkUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserMagicLinkCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserMagicLinkUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserMagicLinkCreateManyUserInputEnvelope
    set?: Enumerable<UserMagicLinkWhereUniqueInput>
    disconnect?: Enumerable<UserMagicLinkWhereUniqueInput>
    delete?: Enumerable<UserMagicLinkWhereUniqueInput>
    connect?: Enumerable<UserMagicLinkWhereUniqueInput>
    update?: Enumerable<UserMagicLinkUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserMagicLinkUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserMagicLinkScalarWhereInput>
  }

  export type PublicationDashboardUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PublicationDashboardUserCreateWithoutUserInput>, Enumerable<PublicationDashboardUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicationDashboardUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PublicationDashboardUserUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PublicationDashboardUserCreateManyUserInputEnvelope
    set?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    disconnect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    delete?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    connect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    update?: Enumerable<PublicationDashboardUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PublicationDashboardUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PublicationDashboardUserScalarWhereInput>
  }

  export type UserAccountUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAccountCreateWithoutUserInput, UserAccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAccountCreateOrConnectWithoutUserInput
    upsert?: UserAccountUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserAccountWhereUniqueInput
    update?: XOR<UserAccountUpdateWithoutUserInput, UserAccountUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserStripeCustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStripeCustomerCreateWithoutUserInput, UserStripeCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStripeCustomerCreateOrConnectWithoutUserInput
    upsert?: UserStripeCustomerUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserStripeCustomerWhereUniqueInput
    update?: XOR<UserStripeCustomerUpdateWithoutUserInput, UserStripeCustomerUncheckedUpdateWithoutUserInput>
  }

  export type UserBalanceItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserBalanceItemCreateWithoutUserInput>, Enumerable<UserBalanceItemUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserBalanceItemCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserBalanceItemUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserBalanceItemCreateManyUserInputEnvelope
    set?: Enumerable<UserBalanceItemWhereUniqueInput>
    disconnect?: Enumerable<UserBalanceItemWhereUniqueInput>
    delete?: Enumerable<UserBalanceItemWhereUniqueInput>
    connect?: Enumerable<UserBalanceItemWhereUniqueInput>
    update?: Enumerable<UserBalanceItemUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserBalanceItemUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserBalanceItemScalarWhereInput>
  }

  export type UserMagicLinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserMagicLinkCreateWithoutUserInput>, Enumerable<UserMagicLinkUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserMagicLinkCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserMagicLinkUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserMagicLinkCreateManyUserInputEnvelope
    set?: Enumerable<UserMagicLinkWhereUniqueInput>
    disconnect?: Enumerable<UserMagicLinkWhereUniqueInput>
    delete?: Enumerable<UserMagicLinkWhereUniqueInput>
    connect?: Enumerable<UserMagicLinkWhereUniqueInput>
    update?: Enumerable<UserMagicLinkUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserMagicLinkUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserMagicLinkScalarWhereInput>
  }

  export type PublicationDashboardUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PublicationDashboardUserCreateWithoutUserInput>, Enumerable<PublicationDashboardUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicationDashboardUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PublicationDashboardUserUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PublicationDashboardUserCreateManyUserInputEnvelope
    set?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    disconnect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    delete?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    connect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    update?: Enumerable<PublicationDashboardUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PublicationDashboardUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PublicationDashboardUserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutStripeCustomerInput = {
    create?: XOR<UserCreateWithoutStripeCustomerInput, UserUncheckedCreateWithoutStripeCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutStripeCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStripeCustomerNestedInput = {
    create?: XOR<UserCreateWithoutStripeCustomerInput, UserUncheckedCreateWithoutStripeCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutStripeCustomerInput
    upsert?: UserUpsertWithoutStripeCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutStripeCustomerInput, UserUncheckedUpdateWithoutStripeCustomerInput>
  }

  export type UserCreateNestedOneWithoutBalanceItemsInput = {
    create?: XOR<UserCreateWithoutBalanceItemsInput, UserUncheckedCreateWithoutBalanceItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceItemsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUserBalancItemTypeFieldUpdateOperationsInput = {
    set?: UserBalancItemType
  }

  export type UserUpdateOneRequiredWithoutBalanceItemsNestedInput = {
    create?: XOR<UserCreateWithoutBalanceItemsInput, UserUncheckedCreateWithoutBalanceItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceItemsInput
    upsert?: UserUpsertWithoutBalanceItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBalanceItemsInput, UserUncheckedUpdateWithoutBalanceItemsInput>
  }

  export type UserCreateNestedOneWithoutMagicLinksInput = {
    create?: XOR<UserCreateWithoutMagicLinksInput, UserUncheckedCreateWithoutMagicLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutMagicLinksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMagicLinkActionFieldUpdateOperationsInput = {
    set?: MagicLinkAction
  }

  export type UserUpdateOneRequiredWithoutMagicLinksNestedInput = {
    create?: XOR<UserCreateWithoutMagicLinksInput, UserUncheckedCreateWithoutMagicLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutMagicLinksInput
    upsert?: UserUpsertWithoutMagicLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMagicLinksInput, UserUncheckedUpdateWithoutMagicLinksInput>
  }

  export type PublicationDashboardUserCreateNestedManyWithoutPublicationInput = {
    create?: XOR<Enumerable<PublicationDashboardUserCreateWithoutPublicationInput>, Enumerable<PublicationDashboardUserUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationDashboardUserCreateOrConnectWithoutPublicationInput>
    createMany?: PublicationDashboardUserCreateManyPublicationInputEnvelope
    connect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
  }

  export type PublicationDashboardUserUncheckedCreateNestedManyWithoutPublicationInput = {
    create?: XOR<Enumerable<PublicationDashboardUserCreateWithoutPublicationInput>, Enumerable<PublicationDashboardUserUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationDashboardUserCreateOrConnectWithoutPublicationInput>
    createMany?: PublicationDashboardUserCreateManyPublicationInputEnvelope
    connect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
  }

  export type PublicationDashboardUserUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<Enumerable<PublicationDashboardUserCreateWithoutPublicationInput>, Enumerable<PublicationDashboardUserUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationDashboardUserCreateOrConnectWithoutPublicationInput>
    upsert?: Enumerable<PublicationDashboardUserUpsertWithWhereUniqueWithoutPublicationInput>
    createMany?: PublicationDashboardUserCreateManyPublicationInputEnvelope
    set?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    disconnect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    delete?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    connect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    update?: Enumerable<PublicationDashboardUserUpdateWithWhereUniqueWithoutPublicationInput>
    updateMany?: Enumerable<PublicationDashboardUserUpdateManyWithWhereWithoutPublicationInput>
    deleteMany?: Enumerable<PublicationDashboardUserScalarWhereInput>
  }

  export type PublicationDashboardUserUncheckedUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<Enumerable<PublicationDashboardUserCreateWithoutPublicationInput>, Enumerable<PublicationDashboardUserUncheckedCreateWithoutPublicationInput>>
    connectOrCreate?: Enumerable<PublicationDashboardUserCreateOrConnectWithoutPublicationInput>
    upsert?: Enumerable<PublicationDashboardUserUpsertWithWhereUniqueWithoutPublicationInput>
    createMany?: PublicationDashboardUserCreateManyPublicationInputEnvelope
    set?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    disconnect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    delete?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    connect?: Enumerable<PublicationDashboardUserWhereUniqueInput>
    update?: Enumerable<PublicationDashboardUserUpdateWithWhereUniqueWithoutPublicationInput>
    updateMany?: Enumerable<PublicationDashboardUserUpdateManyWithWhereWithoutPublicationInput>
    deleteMany?: Enumerable<PublicationDashboardUserScalarWhereInput>
  }

  export type PublicationCreateNestedOneWithoutDashboardUsersInput = {
    create?: XOR<PublicationCreateWithoutDashboardUsersInput, PublicationUncheckedCreateWithoutDashboardUsersInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutDashboardUsersInput
    connect?: PublicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPublicationDashboardsInput = {
    create?: XOR<UserCreateWithoutPublicationDashboardsInput, UserUncheckedCreateWithoutPublicationDashboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicationDashboardsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPublicationPermissionFieldUpdateOperationsInput = {
    set?: PublicationPermission
  }

  export type PublicationUpdateOneRequiredWithoutDashboardUsersNestedInput = {
    create?: XOR<PublicationCreateWithoutDashboardUsersInput, PublicationUncheckedCreateWithoutDashboardUsersInput>
    connectOrCreate?: PublicationCreateOrConnectWithoutDashboardUsersInput
    upsert?: PublicationUpsertWithoutDashboardUsersInput
    connect?: PublicationWhereUniqueInput
    update?: XOR<PublicationUpdateWithoutDashboardUsersInput, PublicationUncheckedUpdateWithoutDashboardUsersInput>
  }

  export type UserUpdateOneRequiredWithoutPublicationDashboardsNestedInput = {
    create?: XOR<UserCreateWithoutPublicationDashboardsInput, UserUncheckedCreateWithoutPublicationDashboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicationDashboardsInput
    upsert?: UserUpsertWithoutPublicationDashboardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPublicationDashboardsInput, UserUncheckedUpdateWithoutPublicationDashboardsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedEnumUserBalancItemTypeFilter = {
    equals?: UserBalancItemType
    in?: Enumerable<UserBalancItemType>
    notIn?: Enumerable<UserBalancItemType>
    not?: NestedEnumUserBalancItemTypeFilter | UserBalancItemType
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumUserBalancItemTypeWithAggregatesFilter = {
    equals?: UserBalancItemType
    in?: Enumerable<UserBalancItemType>
    notIn?: Enumerable<UserBalancItemType>
    not?: NestedEnumUserBalancItemTypeWithAggregatesFilter | UserBalancItemType
    _count?: NestedIntFilter
    _min?: NestedEnumUserBalancItemTypeFilter
    _max?: NestedEnumUserBalancItemTypeFilter
  }

  export type NestedEnumMagicLinkActionFilter = {
    equals?: MagicLinkAction
    in?: Enumerable<MagicLinkAction>
    notIn?: Enumerable<MagicLinkAction>
    not?: NestedEnumMagicLinkActionFilter | MagicLinkAction
  }

  export type NestedEnumMagicLinkActionWithAggregatesFilter = {
    equals?: MagicLinkAction
    in?: Enumerable<MagicLinkAction>
    notIn?: Enumerable<MagicLinkAction>
    not?: NestedEnumMagicLinkActionWithAggregatesFilter | MagicLinkAction
    _count?: NestedIntFilter
    _min?: NestedEnumMagicLinkActionFilter
    _max?: NestedEnumMagicLinkActionFilter
  }

  export type NestedEnumPublicationPermissionFilter = {
    equals?: PublicationPermission
    in?: Enumerable<PublicationPermission>
    notIn?: Enumerable<PublicationPermission>
    not?: NestedEnumPublicationPermissionFilter | PublicationPermission
  }

  export type NestedEnumPublicationPermissionWithAggregatesFilter = {
    equals?: PublicationPermission
    in?: Enumerable<PublicationPermission>
    notIn?: Enumerable<PublicationPermission>
    not?: NestedEnumPublicationPermissionWithAggregatesFilter | PublicationPermission
    _count?: NestedIntFilter
    _min?: NestedEnumPublicationPermissionFilter
    _max?: NestedEnumPublicationPermissionFilter
  }

  export type UserAccountCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSignedInAt?: Date | string
    email: string
    password: string
    emailVerified: boolean
  }

  export type UserAccountUncheckedCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    lastSignedInAt?: Date | string
    email: string
    password: string
    emailVerified: boolean
  }

  export type UserAccountCreateOrConnectWithoutUserInput = {
    where: UserAccountWhereUniqueInput
    create: XOR<UserAccountCreateWithoutUserInput, UserAccountUncheckedCreateWithoutUserInput>
  }

  export type UserProfileCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    location?: string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    location?: string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserStripeCustomerCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId: string
    customer: JsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerUncheckedCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    stripeCustomerId: string
    customer: JsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerCreateOrConnectWithoutUserInput = {
    where: UserStripeCustomerWhereUniqueInput
    create: XOR<UserStripeCustomerCreateWithoutUserInput, UserStripeCustomerUncheckedCreateWithoutUserInput>
  }

  export type UserBalanceItemCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    amount: number
    type: UserBalancItemType
  }

  export type UserBalanceItemUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    amount: number
    type: UserBalancItemType
  }

  export type UserBalanceItemCreateOrConnectWithoutUserInput = {
    where: UserBalanceItemWhereUniqueInput
    create: XOR<UserBalanceItemCreateWithoutUserInput, UserBalanceItemUncheckedCreateWithoutUserInput>
  }

  export type UserBalanceItemCreateManyUserInputEnvelope = {
    data: Enumerable<UserBalanceItemCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserMagicLinkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    secret: string
    used?: boolean
    remember: boolean
    action: MagicLinkAction
    newEmail?: string | null
  }

  export type UserMagicLinkUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    secret: string
    used?: boolean
    remember: boolean
    action: MagicLinkAction
    newEmail?: string | null
  }

  export type UserMagicLinkCreateOrConnectWithoutUserInput = {
    where: UserMagicLinkWhereUniqueInput
    create: XOR<UserMagicLinkCreateWithoutUserInput, UserMagicLinkUncheckedCreateWithoutUserInput>
  }

  export type UserMagicLinkCreateManyUserInputEnvelope = {
    data: Enumerable<UserMagicLinkCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PublicationDashboardUserCreateWithoutUserInput = {
    updatedAt?: Date | string
    permission: PublicationPermission
    publication: PublicationCreateNestedOneWithoutDashboardUsersInput
  }

  export type PublicationDashboardUserUncheckedCreateWithoutUserInput = {
    publicationId: string
    updatedAt?: Date | string
    permission: PublicationPermission
  }

  export type PublicationDashboardUserCreateOrConnectWithoutUserInput = {
    where: PublicationDashboardUserWhereUniqueInput
    create: XOR<PublicationDashboardUserCreateWithoutUserInput, PublicationDashboardUserUncheckedCreateWithoutUserInput>
  }

  export type PublicationDashboardUserCreateManyUserInputEnvelope = {
    data: Enumerable<PublicationDashboardUserCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserAccountUpsertWithoutUserInput = {
    update: XOR<UserAccountUpdateWithoutUserInput, UserAccountUncheckedUpdateWithoutUserInput>
    create: XOR<UserAccountCreateWithoutUserInput, UserAccountUncheckedCreateWithoutUserInput>
  }

  export type UserAccountUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAccountUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerUpsertWithoutUserInput = {
    update: XOR<UserStripeCustomerUpdateWithoutUserInput, UserStripeCustomerUncheckedUpdateWithoutUserInput>
    create: XOR<UserStripeCustomerCreateWithoutUserInput, UserStripeCustomerUncheckedCreateWithoutUserInput>
  }

  export type UserStripeCustomerUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    customer?: JsonNullValueInput | InputJsonValue
  }

  export type UserStripeCustomerUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    customer?: JsonNullValueInput | InputJsonValue
  }

  export type UserBalanceItemUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBalanceItemWhereUniqueInput
    update: XOR<UserBalanceItemUpdateWithoutUserInput, UserBalanceItemUncheckedUpdateWithoutUserInput>
    create: XOR<UserBalanceItemCreateWithoutUserInput, UserBalanceItemUncheckedCreateWithoutUserInput>
  }

  export type UserBalanceItemUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBalanceItemWhereUniqueInput
    data: XOR<UserBalanceItemUpdateWithoutUserInput, UserBalanceItemUncheckedUpdateWithoutUserInput>
  }

  export type UserBalanceItemUpdateManyWithWhereWithoutUserInput = {
    where: UserBalanceItemScalarWhereInput
    data: XOR<UserBalanceItemUpdateManyMutationInput, UserBalanceItemUncheckedUpdateManyWithoutBalanceItemsInput>
  }

  export type UserBalanceItemScalarWhereInput = {
    AND?: Enumerable<UserBalanceItemScalarWhereInput>
    OR?: Enumerable<UserBalanceItemScalarWhereInput>
    NOT?: Enumerable<UserBalanceItemScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    amount?: IntFilter | number
    type?: EnumUserBalancItemTypeFilter | UserBalancItemType
  }

  export type UserMagicLinkUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMagicLinkWhereUniqueInput
    update: XOR<UserMagicLinkUpdateWithoutUserInput, UserMagicLinkUncheckedUpdateWithoutUserInput>
    create: XOR<UserMagicLinkCreateWithoutUserInput, UserMagicLinkUncheckedCreateWithoutUserInput>
  }

  export type UserMagicLinkUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMagicLinkWhereUniqueInput
    data: XOR<UserMagicLinkUpdateWithoutUserInput, UserMagicLinkUncheckedUpdateWithoutUserInput>
  }

  export type UserMagicLinkUpdateManyWithWhereWithoutUserInput = {
    where: UserMagicLinkScalarWhereInput
    data: XOR<UserMagicLinkUpdateManyMutationInput, UserMagicLinkUncheckedUpdateManyWithoutMagicLinksInput>
  }

  export type UserMagicLinkScalarWhereInput = {
    AND?: Enumerable<UserMagicLinkScalarWhereInput>
    OR?: Enumerable<UserMagicLinkScalarWhereInput>
    NOT?: Enumerable<UserMagicLinkScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    secret?: StringFilter | string
    used?: BoolFilter | boolean
    remember?: BoolFilter | boolean
    action?: EnumMagicLinkActionFilter | MagicLinkAction
    newEmail?: StringNullableFilter | string | null
  }

  export type PublicationDashboardUserUpsertWithWhereUniqueWithoutUserInput = {
    where: PublicationDashboardUserWhereUniqueInput
    update: XOR<PublicationDashboardUserUpdateWithoutUserInput, PublicationDashboardUserUncheckedUpdateWithoutUserInput>
    create: XOR<PublicationDashboardUserCreateWithoutUserInput, PublicationDashboardUserUncheckedCreateWithoutUserInput>
  }

  export type PublicationDashboardUserUpdateWithWhereUniqueWithoutUserInput = {
    where: PublicationDashboardUserWhereUniqueInput
    data: XOR<PublicationDashboardUserUpdateWithoutUserInput, PublicationDashboardUserUncheckedUpdateWithoutUserInput>
  }

  export type PublicationDashboardUserUpdateManyWithWhereWithoutUserInput = {
    where: PublicationDashboardUserScalarWhereInput
    data: XOR<PublicationDashboardUserUpdateManyMutationInput, PublicationDashboardUserUncheckedUpdateManyWithoutPublicationDashboardsInput>
  }

  export type PublicationDashboardUserScalarWhereInput = {
    AND?: Enumerable<PublicationDashboardUserScalarWhereInput>
    OR?: Enumerable<PublicationDashboardUserScalarWhereInput>
    NOT?: Enumerable<PublicationDashboardUserScalarWhereInput>
    publicationId?: StringFilter | string
    userId?: StringFilter | string
    updatedAt?: DateTimeFilter | Date | string
    permission?: EnumPublicationPermissionFilter | PublicationPermission
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerUncheckedCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemUncheckedCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkUncheckedCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUncheckedUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUncheckedUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountUncheckedCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerUncheckedCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemUncheckedCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkUncheckedCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUncheckedUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUncheckedUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUncheckedUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStripeCustomerInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStripeCustomerInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemUncheckedCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkUncheckedCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStripeCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStripeCustomerInput, UserUncheckedCreateWithoutStripeCustomerInput>
  }

  export type UserUpsertWithoutStripeCustomerInput = {
    update: XOR<UserUpdateWithoutStripeCustomerInput, UserUncheckedUpdateWithoutStripeCustomerInput>
    create: XOR<UserCreateWithoutStripeCustomerInput, UserUncheckedCreateWithoutStripeCustomerInput>
  }

  export type UserUpdateWithoutStripeCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStripeCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUncheckedUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUncheckedUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBalanceItemsInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerCreateNestedOneWithoutUserInput
    magicLinks?: UserMagicLinkCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBalanceItemsInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerUncheckedCreateNestedOneWithoutUserInput
    magicLinks?: UserMagicLinkUncheckedCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBalanceItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceItemsInput, UserUncheckedCreateWithoutBalanceItemsInput>
  }

  export type UserUpsertWithoutBalanceItemsInput = {
    update: XOR<UserUpdateWithoutBalanceItemsInput, UserUncheckedUpdateWithoutBalanceItemsInput>
    create: XOR<UserCreateWithoutBalanceItemsInput, UserUncheckedCreateWithoutBalanceItemsInput>
  }

  export type UserUpdateWithoutBalanceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUpdateOneWithoutUserNestedInput
    magicLinks?: UserMagicLinkUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    magicLinks?: UserMagicLinkUncheckedUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMagicLinksInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMagicLinksInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerUncheckedCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemUncheckedCreateNestedManyWithoutUserInput
    publicationDashboards?: PublicationDashboardUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMagicLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMagicLinksInput, UserUncheckedCreateWithoutMagicLinksInput>
  }

  export type UserUpsertWithoutMagicLinksInput = {
    update: XOR<UserUpdateWithoutMagicLinksInput, UserUncheckedUpdateWithoutMagicLinksInput>
    create: XOR<UserCreateWithoutMagicLinksInput, UserUncheckedCreateWithoutMagicLinksInput>
  }

  export type UserUpdateWithoutMagicLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMagicLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUncheckedUpdateManyWithoutUserNestedInput
    publicationDashboards?: PublicationDashboardUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PublicationDashboardUserCreateWithoutPublicationInput = {
    updatedAt?: Date | string
    permission: PublicationPermission
    user: UserCreateNestedOneWithoutPublicationDashboardsInput
  }

  export type PublicationDashboardUserUncheckedCreateWithoutPublicationInput = {
    userId: string
    updatedAt?: Date | string
    permission: PublicationPermission
  }

  export type PublicationDashboardUserCreateOrConnectWithoutPublicationInput = {
    where: PublicationDashboardUserWhereUniqueInput
    create: XOR<PublicationDashboardUserCreateWithoutPublicationInput, PublicationDashboardUserUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationDashboardUserCreateManyPublicationInputEnvelope = {
    data: Enumerable<PublicationDashboardUserCreateManyPublicationInput>
    skipDuplicates?: boolean
  }

  export type PublicationDashboardUserUpsertWithWhereUniqueWithoutPublicationInput = {
    where: PublicationDashboardUserWhereUniqueInput
    update: XOR<PublicationDashboardUserUpdateWithoutPublicationInput, PublicationDashboardUserUncheckedUpdateWithoutPublicationInput>
    create: XOR<PublicationDashboardUserCreateWithoutPublicationInput, PublicationDashboardUserUncheckedCreateWithoutPublicationInput>
  }

  export type PublicationDashboardUserUpdateWithWhereUniqueWithoutPublicationInput = {
    where: PublicationDashboardUserWhereUniqueInput
    data: XOR<PublicationDashboardUserUpdateWithoutPublicationInput, PublicationDashboardUserUncheckedUpdateWithoutPublicationInput>
  }

  export type PublicationDashboardUserUpdateManyWithWhereWithoutPublicationInput = {
    where: PublicationDashboardUserScalarWhereInput
    data: XOR<PublicationDashboardUserUpdateManyMutationInput, PublicationDashboardUserUncheckedUpdateManyWithoutDashboardUsersInput>
  }

  export type PublicationCreateWithoutDashboardUsersInput = {
    id?: string
    name: string
    url: string
    organizationName: string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUncheckedCreateWithoutDashboardUsersInput = {
    id?: string
    name: string
    url: string
    organizationName: string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationCreateOrConnectWithoutDashboardUsersInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutDashboardUsersInput, PublicationUncheckedCreateWithoutDashboardUsersInput>
  }

  export type UserCreateWithoutPublicationDashboardsInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPublicationDashboardsInput = {
    id?: string
    createdAt?: Date | string
    account?: UserAccountUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    stripeCustomer?: UserStripeCustomerUncheckedCreateNestedOneWithoutUserInput
    balanceItems?: UserBalanceItemUncheckedCreateNestedManyWithoutUserInput
    magicLinks?: UserMagicLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPublicationDashboardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublicationDashboardsInput, UserUncheckedCreateWithoutPublicationDashboardsInput>
  }

  export type PublicationUpsertWithoutDashboardUsersInput = {
    update: XOR<PublicationUpdateWithoutDashboardUsersInput, PublicationUncheckedUpdateWithoutDashboardUsersInput>
    create: XOR<PublicationCreateWithoutDashboardUsersInput, PublicationUncheckedCreateWithoutDashboardUsersInput>
  }

  export type PublicationUpdateWithoutDashboardUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateWithoutDashboardUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    logo?: NullableJsonNullValueInput | InputJsonValue
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPublicationDashboardsInput = {
    update: XOR<UserUpdateWithoutPublicationDashboardsInput, UserUncheckedUpdateWithoutPublicationDashboardsInput>
    create: XOR<UserCreateWithoutPublicationDashboardsInput, UserUncheckedCreateWithoutPublicationDashboardsInput>
  }

  export type UserUpdateWithoutPublicationDashboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPublicationDashboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: UserAccountUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    stripeCustomer?: UserStripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    balanceItems?: UserBalanceItemUncheckedUpdateManyWithoutUserNestedInput
    magicLinks?: UserMagicLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserBalanceItemCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    amount: number
    type: UserBalancItemType
  }

  export type UserMagicLinkCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    secret: string
    used?: boolean
    remember: boolean
    action: MagicLinkAction
    newEmail?: string | null
  }

  export type PublicationDashboardUserCreateManyUserInput = {
    publicationId: string
    updatedAt?: Date | string
    permission: PublicationPermission
  }

  export type UserBalanceItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumUserBalancItemTypeFieldUpdateOperationsInput | UserBalancItemType
  }

  export type UserBalanceItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumUserBalancItemTypeFieldUpdateOperationsInput | UserBalancItemType
  }

  export type UserBalanceItemUncheckedUpdateManyWithoutBalanceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumUserBalancItemTypeFieldUpdateOperationsInput | UserBalancItemType
  }

  export type UserMagicLinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secret?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    remember?: BoolFieldUpdateOperationsInput | boolean
    action?: EnumMagicLinkActionFieldUpdateOperationsInput | MagicLinkAction
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserMagicLinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secret?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    remember?: BoolFieldUpdateOperationsInput | boolean
    action?: EnumMagicLinkActionFieldUpdateOperationsInput | MagicLinkAction
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserMagicLinkUncheckedUpdateManyWithoutMagicLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secret?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    remember?: BoolFieldUpdateOperationsInput | boolean
    action?: EnumMagicLinkActionFieldUpdateOperationsInput | MagicLinkAction
    newEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicationDashboardUserUpdateWithoutUserInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
    publication?: PublicationUpdateOneRequiredWithoutDashboardUsersNestedInput
  }

  export type PublicationDashboardUserUncheckedUpdateWithoutUserInput = {
    publicationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
  }

  export type PublicationDashboardUserUncheckedUpdateManyWithoutPublicationDashboardsInput = {
    publicationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
  }

  export type PublicationDashboardUserCreateManyPublicationInput = {
    userId: string
    updatedAt?: Date | string
    permission: PublicationPermission
  }

  export type PublicationDashboardUserUpdateWithoutPublicationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
    user?: UserUpdateOneRequiredWithoutPublicationDashboardsNestedInput
  }

  export type PublicationDashboardUserUncheckedUpdateWithoutPublicationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
  }

  export type PublicationDashboardUserUncheckedUpdateManyWithoutDashboardUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: EnumPublicationPermissionFieldUpdateOperationsInput | PublicationPermission
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}