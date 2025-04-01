
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Administrator
 * 
 */
export type Administrator = $Result.DefaultSelection<Prisma.$AdministratorPayload>
/**
 * Model MasterFranchise
 * 
 */
export type MasterFranchise = $Result.DefaultSelection<Prisma.$MasterFranchisePayload>
/**
 * Model SuperFranchise
 * 
 */
export type SuperFranchise = $Result.DefaultSelection<Prisma.$SuperFranchisePayload>
/**
 * Model RegionalFranchise
 * 
 */
export type RegionalFranchise = $Result.DefaultSelection<Prisma.$RegionalFranchisePayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChapterEvent
 * 
 */
export type ChapterEvent = $Result.DefaultSelection<Prisma.$ChapterEventPayload>
/**
 * Model ClubEvent
 * 
 */
export type ClubEvent = $Result.DefaultSelection<Prisma.$ClubEventPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model GmailVerificationCode
 * 
 */
export type GmailVerificationCode = $Result.DefaultSelection<Prisma.$GmailVerificationCodePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AdminRole: {
  ADMIN: 'ADMIN',
  MASTER_ADMIN: 'MASTER_ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  REGIONAL_ADMIN: 'REGIONAL_ADMIN'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const UserMembershipType: {
  ONE_CLUB: 'ONE_CLUB',
  VIP: 'VIP',
  GOLD: 'GOLD'
};

export type UserMembershipType = (typeof UserMembershipType)[keyof typeof UserMembershipType]


export const ReferralType: {
  SELF: 'SELF',
  THIRD_PARTY: 'THIRD_PARTY'
};

export type ReferralType = (typeof ReferralType)[keyof typeof ReferralType]

}

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type UserMembershipType = $Enums.UserMembershipType

export const UserMembershipType: typeof $Enums.UserMembershipType

export type ReferralType = $Enums.ReferralType

export const ReferralType: typeof $Enums.ReferralType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administrators
 * const administrators = await prisma.administrator.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Administrators
   * const administrators = await prisma.administrator.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.administrator`: Exposes CRUD operations for the **Administrator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administrators
    * const administrators = await prisma.administrator.findMany()
    * ```
    */
  get administrator(): Prisma.AdministratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterFranchise`: Exposes CRUD operations for the **MasterFranchise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterFranchises
    * const masterFranchises = await prisma.masterFranchise.findMany()
    * ```
    */
  get masterFranchise(): Prisma.MasterFranchiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.superFranchise`: Exposes CRUD operations for the **SuperFranchise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperFranchises
    * const superFranchises = await prisma.superFranchise.findMany()
    * ```
    */
  get superFranchise(): Prisma.SuperFranchiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regionalFranchise`: Exposes CRUD operations for the **RegionalFranchise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegionalFranchises
    * const regionalFranchises = await prisma.regionalFranchise.findMany()
    * ```
    */
  get regionalFranchise(): Prisma.RegionalFranchiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapterEvent`: Exposes CRUD operations for the **ChapterEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChapterEvents
    * const chapterEvents = await prisma.chapterEvent.findMany()
    * ```
    */
  get chapterEvent(): Prisma.ChapterEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clubEvent`: Exposes CRUD operations for the **ClubEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClubEvents
    * const clubEvents = await prisma.clubEvent.findMany()
    * ```
    */
  get clubEvent(): Prisma.ClubEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gmailVerificationCode`: Exposes CRUD operations for the **GmailVerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GmailVerificationCodes
    * const gmailVerificationCodes = await prisma.gmailVerificationCode.findMany()
    * ```
    */
  get gmailVerificationCode(): Prisma.GmailVerificationCodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Administrator: 'Administrator',
    MasterFranchise: 'MasterFranchise',
    SuperFranchise: 'SuperFranchise',
    RegionalFranchise: 'RegionalFranchise',
    Chapter: 'Chapter',
    Club: 'Club',
    User: 'User',
    ChapterEvent: 'ChapterEvent',
    ClubEvent: 'ClubEvent',
    Referral: 'Referral',
    GmailVerificationCode: 'GmailVerificationCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "administrator" | "masterFranchise" | "superFranchise" | "regionalFranchise" | "chapter" | "club" | "user" | "chapterEvent" | "clubEvent" | "referral" | "gmailVerificationCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Administrator: {
        payload: Prisma.$AdministratorPayload<ExtArgs>
        fields: Prisma.AdministratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          findFirst: {
            args: Prisma.AdministratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          findMany: {
            args: Prisma.AdministratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>[]
          }
          create: {
            args: Prisma.AdministratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          createMany: {
            args: Prisma.AdministratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>[]
          }
          delete: {
            args: Prisma.AdministratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          update: {
            args: Prisma.AdministratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          deleteMany: {
            args: Prisma.AdministratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>[]
          }
          upsert: {
            args: Prisma.AdministratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          aggregate: {
            args: Prisma.AdministratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrator>
          }
          groupBy: {
            args: Prisma.AdministratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministratorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministratorCountAggregateOutputType> | number
          }
        }
      }
      MasterFranchise: {
        payload: Prisma.$MasterFranchisePayload<ExtArgs>
        fields: Prisma.MasterFranchiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterFranchiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterFranchiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>
          }
          findFirst: {
            args: Prisma.MasterFranchiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterFranchiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>
          }
          findMany: {
            args: Prisma.MasterFranchiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>[]
          }
          create: {
            args: Prisma.MasterFranchiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>
          }
          createMany: {
            args: Prisma.MasterFranchiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterFranchiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>[]
          }
          delete: {
            args: Prisma.MasterFranchiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>
          }
          update: {
            args: Prisma.MasterFranchiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>
          }
          deleteMany: {
            args: Prisma.MasterFranchiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterFranchiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterFranchiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>[]
          }
          upsert: {
            args: Prisma.MasterFranchiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterFranchisePayload>
          }
          aggregate: {
            args: Prisma.MasterFranchiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterFranchise>
          }
          groupBy: {
            args: Prisma.MasterFranchiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterFranchiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterFranchiseCountArgs<ExtArgs>
            result: $Utils.Optional<MasterFranchiseCountAggregateOutputType> | number
          }
        }
      }
      SuperFranchise: {
        payload: Prisma.$SuperFranchisePayload<ExtArgs>
        fields: Prisma.SuperFranchiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperFranchiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperFranchiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>
          }
          findFirst: {
            args: Prisma.SuperFranchiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperFranchiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>
          }
          findMany: {
            args: Prisma.SuperFranchiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>[]
          }
          create: {
            args: Prisma.SuperFranchiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>
          }
          createMany: {
            args: Prisma.SuperFranchiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuperFranchiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>[]
          }
          delete: {
            args: Prisma.SuperFranchiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>
          }
          update: {
            args: Prisma.SuperFranchiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>
          }
          deleteMany: {
            args: Prisma.SuperFranchiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperFranchiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuperFranchiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>[]
          }
          upsert: {
            args: Prisma.SuperFranchiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperFranchisePayload>
          }
          aggregate: {
            args: Prisma.SuperFranchiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperFranchise>
          }
          groupBy: {
            args: Prisma.SuperFranchiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperFranchiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperFranchiseCountArgs<ExtArgs>
            result: $Utils.Optional<SuperFranchiseCountAggregateOutputType> | number
          }
        }
      }
      RegionalFranchise: {
        payload: Prisma.$RegionalFranchisePayload<ExtArgs>
        fields: Prisma.RegionalFranchiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionalFranchiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionalFranchiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>
          }
          findFirst: {
            args: Prisma.RegionalFranchiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionalFranchiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>
          }
          findMany: {
            args: Prisma.RegionalFranchiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>[]
          }
          create: {
            args: Prisma.RegionalFranchiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>
          }
          createMany: {
            args: Prisma.RegionalFranchiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionalFranchiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>[]
          }
          delete: {
            args: Prisma.RegionalFranchiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>
          }
          update: {
            args: Prisma.RegionalFranchiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>
          }
          deleteMany: {
            args: Prisma.RegionalFranchiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionalFranchiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionalFranchiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>[]
          }
          upsert: {
            args: Prisma.RegionalFranchiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionalFranchisePayload>
          }
          aggregate: {
            args: Prisma.RegionalFranchiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegionalFranchise>
          }
          groupBy: {
            args: Prisma.RegionalFranchiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionalFranchiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionalFranchiseCountArgs<ExtArgs>
            result: $Utils.Optional<RegionalFranchiseCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChapterEvent: {
        payload: Prisma.$ChapterEventPayload<ExtArgs>
        fields: Prisma.ChapterEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>
          }
          findFirst: {
            args: Prisma.ChapterEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>
          }
          findMany: {
            args: Prisma.ChapterEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>[]
          }
          create: {
            args: Prisma.ChapterEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>
          }
          createMany: {
            args: Prisma.ChapterEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>[]
          }
          delete: {
            args: Prisma.ChapterEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>
          }
          update: {
            args: Prisma.ChapterEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>
          }
          deleteMany: {
            args: Prisma.ChapterEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>[]
          }
          upsert: {
            args: Prisma.ChapterEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterEventPayload>
          }
          aggregate: {
            args: Prisma.ChapterEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapterEvent>
          }
          groupBy: {
            args: Prisma.ChapterEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterEventCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterEventCountAggregateOutputType> | number
          }
        }
      }
      ClubEvent: {
        payload: Prisma.$ClubEventPayload<ExtArgs>
        fields: Prisma.ClubEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>
          }
          findFirst: {
            args: Prisma.ClubEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>
          }
          findMany: {
            args: Prisma.ClubEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>[]
          }
          create: {
            args: Prisma.ClubEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>
          }
          createMany: {
            args: Prisma.ClubEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>[]
          }
          delete: {
            args: Prisma.ClubEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>
          }
          update: {
            args: Prisma.ClubEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>
          }
          deleteMany: {
            args: Prisma.ClubEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>[]
          }
          upsert: {
            args: Prisma.ClubEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubEventPayload>
          }
          aggregate: {
            args: Prisma.ClubEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClubEvent>
          }
          groupBy: {
            args: Prisma.ClubEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubEventCountArgs<ExtArgs>
            result: $Utils.Optional<ClubEventCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      GmailVerificationCode: {
        payload: Prisma.$GmailVerificationCodePayload<ExtArgs>
        fields: Prisma.GmailVerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GmailVerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GmailVerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>
          }
          findFirst: {
            args: Prisma.GmailVerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GmailVerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>
          }
          findMany: {
            args: Prisma.GmailVerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>[]
          }
          create: {
            args: Prisma.GmailVerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>
          }
          createMany: {
            args: Prisma.GmailVerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GmailVerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>[]
          }
          delete: {
            args: Prisma.GmailVerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>
          }
          update: {
            args: Prisma.GmailVerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.GmailVerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GmailVerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GmailVerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.GmailVerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmailVerificationCodePayload>
          }
          aggregate: {
            args: Prisma.GmailVerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGmailVerificationCode>
          }
          groupBy: {
            args: Prisma.GmailVerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GmailVerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GmailVerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<GmailVerificationCodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    administrator?: AdministratorOmit
    masterFranchise?: MasterFranchiseOmit
    superFranchise?: SuperFranchiseOmit
    regionalFranchise?: RegionalFranchiseOmit
    chapter?: ChapterOmit
    club?: ClubOmit
    user?: UserOmit
    chapterEvent?: ChapterEventOmit
    clubEvent?: ClubEventOmit
    referral?: ReferralOmit
    gmailVerificationCode?: GmailVerificationCodeOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdministratorCountOutputType
   */

  export type AdministratorCountOutputType = {
    childAdmins: number
    masterFranchises: number
    superFranchises: number
    regionalFranchises: number
  }

  export type AdministratorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childAdmins?: boolean | AdministratorCountOutputTypeCountChildAdminsArgs
    masterFranchises?: boolean | AdministratorCountOutputTypeCountMasterFranchisesArgs
    superFranchises?: boolean | AdministratorCountOutputTypeCountSuperFranchisesArgs
    regionalFranchises?: boolean | AdministratorCountOutputTypeCountRegionalFranchisesArgs
  }

  // Custom InputTypes
  /**
   * AdministratorCountOutputType without action
   */
  export type AdministratorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministratorCountOutputType
     */
    select?: AdministratorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministratorCountOutputType without action
   */
  export type AdministratorCountOutputTypeCountChildAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministratorWhereInput
  }

  /**
   * AdministratorCountOutputType without action
   */
  export type AdministratorCountOutputTypeCountMasterFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterFranchiseWhereInput
  }

  /**
   * AdministratorCountOutputType without action
   */
  export type AdministratorCountOutputTypeCountSuperFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperFranchiseWhereInput
  }

  /**
   * AdministratorCountOutputType without action
   */
  export type AdministratorCountOutputTypeCountRegionalFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionalFranchiseWhereInput
  }


  /**
   * Count Type MasterFranchiseCountOutputType
   */

  export type MasterFranchiseCountOutputType = {
    superFranchises: number
  }

  export type MasterFranchiseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superFranchises?: boolean | MasterFranchiseCountOutputTypeCountSuperFranchisesArgs
  }

  // Custom InputTypes
  /**
   * MasterFranchiseCountOutputType without action
   */
  export type MasterFranchiseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchiseCountOutputType
     */
    select?: MasterFranchiseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterFranchiseCountOutputType without action
   */
  export type MasterFranchiseCountOutputTypeCountSuperFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperFranchiseWhereInput
  }


  /**
   * Count Type SuperFranchiseCountOutputType
   */

  export type SuperFranchiseCountOutputType = {
    regionalFranchises: number
  }

  export type SuperFranchiseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regionalFranchises?: boolean | SuperFranchiseCountOutputTypeCountRegionalFranchisesArgs
  }

  // Custom InputTypes
  /**
   * SuperFranchiseCountOutputType without action
   */
  export type SuperFranchiseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchiseCountOutputType
     */
    select?: SuperFranchiseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuperFranchiseCountOutputType without action
   */
  export type SuperFranchiseCountOutputTypeCountRegionalFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionalFranchiseWhereInput
  }


  /**
   * Count Type RegionalFranchiseCountOutputType
   */

  export type RegionalFranchiseCountOutputType = {
    chapters: number
  }

  export type RegionalFranchiseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | RegionalFranchiseCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes
  /**
   * RegionalFranchiseCountOutputType without action
   */
  export type RegionalFranchiseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchiseCountOutputType
     */
    select?: RegionalFranchiseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionalFranchiseCountOutputType without action
   */
  export type RegionalFranchiseCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    clubs: number
    events: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | ChapterCountOutputTypeCountClubsArgs
    events?: boolean | ChapterCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountClubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterEventWhereInput
  }


  /**
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    members: number
    events: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ClubCountOutputTypeCountMembersArgs
    events?: boolean | ClubCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubCountOutputType
     */
    select?: ClubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubEventWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clubs: number
    referralsCreated: number
    referralsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | UserCountOutputTypeCountClubsArgs
    referralsCreated?: boolean | UserCountOutputTypeCountReferralsCreatedArgs
    referralsReceived?: boolean | UserCountOutputTypeCountReferralsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Administrator
   */

  export type AggregateAdministrator = {
    _count: AdministratorCountAggregateOutputType | null
    _min: AdministratorMinAggregateOutputType | null
    _max: AdministratorMaxAggregateOutputType | null
  }

  export type AdministratorMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: boolean | null
    phone: string | null
    phoneVerifie: boolean | null
    password: string | null
    name: string | null
    role: $Enums.AdminRole | null
    parentAdminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministratorMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: boolean | null
    phone: string | null
    phoneVerifie: boolean | null
    password: string | null
    name: string | null
    role: $Enums.AdminRole | null
    parentAdminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministratorCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    phone: number
    phoneVerifie: number
    password: number
    name: number
    role: number
    parentAdminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministratorMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerifie?: true
    password?: true
    name?: true
    role?: true
    parentAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministratorMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerifie?: true
    password?: true
    name?: true
    role?: true
    parentAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministratorCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerifie?: true
    password?: true
    name?: true
    role?: true
    parentAdminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrator to aggregate.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administrators
    **/
    _count?: true | AdministratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministratorMaxAggregateInputType
  }

  export type GetAdministratorAggregateType<T extends AdministratorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrator[P]>
      : GetScalarType<T[P], AggregateAdministrator[P]>
  }




  export type AdministratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministratorWhereInput
    orderBy?: AdministratorOrderByWithAggregationInput | AdministratorOrderByWithAggregationInput[]
    by: AdministratorScalarFieldEnum[] | AdministratorScalarFieldEnum
    having?: AdministratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministratorCountAggregateInputType | true
    _min?: AdministratorMinAggregateInputType
    _max?: AdministratorMaxAggregateInputType
  }

  export type AdministratorGroupByOutputType = {
    id: string
    email: string
    emailVerified: boolean
    phone: string
    phoneVerifie: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    parentAdminId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdministratorCountAggregateOutputType | null
    _min: AdministratorMinAggregateOutputType | null
    _max: AdministratorMaxAggregateOutputType | null
  }

  type GetAdministratorGroupByPayload<T extends AdministratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
        }
      >
    >


  export type AdministratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerifie?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    parentAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentAdmin?: boolean | Administrator$parentAdminArgs<ExtArgs>
    childAdmins?: boolean | Administrator$childAdminsArgs<ExtArgs>
    masterFranchises?: boolean | Administrator$masterFranchisesArgs<ExtArgs>
    superFranchises?: boolean | Administrator$superFranchisesArgs<ExtArgs>
    regionalFranchises?: boolean | Administrator$regionalFranchisesArgs<ExtArgs>
    _count?: boolean | AdministratorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrator"]>

  export type AdministratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerifie?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    parentAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentAdmin?: boolean | Administrator$parentAdminArgs<ExtArgs>
  }, ExtArgs["result"]["administrator"]>

  export type AdministratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerifie?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    parentAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentAdmin?: boolean | Administrator$parentAdminArgs<ExtArgs>
  }, ExtArgs["result"]["administrator"]>

  export type AdministratorSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerifie?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    parentAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdministratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailVerified" | "phone" | "phoneVerifie" | "password" | "name" | "role" | "parentAdminId" | "createdAt" | "updatedAt", ExtArgs["result"]["administrator"]>
  export type AdministratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentAdmin?: boolean | Administrator$parentAdminArgs<ExtArgs>
    childAdmins?: boolean | Administrator$childAdminsArgs<ExtArgs>
    masterFranchises?: boolean | Administrator$masterFranchisesArgs<ExtArgs>
    superFranchises?: boolean | Administrator$superFranchisesArgs<ExtArgs>
    regionalFranchises?: boolean | Administrator$regionalFranchisesArgs<ExtArgs>
    _count?: boolean | AdministratorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdministratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentAdmin?: boolean | Administrator$parentAdminArgs<ExtArgs>
  }
  export type AdministratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentAdmin?: boolean | Administrator$parentAdminArgs<ExtArgs>
  }

  export type $AdministratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrator"
    objects: {
      parentAdmin: Prisma.$AdministratorPayload<ExtArgs> | null
      childAdmins: Prisma.$AdministratorPayload<ExtArgs>[]
      masterFranchises: Prisma.$MasterFranchisePayload<ExtArgs>[]
      superFranchises: Prisma.$SuperFranchisePayload<ExtArgs>[]
      regionalFranchises: Prisma.$RegionalFranchisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: boolean
      phone: string
      phoneVerifie: boolean
      password: string
      name: string
      role: $Enums.AdminRole
      parentAdminId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["administrator"]>
    composites: {}
  }

  type AdministratorGetPayload<S extends boolean | null | undefined | AdministratorDefaultArgs> = $Result.GetResult<Prisma.$AdministratorPayload, S>

  type AdministratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministratorCountAggregateInputType | true
    }

  export interface AdministratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrator'], meta: { name: 'Administrator' } }
    /**
     * Find zero or one Administrator that matches the filter.
     * @param {AdministratorFindUniqueArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministratorFindUniqueArgs>(args: SelectSubset<T, AdministratorFindUniqueArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministratorFindUniqueOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministratorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindFirstArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministratorFindFirstArgs>(args?: SelectSubset<T, AdministratorFindFirstArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindFirstOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministratorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administrators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administrators
     * const administrators = await prisma.administrator.findMany()
     * 
     * // Get first 10 Administrators
     * const administrators = await prisma.administrator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administratorWithIdOnly = await prisma.administrator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministratorFindManyArgs>(args?: SelectSubset<T, AdministratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrator.
     * @param {AdministratorCreateArgs} args - Arguments to create a Administrator.
     * @example
     * // Create one Administrator
     * const Administrator = await prisma.administrator.create({
     *   data: {
     *     // ... data to create a Administrator
     *   }
     * })
     * 
     */
    create<T extends AdministratorCreateArgs>(args: SelectSubset<T, AdministratorCreateArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administrators.
     * @param {AdministratorCreateManyArgs} args - Arguments to create many Administrators.
     * @example
     * // Create many Administrators
     * const administrator = await prisma.administrator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministratorCreateManyArgs>(args?: SelectSubset<T, AdministratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administrators and returns the data saved in the database.
     * @param {AdministratorCreateManyAndReturnArgs} args - Arguments to create many Administrators.
     * @example
     * // Create many Administrators
     * const administrator = await prisma.administrator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administrators and only return the `id`
     * const administratorWithIdOnly = await prisma.administrator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministratorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrator.
     * @param {AdministratorDeleteArgs} args - Arguments to delete one Administrator.
     * @example
     * // Delete one Administrator
     * const Administrator = await prisma.administrator.delete({
     *   where: {
     *     // ... filter to delete one Administrator
     *   }
     * })
     * 
     */
    delete<T extends AdministratorDeleteArgs>(args: SelectSubset<T, AdministratorDeleteArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrator.
     * @param {AdministratorUpdateArgs} args - Arguments to update one Administrator.
     * @example
     * // Update one Administrator
     * const administrator = await prisma.administrator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministratorUpdateArgs>(args: SelectSubset<T, AdministratorUpdateArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administrators.
     * @param {AdministratorDeleteManyArgs} args - Arguments to filter Administrators to delete.
     * @example
     * // Delete a few Administrators
     * const { count } = await prisma.administrator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministratorDeleteManyArgs>(args?: SelectSubset<T, AdministratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administrators
     * const administrator = await prisma.administrator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministratorUpdateManyArgs>(args: SelectSubset<T, AdministratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrators and returns the data updated in the database.
     * @param {AdministratorUpdateManyAndReturnArgs} args - Arguments to update many Administrators.
     * @example
     * // Update many Administrators
     * const administrator = await prisma.administrator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administrators and only return the `id`
     * const administratorWithIdOnly = await prisma.administrator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdministratorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrator.
     * @param {AdministratorUpsertArgs} args - Arguments to update or create a Administrator.
     * @example
     * // Update or create a Administrator
     * const administrator = await prisma.administrator.upsert({
     *   create: {
     *     // ... data to create a Administrator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrator we want to update
     *   }
     * })
     */
    upsert<T extends AdministratorUpsertArgs>(args: SelectSubset<T, AdministratorUpsertArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorCountArgs} args - Arguments to filter Administrators to count.
     * @example
     * // Count the number of Administrators
     * const count = await prisma.administrator.count({
     *   where: {
     *     // ... the filter for the Administrators we want to count
     *   }
     * })
    **/
    count<T extends AdministratorCountArgs>(
      args?: Subset<T, AdministratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministratorAggregateArgs>(args: Subset<T, AdministratorAggregateArgs>): Prisma.PrismaPromise<GetAdministratorAggregateType<T>>

    /**
     * Group by Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorGroupByArgs} args - Group by arguments.
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
      T extends AdministratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministratorGroupByArgs['orderBy'] }
        : { orderBy?: AdministratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdministratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrator model
   */
  readonly fields: AdministratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentAdmin<T extends Administrator$parentAdminArgs<ExtArgs> = {}>(args?: Subset<T, Administrator$parentAdminArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childAdmins<T extends Administrator$childAdminsArgs<ExtArgs> = {}>(args?: Subset<T, Administrator$childAdminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    masterFranchises<T extends Administrator$masterFranchisesArgs<ExtArgs> = {}>(args?: Subset<T, Administrator$masterFranchisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    superFranchises<T extends Administrator$superFranchisesArgs<ExtArgs> = {}>(args?: Subset<T, Administrator$superFranchisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    regionalFranchises<T extends Administrator$regionalFranchisesArgs<ExtArgs> = {}>(args?: Subset<T, Administrator$regionalFranchisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administrator model
   */ 
  interface AdministratorFieldRefs {
    readonly id: FieldRef<"Administrator", 'String'>
    readonly email: FieldRef<"Administrator", 'String'>
    readonly emailVerified: FieldRef<"Administrator", 'Boolean'>
    readonly phone: FieldRef<"Administrator", 'String'>
    readonly phoneVerifie: FieldRef<"Administrator", 'Boolean'>
    readonly password: FieldRef<"Administrator", 'String'>
    readonly name: FieldRef<"Administrator", 'String'>
    readonly role: FieldRef<"Administrator", 'AdminRole'>
    readonly parentAdminId: FieldRef<"Administrator", 'String'>
    readonly createdAt: FieldRef<"Administrator", 'DateTime'>
    readonly updatedAt: FieldRef<"Administrator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrator findUnique
   */
  export type AdministratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator findUniqueOrThrow
   */
  export type AdministratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator findFirst
   */
  export type AdministratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator findFirstOrThrow
   */
  export type AdministratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator findMany
   */
  export type AdministratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrators to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator create
   */
  export type AdministratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrator.
     */
    data: XOR<AdministratorCreateInput, AdministratorUncheckedCreateInput>
  }

  /**
   * Administrator createMany
   */
  export type AdministratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administrators.
     */
    data: AdministratorCreateManyInput | AdministratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrator createManyAndReturn
   */
  export type AdministratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * The data used to create many Administrators.
     */
    data: AdministratorCreateManyInput | AdministratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Administrator update
   */
  export type AdministratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrator.
     */
    data: XOR<AdministratorUpdateInput, AdministratorUncheckedUpdateInput>
    /**
     * Choose, which Administrator to update.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator updateMany
   */
  export type AdministratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administrators.
     */
    data: XOR<AdministratorUpdateManyMutationInput, AdministratorUncheckedUpdateManyInput>
    /**
     * Filter which Administrators to update
     */
    where?: AdministratorWhereInput
    /**
     * Limit how many Administrators to update.
     */
    limit?: number
  }

  /**
   * Administrator updateManyAndReturn
   */
  export type AdministratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * The data used to update Administrators.
     */
    data: XOR<AdministratorUpdateManyMutationInput, AdministratorUncheckedUpdateManyInput>
    /**
     * Filter which Administrators to update
     */
    where?: AdministratorWhereInput
    /**
     * Limit how many Administrators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Administrator upsert
   */
  export type AdministratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrator to update in case it exists.
     */
    where: AdministratorWhereUniqueInput
    /**
     * In case the Administrator found by the `where` argument doesn't exist, create a new Administrator with this data.
     */
    create: XOR<AdministratorCreateInput, AdministratorUncheckedCreateInput>
    /**
     * In case the Administrator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministratorUpdateInput, AdministratorUncheckedUpdateInput>
  }

  /**
   * Administrator delete
   */
  export type AdministratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter which Administrator to delete.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator deleteMany
   */
  export type AdministratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrators to delete
     */
    where?: AdministratorWhereInput
    /**
     * Limit how many Administrators to delete.
     */
    limit?: number
  }

  /**
   * Administrator.parentAdmin
   */
  export type Administrator$parentAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    where?: AdministratorWhereInput
  }

  /**
   * Administrator.childAdmins
   */
  export type Administrator$childAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    where?: AdministratorWhereInput
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    cursor?: AdministratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator.masterFranchises
   */
  export type Administrator$masterFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    where?: MasterFranchiseWhereInput
    orderBy?: MasterFranchiseOrderByWithRelationInput | MasterFranchiseOrderByWithRelationInput[]
    cursor?: MasterFranchiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterFranchiseScalarFieldEnum | MasterFranchiseScalarFieldEnum[]
  }

  /**
   * Administrator.superFranchises
   */
  export type Administrator$superFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    where?: SuperFranchiseWhereInput
    orderBy?: SuperFranchiseOrderByWithRelationInput | SuperFranchiseOrderByWithRelationInput[]
    cursor?: SuperFranchiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuperFranchiseScalarFieldEnum | SuperFranchiseScalarFieldEnum[]
  }

  /**
   * Administrator.regionalFranchises
   */
  export type Administrator$regionalFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    where?: RegionalFranchiseWhereInput
    orderBy?: RegionalFranchiseOrderByWithRelationInput | RegionalFranchiseOrderByWithRelationInput[]
    cursor?: RegionalFranchiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegionalFranchiseScalarFieldEnum | RegionalFranchiseScalarFieldEnum[]
  }

  /**
   * Administrator without action
   */
  export type AdministratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
  }


  /**
   * Model MasterFranchise
   */

  export type AggregateMasterFranchise = {
    _count: MasterFranchiseCountAggregateOutputType | null
    _min: MasterFranchiseMinAggregateOutputType | null
    _max: MasterFranchiseMaxAggregateOutputType | null
  }

  export type MasterFranchiseMinAggregateOutputType = {
    id: string | null
    name: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterFranchiseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterFranchiseCountAggregateOutputType = {
    id: number
    name: number
    countries: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MasterFranchiseMinAggregateInputType = {
    id?: true
    name?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterFranchiseMaxAggregateInputType = {
    id?: true
    name?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterFranchiseCountAggregateInputType = {
    id?: true
    name?: true
    countries?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MasterFranchiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterFranchise to aggregate.
     */
    where?: MasterFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterFranchises to fetch.
     */
    orderBy?: MasterFranchiseOrderByWithRelationInput | MasterFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterFranchises
    **/
    _count?: true | MasterFranchiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterFranchiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterFranchiseMaxAggregateInputType
  }

  export type GetMasterFranchiseAggregateType<T extends MasterFranchiseAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterFranchise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterFranchise[P]>
      : GetScalarType<T[P], AggregateMasterFranchise[P]>
  }




  export type MasterFranchiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterFranchiseWhereInput
    orderBy?: MasterFranchiseOrderByWithAggregationInput | MasterFranchiseOrderByWithAggregationInput[]
    by: MasterFranchiseScalarFieldEnum[] | MasterFranchiseScalarFieldEnum
    having?: MasterFranchiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterFranchiseCountAggregateInputType | true
    _min?: MasterFranchiseMinAggregateInputType
    _max?: MasterFranchiseMaxAggregateInputType
  }

  export type MasterFranchiseGroupByOutputType = {
    id: string
    name: string
    countries: string[]
    adminId: string
    createdAt: Date
    updatedAt: Date
    _count: MasterFranchiseCountAggregateOutputType | null
    _min: MasterFranchiseMinAggregateOutputType | null
    _max: MasterFranchiseMaxAggregateOutputType | null
  }

  type GetMasterFranchiseGroupByPayload<T extends MasterFranchiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterFranchiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterFranchiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterFranchiseGroupByOutputType[P]>
            : GetScalarType<T[P], MasterFranchiseGroupByOutputType[P]>
        }
      >
    >


  export type MasterFranchiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countries?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
    superFranchises?: boolean | MasterFranchise$superFranchisesArgs<ExtArgs>
    _count?: boolean | MasterFranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterFranchise"]>

  export type MasterFranchiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countries?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterFranchise"]>

  export type MasterFranchiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countries?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterFranchise"]>

  export type MasterFranchiseSelectScalar = {
    id?: boolean
    name?: boolean
    countries?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MasterFranchiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "countries" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["masterFranchise"]>
  export type MasterFranchiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
    superFranchises?: boolean | MasterFranchise$superFranchisesArgs<ExtArgs>
    _count?: boolean | MasterFranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterFranchiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }
  export type MasterFranchiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }

  export type $MasterFranchisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterFranchise"
    objects: {
      admin: Prisma.$AdministratorPayload<ExtArgs>
      superFranchises: Prisma.$SuperFranchisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      countries: string[]
      adminId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["masterFranchise"]>
    composites: {}
  }

  type MasterFranchiseGetPayload<S extends boolean | null | undefined | MasterFranchiseDefaultArgs> = $Result.GetResult<Prisma.$MasterFranchisePayload, S>

  type MasterFranchiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterFranchiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterFranchiseCountAggregateInputType | true
    }

  export interface MasterFranchiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterFranchise'], meta: { name: 'MasterFranchise' } }
    /**
     * Find zero or one MasterFranchise that matches the filter.
     * @param {MasterFranchiseFindUniqueArgs} args - Arguments to find a MasterFranchise
     * @example
     * // Get one MasterFranchise
     * const masterFranchise = await prisma.masterFranchise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterFranchiseFindUniqueArgs>(args: SelectSubset<T, MasterFranchiseFindUniqueArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterFranchise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterFranchiseFindUniqueOrThrowArgs} args - Arguments to find a MasterFranchise
     * @example
     * // Get one MasterFranchise
     * const masterFranchise = await prisma.masterFranchise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterFranchiseFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterFranchiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterFranchise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFranchiseFindFirstArgs} args - Arguments to find a MasterFranchise
     * @example
     * // Get one MasterFranchise
     * const masterFranchise = await prisma.masterFranchise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterFranchiseFindFirstArgs>(args?: SelectSubset<T, MasterFranchiseFindFirstArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterFranchise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFranchiseFindFirstOrThrowArgs} args - Arguments to find a MasterFranchise
     * @example
     * // Get one MasterFranchise
     * const masterFranchise = await prisma.masterFranchise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterFranchiseFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterFranchiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterFranchises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFranchiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterFranchises
     * const masterFranchises = await prisma.masterFranchise.findMany()
     * 
     * // Get first 10 MasterFranchises
     * const masterFranchises = await prisma.masterFranchise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterFranchiseWithIdOnly = await prisma.masterFranchise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterFranchiseFindManyArgs>(args?: SelectSubset<T, MasterFranchiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterFranchise.
     * @param {MasterFranchiseCreateArgs} args - Arguments to create a MasterFranchise.
     * @example
     * // Create one MasterFranchise
     * const MasterFranchise = await prisma.masterFranchise.create({
     *   data: {
     *     // ... data to create a MasterFranchise
     *   }
     * })
     * 
     */
    create<T extends MasterFranchiseCreateArgs>(args: SelectSubset<T, MasterFranchiseCreateArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterFranchises.
     * @param {MasterFranchiseCreateManyArgs} args - Arguments to create many MasterFranchises.
     * @example
     * // Create many MasterFranchises
     * const masterFranchise = await prisma.masterFranchise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterFranchiseCreateManyArgs>(args?: SelectSubset<T, MasterFranchiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterFranchises and returns the data saved in the database.
     * @param {MasterFranchiseCreateManyAndReturnArgs} args - Arguments to create many MasterFranchises.
     * @example
     * // Create many MasterFranchises
     * const masterFranchise = await prisma.masterFranchise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterFranchises and only return the `id`
     * const masterFranchiseWithIdOnly = await prisma.masterFranchise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterFranchiseCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterFranchiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterFranchise.
     * @param {MasterFranchiseDeleteArgs} args - Arguments to delete one MasterFranchise.
     * @example
     * // Delete one MasterFranchise
     * const MasterFranchise = await prisma.masterFranchise.delete({
     *   where: {
     *     // ... filter to delete one MasterFranchise
     *   }
     * })
     * 
     */
    delete<T extends MasterFranchiseDeleteArgs>(args: SelectSubset<T, MasterFranchiseDeleteArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterFranchise.
     * @param {MasterFranchiseUpdateArgs} args - Arguments to update one MasterFranchise.
     * @example
     * // Update one MasterFranchise
     * const masterFranchise = await prisma.masterFranchise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterFranchiseUpdateArgs>(args: SelectSubset<T, MasterFranchiseUpdateArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterFranchises.
     * @param {MasterFranchiseDeleteManyArgs} args - Arguments to filter MasterFranchises to delete.
     * @example
     * // Delete a few MasterFranchises
     * const { count } = await prisma.masterFranchise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterFranchiseDeleteManyArgs>(args?: SelectSubset<T, MasterFranchiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterFranchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFranchiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterFranchises
     * const masterFranchise = await prisma.masterFranchise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterFranchiseUpdateManyArgs>(args: SelectSubset<T, MasterFranchiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterFranchises and returns the data updated in the database.
     * @param {MasterFranchiseUpdateManyAndReturnArgs} args - Arguments to update many MasterFranchises.
     * @example
     * // Update many MasterFranchises
     * const masterFranchise = await prisma.masterFranchise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterFranchises and only return the `id`
     * const masterFranchiseWithIdOnly = await prisma.masterFranchise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterFranchiseUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterFranchiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterFranchise.
     * @param {MasterFranchiseUpsertArgs} args - Arguments to update or create a MasterFranchise.
     * @example
     * // Update or create a MasterFranchise
     * const masterFranchise = await prisma.masterFranchise.upsert({
     *   create: {
     *     // ... data to create a MasterFranchise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterFranchise we want to update
     *   }
     * })
     */
    upsert<T extends MasterFranchiseUpsertArgs>(args: SelectSubset<T, MasterFranchiseUpsertArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterFranchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFranchiseCountArgs} args - Arguments to filter MasterFranchises to count.
     * @example
     * // Count the number of MasterFranchises
     * const count = await prisma.masterFranchise.count({
     *   where: {
     *     // ... the filter for the MasterFranchises we want to count
     *   }
     * })
    **/
    count<T extends MasterFranchiseCountArgs>(
      args?: Subset<T, MasterFranchiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterFranchiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterFranchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFranchiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterFranchiseAggregateArgs>(args: Subset<T, MasterFranchiseAggregateArgs>): Prisma.PrismaPromise<GetMasterFranchiseAggregateType<T>>

    /**
     * Group by MasterFranchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterFranchiseGroupByArgs} args - Group by arguments.
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
      T extends MasterFranchiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterFranchiseGroupByArgs['orderBy'] }
        : { orderBy?: MasterFranchiseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MasterFranchiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterFranchiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterFranchise model
   */
  readonly fields: MasterFranchiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterFranchise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterFranchiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdministratorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministratorDefaultArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    superFranchises<T extends MasterFranchise$superFranchisesArgs<ExtArgs> = {}>(args?: Subset<T, MasterFranchise$superFranchisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterFranchise model
   */ 
  interface MasterFranchiseFieldRefs {
    readonly id: FieldRef<"MasterFranchise", 'String'>
    readonly name: FieldRef<"MasterFranchise", 'String'>
    readonly countries: FieldRef<"MasterFranchise", 'String[]'>
    readonly adminId: FieldRef<"MasterFranchise", 'String'>
    readonly createdAt: FieldRef<"MasterFranchise", 'DateTime'>
    readonly updatedAt: FieldRef<"MasterFranchise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterFranchise findUnique
   */
  export type MasterFranchiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which MasterFranchise to fetch.
     */
    where: MasterFranchiseWhereUniqueInput
  }

  /**
   * MasterFranchise findUniqueOrThrow
   */
  export type MasterFranchiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which MasterFranchise to fetch.
     */
    where: MasterFranchiseWhereUniqueInput
  }

  /**
   * MasterFranchise findFirst
   */
  export type MasterFranchiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which MasterFranchise to fetch.
     */
    where?: MasterFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterFranchises to fetch.
     */
    orderBy?: MasterFranchiseOrderByWithRelationInput | MasterFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterFranchises.
     */
    cursor?: MasterFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterFranchises.
     */
    distinct?: MasterFranchiseScalarFieldEnum | MasterFranchiseScalarFieldEnum[]
  }

  /**
   * MasterFranchise findFirstOrThrow
   */
  export type MasterFranchiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which MasterFranchise to fetch.
     */
    where?: MasterFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterFranchises to fetch.
     */
    orderBy?: MasterFranchiseOrderByWithRelationInput | MasterFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterFranchises.
     */
    cursor?: MasterFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterFranchises.
     */
    distinct?: MasterFranchiseScalarFieldEnum | MasterFranchiseScalarFieldEnum[]
  }

  /**
   * MasterFranchise findMany
   */
  export type MasterFranchiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which MasterFranchises to fetch.
     */
    where?: MasterFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterFranchises to fetch.
     */
    orderBy?: MasterFranchiseOrderByWithRelationInput | MasterFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterFranchises.
     */
    cursor?: MasterFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterFranchises.
     */
    skip?: number
    distinct?: MasterFranchiseScalarFieldEnum | MasterFranchiseScalarFieldEnum[]
  }

  /**
   * MasterFranchise create
   */
  export type MasterFranchiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterFranchise.
     */
    data: XOR<MasterFranchiseCreateInput, MasterFranchiseUncheckedCreateInput>
  }

  /**
   * MasterFranchise createMany
   */
  export type MasterFranchiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterFranchises.
     */
    data: MasterFranchiseCreateManyInput | MasterFranchiseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterFranchise createManyAndReturn
   */
  export type MasterFranchiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * The data used to create many MasterFranchises.
     */
    data: MasterFranchiseCreateManyInput | MasterFranchiseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterFranchise update
   */
  export type MasterFranchiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterFranchise.
     */
    data: XOR<MasterFranchiseUpdateInput, MasterFranchiseUncheckedUpdateInput>
    /**
     * Choose, which MasterFranchise to update.
     */
    where: MasterFranchiseWhereUniqueInput
  }

  /**
   * MasterFranchise updateMany
   */
  export type MasterFranchiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterFranchises.
     */
    data: XOR<MasterFranchiseUpdateManyMutationInput, MasterFranchiseUncheckedUpdateManyInput>
    /**
     * Filter which MasterFranchises to update
     */
    where?: MasterFranchiseWhereInput
    /**
     * Limit how many MasterFranchises to update.
     */
    limit?: number
  }

  /**
   * MasterFranchise updateManyAndReturn
   */
  export type MasterFranchiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * The data used to update MasterFranchises.
     */
    data: XOR<MasterFranchiseUpdateManyMutationInput, MasterFranchiseUncheckedUpdateManyInput>
    /**
     * Filter which MasterFranchises to update
     */
    where?: MasterFranchiseWhereInput
    /**
     * Limit how many MasterFranchises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterFranchise upsert
   */
  export type MasterFranchiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterFranchise to update in case it exists.
     */
    where: MasterFranchiseWhereUniqueInput
    /**
     * In case the MasterFranchise found by the `where` argument doesn't exist, create a new MasterFranchise with this data.
     */
    create: XOR<MasterFranchiseCreateInput, MasterFranchiseUncheckedCreateInput>
    /**
     * In case the MasterFranchise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterFranchiseUpdateInput, MasterFranchiseUncheckedUpdateInput>
  }

  /**
   * MasterFranchise delete
   */
  export type MasterFranchiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
    /**
     * Filter which MasterFranchise to delete.
     */
    where: MasterFranchiseWhereUniqueInput
  }

  /**
   * MasterFranchise deleteMany
   */
  export type MasterFranchiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterFranchises to delete
     */
    where?: MasterFranchiseWhereInput
    /**
     * Limit how many MasterFranchises to delete.
     */
    limit?: number
  }

  /**
   * MasterFranchise.superFranchises
   */
  export type MasterFranchise$superFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    where?: SuperFranchiseWhereInput
    orderBy?: SuperFranchiseOrderByWithRelationInput | SuperFranchiseOrderByWithRelationInput[]
    cursor?: SuperFranchiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuperFranchiseScalarFieldEnum | SuperFranchiseScalarFieldEnum[]
  }

  /**
   * MasterFranchise without action
   */
  export type MasterFranchiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterFranchise
     */
    select?: MasterFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterFranchise
     */
    omit?: MasterFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterFranchiseInclude<ExtArgs> | null
  }


  /**
   * Model SuperFranchise
   */

  export type AggregateSuperFranchise = {
    _count: SuperFranchiseCountAggregateOutputType | null
    _min: SuperFranchiseMinAggregateOutputType | null
    _max: SuperFranchiseMaxAggregateOutputType | null
  }

  export type SuperFranchiseMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    masterFranchiseId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperFranchiseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    masterFranchiseId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperFranchiseCountAggregateOutputType = {
    id: number
    name: number
    country: number
    masterFranchiseId: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuperFranchiseMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    masterFranchiseId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperFranchiseMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    masterFranchiseId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperFranchiseCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    masterFranchiseId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuperFranchiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperFranchise to aggregate.
     */
    where?: SuperFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperFranchises to fetch.
     */
    orderBy?: SuperFranchiseOrderByWithRelationInput | SuperFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperFranchises
    **/
    _count?: true | SuperFranchiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperFranchiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperFranchiseMaxAggregateInputType
  }

  export type GetSuperFranchiseAggregateType<T extends SuperFranchiseAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperFranchise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperFranchise[P]>
      : GetScalarType<T[P], AggregateSuperFranchise[P]>
  }




  export type SuperFranchiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperFranchiseWhereInput
    orderBy?: SuperFranchiseOrderByWithAggregationInput | SuperFranchiseOrderByWithAggregationInput[]
    by: SuperFranchiseScalarFieldEnum[] | SuperFranchiseScalarFieldEnum
    having?: SuperFranchiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperFranchiseCountAggregateInputType | true
    _min?: SuperFranchiseMinAggregateInputType
    _max?: SuperFranchiseMaxAggregateInputType
  }

  export type SuperFranchiseGroupByOutputType = {
    id: string
    name: string
    country: string
    masterFranchiseId: string
    adminId: string
    createdAt: Date
    updatedAt: Date
    _count: SuperFranchiseCountAggregateOutputType | null
    _min: SuperFranchiseMinAggregateOutputType | null
    _max: SuperFranchiseMaxAggregateOutputType | null
  }

  type GetSuperFranchiseGroupByPayload<T extends SuperFranchiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperFranchiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperFranchiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperFranchiseGroupByOutputType[P]>
            : GetScalarType<T[P], SuperFranchiseGroupByOutputType[P]>
        }
      >
    >


  export type SuperFranchiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    masterFranchiseId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    masterFranchise?: boolean | MasterFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
    regionalFranchises?: boolean | SuperFranchise$regionalFranchisesArgs<ExtArgs>
    _count?: boolean | SuperFranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superFranchise"]>

  export type SuperFranchiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    masterFranchiseId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    masterFranchise?: boolean | MasterFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superFranchise"]>

  export type SuperFranchiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    masterFranchiseId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    masterFranchise?: boolean | MasterFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superFranchise"]>

  export type SuperFranchiseSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    masterFranchiseId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuperFranchiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "masterFranchiseId" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["superFranchise"]>
  export type SuperFranchiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masterFranchise?: boolean | MasterFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
    regionalFranchises?: boolean | SuperFranchise$regionalFranchisesArgs<ExtArgs>
    _count?: boolean | SuperFranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuperFranchiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masterFranchise?: boolean | MasterFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }
  export type SuperFranchiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masterFranchise?: boolean | MasterFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }

  export type $SuperFranchisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperFranchise"
    objects: {
      masterFranchise: Prisma.$MasterFranchisePayload<ExtArgs>
      admin: Prisma.$AdministratorPayload<ExtArgs>
      regionalFranchises: Prisma.$RegionalFranchisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string
      masterFranchiseId: string
      adminId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["superFranchise"]>
    composites: {}
  }

  type SuperFranchiseGetPayload<S extends boolean | null | undefined | SuperFranchiseDefaultArgs> = $Result.GetResult<Prisma.$SuperFranchisePayload, S>

  type SuperFranchiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperFranchiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperFranchiseCountAggregateInputType | true
    }

  export interface SuperFranchiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperFranchise'], meta: { name: 'SuperFranchise' } }
    /**
     * Find zero or one SuperFranchise that matches the filter.
     * @param {SuperFranchiseFindUniqueArgs} args - Arguments to find a SuperFranchise
     * @example
     * // Get one SuperFranchise
     * const superFranchise = await prisma.superFranchise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperFranchiseFindUniqueArgs>(args: SelectSubset<T, SuperFranchiseFindUniqueArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuperFranchise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperFranchiseFindUniqueOrThrowArgs} args - Arguments to find a SuperFranchise
     * @example
     * // Get one SuperFranchise
     * const superFranchise = await prisma.superFranchise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperFranchiseFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperFranchiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperFranchise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperFranchiseFindFirstArgs} args - Arguments to find a SuperFranchise
     * @example
     * // Get one SuperFranchise
     * const superFranchise = await prisma.superFranchise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperFranchiseFindFirstArgs>(args?: SelectSubset<T, SuperFranchiseFindFirstArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperFranchise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperFranchiseFindFirstOrThrowArgs} args - Arguments to find a SuperFranchise
     * @example
     * // Get one SuperFranchise
     * const superFranchise = await prisma.superFranchise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperFranchiseFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperFranchiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuperFranchises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperFranchiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperFranchises
     * const superFranchises = await prisma.superFranchise.findMany()
     * 
     * // Get first 10 SuperFranchises
     * const superFranchises = await prisma.superFranchise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superFranchiseWithIdOnly = await prisma.superFranchise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperFranchiseFindManyArgs>(args?: SelectSubset<T, SuperFranchiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuperFranchise.
     * @param {SuperFranchiseCreateArgs} args - Arguments to create a SuperFranchise.
     * @example
     * // Create one SuperFranchise
     * const SuperFranchise = await prisma.superFranchise.create({
     *   data: {
     *     // ... data to create a SuperFranchise
     *   }
     * })
     * 
     */
    create<T extends SuperFranchiseCreateArgs>(args: SelectSubset<T, SuperFranchiseCreateArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuperFranchises.
     * @param {SuperFranchiseCreateManyArgs} args - Arguments to create many SuperFranchises.
     * @example
     * // Create many SuperFranchises
     * const superFranchise = await prisma.superFranchise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperFranchiseCreateManyArgs>(args?: SelectSubset<T, SuperFranchiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuperFranchises and returns the data saved in the database.
     * @param {SuperFranchiseCreateManyAndReturnArgs} args - Arguments to create many SuperFranchises.
     * @example
     * // Create many SuperFranchises
     * const superFranchise = await prisma.superFranchise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuperFranchises and only return the `id`
     * const superFranchiseWithIdOnly = await prisma.superFranchise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuperFranchiseCreateManyAndReturnArgs>(args?: SelectSubset<T, SuperFranchiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuperFranchise.
     * @param {SuperFranchiseDeleteArgs} args - Arguments to delete one SuperFranchise.
     * @example
     * // Delete one SuperFranchise
     * const SuperFranchise = await prisma.superFranchise.delete({
     *   where: {
     *     // ... filter to delete one SuperFranchise
     *   }
     * })
     * 
     */
    delete<T extends SuperFranchiseDeleteArgs>(args: SelectSubset<T, SuperFranchiseDeleteArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuperFranchise.
     * @param {SuperFranchiseUpdateArgs} args - Arguments to update one SuperFranchise.
     * @example
     * // Update one SuperFranchise
     * const superFranchise = await prisma.superFranchise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperFranchiseUpdateArgs>(args: SelectSubset<T, SuperFranchiseUpdateArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuperFranchises.
     * @param {SuperFranchiseDeleteManyArgs} args - Arguments to filter SuperFranchises to delete.
     * @example
     * // Delete a few SuperFranchises
     * const { count } = await prisma.superFranchise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperFranchiseDeleteManyArgs>(args?: SelectSubset<T, SuperFranchiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperFranchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperFranchiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperFranchises
     * const superFranchise = await prisma.superFranchise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperFranchiseUpdateManyArgs>(args: SelectSubset<T, SuperFranchiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperFranchises and returns the data updated in the database.
     * @param {SuperFranchiseUpdateManyAndReturnArgs} args - Arguments to update many SuperFranchises.
     * @example
     * // Update many SuperFranchises
     * const superFranchise = await prisma.superFranchise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuperFranchises and only return the `id`
     * const superFranchiseWithIdOnly = await prisma.superFranchise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuperFranchiseUpdateManyAndReturnArgs>(args: SelectSubset<T, SuperFranchiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuperFranchise.
     * @param {SuperFranchiseUpsertArgs} args - Arguments to update or create a SuperFranchise.
     * @example
     * // Update or create a SuperFranchise
     * const superFranchise = await prisma.superFranchise.upsert({
     *   create: {
     *     // ... data to create a SuperFranchise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperFranchise we want to update
     *   }
     * })
     */
    upsert<T extends SuperFranchiseUpsertArgs>(args: SelectSubset<T, SuperFranchiseUpsertArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuperFranchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperFranchiseCountArgs} args - Arguments to filter SuperFranchises to count.
     * @example
     * // Count the number of SuperFranchises
     * const count = await prisma.superFranchise.count({
     *   where: {
     *     // ... the filter for the SuperFranchises we want to count
     *   }
     * })
    **/
    count<T extends SuperFranchiseCountArgs>(
      args?: Subset<T, SuperFranchiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperFranchiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperFranchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperFranchiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperFranchiseAggregateArgs>(args: Subset<T, SuperFranchiseAggregateArgs>): Prisma.PrismaPromise<GetSuperFranchiseAggregateType<T>>

    /**
     * Group by SuperFranchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperFranchiseGroupByArgs} args - Group by arguments.
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
      T extends SuperFranchiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperFranchiseGroupByArgs['orderBy'] }
        : { orderBy?: SuperFranchiseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SuperFranchiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperFranchiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperFranchise model
   */
  readonly fields: SuperFranchiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperFranchise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperFranchiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    masterFranchise<T extends MasterFranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterFranchiseDefaultArgs<ExtArgs>>): Prisma__MasterFranchiseClient<$Result.GetResult<Prisma.$MasterFranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends AdministratorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministratorDefaultArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    regionalFranchises<T extends SuperFranchise$regionalFranchisesArgs<ExtArgs> = {}>(args?: Subset<T, SuperFranchise$regionalFranchisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuperFranchise model
   */ 
  interface SuperFranchiseFieldRefs {
    readonly id: FieldRef<"SuperFranchise", 'String'>
    readonly name: FieldRef<"SuperFranchise", 'String'>
    readonly country: FieldRef<"SuperFranchise", 'String'>
    readonly masterFranchiseId: FieldRef<"SuperFranchise", 'String'>
    readonly adminId: FieldRef<"SuperFranchise", 'String'>
    readonly createdAt: FieldRef<"SuperFranchise", 'DateTime'>
    readonly updatedAt: FieldRef<"SuperFranchise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperFranchise findUnique
   */
  export type SuperFranchiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which SuperFranchise to fetch.
     */
    where: SuperFranchiseWhereUniqueInput
  }

  /**
   * SuperFranchise findUniqueOrThrow
   */
  export type SuperFranchiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which SuperFranchise to fetch.
     */
    where: SuperFranchiseWhereUniqueInput
  }

  /**
   * SuperFranchise findFirst
   */
  export type SuperFranchiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which SuperFranchise to fetch.
     */
    where?: SuperFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperFranchises to fetch.
     */
    orderBy?: SuperFranchiseOrderByWithRelationInput | SuperFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperFranchises.
     */
    cursor?: SuperFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperFranchises.
     */
    distinct?: SuperFranchiseScalarFieldEnum | SuperFranchiseScalarFieldEnum[]
  }

  /**
   * SuperFranchise findFirstOrThrow
   */
  export type SuperFranchiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which SuperFranchise to fetch.
     */
    where?: SuperFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperFranchises to fetch.
     */
    orderBy?: SuperFranchiseOrderByWithRelationInput | SuperFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperFranchises.
     */
    cursor?: SuperFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperFranchises.
     */
    distinct?: SuperFranchiseScalarFieldEnum | SuperFranchiseScalarFieldEnum[]
  }

  /**
   * SuperFranchise findMany
   */
  export type SuperFranchiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which SuperFranchises to fetch.
     */
    where?: SuperFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperFranchises to fetch.
     */
    orderBy?: SuperFranchiseOrderByWithRelationInput | SuperFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperFranchises.
     */
    cursor?: SuperFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperFranchises.
     */
    skip?: number
    distinct?: SuperFranchiseScalarFieldEnum | SuperFranchiseScalarFieldEnum[]
  }

  /**
   * SuperFranchise create
   */
  export type SuperFranchiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * The data needed to create a SuperFranchise.
     */
    data: XOR<SuperFranchiseCreateInput, SuperFranchiseUncheckedCreateInput>
  }

  /**
   * SuperFranchise createMany
   */
  export type SuperFranchiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperFranchises.
     */
    data: SuperFranchiseCreateManyInput | SuperFranchiseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperFranchise createManyAndReturn
   */
  export type SuperFranchiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * The data used to create many SuperFranchises.
     */
    data: SuperFranchiseCreateManyInput | SuperFranchiseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuperFranchise update
   */
  export type SuperFranchiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * The data needed to update a SuperFranchise.
     */
    data: XOR<SuperFranchiseUpdateInput, SuperFranchiseUncheckedUpdateInput>
    /**
     * Choose, which SuperFranchise to update.
     */
    where: SuperFranchiseWhereUniqueInput
  }

  /**
   * SuperFranchise updateMany
   */
  export type SuperFranchiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperFranchises.
     */
    data: XOR<SuperFranchiseUpdateManyMutationInput, SuperFranchiseUncheckedUpdateManyInput>
    /**
     * Filter which SuperFranchises to update
     */
    where?: SuperFranchiseWhereInput
    /**
     * Limit how many SuperFranchises to update.
     */
    limit?: number
  }

  /**
   * SuperFranchise updateManyAndReturn
   */
  export type SuperFranchiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * The data used to update SuperFranchises.
     */
    data: XOR<SuperFranchiseUpdateManyMutationInput, SuperFranchiseUncheckedUpdateManyInput>
    /**
     * Filter which SuperFranchises to update
     */
    where?: SuperFranchiseWhereInput
    /**
     * Limit how many SuperFranchises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SuperFranchise upsert
   */
  export type SuperFranchiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * The filter to search for the SuperFranchise to update in case it exists.
     */
    where: SuperFranchiseWhereUniqueInput
    /**
     * In case the SuperFranchise found by the `where` argument doesn't exist, create a new SuperFranchise with this data.
     */
    create: XOR<SuperFranchiseCreateInput, SuperFranchiseUncheckedCreateInput>
    /**
     * In case the SuperFranchise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperFranchiseUpdateInput, SuperFranchiseUncheckedUpdateInput>
  }

  /**
   * SuperFranchise delete
   */
  export type SuperFranchiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
    /**
     * Filter which SuperFranchise to delete.
     */
    where: SuperFranchiseWhereUniqueInput
  }

  /**
   * SuperFranchise deleteMany
   */
  export type SuperFranchiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperFranchises to delete
     */
    where?: SuperFranchiseWhereInput
    /**
     * Limit how many SuperFranchises to delete.
     */
    limit?: number
  }

  /**
   * SuperFranchise.regionalFranchises
   */
  export type SuperFranchise$regionalFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    where?: RegionalFranchiseWhereInput
    orderBy?: RegionalFranchiseOrderByWithRelationInput | RegionalFranchiseOrderByWithRelationInput[]
    cursor?: RegionalFranchiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegionalFranchiseScalarFieldEnum | RegionalFranchiseScalarFieldEnum[]
  }

  /**
   * SuperFranchise without action
   */
  export type SuperFranchiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperFranchise
     */
    select?: SuperFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperFranchise
     */
    omit?: SuperFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperFranchiseInclude<ExtArgs> | null
  }


  /**
   * Model RegionalFranchise
   */

  export type AggregateRegionalFranchise = {
    _count: RegionalFranchiseCountAggregateOutputType | null
    _min: RegionalFranchiseMinAggregateOutputType | null
    _max: RegionalFranchiseMaxAggregateOutputType | null
  }

  export type RegionalFranchiseMinAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    superFranchiseId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionalFranchiseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    state: string | null
    superFranchiseId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionalFranchiseCountAggregateOutputType = {
    id: number
    name: number
    state: number
    superFranchiseId: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegionalFranchiseMinAggregateInputType = {
    id?: true
    name?: true
    state?: true
    superFranchiseId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionalFranchiseMaxAggregateInputType = {
    id?: true
    name?: true
    state?: true
    superFranchiseId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionalFranchiseCountAggregateInputType = {
    id?: true
    name?: true
    state?: true
    superFranchiseId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegionalFranchiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegionalFranchise to aggregate.
     */
    where?: RegionalFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionalFranchises to fetch.
     */
    orderBy?: RegionalFranchiseOrderByWithRelationInput | RegionalFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionalFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionalFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionalFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegionalFranchises
    **/
    _count?: true | RegionalFranchiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionalFranchiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionalFranchiseMaxAggregateInputType
  }

  export type GetRegionalFranchiseAggregateType<T extends RegionalFranchiseAggregateArgs> = {
        [P in keyof T & keyof AggregateRegionalFranchise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegionalFranchise[P]>
      : GetScalarType<T[P], AggregateRegionalFranchise[P]>
  }




  export type RegionalFranchiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionalFranchiseWhereInput
    orderBy?: RegionalFranchiseOrderByWithAggregationInput | RegionalFranchiseOrderByWithAggregationInput[]
    by: RegionalFranchiseScalarFieldEnum[] | RegionalFranchiseScalarFieldEnum
    having?: RegionalFranchiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionalFranchiseCountAggregateInputType | true
    _min?: RegionalFranchiseMinAggregateInputType
    _max?: RegionalFranchiseMaxAggregateInputType
  }

  export type RegionalFranchiseGroupByOutputType = {
    id: string
    name: string
    state: string
    superFranchiseId: string
    adminId: string
    createdAt: Date
    updatedAt: Date
    _count: RegionalFranchiseCountAggregateOutputType | null
    _min: RegionalFranchiseMinAggregateOutputType | null
    _max: RegionalFranchiseMaxAggregateOutputType | null
  }

  type GetRegionalFranchiseGroupByPayload<T extends RegionalFranchiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionalFranchiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionalFranchiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionalFranchiseGroupByOutputType[P]>
            : GetScalarType<T[P], RegionalFranchiseGroupByOutputType[P]>
        }
      >
    >


  export type RegionalFranchiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    superFranchiseId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    superFranchise?: boolean | SuperFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
    chapters?: boolean | RegionalFranchise$chaptersArgs<ExtArgs>
    _count?: boolean | RegionalFranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regionalFranchise"]>

  export type RegionalFranchiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    superFranchiseId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    superFranchise?: boolean | SuperFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regionalFranchise"]>

  export type RegionalFranchiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    state?: boolean
    superFranchiseId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    superFranchise?: boolean | SuperFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regionalFranchise"]>

  export type RegionalFranchiseSelectScalar = {
    id?: boolean
    name?: boolean
    state?: boolean
    superFranchiseId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegionalFranchiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "state" | "superFranchiseId" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["regionalFranchise"]>
  export type RegionalFranchiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superFranchise?: boolean | SuperFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
    chapters?: boolean | RegionalFranchise$chaptersArgs<ExtArgs>
    _count?: boolean | RegionalFranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionalFranchiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superFranchise?: boolean | SuperFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }
  export type RegionalFranchiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superFranchise?: boolean | SuperFranchiseDefaultArgs<ExtArgs>
    admin?: boolean | AdministratorDefaultArgs<ExtArgs>
  }

  export type $RegionalFranchisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegionalFranchise"
    objects: {
      superFranchise: Prisma.$SuperFranchisePayload<ExtArgs>
      admin: Prisma.$AdministratorPayload<ExtArgs>
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      state: string
      superFranchiseId: string
      adminId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["regionalFranchise"]>
    composites: {}
  }

  type RegionalFranchiseGetPayload<S extends boolean | null | undefined | RegionalFranchiseDefaultArgs> = $Result.GetResult<Prisma.$RegionalFranchisePayload, S>

  type RegionalFranchiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionalFranchiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionalFranchiseCountAggregateInputType | true
    }

  export interface RegionalFranchiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegionalFranchise'], meta: { name: 'RegionalFranchise' } }
    /**
     * Find zero or one RegionalFranchise that matches the filter.
     * @param {RegionalFranchiseFindUniqueArgs} args - Arguments to find a RegionalFranchise
     * @example
     * // Get one RegionalFranchise
     * const regionalFranchise = await prisma.regionalFranchise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionalFranchiseFindUniqueArgs>(args: SelectSubset<T, RegionalFranchiseFindUniqueArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegionalFranchise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionalFranchiseFindUniqueOrThrowArgs} args - Arguments to find a RegionalFranchise
     * @example
     * // Get one RegionalFranchise
     * const regionalFranchise = await prisma.regionalFranchise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionalFranchiseFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionalFranchiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegionalFranchise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionalFranchiseFindFirstArgs} args - Arguments to find a RegionalFranchise
     * @example
     * // Get one RegionalFranchise
     * const regionalFranchise = await prisma.regionalFranchise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionalFranchiseFindFirstArgs>(args?: SelectSubset<T, RegionalFranchiseFindFirstArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegionalFranchise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionalFranchiseFindFirstOrThrowArgs} args - Arguments to find a RegionalFranchise
     * @example
     * // Get one RegionalFranchise
     * const regionalFranchise = await prisma.regionalFranchise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionalFranchiseFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionalFranchiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegionalFranchises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionalFranchiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegionalFranchises
     * const regionalFranchises = await prisma.regionalFranchise.findMany()
     * 
     * // Get first 10 RegionalFranchises
     * const regionalFranchises = await prisma.regionalFranchise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionalFranchiseWithIdOnly = await prisma.regionalFranchise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionalFranchiseFindManyArgs>(args?: SelectSubset<T, RegionalFranchiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegionalFranchise.
     * @param {RegionalFranchiseCreateArgs} args - Arguments to create a RegionalFranchise.
     * @example
     * // Create one RegionalFranchise
     * const RegionalFranchise = await prisma.regionalFranchise.create({
     *   data: {
     *     // ... data to create a RegionalFranchise
     *   }
     * })
     * 
     */
    create<T extends RegionalFranchiseCreateArgs>(args: SelectSubset<T, RegionalFranchiseCreateArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegionalFranchises.
     * @param {RegionalFranchiseCreateManyArgs} args - Arguments to create many RegionalFranchises.
     * @example
     * // Create many RegionalFranchises
     * const regionalFranchise = await prisma.regionalFranchise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionalFranchiseCreateManyArgs>(args?: SelectSubset<T, RegionalFranchiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegionalFranchises and returns the data saved in the database.
     * @param {RegionalFranchiseCreateManyAndReturnArgs} args - Arguments to create many RegionalFranchises.
     * @example
     * // Create many RegionalFranchises
     * const regionalFranchise = await prisma.regionalFranchise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegionalFranchises and only return the `id`
     * const regionalFranchiseWithIdOnly = await prisma.regionalFranchise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionalFranchiseCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionalFranchiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegionalFranchise.
     * @param {RegionalFranchiseDeleteArgs} args - Arguments to delete one RegionalFranchise.
     * @example
     * // Delete one RegionalFranchise
     * const RegionalFranchise = await prisma.regionalFranchise.delete({
     *   where: {
     *     // ... filter to delete one RegionalFranchise
     *   }
     * })
     * 
     */
    delete<T extends RegionalFranchiseDeleteArgs>(args: SelectSubset<T, RegionalFranchiseDeleteArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegionalFranchise.
     * @param {RegionalFranchiseUpdateArgs} args - Arguments to update one RegionalFranchise.
     * @example
     * // Update one RegionalFranchise
     * const regionalFranchise = await prisma.regionalFranchise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionalFranchiseUpdateArgs>(args: SelectSubset<T, RegionalFranchiseUpdateArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegionalFranchises.
     * @param {RegionalFranchiseDeleteManyArgs} args - Arguments to filter RegionalFranchises to delete.
     * @example
     * // Delete a few RegionalFranchises
     * const { count } = await prisma.regionalFranchise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionalFranchiseDeleteManyArgs>(args?: SelectSubset<T, RegionalFranchiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegionalFranchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionalFranchiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegionalFranchises
     * const regionalFranchise = await prisma.regionalFranchise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionalFranchiseUpdateManyArgs>(args: SelectSubset<T, RegionalFranchiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegionalFranchises and returns the data updated in the database.
     * @param {RegionalFranchiseUpdateManyAndReturnArgs} args - Arguments to update many RegionalFranchises.
     * @example
     * // Update many RegionalFranchises
     * const regionalFranchise = await prisma.regionalFranchise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegionalFranchises and only return the `id`
     * const regionalFranchiseWithIdOnly = await prisma.regionalFranchise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionalFranchiseUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionalFranchiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegionalFranchise.
     * @param {RegionalFranchiseUpsertArgs} args - Arguments to update or create a RegionalFranchise.
     * @example
     * // Update or create a RegionalFranchise
     * const regionalFranchise = await prisma.regionalFranchise.upsert({
     *   create: {
     *     // ... data to create a RegionalFranchise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegionalFranchise we want to update
     *   }
     * })
     */
    upsert<T extends RegionalFranchiseUpsertArgs>(args: SelectSubset<T, RegionalFranchiseUpsertArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegionalFranchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionalFranchiseCountArgs} args - Arguments to filter RegionalFranchises to count.
     * @example
     * // Count the number of RegionalFranchises
     * const count = await prisma.regionalFranchise.count({
     *   where: {
     *     // ... the filter for the RegionalFranchises we want to count
     *   }
     * })
    **/
    count<T extends RegionalFranchiseCountArgs>(
      args?: Subset<T, RegionalFranchiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionalFranchiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegionalFranchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionalFranchiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionalFranchiseAggregateArgs>(args: Subset<T, RegionalFranchiseAggregateArgs>): Prisma.PrismaPromise<GetRegionalFranchiseAggregateType<T>>

    /**
     * Group by RegionalFranchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionalFranchiseGroupByArgs} args - Group by arguments.
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
      T extends RegionalFranchiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionalFranchiseGroupByArgs['orderBy'] }
        : { orderBy?: RegionalFranchiseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RegionalFranchiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionalFranchiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegionalFranchise model
   */
  readonly fields: RegionalFranchiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegionalFranchise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionalFranchiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    superFranchise<T extends SuperFranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuperFranchiseDefaultArgs<ExtArgs>>): Prisma__SuperFranchiseClient<$Result.GetResult<Prisma.$SuperFranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends AdministratorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministratorDefaultArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapters<T extends RegionalFranchise$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, RegionalFranchise$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegionalFranchise model
   */ 
  interface RegionalFranchiseFieldRefs {
    readonly id: FieldRef<"RegionalFranchise", 'String'>
    readonly name: FieldRef<"RegionalFranchise", 'String'>
    readonly state: FieldRef<"RegionalFranchise", 'String'>
    readonly superFranchiseId: FieldRef<"RegionalFranchise", 'String'>
    readonly adminId: FieldRef<"RegionalFranchise", 'String'>
    readonly createdAt: FieldRef<"RegionalFranchise", 'DateTime'>
    readonly updatedAt: FieldRef<"RegionalFranchise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegionalFranchise findUnique
   */
  export type RegionalFranchiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which RegionalFranchise to fetch.
     */
    where: RegionalFranchiseWhereUniqueInput
  }

  /**
   * RegionalFranchise findUniqueOrThrow
   */
  export type RegionalFranchiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which RegionalFranchise to fetch.
     */
    where: RegionalFranchiseWhereUniqueInput
  }

  /**
   * RegionalFranchise findFirst
   */
  export type RegionalFranchiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which RegionalFranchise to fetch.
     */
    where?: RegionalFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionalFranchises to fetch.
     */
    orderBy?: RegionalFranchiseOrderByWithRelationInput | RegionalFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegionalFranchises.
     */
    cursor?: RegionalFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionalFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionalFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegionalFranchises.
     */
    distinct?: RegionalFranchiseScalarFieldEnum | RegionalFranchiseScalarFieldEnum[]
  }

  /**
   * RegionalFranchise findFirstOrThrow
   */
  export type RegionalFranchiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which RegionalFranchise to fetch.
     */
    where?: RegionalFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionalFranchises to fetch.
     */
    orderBy?: RegionalFranchiseOrderByWithRelationInput | RegionalFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegionalFranchises.
     */
    cursor?: RegionalFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionalFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionalFranchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegionalFranchises.
     */
    distinct?: RegionalFranchiseScalarFieldEnum | RegionalFranchiseScalarFieldEnum[]
  }

  /**
   * RegionalFranchise findMany
   */
  export type RegionalFranchiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * Filter, which RegionalFranchises to fetch.
     */
    where?: RegionalFranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegionalFranchises to fetch.
     */
    orderBy?: RegionalFranchiseOrderByWithRelationInput | RegionalFranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegionalFranchises.
     */
    cursor?: RegionalFranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegionalFranchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegionalFranchises.
     */
    skip?: number
    distinct?: RegionalFranchiseScalarFieldEnum | RegionalFranchiseScalarFieldEnum[]
  }

  /**
   * RegionalFranchise create
   */
  export type RegionalFranchiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * The data needed to create a RegionalFranchise.
     */
    data: XOR<RegionalFranchiseCreateInput, RegionalFranchiseUncheckedCreateInput>
  }

  /**
   * RegionalFranchise createMany
   */
  export type RegionalFranchiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegionalFranchises.
     */
    data: RegionalFranchiseCreateManyInput | RegionalFranchiseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegionalFranchise createManyAndReturn
   */
  export type RegionalFranchiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * The data used to create many RegionalFranchises.
     */
    data: RegionalFranchiseCreateManyInput | RegionalFranchiseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegionalFranchise update
   */
  export type RegionalFranchiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * The data needed to update a RegionalFranchise.
     */
    data: XOR<RegionalFranchiseUpdateInput, RegionalFranchiseUncheckedUpdateInput>
    /**
     * Choose, which RegionalFranchise to update.
     */
    where: RegionalFranchiseWhereUniqueInput
  }

  /**
   * RegionalFranchise updateMany
   */
  export type RegionalFranchiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegionalFranchises.
     */
    data: XOR<RegionalFranchiseUpdateManyMutationInput, RegionalFranchiseUncheckedUpdateManyInput>
    /**
     * Filter which RegionalFranchises to update
     */
    where?: RegionalFranchiseWhereInput
    /**
     * Limit how many RegionalFranchises to update.
     */
    limit?: number
  }

  /**
   * RegionalFranchise updateManyAndReturn
   */
  export type RegionalFranchiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * The data used to update RegionalFranchises.
     */
    data: XOR<RegionalFranchiseUpdateManyMutationInput, RegionalFranchiseUncheckedUpdateManyInput>
    /**
     * Filter which RegionalFranchises to update
     */
    where?: RegionalFranchiseWhereInput
    /**
     * Limit how many RegionalFranchises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegionalFranchise upsert
   */
  export type RegionalFranchiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * The filter to search for the RegionalFranchise to update in case it exists.
     */
    where: RegionalFranchiseWhereUniqueInput
    /**
     * In case the RegionalFranchise found by the `where` argument doesn't exist, create a new RegionalFranchise with this data.
     */
    create: XOR<RegionalFranchiseCreateInput, RegionalFranchiseUncheckedCreateInput>
    /**
     * In case the RegionalFranchise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionalFranchiseUpdateInput, RegionalFranchiseUncheckedUpdateInput>
  }

  /**
   * RegionalFranchise delete
   */
  export type RegionalFranchiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
    /**
     * Filter which RegionalFranchise to delete.
     */
    where: RegionalFranchiseWhereUniqueInput
  }

  /**
   * RegionalFranchise deleteMany
   */
  export type RegionalFranchiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegionalFranchises to delete
     */
    where?: RegionalFranchiseWhereInput
    /**
     * Limit how many RegionalFranchises to delete.
     */
    limit?: number
  }

  /**
   * RegionalFranchise.chapters
   */
  export type RegionalFranchise$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * RegionalFranchise without action
   */
  export type RegionalFranchiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionalFranchise
     */
    select?: RegionalFranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegionalFranchise
     */
    omit?: RegionalFranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionalFranchiseInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    name: string | null
    regionalFranchiseId: string | null
    chapterLeaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    regionalFranchiseId: string | null
    chapterLeaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    name: number
    regionalFranchiseId: number
    chapterLeaderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChapterMinAggregateInputType = {
    id?: true
    name?: true
    regionalFranchiseId?: true
    chapterLeaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    name?: true
    regionalFranchiseId?: true
    chapterLeaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    name?: true
    regionalFranchiseId?: true
    chapterLeaderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    name: string
    regionalFranchiseId: string
    chapterLeaderId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChapterCountAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    regionalFranchiseId?: boolean
    chapterLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regionalFranchise?: boolean | RegionalFranchiseDefaultArgs<ExtArgs>
    chapterLeader?: boolean | Chapter$chapterLeaderArgs<ExtArgs>
    clubs?: boolean | Chapter$clubsArgs<ExtArgs>
    events?: boolean | Chapter$eventsArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    regionalFranchiseId?: boolean
    chapterLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regionalFranchise?: boolean | RegionalFranchiseDefaultArgs<ExtArgs>
    chapterLeader?: boolean | Chapter$chapterLeaderArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    regionalFranchiseId?: boolean
    chapterLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regionalFranchise?: boolean | RegionalFranchiseDefaultArgs<ExtArgs>
    chapterLeader?: boolean | Chapter$chapterLeaderArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    name?: boolean
    regionalFranchiseId?: boolean
    chapterLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "regionalFranchiseId" | "chapterLeaderId" | "createdAt" | "updatedAt", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regionalFranchise?: boolean | RegionalFranchiseDefaultArgs<ExtArgs>
    chapterLeader?: boolean | Chapter$chapterLeaderArgs<ExtArgs>
    clubs?: boolean | Chapter$clubsArgs<ExtArgs>
    events?: boolean | Chapter$eventsArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regionalFranchise?: boolean | RegionalFranchiseDefaultArgs<ExtArgs>
    chapterLeader?: boolean | Chapter$chapterLeaderArgs<ExtArgs>
  }
  export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regionalFranchise?: boolean | RegionalFranchiseDefaultArgs<ExtArgs>
    chapterLeader?: boolean | Chapter$chapterLeaderArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      regionalFranchise: Prisma.$RegionalFranchisePayload<ExtArgs>
      chapterLeader: Prisma.$UserPayload<ExtArgs> | null
      clubs: Prisma.$ClubPayload<ExtArgs>[]
      events: Prisma.$ChapterEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      regionalFranchiseId: string
      chapterLeaderId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regionalFranchise<T extends RegionalFranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionalFranchiseDefaultArgs<ExtArgs>>): Prisma__RegionalFranchiseClient<$Result.GetResult<Prisma.$RegionalFranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapterLeader<T extends Chapter$chapterLeaderArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$chapterLeaderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clubs<T extends Chapter$clubsArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$clubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Chapter$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chapter model
   */ 
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'String'>
    readonly name: FieldRef<"Chapter", 'String'>
    readonly regionalFranchiseId: FieldRef<"Chapter", 'String'>
    readonly chapterLeaderId: FieldRef<"Chapter", 'String'>
    readonly createdAt: FieldRef<"Chapter", 'DateTime'>
    readonly updatedAt: FieldRef<"Chapter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter createManyAndReturn
   */
  export type ChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter updateManyAndReturn
   */
  export type ChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.chapterLeader
   */
  export type Chapter$chapterLeaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Chapter.clubs
   */
  export type Chapter$clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    cursor?: ClubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Chapter.events
   */
  export type Chapter$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    where?: ChapterEventWhereInput
    orderBy?: ChapterEventOrderByWithRelationInput | ChapterEventOrderByWithRelationInput[]
    cursor?: ChapterEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterEventScalarFieldEnum | ChapterEventScalarFieldEnum[]
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubMinAggregateOutputType = {
    id: string | null
    name: string | null
    chapterId: string | null
    clubLeaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClubMaxAggregateOutputType = {
    id: string | null
    name: string | null
    chapterId: string | null
    clubLeaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    name: number
    chapterId: number
    clubLeaderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClubMinAggregateInputType = {
    id?: true
    name?: true
    chapterId?: true
    clubLeaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    name?: true
    chapterId?: true
    clubLeaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    name?: true
    chapterId?: true
    clubLeaderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: string
    name: string
    chapterId: string
    clubLeaderId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    chapterId?: boolean
    clubLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    clubLeader?: boolean | Club$clubLeaderArgs<ExtArgs>
    members?: boolean | Club$membersArgs<ExtArgs>
    events?: boolean | Club$eventsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    chapterId?: boolean
    clubLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    clubLeader?: boolean | Club$clubLeaderArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    chapterId?: boolean
    clubLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    clubLeader?: boolean | Club$clubLeaderArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    name?: boolean
    chapterId?: boolean
    clubLeaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "chapterId" | "clubLeaderId" | "createdAt" | "updatedAt", ExtArgs["result"]["club"]>
  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    clubLeader?: boolean | Club$clubLeaderArgs<ExtArgs>
    members?: boolean | Club$membersArgs<ExtArgs>
    events?: boolean | Club$eventsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    clubLeader?: boolean | Club$clubLeaderArgs<ExtArgs>
  }
  export type ClubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    clubLeader?: boolean | Club$clubLeaderArgs<ExtArgs>
  }

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      chapter: Prisma.$ChapterPayload<ExtArgs>
      clubLeader: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$UserPayload<ExtArgs>[]
      events: Prisma.$ClubEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      chapterId: string
      clubLeaderId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
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
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clubLeader<T extends Club$clubLeaderArgs<ExtArgs> = {}>(args?: Subset<T, Club$clubLeaderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Club$membersArgs<ExtArgs> = {}>(args?: Subset<T, Club$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Club$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Club$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Club model
   */ 
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'String'>
    readonly name: FieldRef<"Club", 'String'>
    readonly chapterId: FieldRef<"Club", 'String'>
    readonly clubLeaderId: FieldRef<"Club", 'String'>
    readonly createdAt: FieldRef<"Club", 'DateTime'>
    readonly updatedAt: FieldRef<"Club", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club.clubLeader
   */
  export type Club$clubLeaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Club.members
   */
  export type Club$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Club.events
   */
  export type Club$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    where?: ClubEventWhereInput
    orderBy?: ClubEventOrderByWithRelationInput | ClubEventOrderByWithRelationInput[]
    cursor?: ClubEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClubEventScalarFieldEnum | ClubEventScalarFieldEnum[]
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
  }


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
    email: string | null
    emailVerified: boolean | null
    phone: string | null
    phoneVerified: boolean | null
    password: string | null
    name: string | null
    membershipType: $Enums.UserMembershipType | null
    membershipStartDate: Date | null
    membershipEndDate: Date | null
    leadingChapterId: string | null
    leadingClubId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: boolean | null
    phone: string | null
    phoneVerified: boolean | null
    password: string | null
    name: string | null
    membershipType: $Enums.UserMembershipType | null
    membershipStartDate: Date | null
    membershipEndDate: Date | null
    leadingChapterId: string | null
    leadingClubId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    phone: number
    phoneVerified: number
    password: number
    name: number
    membershipType: number
    membershipStartDate: number
    membershipEndDate: number
    leadingChapterId: number
    leadingClubId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    password?: true
    name?: true
    membershipType?: true
    membershipStartDate?: true
    membershipEndDate?: true
    leadingChapterId?: true
    leadingClubId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    password?: true
    name?: true
    membershipType?: true
    membershipStartDate?: true
    membershipEndDate?: true
    leadingChapterId?: true
    leadingClubId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    password?: true
    name?: true
    membershipType?: true
    membershipStartDate?: true
    membershipEndDate?: true
    leadingChapterId?: true
    leadingClubId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    emailVerified: boolean
    phone: string
    phoneVerified: boolean
    password: string
    name: string
    membershipType: $Enums.UserMembershipType
    membershipStartDate: Date
    membershipEndDate: Date
    leadingChapterId: string | null
    leadingClubId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    password?: boolean
    name?: boolean
    membershipType?: boolean
    membershipStartDate?: boolean
    membershipEndDate?: boolean
    leadingChapterId?: boolean
    leadingClubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leadingChapter?: boolean | User$leadingChapterArgs<ExtArgs>
    leadingClub?: boolean | User$leadingClubArgs<ExtArgs>
    clubs?: boolean | User$clubsArgs<ExtArgs>
    referralsCreated?: boolean | User$referralsCreatedArgs<ExtArgs>
    referralsReceived?: boolean | User$referralsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    password?: boolean
    name?: boolean
    membershipType?: boolean
    membershipStartDate?: boolean
    membershipEndDate?: boolean
    leadingChapterId?: boolean
    leadingClubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    password?: boolean
    name?: boolean
    membershipType?: boolean
    membershipStartDate?: boolean
    membershipEndDate?: boolean
    leadingChapterId?: boolean
    leadingClubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    password?: boolean
    name?: boolean
    membershipType?: boolean
    membershipStartDate?: boolean
    membershipEndDate?: boolean
    leadingChapterId?: boolean
    leadingClubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "emailVerified" | "phone" | "phoneVerified" | "password" | "name" | "membershipType" | "membershipStartDate" | "membershipEndDate" | "leadingChapterId" | "leadingClubId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leadingChapter?: boolean | User$leadingChapterArgs<ExtArgs>
    leadingClub?: boolean | User$leadingClubArgs<ExtArgs>
    clubs?: boolean | User$clubsArgs<ExtArgs>
    referralsCreated?: boolean | User$referralsCreatedArgs<ExtArgs>
    referralsReceived?: boolean | User$referralsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      leadingChapter: Prisma.$ChapterPayload<ExtArgs> | null
      leadingClub: Prisma.$ClubPayload<ExtArgs> | null
      clubs: Prisma.$ClubPayload<ExtArgs>[]
      referralsCreated: Prisma.$ReferralPayload<ExtArgs>[]
      referralsReceived: Prisma.$ReferralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: boolean
      phone: string
      phoneVerified: boolean
      password: string
      name: string
      membershipType: $Enums.UserMembershipType
      membershipStartDate: Date
      membershipEndDate: Date
      leadingChapterId: string | null
      leadingClubId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leadingChapter<T extends User$leadingChapterArgs<ExtArgs> = {}>(args?: Subset<T, User$leadingChapterArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leadingClub<T extends User$leadingClubArgs<ExtArgs> = {}>(args?: Subset<T, User$leadingClubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clubs<T extends User$clubsArgs<ExtArgs> = {}>(args?: Subset<T, User$clubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralsCreated<T extends User$referralsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralsReceived<T extends User$referralsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly phone: FieldRef<"User", 'String'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly membershipType: FieldRef<"User", 'UserMembershipType'>
    readonly membershipStartDate: FieldRef<"User", 'DateTime'>
    readonly membershipEndDate: FieldRef<"User", 'DateTime'>
    readonly leadingChapterId: FieldRef<"User", 'String'>
    readonly leadingClubId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.leadingChapter
   */
  export type User$leadingChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
  }

  /**
   * User.leadingClub
   */
  export type User$leadingClubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * User.clubs
   */
  export type User$clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    cursor?: ClubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * User.referralsCreated
   */
  export type User$referralsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * User.referralsReceived
   */
  export type User$referralsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChapterEvent
   */

  export type AggregateChapterEvent = {
    _count: ChapterEventCountAggregateOutputType | null
    _min: ChapterEventMinAggregateOutputType | null
    _max: ChapterEventMaxAggregateOutputType | null
  }

  export type ChapterEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    chapterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    chapterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterEventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    chapterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChapterEventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    chapterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterEventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    chapterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterEventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    chapterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChapterEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChapterEvent to aggregate.
     */
    where?: ChapterEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterEvents to fetch.
     */
    orderBy?: ChapterEventOrderByWithRelationInput | ChapterEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChapterEvents
    **/
    _count?: true | ChapterEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterEventMaxAggregateInputType
  }

  export type GetChapterEventAggregateType<T extends ChapterEventAggregateArgs> = {
        [P in keyof T & keyof AggregateChapterEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapterEvent[P]>
      : GetScalarType<T[P], AggregateChapterEvent[P]>
  }




  export type ChapterEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterEventWhereInput
    orderBy?: ChapterEventOrderByWithAggregationInput | ChapterEventOrderByWithAggregationInput[]
    by: ChapterEventScalarFieldEnum[] | ChapterEventScalarFieldEnum
    having?: ChapterEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterEventCountAggregateInputType | true
    _min?: ChapterEventMinAggregateInputType
    _max?: ChapterEventMaxAggregateInputType
  }

  export type ChapterEventGroupByOutputType = {
    id: string
    title: string
    description: string
    date: Date
    chapterId: string
    createdAt: Date
    updatedAt: Date
    _count: ChapterEventCountAggregateOutputType | null
    _min: ChapterEventMinAggregateOutputType | null
    _max: ChapterEventMaxAggregateOutputType | null
  }

  type GetChapterEventGroupByPayload<T extends ChapterEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterEventGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterEventGroupByOutputType[P]>
        }
      >
    >


  export type ChapterEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    chapterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapterEvent"]>

  export type ChapterEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    chapterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapterEvent"]>

  export type ChapterEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    chapterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapterEvent"]>

  export type ChapterEventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    chapterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChapterEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "chapterId" | "createdAt" | "updatedAt", ExtArgs["result"]["chapterEvent"]>
  export type ChapterEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type ChapterEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }
  export type ChapterEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $ChapterEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChapterEvent"
    objects: {
      chapter: Prisma.$ChapterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      date: Date
      chapterId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chapterEvent"]>
    composites: {}
  }

  type ChapterEventGetPayload<S extends boolean | null | undefined | ChapterEventDefaultArgs> = $Result.GetResult<Prisma.$ChapterEventPayload, S>

  type ChapterEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterEventCountAggregateInputType | true
    }

  export interface ChapterEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChapterEvent'], meta: { name: 'ChapterEvent' } }
    /**
     * Find zero or one ChapterEvent that matches the filter.
     * @param {ChapterEventFindUniqueArgs} args - Arguments to find a ChapterEvent
     * @example
     * // Get one ChapterEvent
     * const chapterEvent = await prisma.chapterEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterEventFindUniqueArgs>(args: SelectSubset<T, ChapterEventFindUniqueArgs<ExtArgs>>): Prisma__ChapterEventClient<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChapterEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterEventFindUniqueOrThrowArgs} args - Arguments to find a ChapterEvent
     * @example
     * // Get one ChapterEvent
     * const chapterEvent = await prisma.chapterEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterEventClient<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChapterEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterEventFindFirstArgs} args - Arguments to find a ChapterEvent
     * @example
     * // Get one ChapterEvent
     * const chapterEvent = await prisma.chapterEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterEventFindFirstArgs>(args?: SelectSubset<T, ChapterEventFindFirstArgs<ExtArgs>>): Prisma__ChapterEventClient<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChapterEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterEventFindFirstOrThrowArgs} args - Arguments to find a ChapterEvent
     * @example
     * // Get one ChapterEvent
     * const chapterEvent = await prisma.chapterEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterEventClient<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChapterEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChapterEvents
     * const chapterEvents = await prisma.chapterEvent.findMany()
     * 
     * // Get first 10 ChapterEvents
     * const chapterEvents = await prisma.chapterEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterEventWithIdOnly = await prisma.chapterEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterEventFindManyArgs>(args?: SelectSubset<T, ChapterEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChapterEvent.
     * @param {ChapterEventCreateArgs} args - Arguments to create a ChapterEvent.
     * @example
     * // Create one ChapterEvent
     * const ChapterEvent = await prisma.chapterEvent.create({
     *   data: {
     *     // ... data to create a ChapterEvent
     *   }
     * })
     * 
     */
    create<T extends ChapterEventCreateArgs>(args: SelectSubset<T, ChapterEventCreateArgs<ExtArgs>>): Prisma__ChapterEventClient<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChapterEvents.
     * @param {ChapterEventCreateManyArgs} args - Arguments to create many ChapterEvents.
     * @example
     * // Create many ChapterEvents
     * const chapterEvent = await prisma.chapterEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterEventCreateManyArgs>(args?: SelectSubset<T, ChapterEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChapterEvents and returns the data saved in the database.
     * @param {ChapterEventCreateManyAndReturnArgs} args - Arguments to create many ChapterEvents.
     * @example
     * // Create many ChapterEvents
     * const chapterEvent = await prisma.chapterEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChapterEvents and only return the `id`
     * const chapterEventWithIdOnly = await prisma.chapterEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChapterEvent.
     * @param {ChapterEventDeleteArgs} args - Arguments to delete one ChapterEvent.
     * @example
     * // Delete one ChapterEvent
     * const ChapterEvent = await prisma.chapterEvent.delete({
     *   where: {
     *     // ... filter to delete one ChapterEvent
     *   }
     * })
     * 
     */
    delete<T extends ChapterEventDeleteArgs>(args: SelectSubset<T, ChapterEventDeleteArgs<ExtArgs>>): Prisma__ChapterEventClient<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChapterEvent.
     * @param {ChapterEventUpdateArgs} args - Arguments to update one ChapterEvent.
     * @example
     * // Update one ChapterEvent
     * const chapterEvent = await prisma.chapterEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterEventUpdateArgs>(args: SelectSubset<T, ChapterEventUpdateArgs<ExtArgs>>): Prisma__ChapterEventClient<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChapterEvents.
     * @param {ChapterEventDeleteManyArgs} args - Arguments to filter ChapterEvents to delete.
     * @example
     * // Delete a few ChapterEvents
     * const { count } = await prisma.chapterEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterEventDeleteManyArgs>(args?: SelectSubset<T, ChapterEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChapterEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChapterEvents
     * const chapterEvent = await prisma.chapterEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterEventUpdateManyArgs>(args: SelectSubset<T, ChapterEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChapterEvents and returns the data updated in the database.
     * @param {ChapterEventUpdateManyAndReturnArgs} args - Arguments to update many ChapterEvents.
     * @example
     * // Update many ChapterEvents
     * const chapterEvent = await prisma.chapterEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChapterEvents and only return the `id`
     * const chapterEventWithIdOnly = await prisma.chapterEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapterEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChapterEvent.
     * @param {ChapterEventUpsertArgs} args - Arguments to update or create a ChapterEvent.
     * @example
     * // Update or create a ChapterEvent
     * const chapterEvent = await prisma.chapterEvent.upsert({
     *   create: {
     *     // ... data to create a ChapterEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChapterEvent we want to update
     *   }
     * })
     */
    upsert<T extends ChapterEventUpsertArgs>(args: SelectSubset<T, ChapterEventUpsertArgs<ExtArgs>>): Prisma__ChapterEventClient<$Result.GetResult<Prisma.$ChapterEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChapterEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterEventCountArgs} args - Arguments to filter ChapterEvents to count.
     * @example
     * // Count the number of ChapterEvents
     * const count = await prisma.chapterEvent.count({
     *   where: {
     *     // ... the filter for the ChapterEvents we want to count
     *   }
     * })
    **/
    count<T extends ChapterEventCountArgs>(
      args?: Subset<T, ChapterEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChapterEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterEventAggregateArgs>(args: Subset<T, ChapterEventAggregateArgs>): Prisma.PrismaPromise<GetChapterEventAggregateType<T>>

    /**
     * Group by ChapterEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterEventGroupByArgs} args - Group by arguments.
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
      T extends ChapterEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterEventGroupByArgs['orderBy'] }
        : { orderBy?: ChapterEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ChapterEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChapterEvent model
   */
  readonly fields: ChapterEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChapterEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChapterEvent model
   */ 
  interface ChapterEventFieldRefs {
    readonly id: FieldRef<"ChapterEvent", 'String'>
    readonly title: FieldRef<"ChapterEvent", 'String'>
    readonly description: FieldRef<"ChapterEvent", 'String'>
    readonly date: FieldRef<"ChapterEvent", 'DateTime'>
    readonly chapterId: FieldRef<"ChapterEvent", 'String'>
    readonly createdAt: FieldRef<"ChapterEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"ChapterEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChapterEvent findUnique
   */
  export type ChapterEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * Filter, which ChapterEvent to fetch.
     */
    where: ChapterEventWhereUniqueInput
  }

  /**
   * ChapterEvent findUniqueOrThrow
   */
  export type ChapterEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * Filter, which ChapterEvent to fetch.
     */
    where: ChapterEventWhereUniqueInput
  }

  /**
   * ChapterEvent findFirst
   */
  export type ChapterEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * Filter, which ChapterEvent to fetch.
     */
    where?: ChapterEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterEvents to fetch.
     */
    orderBy?: ChapterEventOrderByWithRelationInput | ChapterEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChapterEvents.
     */
    cursor?: ChapterEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChapterEvents.
     */
    distinct?: ChapterEventScalarFieldEnum | ChapterEventScalarFieldEnum[]
  }

  /**
   * ChapterEvent findFirstOrThrow
   */
  export type ChapterEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * Filter, which ChapterEvent to fetch.
     */
    where?: ChapterEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterEvents to fetch.
     */
    orderBy?: ChapterEventOrderByWithRelationInput | ChapterEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChapterEvents.
     */
    cursor?: ChapterEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChapterEvents.
     */
    distinct?: ChapterEventScalarFieldEnum | ChapterEventScalarFieldEnum[]
  }

  /**
   * ChapterEvent findMany
   */
  export type ChapterEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * Filter, which ChapterEvents to fetch.
     */
    where?: ChapterEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChapterEvents to fetch.
     */
    orderBy?: ChapterEventOrderByWithRelationInput | ChapterEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChapterEvents.
     */
    cursor?: ChapterEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChapterEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChapterEvents.
     */
    skip?: number
    distinct?: ChapterEventScalarFieldEnum | ChapterEventScalarFieldEnum[]
  }

  /**
   * ChapterEvent create
   */
  export type ChapterEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ChapterEvent.
     */
    data: XOR<ChapterEventCreateInput, ChapterEventUncheckedCreateInput>
  }

  /**
   * ChapterEvent createMany
   */
  export type ChapterEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChapterEvents.
     */
    data: ChapterEventCreateManyInput | ChapterEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChapterEvent createManyAndReturn
   */
  export type ChapterEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * The data used to create many ChapterEvents.
     */
    data: ChapterEventCreateManyInput | ChapterEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChapterEvent update
   */
  export type ChapterEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ChapterEvent.
     */
    data: XOR<ChapterEventUpdateInput, ChapterEventUncheckedUpdateInput>
    /**
     * Choose, which ChapterEvent to update.
     */
    where: ChapterEventWhereUniqueInput
  }

  /**
   * ChapterEvent updateMany
   */
  export type ChapterEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChapterEvents.
     */
    data: XOR<ChapterEventUpdateManyMutationInput, ChapterEventUncheckedUpdateManyInput>
    /**
     * Filter which ChapterEvents to update
     */
    where?: ChapterEventWhereInput
    /**
     * Limit how many ChapterEvents to update.
     */
    limit?: number
  }

  /**
   * ChapterEvent updateManyAndReturn
   */
  export type ChapterEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * The data used to update ChapterEvents.
     */
    data: XOR<ChapterEventUpdateManyMutationInput, ChapterEventUncheckedUpdateManyInput>
    /**
     * Filter which ChapterEvents to update
     */
    where?: ChapterEventWhereInput
    /**
     * Limit how many ChapterEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChapterEvent upsert
   */
  export type ChapterEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ChapterEvent to update in case it exists.
     */
    where: ChapterEventWhereUniqueInput
    /**
     * In case the ChapterEvent found by the `where` argument doesn't exist, create a new ChapterEvent with this data.
     */
    create: XOR<ChapterEventCreateInput, ChapterEventUncheckedCreateInput>
    /**
     * In case the ChapterEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterEventUpdateInput, ChapterEventUncheckedUpdateInput>
  }

  /**
   * ChapterEvent delete
   */
  export type ChapterEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
    /**
     * Filter which ChapterEvent to delete.
     */
    where: ChapterEventWhereUniqueInput
  }

  /**
   * ChapterEvent deleteMany
   */
  export type ChapterEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChapterEvents to delete
     */
    where?: ChapterEventWhereInput
    /**
     * Limit how many ChapterEvents to delete.
     */
    limit?: number
  }

  /**
   * ChapterEvent without action
   */
  export type ChapterEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterEvent
     */
    select?: ChapterEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChapterEvent
     */
    omit?: ChapterEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterEventInclude<ExtArgs> | null
  }


  /**
   * Model ClubEvent
   */

  export type AggregateClubEvent = {
    _count: ClubEventCountAggregateOutputType | null
    _min: ClubEventMinAggregateOutputType | null
    _max: ClubEventMaxAggregateOutputType | null
  }

  export type ClubEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    clubId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClubEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    clubId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClubEventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    clubId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClubEventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    clubId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClubEventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    clubId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClubEventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    clubId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClubEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClubEvent to aggregate.
     */
    where?: ClubEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClubEvents to fetch.
     */
    orderBy?: ClubEventOrderByWithRelationInput | ClubEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClubEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClubEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClubEvents
    **/
    _count?: true | ClubEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubEventMaxAggregateInputType
  }

  export type GetClubEventAggregateType<T extends ClubEventAggregateArgs> = {
        [P in keyof T & keyof AggregateClubEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClubEvent[P]>
      : GetScalarType<T[P], AggregateClubEvent[P]>
  }




  export type ClubEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubEventWhereInput
    orderBy?: ClubEventOrderByWithAggregationInput | ClubEventOrderByWithAggregationInput[]
    by: ClubEventScalarFieldEnum[] | ClubEventScalarFieldEnum
    having?: ClubEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubEventCountAggregateInputType | true
    _min?: ClubEventMinAggregateInputType
    _max?: ClubEventMaxAggregateInputType
  }

  export type ClubEventGroupByOutputType = {
    id: string
    title: string
    description: string
    date: Date
    clubId: string
    createdAt: Date
    updatedAt: Date
    _count: ClubEventCountAggregateOutputType | null
    _min: ClubEventMinAggregateOutputType | null
    _max: ClubEventMaxAggregateOutputType | null
  }

  type GetClubEventGroupByPayload<T extends ClubEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubEventGroupByOutputType[P]>
            : GetScalarType<T[P], ClubEventGroupByOutputType[P]>
        }
      >
    >


  export type ClubEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    clubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clubEvent"]>

  export type ClubEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    clubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clubEvent"]>

  export type ClubEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    clubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clubEvent"]>

  export type ClubEventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    clubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClubEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "clubId" | "createdAt" | "updatedAt", ExtArgs["result"]["clubEvent"]>
  export type ClubEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type ClubEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type ClubEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }

  export type $ClubEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClubEvent"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      date: Date
      clubId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clubEvent"]>
    composites: {}
  }

  type ClubEventGetPayload<S extends boolean | null | undefined | ClubEventDefaultArgs> = $Result.GetResult<Prisma.$ClubEventPayload, S>

  type ClubEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubEventCountAggregateInputType | true
    }

  export interface ClubEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClubEvent'], meta: { name: 'ClubEvent' } }
    /**
     * Find zero or one ClubEvent that matches the filter.
     * @param {ClubEventFindUniqueArgs} args - Arguments to find a ClubEvent
     * @example
     * // Get one ClubEvent
     * const clubEvent = await prisma.clubEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubEventFindUniqueArgs>(args: SelectSubset<T, ClubEventFindUniqueArgs<ExtArgs>>): Prisma__ClubEventClient<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClubEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubEventFindUniqueOrThrowArgs} args - Arguments to find a ClubEvent
     * @example
     * // Get one ClubEvent
     * const clubEvent = await prisma.clubEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubEventClient<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClubEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubEventFindFirstArgs} args - Arguments to find a ClubEvent
     * @example
     * // Get one ClubEvent
     * const clubEvent = await prisma.clubEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubEventFindFirstArgs>(args?: SelectSubset<T, ClubEventFindFirstArgs<ExtArgs>>): Prisma__ClubEventClient<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClubEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubEventFindFirstOrThrowArgs} args - Arguments to find a ClubEvent
     * @example
     * // Get one ClubEvent
     * const clubEvent = await prisma.clubEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubEventClient<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClubEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClubEvents
     * const clubEvents = await prisma.clubEvent.findMany()
     * 
     * // Get first 10 ClubEvents
     * const clubEvents = await prisma.clubEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubEventWithIdOnly = await prisma.clubEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubEventFindManyArgs>(args?: SelectSubset<T, ClubEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClubEvent.
     * @param {ClubEventCreateArgs} args - Arguments to create a ClubEvent.
     * @example
     * // Create one ClubEvent
     * const ClubEvent = await prisma.clubEvent.create({
     *   data: {
     *     // ... data to create a ClubEvent
     *   }
     * })
     * 
     */
    create<T extends ClubEventCreateArgs>(args: SelectSubset<T, ClubEventCreateArgs<ExtArgs>>): Prisma__ClubEventClient<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClubEvents.
     * @param {ClubEventCreateManyArgs} args - Arguments to create many ClubEvents.
     * @example
     * // Create many ClubEvents
     * const clubEvent = await prisma.clubEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubEventCreateManyArgs>(args?: SelectSubset<T, ClubEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClubEvents and returns the data saved in the database.
     * @param {ClubEventCreateManyAndReturnArgs} args - Arguments to create many ClubEvents.
     * @example
     * // Create many ClubEvents
     * const clubEvent = await prisma.clubEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClubEvents and only return the `id`
     * const clubEventWithIdOnly = await prisma.clubEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClubEvent.
     * @param {ClubEventDeleteArgs} args - Arguments to delete one ClubEvent.
     * @example
     * // Delete one ClubEvent
     * const ClubEvent = await prisma.clubEvent.delete({
     *   where: {
     *     // ... filter to delete one ClubEvent
     *   }
     * })
     * 
     */
    delete<T extends ClubEventDeleteArgs>(args: SelectSubset<T, ClubEventDeleteArgs<ExtArgs>>): Prisma__ClubEventClient<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClubEvent.
     * @param {ClubEventUpdateArgs} args - Arguments to update one ClubEvent.
     * @example
     * // Update one ClubEvent
     * const clubEvent = await prisma.clubEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubEventUpdateArgs>(args: SelectSubset<T, ClubEventUpdateArgs<ExtArgs>>): Prisma__ClubEventClient<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClubEvents.
     * @param {ClubEventDeleteManyArgs} args - Arguments to filter ClubEvents to delete.
     * @example
     * // Delete a few ClubEvents
     * const { count } = await prisma.clubEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubEventDeleteManyArgs>(args?: SelectSubset<T, ClubEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClubEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClubEvents
     * const clubEvent = await prisma.clubEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubEventUpdateManyArgs>(args: SelectSubset<T, ClubEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClubEvents and returns the data updated in the database.
     * @param {ClubEventUpdateManyAndReturnArgs} args - Arguments to update many ClubEvents.
     * @example
     * // Update many ClubEvents
     * const clubEvent = await prisma.clubEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClubEvents and only return the `id`
     * const clubEventWithIdOnly = await prisma.clubEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClubEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClubEvent.
     * @param {ClubEventUpsertArgs} args - Arguments to update or create a ClubEvent.
     * @example
     * // Update or create a ClubEvent
     * const clubEvent = await prisma.clubEvent.upsert({
     *   create: {
     *     // ... data to create a ClubEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClubEvent we want to update
     *   }
     * })
     */
    upsert<T extends ClubEventUpsertArgs>(args: SelectSubset<T, ClubEventUpsertArgs<ExtArgs>>): Prisma__ClubEventClient<$Result.GetResult<Prisma.$ClubEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClubEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubEventCountArgs} args - Arguments to filter ClubEvents to count.
     * @example
     * // Count the number of ClubEvents
     * const count = await prisma.clubEvent.count({
     *   where: {
     *     // ... the filter for the ClubEvents we want to count
     *   }
     * })
    **/
    count<T extends ClubEventCountArgs>(
      args?: Subset<T, ClubEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClubEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClubEventAggregateArgs>(args: Subset<T, ClubEventAggregateArgs>): Prisma.PrismaPromise<GetClubEventAggregateType<T>>

    /**
     * Group by ClubEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubEventGroupByArgs} args - Group by arguments.
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
      T extends ClubEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubEventGroupByArgs['orderBy'] }
        : { orderBy?: ClubEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClubEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClubEvent model
   */
  readonly fields: ClubEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClubEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClubEvent model
   */ 
  interface ClubEventFieldRefs {
    readonly id: FieldRef<"ClubEvent", 'String'>
    readonly title: FieldRef<"ClubEvent", 'String'>
    readonly description: FieldRef<"ClubEvent", 'String'>
    readonly date: FieldRef<"ClubEvent", 'DateTime'>
    readonly clubId: FieldRef<"ClubEvent", 'String'>
    readonly createdAt: FieldRef<"ClubEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"ClubEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClubEvent findUnique
   */
  export type ClubEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * Filter, which ClubEvent to fetch.
     */
    where: ClubEventWhereUniqueInput
  }

  /**
   * ClubEvent findUniqueOrThrow
   */
  export type ClubEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * Filter, which ClubEvent to fetch.
     */
    where: ClubEventWhereUniqueInput
  }

  /**
   * ClubEvent findFirst
   */
  export type ClubEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * Filter, which ClubEvent to fetch.
     */
    where?: ClubEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClubEvents to fetch.
     */
    orderBy?: ClubEventOrderByWithRelationInput | ClubEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClubEvents.
     */
    cursor?: ClubEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClubEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClubEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClubEvents.
     */
    distinct?: ClubEventScalarFieldEnum | ClubEventScalarFieldEnum[]
  }

  /**
   * ClubEvent findFirstOrThrow
   */
  export type ClubEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * Filter, which ClubEvent to fetch.
     */
    where?: ClubEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClubEvents to fetch.
     */
    orderBy?: ClubEventOrderByWithRelationInput | ClubEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClubEvents.
     */
    cursor?: ClubEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClubEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClubEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClubEvents.
     */
    distinct?: ClubEventScalarFieldEnum | ClubEventScalarFieldEnum[]
  }

  /**
   * ClubEvent findMany
   */
  export type ClubEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * Filter, which ClubEvents to fetch.
     */
    where?: ClubEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClubEvents to fetch.
     */
    orderBy?: ClubEventOrderByWithRelationInput | ClubEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClubEvents.
     */
    cursor?: ClubEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClubEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClubEvents.
     */
    skip?: number
    distinct?: ClubEventScalarFieldEnum | ClubEventScalarFieldEnum[]
  }

  /**
   * ClubEvent create
   */
  export type ClubEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ClubEvent.
     */
    data: XOR<ClubEventCreateInput, ClubEventUncheckedCreateInput>
  }

  /**
   * ClubEvent createMany
   */
  export type ClubEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClubEvents.
     */
    data: ClubEventCreateManyInput | ClubEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClubEvent createManyAndReturn
   */
  export type ClubEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * The data used to create many ClubEvents.
     */
    data: ClubEventCreateManyInput | ClubEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClubEvent update
   */
  export type ClubEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ClubEvent.
     */
    data: XOR<ClubEventUpdateInput, ClubEventUncheckedUpdateInput>
    /**
     * Choose, which ClubEvent to update.
     */
    where: ClubEventWhereUniqueInput
  }

  /**
   * ClubEvent updateMany
   */
  export type ClubEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClubEvents.
     */
    data: XOR<ClubEventUpdateManyMutationInput, ClubEventUncheckedUpdateManyInput>
    /**
     * Filter which ClubEvents to update
     */
    where?: ClubEventWhereInput
    /**
     * Limit how many ClubEvents to update.
     */
    limit?: number
  }

  /**
   * ClubEvent updateManyAndReturn
   */
  export type ClubEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * The data used to update ClubEvents.
     */
    data: XOR<ClubEventUpdateManyMutationInput, ClubEventUncheckedUpdateManyInput>
    /**
     * Filter which ClubEvents to update
     */
    where?: ClubEventWhereInput
    /**
     * Limit how many ClubEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClubEvent upsert
   */
  export type ClubEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ClubEvent to update in case it exists.
     */
    where: ClubEventWhereUniqueInput
    /**
     * In case the ClubEvent found by the `where` argument doesn't exist, create a new ClubEvent with this data.
     */
    create: XOR<ClubEventCreateInput, ClubEventUncheckedCreateInput>
    /**
     * In case the ClubEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubEventUpdateInput, ClubEventUncheckedUpdateInput>
  }

  /**
   * ClubEvent delete
   */
  export type ClubEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
    /**
     * Filter which ClubEvent to delete.
     */
    where: ClubEventWhereUniqueInput
  }

  /**
   * ClubEvent deleteMany
   */
  export type ClubEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClubEvents to delete
     */
    where?: ClubEventWhereInput
    /**
     * Limit how many ClubEvents to delete.
     */
    limit?: number
  }

  /**
   * ClubEvent without action
   */
  export type ClubEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubEvent
     */
    select?: ClubEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClubEvent
     */
    omit?: ClubEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubEventInclude<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralMinAggregateOutputType = {
    id: string | null
    type: $Enums.ReferralType | null
    creatorId: string | null
    receiverId: string | null
    businessDetails: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ReferralType | null
    creatorId: string | null
    receiverId: string | null
    businessDetails: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    type: number
    creatorId: number
    receiverId: number
    businessDetails: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReferralMinAggregateInputType = {
    id?: true
    type?: true
    creatorId?: true
    receiverId?: true
    businessDetails?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    type?: true
    creatorId?: true
    receiverId?: true
    businessDetails?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    type?: true
    creatorId?: true
    receiverId?: true
    businessDetails?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: string
    type: $Enums.ReferralType
    creatorId: string
    receiverId: string
    businessDetails: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    creatorId?: boolean
    receiverId?: boolean
    businessDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    creatorId?: boolean
    receiverId?: boolean
    businessDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    creatorId?: boolean
    receiverId?: boolean
    businessDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    id?: boolean
    type?: boolean
    creatorId?: boolean
    receiverId?: boolean
    businessDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReferralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "creatorId" | "receiverId" | "businessDetails" | "createdAt" | "updatedAt", ExtArgs["result"]["referral"]>
  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ReferralType
      creatorId: string
      receiverId: string
      businessDetails: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {ReferralUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferralUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
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
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referral model
   */ 
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'String'>
    readonly type: FieldRef<"Referral", 'ReferralType'>
    readonly creatorId: FieldRef<"Referral", 'String'>
    readonly receiverId: FieldRef<"Referral", 'String'>
    readonly businessDetails: FieldRef<"Referral", 'String'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
    readonly updatedAt: FieldRef<"Referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
  }

  /**
   * Referral updateManyAndReturn
   */
  export type ReferralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to delete.
     */
    limit?: number
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model GmailVerificationCode
   */

  export type AggregateGmailVerificationCode = {
    _count: GmailVerificationCodeCountAggregateOutputType | null
    _min: GmailVerificationCodeMinAggregateOutputType | null
    _max: GmailVerificationCodeMaxAggregateOutputType | null
  }

  export type GmailVerificationCodeMinAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type GmailVerificationCodeMaxAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type GmailVerificationCodeCountAggregateOutputType = {
    id: number
    email: number
    code: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type GmailVerificationCodeMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
  }

  export type GmailVerificationCodeMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
  }

  export type GmailVerificationCodeCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type GmailVerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GmailVerificationCode to aggregate.
     */
    where?: GmailVerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GmailVerificationCodes to fetch.
     */
    orderBy?: GmailVerificationCodeOrderByWithRelationInput | GmailVerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GmailVerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GmailVerificationCodes
    **/
    _count?: true | GmailVerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GmailVerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GmailVerificationCodeMaxAggregateInputType
  }

  export type GetGmailVerificationCodeAggregateType<T extends GmailVerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateGmailVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGmailVerificationCode[P]>
      : GetScalarType<T[P], AggregateGmailVerificationCode[P]>
  }




  export type GmailVerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GmailVerificationCodeWhereInput
    orderBy?: GmailVerificationCodeOrderByWithAggregationInput | GmailVerificationCodeOrderByWithAggregationInput[]
    by: GmailVerificationCodeScalarFieldEnum[] | GmailVerificationCodeScalarFieldEnum
    having?: GmailVerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GmailVerificationCodeCountAggregateInputType | true
    _min?: GmailVerificationCodeMinAggregateInputType
    _max?: GmailVerificationCodeMaxAggregateInputType
  }

  export type GmailVerificationCodeGroupByOutputType = {
    id: string
    email: string
    code: string
    expiresAt: Date
    createdAt: Date
    _count: GmailVerificationCodeCountAggregateOutputType | null
    _min: GmailVerificationCodeMinAggregateOutputType | null
    _max: GmailVerificationCodeMaxAggregateOutputType | null
  }

  type GetGmailVerificationCodeGroupByPayload<T extends GmailVerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GmailVerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GmailVerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GmailVerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], GmailVerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type GmailVerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gmailVerificationCode"]>

  export type GmailVerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gmailVerificationCode"]>

  export type GmailVerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gmailVerificationCode"]>

  export type GmailVerificationCodeSelectScalar = {
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type GmailVerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "code" | "expiresAt" | "createdAt", ExtArgs["result"]["gmailVerificationCode"]>

  export type $GmailVerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GmailVerificationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      code: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["gmailVerificationCode"]>
    composites: {}
  }

  type GmailVerificationCodeGetPayload<S extends boolean | null | undefined | GmailVerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$GmailVerificationCodePayload, S>

  type GmailVerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GmailVerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GmailVerificationCodeCountAggregateInputType | true
    }

  export interface GmailVerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GmailVerificationCode'], meta: { name: 'GmailVerificationCode' } }
    /**
     * Find zero or one GmailVerificationCode that matches the filter.
     * @param {GmailVerificationCodeFindUniqueArgs} args - Arguments to find a GmailVerificationCode
     * @example
     * // Get one GmailVerificationCode
     * const gmailVerificationCode = await prisma.gmailVerificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GmailVerificationCodeFindUniqueArgs>(args: SelectSubset<T, GmailVerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__GmailVerificationCodeClient<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GmailVerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GmailVerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a GmailVerificationCode
     * @example
     * // Get one GmailVerificationCode
     * const gmailVerificationCode = await prisma.gmailVerificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GmailVerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, GmailVerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GmailVerificationCodeClient<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GmailVerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailVerificationCodeFindFirstArgs} args - Arguments to find a GmailVerificationCode
     * @example
     * // Get one GmailVerificationCode
     * const gmailVerificationCode = await prisma.gmailVerificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GmailVerificationCodeFindFirstArgs>(args?: SelectSubset<T, GmailVerificationCodeFindFirstArgs<ExtArgs>>): Prisma__GmailVerificationCodeClient<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GmailVerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailVerificationCodeFindFirstOrThrowArgs} args - Arguments to find a GmailVerificationCode
     * @example
     * // Get one GmailVerificationCode
     * const gmailVerificationCode = await prisma.gmailVerificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GmailVerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, GmailVerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GmailVerificationCodeClient<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GmailVerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailVerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GmailVerificationCodes
     * const gmailVerificationCodes = await prisma.gmailVerificationCode.findMany()
     * 
     * // Get first 10 GmailVerificationCodes
     * const gmailVerificationCodes = await prisma.gmailVerificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gmailVerificationCodeWithIdOnly = await prisma.gmailVerificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GmailVerificationCodeFindManyArgs>(args?: SelectSubset<T, GmailVerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GmailVerificationCode.
     * @param {GmailVerificationCodeCreateArgs} args - Arguments to create a GmailVerificationCode.
     * @example
     * // Create one GmailVerificationCode
     * const GmailVerificationCode = await prisma.gmailVerificationCode.create({
     *   data: {
     *     // ... data to create a GmailVerificationCode
     *   }
     * })
     * 
     */
    create<T extends GmailVerificationCodeCreateArgs>(args: SelectSubset<T, GmailVerificationCodeCreateArgs<ExtArgs>>): Prisma__GmailVerificationCodeClient<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GmailVerificationCodes.
     * @param {GmailVerificationCodeCreateManyArgs} args - Arguments to create many GmailVerificationCodes.
     * @example
     * // Create many GmailVerificationCodes
     * const gmailVerificationCode = await prisma.gmailVerificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GmailVerificationCodeCreateManyArgs>(args?: SelectSubset<T, GmailVerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GmailVerificationCodes and returns the data saved in the database.
     * @param {GmailVerificationCodeCreateManyAndReturnArgs} args - Arguments to create many GmailVerificationCodes.
     * @example
     * // Create many GmailVerificationCodes
     * const gmailVerificationCode = await prisma.gmailVerificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GmailVerificationCodes and only return the `id`
     * const gmailVerificationCodeWithIdOnly = await prisma.gmailVerificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GmailVerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, GmailVerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GmailVerificationCode.
     * @param {GmailVerificationCodeDeleteArgs} args - Arguments to delete one GmailVerificationCode.
     * @example
     * // Delete one GmailVerificationCode
     * const GmailVerificationCode = await prisma.gmailVerificationCode.delete({
     *   where: {
     *     // ... filter to delete one GmailVerificationCode
     *   }
     * })
     * 
     */
    delete<T extends GmailVerificationCodeDeleteArgs>(args: SelectSubset<T, GmailVerificationCodeDeleteArgs<ExtArgs>>): Prisma__GmailVerificationCodeClient<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GmailVerificationCode.
     * @param {GmailVerificationCodeUpdateArgs} args - Arguments to update one GmailVerificationCode.
     * @example
     * // Update one GmailVerificationCode
     * const gmailVerificationCode = await prisma.gmailVerificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GmailVerificationCodeUpdateArgs>(args: SelectSubset<T, GmailVerificationCodeUpdateArgs<ExtArgs>>): Prisma__GmailVerificationCodeClient<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GmailVerificationCodes.
     * @param {GmailVerificationCodeDeleteManyArgs} args - Arguments to filter GmailVerificationCodes to delete.
     * @example
     * // Delete a few GmailVerificationCodes
     * const { count } = await prisma.gmailVerificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GmailVerificationCodeDeleteManyArgs>(args?: SelectSubset<T, GmailVerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GmailVerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailVerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GmailVerificationCodes
     * const gmailVerificationCode = await prisma.gmailVerificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GmailVerificationCodeUpdateManyArgs>(args: SelectSubset<T, GmailVerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GmailVerificationCodes and returns the data updated in the database.
     * @param {GmailVerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many GmailVerificationCodes.
     * @example
     * // Update many GmailVerificationCodes
     * const gmailVerificationCode = await prisma.gmailVerificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GmailVerificationCodes and only return the `id`
     * const gmailVerificationCodeWithIdOnly = await prisma.gmailVerificationCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GmailVerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, GmailVerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GmailVerificationCode.
     * @param {GmailVerificationCodeUpsertArgs} args - Arguments to update or create a GmailVerificationCode.
     * @example
     * // Update or create a GmailVerificationCode
     * const gmailVerificationCode = await prisma.gmailVerificationCode.upsert({
     *   create: {
     *     // ... data to create a GmailVerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GmailVerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends GmailVerificationCodeUpsertArgs>(args: SelectSubset<T, GmailVerificationCodeUpsertArgs<ExtArgs>>): Prisma__GmailVerificationCodeClient<$Result.GetResult<Prisma.$GmailVerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GmailVerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailVerificationCodeCountArgs} args - Arguments to filter GmailVerificationCodes to count.
     * @example
     * // Count the number of GmailVerificationCodes
     * const count = await prisma.gmailVerificationCode.count({
     *   where: {
     *     // ... the filter for the GmailVerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends GmailVerificationCodeCountArgs>(
      args?: Subset<T, GmailVerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GmailVerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GmailVerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailVerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GmailVerificationCodeAggregateArgs>(args: Subset<T, GmailVerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetGmailVerificationCodeAggregateType<T>>

    /**
     * Group by GmailVerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmailVerificationCodeGroupByArgs} args - Group by arguments.
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
      T extends GmailVerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GmailVerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: GmailVerificationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GmailVerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGmailVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GmailVerificationCode model
   */
  readonly fields: GmailVerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GmailVerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GmailVerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GmailVerificationCode model
   */ 
  interface GmailVerificationCodeFieldRefs {
    readonly id: FieldRef<"GmailVerificationCode", 'String'>
    readonly email: FieldRef<"GmailVerificationCode", 'String'>
    readonly code: FieldRef<"GmailVerificationCode", 'String'>
    readonly expiresAt: FieldRef<"GmailVerificationCode", 'DateTime'>
    readonly createdAt: FieldRef<"GmailVerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GmailVerificationCode findUnique
   */
  export type GmailVerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailVerificationCode to fetch.
     */
    where: GmailVerificationCodeWhereUniqueInput
  }

  /**
   * GmailVerificationCode findUniqueOrThrow
   */
  export type GmailVerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailVerificationCode to fetch.
     */
    where: GmailVerificationCodeWhereUniqueInput
  }

  /**
   * GmailVerificationCode findFirst
   */
  export type GmailVerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailVerificationCode to fetch.
     */
    where?: GmailVerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GmailVerificationCodes to fetch.
     */
    orderBy?: GmailVerificationCodeOrderByWithRelationInput | GmailVerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GmailVerificationCodes.
     */
    cursor?: GmailVerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GmailVerificationCodes.
     */
    distinct?: GmailVerificationCodeScalarFieldEnum | GmailVerificationCodeScalarFieldEnum[]
  }

  /**
   * GmailVerificationCode findFirstOrThrow
   */
  export type GmailVerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailVerificationCode to fetch.
     */
    where?: GmailVerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GmailVerificationCodes to fetch.
     */
    orderBy?: GmailVerificationCodeOrderByWithRelationInput | GmailVerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GmailVerificationCodes.
     */
    cursor?: GmailVerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GmailVerificationCodes.
     */
    distinct?: GmailVerificationCodeScalarFieldEnum | GmailVerificationCodeScalarFieldEnum[]
  }

  /**
   * GmailVerificationCode findMany
   */
  export type GmailVerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which GmailVerificationCodes to fetch.
     */
    where?: GmailVerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GmailVerificationCodes to fetch.
     */
    orderBy?: GmailVerificationCodeOrderByWithRelationInput | GmailVerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GmailVerificationCodes.
     */
    cursor?: GmailVerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GmailVerificationCodes.
     */
    skip?: number
    distinct?: GmailVerificationCodeScalarFieldEnum | GmailVerificationCodeScalarFieldEnum[]
  }

  /**
   * GmailVerificationCode create
   */
  export type GmailVerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a GmailVerificationCode.
     */
    data: XOR<GmailVerificationCodeCreateInput, GmailVerificationCodeUncheckedCreateInput>
  }

  /**
   * GmailVerificationCode createMany
   */
  export type GmailVerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GmailVerificationCodes.
     */
    data: GmailVerificationCodeCreateManyInput | GmailVerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GmailVerificationCode createManyAndReturn
   */
  export type GmailVerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many GmailVerificationCodes.
     */
    data: GmailVerificationCodeCreateManyInput | GmailVerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GmailVerificationCode update
   */
  export type GmailVerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a GmailVerificationCode.
     */
    data: XOR<GmailVerificationCodeUpdateInput, GmailVerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which GmailVerificationCode to update.
     */
    where: GmailVerificationCodeWhereUniqueInput
  }

  /**
   * GmailVerificationCode updateMany
   */
  export type GmailVerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GmailVerificationCodes.
     */
    data: XOR<GmailVerificationCodeUpdateManyMutationInput, GmailVerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which GmailVerificationCodes to update
     */
    where?: GmailVerificationCodeWhereInput
    /**
     * Limit how many GmailVerificationCodes to update.
     */
    limit?: number
  }

  /**
   * GmailVerificationCode updateManyAndReturn
   */
  export type GmailVerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update GmailVerificationCodes.
     */
    data: XOR<GmailVerificationCodeUpdateManyMutationInput, GmailVerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which GmailVerificationCodes to update
     */
    where?: GmailVerificationCodeWhereInput
    /**
     * Limit how many GmailVerificationCodes to update.
     */
    limit?: number
  }

  /**
   * GmailVerificationCode upsert
   */
  export type GmailVerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the GmailVerificationCode to update in case it exists.
     */
    where: GmailVerificationCodeWhereUniqueInput
    /**
     * In case the GmailVerificationCode found by the `where` argument doesn't exist, create a new GmailVerificationCode with this data.
     */
    create: XOR<GmailVerificationCodeCreateInput, GmailVerificationCodeUncheckedCreateInput>
    /**
     * In case the GmailVerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GmailVerificationCodeUpdateInput, GmailVerificationCodeUncheckedUpdateInput>
  }

  /**
   * GmailVerificationCode delete
   */
  export type GmailVerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter which GmailVerificationCode to delete.
     */
    where: GmailVerificationCodeWhereUniqueInput
  }

  /**
   * GmailVerificationCode deleteMany
   */
  export type GmailVerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GmailVerificationCodes to delete
     */
    where?: GmailVerificationCodeWhereInput
    /**
     * Limit how many GmailVerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * GmailVerificationCode without action
   */
  export type GmailVerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GmailVerificationCode
     */
    select?: GmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GmailVerificationCode
     */
    omit?: GmailVerificationCodeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdministratorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailVerified: 'emailVerified',
    phone: 'phone',
    phoneVerifie: 'phoneVerifie',
    password: 'password',
    name: 'name',
    role: 'role',
    parentAdminId: 'parentAdminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdministratorScalarFieldEnum = (typeof AdministratorScalarFieldEnum)[keyof typeof AdministratorScalarFieldEnum]


  export const MasterFranchiseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countries: 'countries',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MasterFranchiseScalarFieldEnum = (typeof MasterFranchiseScalarFieldEnum)[keyof typeof MasterFranchiseScalarFieldEnum]


  export const SuperFranchiseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    masterFranchiseId: 'masterFranchiseId',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuperFranchiseScalarFieldEnum = (typeof SuperFranchiseScalarFieldEnum)[keyof typeof SuperFranchiseScalarFieldEnum]


  export const RegionalFranchiseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    state: 'state',
    superFranchiseId: 'superFranchiseId',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegionalFranchiseScalarFieldEnum = (typeof RegionalFranchiseScalarFieldEnum)[keyof typeof RegionalFranchiseScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    regionalFranchiseId: 'regionalFranchiseId',
    chapterLeaderId: 'chapterLeaderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const ClubScalarFieldEnum: {
    id: 'id',
    name: 'name',
    chapterId: 'chapterId',
    clubLeaderId: 'clubLeaderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    emailVerified: 'emailVerified',
    phone: 'phone',
    phoneVerified: 'phoneVerified',
    password: 'password',
    name: 'name',
    membershipType: 'membershipType',
    membershipStartDate: 'membershipStartDate',
    membershipEndDate: 'membershipEndDate',
    leadingChapterId: 'leadingChapterId',
    leadingClubId: 'leadingClubId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChapterEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    chapterId: 'chapterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChapterEventScalarFieldEnum = (typeof ChapterEventScalarFieldEnum)[keyof typeof ChapterEventScalarFieldEnum]


  export const ClubEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    clubId: 'clubId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClubEventScalarFieldEnum = (typeof ClubEventScalarFieldEnum)[keyof typeof ClubEventScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    id: 'id',
    type: 'type',
    creatorId: 'creatorId',
    receiverId: 'receiverId',
    businessDetails: 'businessDetails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const GmailVerificationCodeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type GmailVerificationCodeScalarFieldEnum = (typeof GmailVerificationCodeScalarFieldEnum)[keyof typeof GmailVerificationCodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserMembershipType'
   */
  export type EnumUserMembershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserMembershipType'>
    


  /**
   * Reference to a field of type 'UserMembershipType[]'
   */
  export type ListEnumUserMembershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserMembershipType[]'>
    


  /**
   * Reference to a field of type 'ReferralType'
   */
  export type EnumReferralTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralType'>
    


  /**
   * Reference to a field of type 'ReferralType[]'
   */
  export type ListEnumReferralTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdministratorWhereInput = {
    AND?: AdministratorWhereInput | AdministratorWhereInput[]
    OR?: AdministratorWhereInput[]
    NOT?: AdministratorWhereInput | AdministratorWhereInput[]
    id?: StringFilter<"Administrator"> | string
    email?: StringFilter<"Administrator"> | string
    emailVerified?: BoolFilter<"Administrator"> | boolean
    phone?: StringFilter<"Administrator"> | string
    phoneVerifie?: BoolFilter<"Administrator"> | boolean
    password?: StringFilter<"Administrator"> | string
    name?: StringFilter<"Administrator"> | string
    role?: EnumAdminRoleFilter<"Administrator"> | $Enums.AdminRole
    parentAdminId?: StringNullableFilter<"Administrator"> | string | null
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeFilter<"Administrator"> | Date | string
    parentAdmin?: XOR<AdministratorNullableScalarRelationFilter, AdministratorWhereInput> | null
    childAdmins?: AdministratorListRelationFilter
    masterFranchises?: MasterFranchiseListRelationFilter
    superFranchises?: SuperFranchiseListRelationFilter
    regionalFranchises?: RegionalFranchiseListRelationFilter
  }

  export type AdministratorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerifie?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentAdminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentAdmin?: AdministratorOrderByWithRelationInput
    childAdmins?: AdministratorOrderByRelationAggregateInput
    masterFranchises?: MasterFranchiseOrderByRelationAggregateInput
    superFranchises?: SuperFranchiseOrderByRelationAggregateInput
    regionalFranchises?: RegionalFranchiseOrderByRelationAggregateInput
  }

  export type AdministratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdministratorWhereInput | AdministratorWhereInput[]
    OR?: AdministratorWhereInput[]
    NOT?: AdministratorWhereInput | AdministratorWhereInput[]
    emailVerified?: BoolFilter<"Administrator"> | boolean
    phone?: StringFilter<"Administrator"> | string
    phoneVerifie?: BoolFilter<"Administrator"> | boolean
    password?: StringFilter<"Administrator"> | string
    name?: StringFilter<"Administrator"> | string
    role?: EnumAdminRoleFilter<"Administrator"> | $Enums.AdminRole
    parentAdminId?: StringNullableFilter<"Administrator"> | string | null
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeFilter<"Administrator"> | Date | string
    parentAdmin?: XOR<AdministratorNullableScalarRelationFilter, AdministratorWhereInput> | null
    childAdmins?: AdministratorListRelationFilter
    masterFranchises?: MasterFranchiseListRelationFilter
    superFranchises?: SuperFranchiseListRelationFilter
    regionalFranchises?: RegionalFranchiseListRelationFilter
  }, "id" | "email">

  export type AdministratorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerifie?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentAdminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdministratorCountOrderByAggregateInput
    _max?: AdministratorMaxOrderByAggregateInput
    _min?: AdministratorMinOrderByAggregateInput
  }

  export type AdministratorScalarWhereWithAggregatesInput = {
    AND?: AdministratorScalarWhereWithAggregatesInput | AdministratorScalarWhereWithAggregatesInput[]
    OR?: AdministratorScalarWhereWithAggregatesInput[]
    NOT?: AdministratorScalarWhereWithAggregatesInput | AdministratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Administrator"> | string
    email?: StringWithAggregatesFilter<"Administrator"> | string
    emailVerified?: BoolWithAggregatesFilter<"Administrator"> | boolean
    phone?: StringWithAggregatesFilter<"Administrator"> | string
    phoneVerifie?: BoolWithAggregatesFilter<"Administrator"> | boolean
    password?: StringWithAggregatesFilter<"Administrator"> | string
    name?: StringWithAggregatesFilter<"Administrator"> | string
    role?: EnumAdminRoleWithAggregatesFilter<"Administrator"> | $Enums.AdminRole
    parentAdminId?: StringNullableWithAggregatesFilter<"Administrator"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Administrator"> | Date | string
  }

  export type MasterFranchiseWhereInput = {
    AND?: MasterFranchiseWhereInput | MasterFranchiseWhereInput[]
    OR?: MasterFranchiseWhereInput[]
    NOT?: MasterFranchiseWhereInput | MasterFranchiseWhereInput[]
    id?: StringFilter<"MasterFranchise"> | string
    name?: StringFilter<"MasterFranchise"> | string
    countries?: StringNullableListFilter<"MasterFranchise">
    adminId?: StringFilter<"MasterFranchise"> | string
    createdAt?: DateTimeFilter<"MasterFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"MasterFranchise"> | Date | string
    admin?: XOR<AdministratorScalarRelationFilter, AdministratorWhereInput>
    superFranchises?: SuperFranchiseListRelationFilter
  }

  export type MasterFranchiseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countries?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdministratorOrderByWithRelationInput
    superFranchises?: SuperFranchiseOrderByRelationAggregateInput
  }

  export type MasterFranchiseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterFranchiseWhereInput | MasterFranchiseWhereInput[]
    OR?: MasterFranchiseWhereInput[]
    NOT?: MasterFranchiseWhereInput | MasterFranchiseWhereInput[]
    name?: StringFilter<"MasterFranchise"> | string
    countries?: StringNullableListFilter<"MasterFranchise">
    adminId?: StringFilter<"MasterFranchise"> | string
    createdAt?: DateTimeFilter<"MasterFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"MasterFranchise"> | Date | string
    admin?: XOR<AdministratorScalarRelationFilter, AdministratorWhereInput>
    superFranchises?: SuperFranchiseListRelationFilter
  }, "id">

  export type MasterFranchiseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countries?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MasterFranchiseCountOrderByAggregateInput
    _max?: MasterFranchiseMaxOrderByAggregateInput
    _min?: MasterFranchiseMinOrderByAggregateInput
  }

  export type MasterFranchiseScalarWhereWithAggregatesInput = {
    AND?: MasterFranchiseScalarWhereWithAggregatesInput | MasterFranchiseScalarWhereWithAggregatesInput[]
    OR?: MasterFranchiseScalarWhereWithAggregatesInput[]
    NOT?: MasterFranchiseScalarWhereWithAggregatesInput | MasterFranchiseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterFranchise"> | string
    name?: StringWithAggregatesFilter<"MasterFranchise"> | string
    countries?: StringNullableListFilter<"MasterFranchise">
    adminId?: StringWithAggregatesFilter<"MasterFranchise"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MasterFranchise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasterFranchise"> | Date | string
  }

  export type SuperFranchiseWhereInput = {
    AND?: SuperFranchiseWhereInput | SuperFranchiseWhereInput[]
    OR?: SuperFranchiseWhereInput[]
    NOT?: SuperFranchiseWhereInput | SuperFranchiseWhereInput[]
    id?: StringFilter<"SuperFranchise"> | string
    name?: StringFilter<"SuperFranchise"> | string
    country?: StringFilter<"SuperFranchise"> | string
    masterFranchiseId?: StringFilter<"SuperFranchise"> | string
    adminId?: StringFilter<"SuperFranchise"> | string
    createdAt?: DateTimeFilter<"SuperFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"SuperFranchise"> | Date | string
    masterFranchise?: XOR<MasterFranchiseScalarRelationFilter, MasterFranchiseWhereInput>
    admin?: XOR<AdministratorScalarRelationFilter, AdministratorWhereInput>
    regionalFranchises?: RegionalFranchiseListRelationFilter
  }

  export type SuperFranchiseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    masterFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    masterFranchise?: MasterFranchiseOrderByWithRelationInput
    admin?: AdministratorOrderByWithRelationInput
    regionalFranchises?: RegionalFranchiseOrderByRelationAggregateInput
  }

  export type SuperFranchiseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuperFranchiseWhereInput | SuperFranchiseWhereInput[]
    OR?: SuperFranchiseWhereInput[]
    NOT?: SuperFranchiseWhereInput | SuperFranchiseWhereInput[]
    name?: StringFilter<"SuperFranchise"> | string
    country?: StringFilter<"SuperFranchise"> | string
    masterFranchiseId?: StringFilter<"SuperFranchise"> | string
    adminId?: StringFilter<"SuperFranchise"> | string
    createdAt?: DateTimeFilter<"SuperFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"SuperFranchise"> | Date | string
    masterFranchise?: XOR<MasterFranchiseScalarRelationFilter, MasterFranchiseWhereInput>
    admin?: XOR<AdministratorScalarRelationFilter, AdministratorWhereInput>
    regionalFranchises?: RegionalFranchiseListRelationFilter
  }, "id">

  export type SuperFranchiseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    masterFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuperFranchiseCountOrderByAggregateInput
    _max?: SuperFranchiseMaxOrderByAggregateInput
    _min?: SuperFranchiseMinOrderByAggregateInput
  }

  export type SuperFranchiseScalarWhereWithAggregatesInput = {
    AND?: SuperFranchiseScalarWhereWithAggregatesInput | SuperFranchiseScalarWhereWithAggregatesInput[]
    OR?: SuperFranchiseScalarWhereWithAggregatesInput[]
    NOT?: SuperFranchiseScalarWhereWithAggregatesInput | SuperFranchiseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuperFranchise"> | string
    name?: StringWithAggregatesFilter<"SuperFranchise"> | string
    country?: StringWithAggregatesFilter<"SuperFranchise"> | string
    masterFranchiseId?: StringWithAggregatesFilter<"SuperFranchise"> | string
    adminId?: StringWithAggregatesFilter<"SuperFranchise"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SuperFranchise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuperFranchise"> | Date | string
  }

  export type RegionalFranchiseWhereInput = {
    AND?: RegionalFranchiseWhereInput | RegionalFranchiseWhereInput[]
    OR?: RegionalFranchiseWhereInput[]
    NOT?: RegionalFranchiseWhereInput | RegionalFranchiseWhereInput[]
    id?: StringFilter<"RegionalFranchise"> | string
    name?: StringFilter<"RegionalFranchise"> | string
    state?: StringFilter<"RegionalFranchise"> | string
    superFranchiseId?: StringFilter<"RegionalFranchise"> | string
    adminId?: StringFilter<"RegionalFranchise"> | string
    createdAt?: DateTimeFilter<"RegionalFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"RegionalFranchise"> | Date | string
    superFranchise?: XOR<SuperFranchiseScalarRelationFilter, SuperFranchiseWhereInput>
    admin?: XOR<AdministratorScalarRelationFilter, AdministratorWhereInput>
    chapters?: ChapterListRelationFilter
  }

  export type RegionalFranchiseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    superFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    superFranchise?: SuperFranchiseOrderByWithRelationInput
    admin?: AdministratorOrderByWithRelationInput
    chapters?: ChapterOrderByRelationAggregateInput
  }

  export type RegionalFranchiseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegionalFranchiseWhereInput | RegionalFranchiseWhereInput[]
    OR?: RegionalFranchiseWhereInput[]
    NOT?: RegionalFranchiseWhereInput | RegionalFranchiseWhereInput[]
    name?: StringFilter<"RegionalFranchise"> | string
    state?: StringFilter<"RegionalFranchise"> | string
    superFranchiseId?: StringFilter<"RegionalFranchise"> | string
    adminId?: StringFilter<"RegionalFranchise"> | string
    createdAt?: DateTimeFilter<"RegionalFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"RegionalFranchise"> | Date | string
    superFranchise?: XOR<SuperFranchiseScalarRelationFilter, SuperFranchiseWhereInput>
    admin?: XOR<AdministratorScalarRelationFilter, AdministratorWhereInput>
    chapters?: ChapterListRelationFilter
  }, "id">

  export type RegionalFranchiseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    superFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegionalFranchiseCountOrderByAggregateInput
    _max?: RegionalFranchiseMaxOrderByAggregateInput
    _min?: RegionalFranchiseMinOrderByAggregateInput
  }

  export type RegionalFranchiseScalarWhereWithAggregatesInput = {
    AND?: RegionalFranchiseScalarWhereWithAggregatesInput | RegionalFranchiseScalarWhereWithAggregatesInput[]
    OR?: RegionalFranchiseScalarWhereWithAggregatesInput[]
    NOT?: RegionalFranchiseScalarWhereWithAggregatesInput | RegionalFranchiseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegionalFranchise"> | string
    name?: StringWithAggregatesFilter<"RegionalFranchise"> | string
    state?: StringWithAggregatesFilter<"RegionalFranchise"> | string
    superFranchiseId?: StringWithAggregatesFilter<"RegionalFranchise"> | string
    adminId?: StringWithAggregatesFilter<"RegionalFranchise"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RegionalFranchise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegionalFranchise"> | Date | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    name?: StringFilter<"Chapter"> | string
    regionalFranchiseId?: StringFilter<"Chapter"> | string
    chapterLeaderId?: StringNullableFilter<"Chapter"> | string | null
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    regionalFranchise?: XOR<RegionalFranchiseScalarRelationFilter, RegionalFranchiseWhereInput>
    chapterLeader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    clubs?: ClubListRelationFilter
    events?: ChapterEventListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    regionalFranchiseId?: SortOrder
    chapterLeaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    regionalFranchise?: RegionalFranchiseOrderByWithRelationInput
    chapterLeader?: UserOrderByWithRelationInput
    clubs?: ClubOrderByRelationAggregateInput
    events?: ChapterEventOrderByRelationAggregateInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chapterLeaderId?: string
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    name?: StringFilter<"Chapter"> | string
    regionalFranchiseId?: StringFilter<"Chapter"> | string
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    regionalFranchise?: XOR<RegionalFranchiseScalarRelationFilter, RegionalFranchiseWhereInput>
    chapterLeader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    clubs?: ClubListRelationFilter
    events?: ChapterEventListRelationFilter
  }, "id" | "chapterLeaderId">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    regionalFranchiseId?: SortOrder
    chapterLeaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    name?: StringWithAggregatesFilter<"Chapter"> | string
    regionalFranchiseId?: StringWithAggregatesFilter<"Chapter"> | string
    chapterLeaderId?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
  }

  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: StringFilter<"Club"> | string
    name?: StringFilter<"Club"> | string
    chapterId?: StringFilter<"Club"> | string
    clubLeaderId?: StringNullableFilter<"Club"> | string | null
    createdAt?: DateTimeFilter<"Club"> | Date | string
    updatedAt?: DateTimeFilter<"Club"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    clubLeader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: UserListRelationFilter
    events?: ClubEventListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    chapterId?: SortOrder
    clubLeaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapter?: ChapterOrderByWithRelationInput
    clubLeader?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    events?: ClubEventOrderByRelationAggregateInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clubLeaderId?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    name?: StringFilter<"Club"> | string
    chapterId?: StringFilter<"Club"> | string
    createdAt?: DateTimeFilter<"Club"> | Date | string
    updatedAt?: DateTimeFilter<"Club"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    clubLeader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: UserListRelationFilter
    events?: ClubEventListRelationFilter
  }, "id" | "clubLeaderId">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    chapterId?: SortOrder
    clubLeaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClubCountOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Club"> | string
    name?: StringWithAggregatesFilter<"Club"> | string
    chapterId?: StringWithAggregatesFilter<"Club"> | string
    clubLeaderId?: StringNullableWithAggregatesFilter<"Club"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Club"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Club"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringFilter<"User"> | string
    phoneVerified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    membershipType?: EnumUserMembershipTypeFilter<"User"> | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFilter<"User"> | Date | string
    membershipEndDate?: DateTimeFilter<"User"> | Date | string
    leadingChapterId?: StringNullableFilter<"User"> | string | null
    leadingClubId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leadingChapter?: XOR<ChapterNullableScalarRelationFilter, ChapterWhereInput> | null
    leadingClub?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    clubs?: ClubListRelationFilter
    referralsCreated?: ReferralListRelationFilter
    referralsReceived?: ReferralListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    name?: SortOrder
    membershipType?: SortOrder
    membershipStartDate?: SortOrder
    membershipEndDate?: SortOrder
    leadingChapterId?: SortOrderInput | SortOrder
    leadingClubId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leadingChapter?: ChapterOrderByWithRelationInput
    leadingClub?: ClubOrderByWithRelationInput
    clubs?: ClubOrderByRelationAggregateInput
    referralsCreated?: ReferralOrderByRelationAggregateInput
    referralsReceived?: ReferralOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    leadingChapterId?: string
    leadingClubId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringFilter<"User"> | string
    phoneVerified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    membershipType?: EnumUserMembershipTypeFilter<"User"> | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFilter<"User"> | Date | string
    membershipEndDate?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    leadingChapter?: XOR<ChapterNullableScalarRelationFilter, ChapterWhereInput> | null
    leadingClub?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    clubs?: ClubListRelationFilter
    referralsCreated?: ReferralListRelationFilter
    referralsReceived?: ReferralListRelationFilter
  }, "id" | "email" | "leadingChapterId" | "leadingClubId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    name?: SortOrder
    membershipType?: SortOrder
    membershipStartDate?: SortOrder
    membershipEndDate?: SortOrder
    leadingChapterId?: SortOrderInput | SortOrder
    leadingClubId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phone?: StringWithAggregatesFilter<"User"> | string
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    membershipType?: EnumUserMembershipTypeWithAggregatesFilter<"User"> | $Enums.UserMembershipType
    membershipStartDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    membershipEndDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    leadingChapterId?: StringNullableWithAggregatesFilter<"User"> | string | null
    leadingClubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChapterEventWhereInput = {
    AND?: ChapterEventWhereInput | ChapterEventWhereInput[]
    OR?: ChapterEventWhereInput[]
    NOT?: ChapterEventWhereInput | ChapterEventWhereInput[]
    id?: StringFilter<"ChapterEvent"> | string
    title?: StringFilter<"ChapterEvent"> | string
    description?: StringFilter<"ChapterEvent"> | string
    date?: DateTimeFilter<"ChapterEvent"> | Date | string
    chapterId?: StringFilter<"ChapterEvent"> | string
    createdAt?: DateTimeFilter<"ChapterEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ChapterEvent"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }

  export type ChapterEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapter?: ChapterOrderByWithRelationInput
  }

  export type ChapterEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapterEventWhereInput | ChapterEventWhereInput[]
    OR?: ChapterEventWhereInput[]
    NOT?: ChapterEventWhereInput | ChapterEventWhereInput[]
    title?: StringFilter<"ChapterEvent"> | string
    description?: StringFilter<"ChapterEvent"> | string
    date?: DateTimeFilter<"ChapterEvent"> | Date | string
    chapterId?: StringFilter<"ChapterEvent"> | string
    createdAt?: DateTimeFilter<"ChapterEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ChapterEvent"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }, "id">

  export type ChapterEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChapterEventCountOrderByAggregateInput
    _max?: ChapterEventMaxOrderByAggregateInput
    _min?: ChapterEventMinOrderByAggregateInput
  }

  export type ChapterEventScalarWhereWithAggregatesInput = {
    AND?: ChapterEventScalarWhereWithAggregatesInput | ChapterEventScalarWhereWithAggregatesInput[]
    OR?: ChapterEventScalarWhereWithAggregatesInput[]
    NOT?: ChapterEventScalarWhereWithAggregatesInput | ChapterEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChapterEvent"> | string
    title?: StringWithAggregatesFilter<"ChapterEvent"> | string
    description?: StringWithAggregatesFilter<"ChapterEvent"> | string
    date?: DateTimeWithAggregatesFilter<"ChapterEvent"> | Date | string
    chapterId?: StringWithAggregatesFilter<"ChapterEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChapterEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChapterEvent"> | Date | string
  }

  export type ClubEventWhereInput = {
    AND?: ClubEventWhereInput | ClubEventWhereInput[]
    OR?: ClubEventWhereInput[]
    NOT?: ClubEventWhereInput | ClubEventWhereInput[]
    id?: StringFilter<"ClubEvent"> | string
    title?: StringFilter<"ClubEvent"> | string
    description?: StringFilter<"ClubEvent"> | string
    date?: DateTimeFilter<"ClubEvent"> | Date | string
    clubId?: StringFilter<"ClubEvent"> | string
    createdAt?: DateTimeFilter<"ClubEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ClubEvent"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
  }

  export type ClubEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    clubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    club?: ClubOrderByWithRelationInput
  }

  export type ClubEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClubEventWhereInput | ClubEventWhereInput[]
    OR?: ClubEventWhereInput[]
    NOT?: ClubEventWhereInput | ClubEventWhereInput[]
    title?: StringFilter<"ClubEvent"> | string
    description?: StringFilter<"ClubEvent"> | string
    date?: DateTimeFilter<"ClubEvent"> | Date | string
    clubId?: StringFilter<"ClubEvent"> | string
    createdAt?: DateTimeFilter<"ClubEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ClubEvent"> | Date | string
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
  }, "id">

  export type ClubEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    clubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClubEventCountOrderByAggregateInput
    _max?: ClubEventMaxOrderByAggregateInput
    _min?: ClubEventMinOrderByAggregateInput
  }

  export type ClubEventScalarWhereWithAggregatesInput = {
    AND?: ClubEventScalarWhereWithAggregatesInput | ClubEventScalarWhereWithAggregatesInput[]
    OR?: ClubEventScalarWhereWithAggregatesInput[]
    NOT?: ClubEventScalarWhereWithAggregatesInput | ClubEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClubEvent"> | string
    title?: StringWithAggregatesFilter<"ClubEvent"> | string
    description?: StringWithAggregatesFilter<"ClubEvent"> | string
    date?: DateTimeWithAggregatesFilter<"ClubEvent"> | Date | string
    clubId?: StringWithAggregatesFilter<"ClubEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClubEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClubEvent"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: StringFilter<"Referral"> | string
    type?: EnumReferralTypeFilter<"Referral"> | $Enums.ReferralType
    creatorId?: StringFilter<"Referral"> | string
    receiverId?: StringFilter<"Referral"> | string
    businessDetails?: StringNullableFilter<"Referral"> | string | null
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    creatorId?: SortOrder
    receiverId?: SortOrder
    businessDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    type?: EnumReferralTypeFilter<"Referral"> | $Enums.ReferralType
    creatorId?: StringFilter<"Referral"> | string
    receiverId?: StringFilter<"Referral"> | string
    businessDetails?: StringNullableFilter<"Referral"> | string | null
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    creatorId?: SortOrder
    receiverId?: SortOrder
    businessDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Referral"> | string
    type?: EnumReferralTypeWithAggregatesFilter<"Referral"> | $Enums.ReferralType
    creatorId?: StringWithAggregatesFilter<"Referral"> | string
    receiverId?: StringWithAggregatesFilter<"Referral"> | string
    businessDetails?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
  }

  export type GmailVerificationCodeWhereInput = {
    AND?: GmailVerificationCodeWhereInput | GmailVerificationCodeWhereInput[]
    OR?: GmailVerificationCodeWhereInput[]
    NOT?: GmailVerificationCodeWhereInput | GmailVerificationCodeWhereInput[]
    id?: StringFilter<"GmailVerificationCode"> | string
    email?: StringFilter<"GmailVerificationCode"> | string
    code?: StringFilter<"GmailVerificationCode"> | string
    expiresAt?: DateTimeFilter<"GmailVerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"GmailVerificationCode"> | Date | string
  }

  export type GmailVerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GmailVerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: GmailVerificationCodeWhereInput | GmailVerificationCodeWhereInput[]
    OR?: GmailVerificationCodeWhereInput[]
    NOT?: GmailVerificationCodeWhereInput | GmailVerificationCodeWhereInput[]
    code?: StringFilter<"GmailVerificationCode"> | string
    expiresAt?: DateTimeFilter<"GmailVerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"GmailVerificationCode"> | Date | string
  }, "id" | "email">

  export type GmailVerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: GmailVerificationCodeCountOrderByAggregateInput
    _max?: GmailVerificationCodeMaxOrderByAggregateInput
    _min?: GmailVerificationCodeMinOrderByAggregateInput
  }

  export type GmailVerificationCodeScalarWhereWithAggregatesInput = {
    AND?: GmailVerificationCodeScalarWhereWithAggregatesInput | GmailVerificationCodeScalarWhereWithAggregatesInput[]
    OR?: GmailVerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: GmailVerificationCodeScalarWhereWithAggregatesInput | GmailVerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GmailVerificationCode"> | string
    email?: StringWithAggregatesFilter<"GmailVerificationCode"> | string
    code?: StringWithAggregatesFilter<"GmailVerificationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"GmailVerificationCode"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GmailVerificationCode"> | Date | string
  }

  export type AdministratorCreateInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    parentAdmin?: AdministratorCreateNestedOneWithoutChildAdminsInput
    childAdmins?: AdministratorCreateNestedManyWithoutParentAdminInput
    masterFranchises?: MasterFranchiseCreateNestedManyWithoutAdminInput
    superFranchises?: SuperFranchiseCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseCreateNestedManyWithoutAdminInput
  }

  export type AdministratorUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    parentAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childAdmins?: AdministratorUncheckedCreateNestedManyWithoutParentAdminInput
    masterFranchises?: MasterFranchiseUncheckedCreateNestedManyWithoutAdminInput
    superFranchises?: SuperFranchiseUncheckedCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdministratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentAdmin?: AdministratorUpdateOneWithoutChildAdminsNestedInput
    childAdmins?: AdministratorUpdateManyWithoutParentAdminNestedInput
    masterFranchises?: MasterFranchiseUpdateManyWithoutAdminNestedInput
    superFranchises?: SuperFranchiseUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    parentAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childAdmins?: AdministratorUncheckedUpdateManyWithoutParentAdminNestedInput
    masterFranchises?: MasterFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    superFranchises?: SuperFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorCreateManyInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    parentAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    parentAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterFranchiseCreateInput = {
    id?: string
    name: string
    countries?: MasterFranchiseCreatecountriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdministratorCreateNestedOneWithoutMasterFranchisesInput
    superFranchises?: SuperFranchiseCreateNestedManyWithoutMasterFranchiseInput
  }

  export type MasterFranchiseUncheckedCreateInput = {
    id?: string
    name: string
    countries?: MasterFranchiseCreatecountriesInput | string[]
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    superFranchises?: SuperFranchiseUncheckedCreateNestedManyWithoutMasterFranchiseInput
  }

  export type MasterFranchiseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdministratorUpdateOneRequiredWithoutMasterFranchisesNestedInput
    superFranchises?: SuperFranchiseUpdateManyWithoutMasterFranchiseNestedInput
  }

  export type MasterFranchiseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superFranchises?: SuperFranchiseUncheckedUpdateManyWithoutMasterFranchiseNestedInput
  }

  export type MasterFranchiseCreateManyInput = {
    id?: string
    name: string
    countries?: MasterFranchiseCreatecountriesInput | string[]
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterFranchiseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterFranchiseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperFranchiseCreateInput = {
    id?: string
    name: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    masterFranchise: MasterFranchiseCreateNestedOneWithoutSuperFranchisesInput
    admin: AdministratorCreateNestedOneWithoutSuperFranchisesInput
    regionalFranchises?: RegionalFranchiseCreateNestedManyWithoutSuperFranchiseInput
  }

  export type SuperFranchiseUncheckedCreateInput = {
    id?: string
    name: string
    country: string
    masterFranchiseId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    regionalFranchises?: RegionalFranchiseUncheckedCreateNestedManyWithoutSuperFranchiseInput
  }

  export type SuperFranchiseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterFranchise?: MasterFranchiseUpdateOneRequiredWithoutSuperFranchisesNestedInput
    admin?: AdministratorUpdateOneRequiredWithoutSuperFranchisesNestedInput
    regionalFranchises?: RegionalFranchiseUpdateManyWithoutSuperFranchiseNestedInput
  }

  export type SuperFranchiseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    masterFranchiseId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionalFranchises?: RegionalFranchiseUncheckedUpdateManyWithoutSuperFranchiseNestedInput
  }

  export type SuperFranchiseCreateManyInput = {
    id?: string
    name: string
    country: string
    masterFranchiseId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperFranchiseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperFranchiseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    masterFranchiseId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionalFranchiseCreateInput = {
    id?: string
    name: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    superFranchise: SuperFranchiseCreateNestedOneWithoutRegionalFranchisesInput
    admin: AdministratorCreateNestedOneWithoutRegionalFranchisesInput
    chapters?: ChapterCreateNestedManyWithoutRegionalFranchiseInput
  }

  export type RegionalFranchiseUncheckedCreateInput = {
    id?: string
    name: string
    state: string
    superFranchiseId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutRegionalFranchiseInput
  }

  export type RegionalFranchiseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superFranchise?: SuperFranchiseUpdateOneRequiredWithoutRegionalFranchisesNestedInput
    admin?: AdministratorUpdateOneRequiredWithoutRegionalFranchisesNestedInput
    chapters?: ChapterUpdateManyWithoutRegionalFranchiseNestedInput
  }

  export type RegionalFranchiseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    superFranchiseId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutRegionalFranchiseNestedInput
  }

  export type RegionalFranchiseCreateManyInput = {
    id?: string
    name: string
    state: string
    superFranchiseId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionalFranchiseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionalFranchiseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    superFranchiseId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    regionalFranchise: RegionalFranchiseCreateNestedOneWithoutChaptersInput
    chapterLeader?: UserCreateNestedOneWithoutLeadingChapterInput
    clubs?: ClubCreateNestedManyWithoutChapterInput
    events?: ChapterEventCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: string
    name: string
    regionalFranchiseId: string
    chapterLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clubs?: ClubUncheckedCreateNestedManyWithoutChapterInput
    events?: ChapterEventUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionalFranchise?: RegionalFranchiseUpdateOneRequiredWithoutChaptersNestedInput
    chapterLeader?: UserUpdateOneWithoutLeadingChapterNestedInput
    clubs?: ClubUpdateManyWithoutChapterNestedInput
    events?: ChapterEventUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    regionalFranchiseId?: StringFieldUpdateOperationsInput | string
    chapterLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clubs?: ClubUncheckedUpdateManyWithoutChapterNestedInput
    events?: ChapterEventUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: string
    name: string
    regionalFranchiseId: string
    chapterLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    regionalFranchiseId?: StringFieldUpdateOperationsInput | string
    chapterLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutClubsInput
    clubLeader?: UserCreateNestedOneWithoutLeadingClubInput
    members?: UserCreateNestedManyWithoutClubsInput
    events?: ClubEventCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateInput = {
    id?: string
    name: string
    chapterId: string
    clubLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutClubsInput
    events?: ClubEventUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutClubsNestedInput
    clubLeader?: UserUpdateOneWithoutLeadingClubNestedInput
    members?: UserUpdateManyWithoutClubsNestedInput
    events?: ClubEventUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    clubLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutClubsNestedInput
    events?: ClubEventUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateManyInput = {
    id?: string
    name: string
    chapterId: string
    clubLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    clubLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterCreateNestedOneWithoutChapterLeaderInput
    leadingClub?: ClubCreateNestedOneWithoutClubLeaderInput
    clubs?: ClubCreateNestedManyWithoutMembersInput
    referralsCreated?: ReferralCreateNestedManyWithoutCreatorInput
    referralsReceived?: ReferralCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterUncheckedCreateNestedOneWithoutChapterLeaderInput
    leadingClub?: ClubUncheckedCreateNestedOneWithoutClubLeaderInput
    clubs?: ClubUncheckedCreateNestedManyWithoutMembersInput
    referralsCreated?: ReferralUncheckedCreateNestedManyWithoutCreatorInput
    referralsReceived?: ReferralUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUpdateOneWithoutChapterLeaderNestedInput
    leadingClub?: ClubUpdateOneWithoutClubLeaderNestedInput
    clubs?: ClubUpdateManyWithoutMembersNestedInput
    referralsCreated?: ReferralUpdateManyWithoutCreatorNestedInput
    referralsReceived?: ReferralUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUncheckedUpdateOneWithoutChapterLeaderNestedInput
    leadingClub?: ClubUncheckedUpdateOneWithoutClubLeaderNestedInput
    clubs?: ClubUncheckedUpdateManyWithoutMembersNestedInput
    referralsCreated?: ReferralUncheckedUpdateManyWithoutCreatorNestedInput
    referralsReceived?: ReferralUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterEventCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutEventsInput
  }

  export type ChapterEventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutEventsNestedInput
  }

  export type ChapterEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterEventCreateManyInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubEventCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    club: ClubCreateNestedOneWithoutEventsInput
  }

  export type ClubEventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    clubId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    club?: ClubUpdateOneRequiredWithoutEventsNestedInput
  }

  export type ClubEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clubId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubEventCreateManyInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    clubId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clubId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    id?: string
    type: $Enums.ReferralType
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutReferralsCreatedInput
    receiver: UserCreateNestedOneWithoutReferralsReceivedInput
  }

  export type ReferralUncheckedCreateInput = {
    id?: string
    type: $Enums.ReferralType
    creatorId: string
    receiverId: string
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutReferralsCreatedNestedInput
    receiver?: UserUpdateOneRequiredWithoutReferralsReceivedNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    creatorId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateManyInput = {
    id?: string
    type: $Enums.ReferralType
    creatorId: string
    receiverId: string
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    creatorId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GmailVerificationCodeCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type GmailVerificationCodeUncheckedCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type GmailVerificationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GmailVerificationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GmailVerificationCodeCreateManyInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type GmailVerificationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GmailVerificationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdministratorNullableScalarRelationFilter = {
    is?: AdministratorWhereInput | null
    isNot?: AdministratorWhereInput | null
  }

  export type AdministratorListRelationFilter = {
    every?: AdministratorWhereInput
    some?: AdministratorWhereInput
    none?: AdministratorWhereInput
  }

  export type MasterFranchiseListRelationFilter = {
    every?: MasterFranchiseWhereInput
    some?: MasterFranchiseWhereInput
    none?: MasterFranchiseWhereInput
  }

  export type SuperFranchiseListRelationFilter = {
    every?: SuperFranchiseWhereInput
    some?: SuperFranchiseWhereInput
    none?: SuperFranchiseWhereInput
  }

  export type RegionalFranchiseListRelationFilter = {
    every?: RegionalFranchiseWhereInput
    some?: RegionalFranchiseWhereInput
    none?: RegionalFranchiseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdministratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterFranchiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuperFranchiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionalFranchiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdministratorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerifie?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministratorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerifie?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministratorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerifie?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AdministratorScalarRelationFilter = {
    is?: AdministratorWhereInput
    isNot?: AdministratorWhereInput
  }

  export type MasterFranchiseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countries?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterFranchiseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterFranchiseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterFranchiseScalarRelationFilter = {
    is?: MasterFranchiseWhereInput
    isNot?: MasterFranchiseWhereInput
  }

  export type SuperFranchiseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    masterFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperFranchiseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    masterFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperFranchiseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    masterFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperFranchiseScalarRelationFilter = {
    is?: SuperFranchiseWhereInput
    isNot?: SuperFranchiseWhereInput
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionalFranchiseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    superFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionalFranchiseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    superFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionalFranchiseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    state?: SortOrder
    superFranchiseId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionalFranchiseScalarRelationFilter = {
    is?: RegionalFranchiseWhereInput
    isNot?: RegionalFranchiseWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ClubListRelationFilter = {
    every?: ClubWhereInput
    some?: ClubWhereInput
    none?: ClubWhereInput
  }

  export type ChapterEventListRelationFilter = {
    every?: ChapterEventWhereInput
    some?: ChapterEventWhereInput
    none?: ChapterEventWhereInput
  }

  export type ClubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionalFranchiseId?: SortOrder
    chapterLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionalFranchiseId?: SortOrder
    chapterLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionalFranchiseId?: SortOrder
    chapterLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ClubEventListRelationFilter = {
    every?: ClubEventWhereInput
    some?: ClubEventWhereInput
    none?: ClubEventWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    chapterId?: SortOrder
    clubLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    chapterId?: SortOrder
    clubLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    chapterId?: SortOrder
    clubLeaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserMembershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMembershipType | EnumUserMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserMembershipType[] | ListEnumUserMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserMembershipType[] | ListEnumUserMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserMembershipTypeFilter<$PrismaModel> | $Enums.UserMembershipType
  }

  export type ChapterNullableScalarRelationFilter = {
    is?: ChapterWhereInput | null
    isNot?: ChapterWhereInput | null
  }

  export type ClubNullableScalarRelationFilter = {
    is?: ClubWhereInput | null
    isNot?: ClubWhereInput | null
  }

  export type ReferralListRelationFilter = {
    every?: ReferralWhereInput
    some?: ReferralWhereInput
    none?: ReferralWhereInput
  }

  export type ReferralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    name?: SortOrder
    membershipType?: SortOrder
    membershipStartDate?: SortOrder
    membershipEndDate?: SortOrder
    leadingChapterId?: SortOrder
    leadingClubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    name?: SortOrder
    membershipType?: SortOrder
    membershipStartDate?: SortOrder
    membershipEndDate?: SortOrder
    leadingChapterId?: SortOrder
    leadingClubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    name?: SortOrder
    membershipType?: SortOrder
    membershipStartDate?: SortOrder
    membershipEndDate?: SortOrder
    leadingChapterId?: SortOrder
    leadingClubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserMembershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMembershipType | EnumUserMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserMembershipType[] | ListEnumUserMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserMembershipType[] | ListEnumUserMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserMembershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserMembershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserMembershipTypeFilter<$PrismaModel>
    _max?: NestedEnumUserMembershipTypeFilter<$PrismaModel>
  }

  export type ChapterEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    chapterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubScalarRelationFilter = {
    is?: ClubWhereInput
    isNot?: ClubWhereInput
  }

  export type ClubEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    clubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    clubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    clubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReferralTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralType | EnumReferralTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralTypeFilter<$PrismaModel> | $Enums.ReferralType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    creatorId?: SortOrder
    receiverId?: SortOrder
    businessDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    creatorId?: SortOrder
    receiverId?: SortOrder
    businessDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    creatorId?: SortOrder
    receiverId?: SortOrder
    businessDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReferralTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralType | EnumReferralTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReferralType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferralTypeFilter<$PrismaModel>
    _max?: NestedEnumReferralTypeFilter<$PrismaModel>
  }

  export type GmailVerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GmailVerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GmailVerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AdministratorCreateNestedOneWithoutChildAdminsInput = {
    create?: XOR<AdministratorCreateWithoutChildAdminsInput, AdministratorUncheckedCreateWithoutChildAdminsInput>
    connectOrCreate?: AdministratorCreateOrConnectWithoutChildAdminsInput
    connect?: AdministratorWhereUniqueInput
  }

  export type AdministratorCreateNestedManyWithoutParentAdminInput = {
    create?: XOR<AdministratorCreateWithoutParentAdminInput, AdministratorUncheckedCreateWithoutParentAdminInput> | AdministratorCreateWithoutParentAdminInput[] | AdministratorUncheckedCreateWithoutParentAdminInput[]
    connectOrCreate?: AdministratorCreateOrConnectWithoutParentAdminInput | AdministratorCreateOrConnectWithoutParentAdminInput[]
    createMany?: AdministratorCreateManyParentAdminInputEnvelope
    connect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
  }

  export type MasterFranchiseCreateNestedManyWithoutAdminInput = {
    create?: XOR<MasterFranchiseCreateWithoutAdminInput, MasterFranchiseUncheckedCreateWithoutAdminInput> | MasterFranchiseCreateWithoutAdminInput[] | MasterFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MasterFranchiseCreateOrConnectWithoutAdminInput | MasterFranchiseCreateOrConnectWithoutAdminInput[]
    createMany?: MasterFranchiseCreateManyAdminInputEnvelope
    connect?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
  }

  export type SuperFranchiseCreateNestedManyWithoutAdminInput = {
    create?: XOR<SuperFranchiseCreateWithoutAdminInput, SuperFranchiseUncheckedCreateWithoutAdminInput> | SuperFranchiseCreateWithoutAdminInput[] | SuperFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutAdminInput | SuperFranchiseCreateOrConnectWithoutAdminInput[]
    createMany?: SuperFranchiseCreateManyAdminInputEnvelope
    connect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
  }

  export type RegionalFranchiseCreateNestedManyWithoutAdminInput = {
    create?: XOR<RegionalFranchiseCreateWithoutAdminInput, RegionalFranchiseUncheckedCreateWithoutAdminInput> | RegionalFranchiseCreateWithoutAdminInput[] | RegionalFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutAdminInput | RegionalFranchiseCreateOrConnectWithoutAdminInput[]
    createMany?: RegionalFranchiseCreateManyAdminInputEnvelope
    connect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
  }

  export type AdministratorUncheckedCreateNestedManyWithoutParentAdminInput = {
    create?: XOR<AdministratorCreateWithoutParentAdminInput, AdministratorUncheckedCreateWithoutParentAdminInput> | AdministratorCreateWithoutParentAdminInput[] | AdministratorUncheckedCreateWithoutParentAdminInput[]
    connectOrCreate?: AdministratorCreateOrConnectWithoutParentAdminInput | AdministratorCreateOrConnectWithoutParentAdminInput[]
    createMany?: AdministratorCreateManyParentAdminInputEnvelope
    connect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
  }

  export type MasterFranchiseUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<MasterFranchiseCreateWithoutAdminInput, MasterFranchiseUncheckedCreateWithoutAdminInput> | MasterFranchiseCreateWithoutAdminInput[] | MasterFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MasterFranchiseCreateOrConnectWithoutAdminInput | MasterFranchiseCreateOrConnectWithoutAdminInput[]
    createMany?: MasterFranchiseCreateManyAdminInputEnvelope
    connect?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
  }

  export type SuperFranchiseUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<SuperFranchiseCreateWithoutAdminInput, SuperFranchiseUncheckedCreateWithoutAdminInput> | SuperFranchiseCreateWithoutAdminInput[] | SuperFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutAdminInput | SuperFranchiseCreateOrConnectWithoutAdminInput[]
    createMany?: SuperFranchiseCreateManyAdminInputEnvelope
    connect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
  }

  export type RegionalFranchiseUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<RegionalFranchiseCreateWithoutAdminInput, RegionalFranchiseUncheckedCreateWithoutAdminInput> | RegionalFranchiseCreateWithoutAdminInput[] | RegionalFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutAdminInput | RegionalFranchiseCreateOrConnectWithoutAdminInput[]
    createMany?: RegionalFranchiseCreateManyAdminInputEnvelope
    connect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdministratorUpdateOneWithoutChildAdminsNestedInput = {
    create?: XOR<AdministratorCreateWithoutChildAdminsInput, AdministratorUncheckedCreateWithoutChildAdminsInput>
    connectOrCreate?: AdministratorCreateOrConnectWithoutChildAdminsInput
    upsert?: AdministratorUpsertWithoutChildAdminsInput
    disconnect?: AdministratorWhereInput | boolean
    delete?: AdministratorWhereInput | boolean
    connect?: AdministratorWhereUniqueInput
    update?: XOR<XOR<AdministratorUpdateToOneWithWhereWithoutChildAdminsInput, AdministratorUpdateWithoutChildAdminsInput>, AdministratorUncheckedUpdateWithoutChildAdminsInput>
  }

  export type AdministratorUpdateManyWithoutParentAdminNestedInput = {
    create?: XOR<AdministratorCreateWithoutParentAdminInput, AdministratorUncheckedCreateWithoutParentAdminInput> | AdministratorCreateWithoutParentAdminInput[] | AdministratorUncheckedCreateWithoutParentAdminInput[]
    connectOrCreate?: AdministratorCreateOrConnectWithoutParentAdminInput | AdministratorCreateOrConnectWithoutParentAdminInput[]
    upsert?: AdministratorUpsertWithWhereUniqueWithoutParentAdminInput | AdministratorUpsertWithWhereUniqueWithoutParentAdminInput[]
    createMany?: AdministratorCreateManyParentAdminInputEnvelope
    set?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    disconnect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    delete?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    connect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    update?: AdministratorUpdateWithWhereUniqueWithoutParentAdminInput | AdministratorUpdateWithWhereUniqueWithoutParentAdminInput[]
    updateMany?: AdministratorUpdateManyWithWhereWithoutParentAdminInput | AdministratorUpdateManyWithWhereWithoutParentAdminInput[]
    deleteMany?: AdministratorScalarWhereInput | AdministratorScalarWhereInput[]
  }

  export type MasterFranchiseUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MasterFranchiseCreateWithoutAdminInput, MasterFranchiseUncheckedCreateWithoutAdminInput> | MasterFranchiseCreateWithoutAdminInput[] | MasterFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MasterFranchiseCreateOrConnectWithoutAdminInput | MasterFranchiseCreateOrConnectWithoutAdminInput[]
    upsert?: MasterFranchiseUpsertWithWhereUniqueWithoutAdminInput | MasterFranchiseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MasterFranchiseCreateManyAdminInputEnvelope
    set?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
    disconnect?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
    delete?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
    connect?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
    update?: MasterFranchiseUpdateWithWhereUniqueWithoutAdminInput | MasterFranchiseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MasterFranchiseUpdateManyWithWhereWithoutAdminInput | MasterFranchiseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MasterFranchiseScalarWhereInput | MasterFranchiseScalarWhereInput[]
  }

  export type SuperFranchiseUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SuperFranchiseCreateWithoutAdminInput, SuperFranchiseUncheckedCreateWithoutAdminInput> | SuperFranchiseCreateWithoutAdminInput[] | SuperFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutAdminInput | SuperFranchiseCreateOrConnectWithoutAdminInput[]
    upsert?: SuperFranchiseUpsertWithWhereUniqueWithoutAdminInput | SuperFranchiseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SuperFranchiseCreateManyAdminInputEnvelope
    set?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    disconnect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    delete?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    connect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    update?: SuperFranchiseUpdateWithWhereUniqueWithoutAdminInput | SuperFranchiseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SuperFranchiseUpdateManyWithWhereWithoutAdminInput | SuperFranchiseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SuperFranchiseScalarWhereInput | SuperFranchiseScalarWhereInput[]
  }

  export type RegionalFranchiseUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RegionalFranchiseCreateWithoutAdminInput, RegionalFranchiseUncheckedCreateWithoutAdminInput> | RegionalFranchiseCreateWithoutAdminInput[] | RegionalFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutAdminInput | RegionalFranchiseCreateOrConnectWithoutAdminInput[]
    upsert?: RegionalFranchiseUpsertWithWhereUniqueWithoutAdminInput | RegionalFranchiseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RegionalFranchiseCreateManyAdminInputEnvelope
    set?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    disconnect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    delete?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    connect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    update?: RegionalFranchiseUpdateWithWhereUniqueWithoutAdminInput | RegionalFranchiseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RegionalFranchiseUpdateManyWithWhereWithoutAdminInput | RegionalFranchiseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RegionalFranchiseScalarWhereInput | RegionalFranchiseScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AdministratorUncheckedUpdateManyWithoutParentAdminNestedInput = {
    create?: XOR<AdministratorCreateWithoutParentAdminInput, AdministratorUncheckedCreateWithoutParentAdminInput> | AdministratorCreateWithoutParentAdminInput[] | AdministratorUncheckedCreateWithoutParentAdminInput[]
    connectOrCreate?: AdministratorCreateOrConnectWithoutParentAdminInput | AdministratorCreateOrConnectWithoutParentAdminInput[]
    upsert?: AdministratorUpsertWithWhereUniqueWithoutParentAdminInput | AdministratorUpsertWithWhereUniqueWithoutParentAdminInput[]
    createMany?: AdministratorCreateManyParentAdminInputEnvelope
    set?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    disconnect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    delete?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    connect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    update?: AdministratorUpdateWithWhereUniqueWithoutParentAdminInput | AdministratorUpdateWithWhereUniqueWithoutParentAdminInput[]
    updateMany?: AdministratorUpdateManyWithWhereWithoutParentAdminInput | AdministratorUpdateManyWithWhereWithoutParentAdminInput[]
    deleteMany?: AdministratorScalarWhereInput | AdministratorScalarWhereInput[]
  }

  export type MasterFranchiseUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MasterFranchiseCreateWithoutAdminInput, MasterFranchiseUncheckedCreateWithoutAdminInput> | MasterFranchiseCreateWithoutAdminInput[] | MasterFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MasterFranchiseCreateOrConnectWithoutAdminInput | MasterFranchiseCreateOrConnectWithoutAdminInput[]
    upsert?: MasterFranchiseUpsertWithWhereUniqueWithoutAdminInput | MasterFranchiseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MasterFranchiseCreateManyAdminInputEnvelope
    set?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
    disconnect?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
    delete?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
    connect?: MasterFranchiseWhereUniqueInput | MasterFranchiseWhereUniqueInput[]
    update?: MasterFranchiseUpdateWithWhereUniqueWithoutAdminInput | MasterFranchiseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MasterFranchiseUpdateManyWithWhereWithoutAdminInput | MasterFranchiseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MasterFranchiseScalarWhereInput | MasterFranchiseScalarWhereInput[]
  }

  export type SuperFranchiseUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SuperFranchiseCreateWithoutAdminInput, SuperFranchiseUncheckedCreateWithoutAdminInput> | SuperFranchiseCreateWithoutAdminInput[] | SuperFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutAdminInput | SuperFranchiseCreateOrConnectWithoutAdminInput[]
    upsert?: SuperFranchiseUpsertWithWhereUniqueWithoutAdminInput | SuperFranchiseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SuperFranchiseCreateManyAdminInputEnvelope
    set?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    disconnect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    delete?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    connect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    update?: SuperFranchiseUpdateWithWhereUniqueWithoutAdminInput | SuperFranchiseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SuperFranchiseUpdateManyWithWhereWithoutAdminInput | SuperFranchiseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SuperFranchiseScalarWhereInput | SuperFranchiseScalarWhereInput[]
  }

  export type RegionalFranchiseUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RegionalFranchiseCreateWithoutAdminInput, RegionalFranchiseUncheckedCreateWithoutAdminInput> | RegionalFranchiseCreateWithoutAdminInput[] | RegionalFranchiseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutAdminInput | RegionalFranchiseCreateOrConnectWithoutAdminInput[]
    upsert?: RegionalFranchiseUpsertWithWhereUniqueWithoutAdminInput | RegionalFranchiseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RegionalFranchiseCreateManyAdminInputEnvelope
    set?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    disconnect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    delete?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    connect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    update?: RegionalFranchiseUpdateWithWhereUniqueWithoutAdminInput | RegionalFranchiseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RegionalFranchiseUpdateManyWithWhereWithoutAdminInput | RegionalFranchiseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RegionalFranchiseScalarWhereInput | RegionalFranchiseScalarWhereInput[]
  }

  export type MasterFranchiseCreatecountriesInput = {
    set: string[]
  }

  export type AdministratorCreateNestedOneWithoutMasterFranchisesInput = {
    create?: XOR<AdministratorCreateWithoutMasterFranchisesInput, AdministratorUncheckedCreateWithoutMasterFranchisesInput>
    connectOrCreate?: AdministratorCreateOrConnectWithoutMasterFranchisesInput
    connect?: AdministratorWhereUniqueInput
  }

  export type SuperFranchiseCreateNestedManyWithoutMasterFranchiseInput = {
    create?: XOR<SuperFranchiseCreateWithoutMasterFranchiseInput, SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput> | SuperFranchiseCreateWithoutMasterFranchiseInput[] | SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput[]
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput | SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput[]
    createMany?: SuperFranchiseCreateManyMasterFranchiseInputEnvelope
    connect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
  }

  export type SuperFranchiseUncheckedCreateNestedManyWithoutMasterFranchiseInput = {
    create?: XOR<SuperFranchiseCreateWithoutMasterFranchiseInput, SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput> | SuperFranchiseCreateWithoutMasterFranchiseInput[] | SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput[]
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput | SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput[]
    createMany?: SuperFranchiseCreateManyMasterFranchiseInputEnvelope
    connect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
  }

  export type MasterFranchiseUpdatecountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AdministratorUpdateOneRequiredWithoutMasterFranchisesNestedInput = {
    create?: XOR<AdministratorCreateWithoutMasterFranchisesInput, AdministratorUncheckedCreateWithoutMasterFranchisesInput>
    connectOrCreate?: AdministratorCreateOrConnectWithoutMasterFranchisesInput
    upsert?: AdministratorUpsertWithoutMasterFranchisesInput
    connect?: AdministratorWhereUniqueInput
    update?: XOR<XOR<AdministratorUpdateToOneWithWhereWithoutMasterFranchisesInput, AdministratorUpdateWithoutMasterFranchisesInput>, AdministratorUncheckedUpdateWithoutMasterFranchisesInput>
  }

  export type SuperFranchiseUpdateManyWithoutMasterFranchiseNestedInput = {
    create?: XOR<SuperFranchiseCreateWithoutMasterFranchiseInput, SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput> | SuperFranchiseCreateWithoutMasterFranchiseInput[] | SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput[]
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput | SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput[]
    upsert?: SuperFranchiseUpsertWithWhereUniqueWithoutMasterFranchiseInput | SuperFranchiseUpsertWithWhereUniqueWithoutMasterFranchiseInput[]
    createMany?: SuperFranchiseCreateManyMasterFranchiseInputEnvelope
    set?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    disconnect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    delete?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    connect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    update?: SuperFranchiseUpdateWithWhereUniqueWithoutMasterFranchiseInput | SuperFranchiseUpdateWithWhereUniqueWithoutMasterFranchiseInput[]
    updateMany?: SuperFranchiseUpdateManyWithWhereWithoutMasterFranchiseInput | SuperFranchiseUpdateManyWithWhereWithoutMasterFranchiseInput[]
    deleteMany?: SuperFranchiseScalarWhereInput | SuperFranchiseScalarWhereInput[]
  }

  export type SuperFranchiseUncheckedUpdateManyWithoutMasterFranchiseNestedInput = {
    create?: XOR<SuperFranchiseCreateWithoutMasterFranchiseInput, SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput> | SuperFranchiseCreateWithoutMasterFranchiseInput[] | SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput[]
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput | SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput[]
    upsert?: SuperFranchiseUpsertWithWhereUniqueWithoutMasterFranchiseInput | SuperFranchiseUpsertWithWhereUniqueWithoutMasterFranchiseInput[]
    createMany?: SuperFranchiseCreateManyMasterFranchiseInputEnvelope
    set?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    disconnect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    delete?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    connect?: SuperFranchiseWhereUniqueInput | SuperFranchiseWhereUniqueInput[]
    update?: SuperFranchiseUpdateWithWhereUniqueWithoutMasterFranchiseInput | SuperFranchiseUpdateWithWhereUniqueWithoutMasterFranchiseInput[]
    updateMany?: SuperFranchiseUpdateManyWithWhereWithoutMasterFranchiseInput | SuperFranchiseUpdateManyWithWhereWithoutMasterFranchiseInput[]
    deleteMany?: SuperFranchiseScalarWhereInput | SuperFranchiseScalarWhereInput[]
  }

  export type MasterFranchiseCreateNestedOneWithoutSuperFranchisesInput = {
    create?: XOR<MasterFranchiseCreateWithoutSuperFranchisesInput, MasterFranchiseUncheckedCreateWithoutSuperFranchisesInput>
    connectOrCreate?: MasterFranchiseCreateOrConnectWithoutSuperFranchisesInput
    connect?: MasterFranchiseWhereUniqueInput
  }

  export type AdministratorCreateNestedOneWithoutSuperFranchisesInput = {
    create?: XOR<AdministratorCreateWithoutSuperFranchisesInput, AdministratorUncheckedCreateWithoutSuperFranchisesInput>
    connectOrCreate?: AdministratorCreateOrConnectWithoutSuperFranchisesInput
    connect?: AdministratorWhereUniqueInput
  }

  export type RegionalFranchiseCreateNestedManyWithoutSuperFranchiseInput = {
    create?: XOR<RegionalFranchiseCreateWithoutSuperFranchiseInput, RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput> | RegionalFranchiseCreateWithoutSuperFranchiseInput[] | RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput[]
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput | RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput[]
    createMany?: RegionalFranchiseCreateManySuperFranchiseInputEnvelope
    connect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
  }

  export type RegionalFranchiseUncheckedCreateNestedManyWithoutSuperFranchiseInput = {
    create?: XOR<RegionalFranchiseCreateWithoutSuperFranchiseInput, RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput> | RegionalFranchiseCreateWithoutSuperFranchiseInput[] | RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput[]
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput | RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput[]
    createMany?: RegionalFranchiseCreateManySuperFranchiseInputEnvelope
    connect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
  }

  export type MasterFranchiseUpdateOneRequiredWithoutSuperFranchisesNestedInput = {
    create?: XOR<MasterFranchiseCreateWithoutSuperFranchisesInput, MasterFranchiseUncheckedCreateWithoutSuperFranchisesInput>
    connectOrCreate?: MasterFranchiseCreateOrConnectWithoutSuperFranchisesInput
    upsert?: MasterFranchiseUpsertWithoutSuperFranchisesInput
    connect?: MasterFranchiseWhereUniqueInput
    update?: XOR<XOR<MasterFranchiseUpdateToOneWithWhereWithoutSuperFranchisesInput, MasterFranchiseUpdateWithoutSuperFranchisesInput>, MasterFranchiseUncheckedUpdateWithoutSuperFranchisesInput>
  }

  export type AdministratorUpdateOneRequiredWithoutSuperFranchisesNestedInput = {
    create?: XOR<AdministratorCreateWithoutSuperFranchisesInput, AdministratorUncheckedCreateWithoutSuperFranchisesInput>
    connectOrCreate?: AdministratorCreateOrConnectWithoutSuperFranchisesInput
    upsert?: AdministratorUpsertWithoutSuperFranchisesInput
    connect?: AdministratorWhereUniqueInput
    update?: XOR<XOR<AdministratorUpdateToOneWithWhereWithoutSuperFranchisesInput, AdministratorUpdateWithoutSuperFranchisesInput>, AdministratorUncheckedUpdateWithoutSuperFranchisesInput>
  }

  export type RegionalFranchiseUpdateManyWithoutSuperFranchiseNestedInput = {
    create?: XOR<RegionalFranchiseCreateWithoutSuperFranchiseInput, RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput> | RegionalFranchiseCreateWithoutSuperFranchiseInput[] | RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput[]
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput | RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput[]
    upsert?: RegionalFranchiseUpsertWithWhereUniqueWithoutSuperFranchiseInput | RegionalFranchiseUpsertWithWhereUniqueWithoutSuperFranchiseInput[]
    createMany?: RegionalFranchiseCreateManySuperFranchiseInputEnvelope
    set?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    disconnect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    delete?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    connect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    update?: RegionalFranchiseUpdateWithWhereUniqueWithoutSuperFranchiseInput | RegionalFranchiseUpdateWithWhereUniqueWithoutSuperFranchiseInput[]
    updateMany?: RegionalFranchiseUpdateManyWithWhereWithoutSuperFranchiseInput | RegionalFranchiseUpdateManyWithWhereWithoutSuperFranchiseInput[]
    deleteMany?: RegionalFranchiseScalarWhereInput | RegionalFranchiseScalarWhereInput[]
  }

  export type RegionalFranchiseUncheckedUpdateManyWithoutSuperFranchiseNestedInput = {
    create?: XOR<RegionalFranchiseCreateWithoutSuperFranchiseInput, RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput> | RegionalFranchiseCreateWithoutSuperFranchiseInput[] | RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput[]
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput | RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput[]
    upsert?: RegionalFranchiseUpsertWithWhereUniqueWithoutSuperFranchiseInput | RegionalFranchiseUpsertWithWhereUniqueWithoutSuperFranchiseInput[]
    createMany?: RegionalFranchiseCreateManySuperFranchiseInputEnvelope
    set?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    disconnect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    delete?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    connect?: RegionalFranchiseWhereUniqueInput | RegionalFranchiseWhereUniqueInput[]
    update?: RegionalFranchiseUpdateWithWhereUniqueWithoutSuperFranchiseInput | RegionalFranchiseUpdateWithWhereUniqueWithoutSuperFranchiseInput[]
    updateMany?: RegionalFranchiseUpdateManyWithWhereWithoutSuperFranchiseInput | RegionalFranchiseUpdateManyWithWhereWithoutSuperFranchiseInput[]
    deleteMany?: RegionalFranchiseScalarWhereInput | RegionalFranchiseScalarWhereInput[]
  }

  export type SuperFranchiseCreateNestedOneWithoutRegionalFranchisesInput = {
    create?: XOR<SuperFranchiseCreateWithoutRegionalFranchisesInput, SuperFranchiseUncheckedCreateWithoutRegionalFranchisesInput>
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutRegionalFranchisesInput
    connect?: SuperFranchiseWhereUniqueInput
  }

  export type AdministratorCreateNestedOneWithoutRegionalFranchisesInput = {
    create?: XOR<AdministratorCreateWithoutRegionalFranchisesInput, AdministratorUncheckedCreateWithoutRegionalFranchisesInput>
    connectOrCreate?: AdministratorCreateOrConnectWithoutRegionalFranchisesInput
    connect?: AdministratorWhereUniqueInput
  }

  export type ChapterCreateNestedManyWithoutRegionalFranchiseInput = {
    create?: XOR<ChapterCreateWithoutRegionalFranchiseInput, ChapterUncheckedCreateWithoutRegionalFranchiseInput> | ChapterCreateWithoutRegionalFranchiseInput[] | ChapterUncheckedCreateWithoutRegionalFranchiseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutRegionalFranchiseInput | ChapterCreateOrConnectWithoutRegionalFranchiseInput[]
    createMany?: ChapterCreateManyRegionalFranchiseInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutRegionalFranchiseInput = {
    create?: XOR<ChapterCreateWithoutRegionalFranchiseInput, ChapterUncheckedCreateWithoutRegionalFranchiseInput> | ChapterCreateWithoutRegionalFranchiseInput[] | ChapterUncheckedCreateWithoutRegionalFranchiseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutRegionalFranchiseInput | ChapterCreateOrConnectWithoutRegionalFranchiseInput[]
    createMany?: ChapterCreateManyRegionalFranchiseInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type SuperFranchiseUpdateOneRequiredWithoutRegionalFranchisesNestedInput = {
    create?: XOR<SuperFranchiseCreateWithoutRegionalFranchisesInput, SuperFranchiseUncheckedCreateWithoutRegionalFranchisesInput>
    connectOrCreate?: SuperFranchiseCreateOrConnectWithoutRegionalFranchisesInput
    upsert?: SuperFranchiseUpsertWithoutRegionalFranchisesInput
    connect?: SuperFranchiseWhereUniqueInput
    update?: XOR<XOR<SuperFranchiseUpdateToOneWithWhereWithoutRegionalFranchisesInput, SuperFranchiseUpdateWithoutRegionalFranchisesInput>, SuperFranchiseUncheckedUpdateWithoutRegionalFranchisesInput>
  }

  export type AdministratorUpdateOneRequiredWithoutRegionalFranchisesNestedInput = {
    create?: XOR<AdministratorCreateWithoutRegionalFranchisesInput, AdministratorUncheckedCreateWithoutRegionalFranchisesInput>
    connectOrCreate?: AdministratorCreateOrConnectWithoutRegionalFranchisesInput
    upsert?: AdministratorUpsertWithoutRegionalFranchisesInput
    connect?: AdministratorWhereUniqueInput
    update?: XOR<XOR<AdministratorUpdateToOneWithWhereWithoutRegionalFranchisesInput, AdministratorUpdateWithoutRegionalFranchisesInput>, AdministratorUncheckedUpdateWithoutRegionalFranchisesInput>
  }

  export type ChapterUpdateManyWithoutRegionalFranchiseNestedInput = {
    create?: XOR<ChapterCreateWithoutRegionalFranchiseInput, ChapterUncheckedCreateWithoutRegionalFranchiseInput> | ChapterCreateWithoutRegionalFranchiseInput[] | ChapterUncheckedCreateWithoutRegionalFranchiseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutRegionalFranchiseInput | ChapterCreateOrConnectWithoutRegionalFranchiseInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutRegionalFranchiseInput | ChapterUpsertWithWhereUniqueWithoutRegionalFranchiseInput[]
    createMany?: ChapterCreateManyRegionalFranchiseInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutRegionalFranchiseInput | ChapterUpdateWithWhereUniqueWithoutRegionalFranchiseInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutRegionalFranchiseInput | ChapterUpdateManyWithWhereWithoutRegionalFranchiseInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutRegionalFranchiseNestedInput = {
    create?: XOR<ChapterCreateWithoutRegionalFranchiseInput, ChapterUncheckedCreateWithoutRegionalFranchiseInput> | ChapterCreateWithoutRegionalFranchiseInput[] | ChapterUncheckedCreateWithoutRegionalFranchiseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutRegionalFranchiseInput | ChapterCreateOrConnectWithoutRegionalFranchiseInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutRegionalFranchiseInput | ChapterUpsertWithWhereUniqueWithoutRegionalFranchiseInput[]
    createMany?: ChapterCreateManyRegionalFranchiseInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutRegionalFranchiseInput | ChapterUpdateWithWhereUniqueWithoutRegionalFranchiseInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutRegionalFranchiseInput | ChapterUpdateManyWithWhereWithoutRegionalFranchiseInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type RegionalFranchiseCreateNestedOneWithoutChaptersInput = {
    create?: XOR<RegionalFranchiseCreateWithoutChaptersInput, RegionalFranchiseUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutChaptersInput
    connect?: RegionalFranchiseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeadingChapterInput = {
    create?: XOR<UserCreateWithoutLeadingChapterInput, UserUncheckedCreateWithoutLeadingChapterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadingChapterInput
    connect?: UserWhereUniqueInput
  }

  export type ClubCreateNestedManyWithoutChapterInput = {
    create?: XOR<ClubCreateWithoutChapterInput, ClubUncheckedCreateWithoutChapterInput> | ClubCreateWithoutChapterInput[] | ClubUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutChapterInput | ClubCreateOrConnectWithoutChapterInput[]
    createMany?: ClubCreateManyChapterInputEnvelope
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type ChapterEventCreateNestedManyWithoutChapterInput = {
    create?: XOR<ChapterEventCreateWithoutChapterInput, ChapterEventUncheckedCreateWithoutChapterInput> | ChapterEventCreateWithoutChapterInput[] | ChapterEventUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterEventCreateOrConnectWithoutChapterInput | ChapterEventCreateOrConnectWithoutChapterInput[]
    createMany?: ChapterEventCreateManyChapterInputEnvelope
    connect?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
  }

  export type ClubUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<ClubCreateWithoutChapterInput, ClubUncheckedCreateWithoutChapterInput> | ClubCreateWithoutChapterInput[] | ClubUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutChapterInput | ClubCreateOrConnectWithoutChapterInput[]
    createMany?: ClubCreateManyChapterInputEnvelope
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type ChapterEventUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<ChapterEventCreateWithoutChapterInput, ChapterEventUncheckedCreateWithoutChapterInput> | ChapterEventCreateWithoutChapterInput[] | ChapterEventUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterEventCreateOrConnectWithoutChapterInput | ChapterEventCreateOrConnectWithoutChapterInput[]
    createMany?: ChapterEventCreateManyChapterInputEnvelope
    connect?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
  }

  export type RegionalFranchiseUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<RegionalFranchiseCreateWithoutChaptersInput, RegionalFranchiseUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: RegionalFranchiseCreateOrConnectWithoutChaptersInput
    upsert?: RegionalFranchiseUpsertWithoutChaptersInput
    connect?: RegionalFranchiseWhereUniqueInput
    update?: XOR<XOR<RegionalFranchiseUpdateToOneWithWhereWithoutChaptersInput, RegionalFranchiseUpdateWithoutChaptersInput>, RegionalFranchiseUncheckedUpdateWithoutChaptersInput>
  }

  export type UserUpdateOneWithoutLeadingChapterNestedInput = {
    create?: XOR<UserCreateWithoutLeadingChapterInput, UserUncheckedCreateWithoutLeadingChapterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadingChapterInput
    upsert?: UserUpsertWithoutLeadingChapterInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeadingChapterInput, UserUpdateWithoutLeadingChapterInput>, UserUncheckedUpdateWithoutLeadingChapterInput>
  }

  export type ClubUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ClubCreateWithoutChapterInput, ClubUncheckedCreateWithoutChapterInput> | ClubCreateWithoutChapterInput[] | ClubUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutChapterInput | ClubCreateOrConnectWithoutChapterInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutChapterInput | ClubUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ClubCreateManyChapterInputEnvelope
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutChapterInput | ClubUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutChapterInput | ClubUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type ChapterEventUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ChapterEventCreateWithoutChapterInput, ChapterEventUncheckedCreateWithoutChapterInput> | ChapterEventCreateWithoutChapterInput[] | ChapterEventUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterEventCreateOrConnectWithoutChapterInput | ChapterEventCreateOrConnectWithoutChapterInput[]
    upsert?: ChapterEventUpsertWithWhereUniqueWithoutChapterInput | ChapterEventUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ChapterEventCreateManyChapterInputEnvelope
    set?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
    disconnect?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
    delete?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
    connect?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
    update?: ChapterEventUpdateWithWhereUniqueWithoutChapterInput | ChapterEventUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ChapterEventUpdateManyWithWhereWithoutChapterInput | ChapterEventUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ChapterEventScalarWhereInput | ChapterEventScalarWhereInput[]
  }

  export type ClubUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ClubCreateWithoutChapterInput, ClubUncheckedCreateWithoutChapterInput> | ClubCreateWithoutChapterInput[] | ClubUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutChapterInput | ClubCreateOrConnectWithoutChapterInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutChapterInput | ClubUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ClubCreateManyChapterInputEnvelope
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutChapterInput | ClubUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutChapterInput | ClubUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type ChapterEventUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<ChapterEventCreateWithoutChapterInput, ChapterEventUncheckedCreateWithoutChapterInput> | ChapterEventCreateWithoutChapterInput[] | ChapterEventUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: ChapterEventCreateOrConnectWithoutChapterInput | ChapterEventCreateOrConnectWithoutChapterInput[]
    upsert?: ChapterEventUpsertWithWhereUniqueWithoutChapterInput | ChapterEventUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: ChapterEventCreateManyChapterInputEnvelope
    set?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
    disconnect?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
    delete?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
    connect?: ChapterEventWhereUniqueInput | ChapterEventWhereUniqueInput[]
    update?: ChapterEventUpdateWithWhereUniqueWithoutChapterInput | ChapterEventUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: ChapterEventUpdateManyWithWhereWithoutChapterInput | ChapterEventUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: ChapterEventScalarWhereInput | ChapterEventScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutClubsInput = {
    create?: XOR<ChapterCreateWithoutClubsInput, ChapterUncheckedCreateWithoutClubsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutClubsInput
    connect?: ChapterWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeadingClubInput = {
    create?: XOR<UserCreateWithoutLeadingClubInput, UserUncheckedCreateWithoutLeadingClubInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadingClubInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutClubsInput = {
    create?: XOR<UserCreateWithoutClubsInput, UserUncheckedCreateWithoutClubsInput> | UserCreateWithoutClubsInput[] | UserUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsInput | UserCreateOrConnectWithoutClubsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClubEventCreateNestedManyWithoutClubInput = {
    create?: XOR<ClubEventCreateWithoutClubInput, ClubEventUncheckedCreateWithoutClubInput> | ClubEventCreateWithoutClubInput[] | ClubEventUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ClubEventCreateOrConnectWithoutClubInput | ClubEventCreateOrConnectWithoutClubInput[]
    createMany?: ClubEventCreateManyClubInputEnvelope
    connect?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClubsInput = {
    create?: XOR<UserCreateWithoutClubsInput, UserUncheckedCreateWithoutClubsInput> | UserCreateWithoutClubsInput[] | UserUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsInput | UserCreateOrConnectWithoutClubsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClubEventUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<ClubEventCreateWithoutClubInput, ClubEventUncheckedCreateWithoutClubInput> | ClubEventCreateWithoutClubInput[] | ClubEventUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ClubEventCreateOrConnectWithoutClubInput | ClubEventCreateOrConnectWithoutClubInput[]
    createMany?: ClubEventCreateManyClubInputEnvelope
    connect?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
  }

  export type ChapterUpdateOneRequiredWithoutClubsNestedInput = {
    create?: XOR<ChapterCreateWithoutClubsInput, ChapterUncheckedCreateWithoutClubsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutClubsInput
    upsert?: ChapterUpsertWithoutClubsInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutClubsInput, ChapterUpdateWithoutClubsInput>, ChapterUncheckedUpdateWithoutClubsInput>
  }

  export type UserUpdateOneWithoutLeadingClubNestedInput = {
    create?: XOR<UserCreateWithoutLeadingClubInput, UserUncheckedCreateWithoutLeadingClubInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadingClubInput
    upsert?: UserUpsertWithoutLeadingClubInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeadingClubInput, UserUpdateWithoutLeadingClubInput>, UserUncheckedUpdateWithoutLeadingClubInput>
  }

  export type UserUpdateManyWithoutClubsNestedInput = {
    create?: XOR<UserCreateWithoutClubsInput, UserUncheckedCreateWithoutClubsInput> | UserCreateWithoutClubsInput[] | UserUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsInput | UserCreateOrConnectWithoutClubsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubsInput | UserUpsertWithWhereUniqueWithoutClubsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubsInput | UserUpdateWithWhereUniqueWithoutClubsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubsInput | UserUpdateManyWithWhereWithoutClubsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClubEventUpdateManyWithoutClubNestedInput = {
    create?: XOR<ClubEventCreateWithoutClubInput, ClubEventUncheckedCreateWithoutClubInput> | ClubEventCreateWithoutClubInput[] | ClubEventUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ClubEventCreateOrConnectWithoutClubInput | ClubEventCreateOrConnectWithoutClubInput[]
    upsert?: ClubEventUpsertWithWhereUniqueWithoutClubInput | ClubEventUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: ClubEventCreateManyClubInputEnvelope
    set?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
    disconnect?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
    delete?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
    connect?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
    update?: ClubEventUpdateWithWhereUniqueWithoutClubInput | ClubEventUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: ClubEventUpdateManyWithWhereWithoutClubInput | ClubEventUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: ClubEventScalarWhereInput | ClubEventScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClubsNestedInput = {
    create?: XOR<UserCreateWithoutClubsInput, UserUncheckedCreateWithoutClubsInput> | UserCreateWithoutClubsInput[] | UserUncheckedCreateWithoutClubsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsInput | UserCreateOrConnectWithoutClubsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubsInput | UserUpsertWithWhereUniqueWithoutClubsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubsInput | UserUpdateWithWhereUniqueWithoutClubsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubsInput | UserUpdateManyWithWhereWithoutClubsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClubEventUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<ClubEventCreateWithoutClubInput, ClubEventUncheckedCreateWithoutClubInput> | ClubEventCreateWithoutClubInput[] | ClubEventUncheckedCreateWithoutClubInput[]
    connectOrCreate?: ClubEventCreateOrConnectWithoutClubInput | ClubEventCreateOrConnectWithoutClubInput[]
    upsert?: ClubEventUpsertWithWhereUniqueWithoutClubInput | ClubEventUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: ClubEventCreateManyClubInputEnvelope
    set?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
    disconnect?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
    delete?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
    connect?: ClubEventWhereUniqueInput | ClubEventWhereUniqueInput[]
    update?: ClubEventUpdateWithWhereUniqueWithoutClubInput | ClubEventUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: ClubEventUpdateManyWithWhereWithoutClubInput | ClubEventUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: ClubEventScalarWhereInput | ClubEventScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutChapterLeaderInput = {
    create?: XOR<ChapterCreateWithoutChapterLeaderInput, ChapterUncheckedCreateWithoutChapterLeaderInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutChapterLeaderInput
    connect?: ChapterWhereUniqueInput
  }

  export type ClubCreateNestedOneWithoutClubLeaderInput = {
    create?: XOR<ClubCreateWithoutClubLeaderInput, ClubUncheckedCreateWithoutClubLeaderInput>
    connectOrCreate?: ClubCreateOrConnectWithoutClubLeaderInput
    connect?: ClubWhereUniqueInput
  }

  export type ClubCreateNestedManyWithoutMembersInput = {
    create?: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput> | ClubCreateWithoutMembersInput[] | ClubUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput | ClubCreateOrConnectWithoutMembersInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type ReferralCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ReferralCreateWithoutCreatorInput, ReferralUncheckedCreateWithoutCreatorInput> | ReferralCreateWithoutCreatorInput[] | ReferralUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutCreatorInput | ReferralCreateOrConnectWithoutCreatorInput[]
    createMany?: ReferralCreateManyCreatorInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ReferralCreateWithoutReceiverInput, ReferralUncheckedCreateWithoutReceiverInput> | ReferralCreateWithoutReceiverInput[] | ReferralUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReceiverInput | ReferralCreateOrConnectWithoutReceiverInput[]
    createMany?: ReferralCreateManyReceiverInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedOneWithoutChapterLeaderInput = {
    create?: XOR<ChapterCreateWithoutChapterLeaderInput, ChapterUncheckedCreateWithoutChapterLeaderInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutChapterLeaderInput
    connect?: ChapterWhereUniqueInput
  }

  export type ClubUncheckedCreateNestedOneWithoutClubLeaderInput = {
    create?: XOR<ClubCreateWithoutClubLeaderInput, ClubUncheckedCreateWithoutClubLeaderInput>
    connectOrCreate?: ClubCreateOrConnectWithoutClubLeaderInput
    connect?: ClubWhereUniqueInput
  }

  export type ClubUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput> | ClubCreateWithoutMembersInput[] | ClubUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput | ClubCreateOrConnectWithoutMembersInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ReferralCreateWithoutCreatorInput, ReferralUncheckedCreateWithoutCreatorInput> | ReferralCreateWithoutCreatorInput[] | ReferralUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutCreatorInput | ReferralCreateOrConnectWithoutCreatorInput[]
    createMany?: ReferralCreateManyCreatorInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ReferralCreateWithoutReceiverInput, ReferralUncheckedCreateWithoutReceiverInput> | ReferralCreateWithoutReceiverInput[] | ReferralUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReceiverInput | ReferralCreateOrConnectWithoutReceiverInput[]
    createMany?: ReferralCreateManyReceiverInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type EnumUserMembershipTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserMembershipType
  }

  export type ChapterUpdateOneWithoutChapterLeaderNestedInput = {
    create?: XOR<ChapterCreateWithoutChapterLeaderInput, ChapterUncheckedCreateWithoutChapterLeaderInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutChapterLeaderInput
    upsert?: ChapterUpsertWithoutChapterLeaderInput
    disconnect?: ChapterWhereInput | boolean
    delete?: ChapterWhereInput | boolean
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutChapterLeaderInput, ChapterUpdateWithoutChapterLeaderInput>, ChapterUncheckedUpdateWithoutChapterLeaderInput>
  }

  export type ClubUpdateOneWithoutClubLeaderNestedInput = {
    create?: XOR<ClubCreateWithoutClubLeaderInput, ClubUncheckedCreateWithoutClubLeaderInput>
    connectOrCreate?: ClubCreateOrConnectWithoutClubLeaderInput
    upsert?: ClubUpsertWithoutClubLeaderInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutClubLeaderInput, ClubUpdateWithoutClubLeaderInput>, ClubUncheckedUpdateWithoutClubLeaderInput>
  }

  export type ClubUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput> | ClubCreateWithoutMembersInput[] | ClubUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput | ClubCreateOrConnectWithoutMembersInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutMembersInput | ClubUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutMembersInput | ClubUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutMembersInput | ClubUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type ReferralUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ReferralCreateWithoutCreatorInput, ReferralUncheckedCreateWithoutCreatorInput> | ReferralCreateWithoutCreatorInput[] | ReferralUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutCreatorInput | ReferralCreateOrConnectWithoutCreatorInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutCreatorInput | ReferralUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ReferralCreateManyCreatorInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutCreatorInput | ReferralUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutCreatorInput | ReferralUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ReferralUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ReferralCreateWithoutReceiverInput, ReferralUncheckedCreateWithoutReceiverInput> | ReferralCreateWithoutReceiverInput[] | ReferralUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReceiverInput | ReferralCreateOrConnectWithoutReceiverInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReceiverInput | ReferralUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ReferralCreateManyReceiverInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReceiverInput | ReferralUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReceiverInput | ReferralUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateOneWithoutChapterLeaderNestedInput = {
    create?: XOR<ChapterCreateWithoutChapterLeaderInput, ChapterUncheckedCreateWithoutChapterLeaderInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutChapterLeaderInput
    upsert?: ChapterUpsertWithoutChapterLeaderInput
    disconnect?: ChapterWhereInput | boolean
    delete?: ChapterWhereInput | boolean
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutChapterLeaderInput, ChapterUpdateWithoutChapterLeaderInput>, ChapterUncheckedUpdateWithoutChapterLeaderInput>
  }

  export type ClubUncheckedUpdateOneWithoutClubLeaderNestedInput = {
    create?: XOR<ClubCreateWithoutClubLeaderInput, ClubUncheckedCreateWithoutClubLeaderInput>
    connectOrCreate?: ClubCreateOrConnectWithoutClubLeaderInput
    upsert?: ClubUpsertWithoutClubLeaderInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutClubLeaderInput, ClubUpdateWithoutClubLeaderInput>, ClubUncheckedUpdateWithoutClubLeaderInput>
  }

  export type ClubUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput> | ClubCreateWithoutMembersInput[] | ClubUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput | ClubCreateOrConnectWithoutMembersInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutMembersInput | ClubUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutMembersInput | ClubUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutMembersInput | ClubUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ReferralCreateWithoutCreatorInput, ReferralUncheckedCreateWithoutCreatorInput> | ReferralCreateWithoutCreatorInput[] | ReferralUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutCreatorInput | ReferralCreateOrConnectWithoutCreatorInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutCreatorInput | ReferralUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ReferralCreateManyCreatorInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutCreatorInput | ReferralUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutCreatorInput | ReferralUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ReferralCreateWithoutReceiverInput, ReferralUncheckedCreateWithoutReceiverInput> | ReferralCreateWithoutReceiverInput[] | ReferralUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReceiverInput | ReferralCreateOrConnectWithoutReceiverInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReceiverInput | ReferralUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ReferralCreateManyReceiverInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReceiverInput | ReferralUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReceiverInput | ReferralUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutEventsInput = {
    create?: XOR<ChapterCreateWithoutEventsInput, ChapterUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutEventsInput
    connect?: ChapterWhereUniqueInput
  }

  export type ChapterUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ChapterCreateWithoutEventsInput, ChapterUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutEventsInput
    upsert?: ChapterUpsertWithoutEventsInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutEventsInput, ChapterUpdateWithoutEventsInput>, ChapterUncheckedUpdateWithoutEventsInput>
  }

  export type ClubCreateNestedOneWithoutEventsInput = {
    create?: XOR<ClubCreateWithoutEventsInput, ClubUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutEventsInput
    connect?: ClubWhereUniqueInput
  }

  export type ClubUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ClubCreateWithoutEventsInput, ClubUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ClubCreateOrConnectWithoutEventsInput
    upsert?: ClubUpsertWithoutEventsInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutEventsInput, ClubUpdateWithoutEventsInput>, ClubUncheckedUpdateWithoutEventsInput>
  }

  export type UserCreateNestedOneWithoutReferralsCreatedInput = {
    create?: XOR<UserCreateWithoutReferralsCreatedInput, UserUncheckedCreateWithoutReferralsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferralsReceivedInput = {
    create?: XOR<UserCreateWithoutReferralsReceivedInput, UserUncheckedCreateWithoutReferralsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReferralTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReferralType
  }

  export type UserUpdateOneRequiredWithoutReferralsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutReferralsCreatedInput, UserUncheckedCreateWithoutReferralsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsCreatedInput
    upsert?: UserUpsertWithoutReferralsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsCreatedInput, UserUpdateWithoutReferralsCreatedInput>, UserUncheckedUpdateWithoutReferralsCreatedInput>
  }

  export type UserUpdateOneRequiredWithoutReferralsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReferralsReceivedInput, UserUncheckedCreateWithoutReferralsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsReceivedInput
    upsert?: UserUpsertWithoutReferralsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsReceivedInput, UserUpdateWithoutReferralsReceivedInput>, UserUncheckedUpdateWithoutReferralsReceivedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserMembershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMembershipType | EnumUserMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserMembershipType[] | ListEnumUserMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserMembershipType[] | ListEnumUserMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserMembershipTypeFilter<$PrismaModel> | $Enums.UserMembershipType
  }

  export type NestedEnumUserMembershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMembershipType | EnumUserMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserMembershipType[] | ListEnumUserMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserMembershipType[] | ListEnumUserMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserMembershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserMembershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserMembershipTypeFilter<$PrismaModel>
    _max?: NestedEnumUserMembershipTypeFilter<$PrismaModel>
  }

  export type NestedEnumReferralTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralType | EnumReferralTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralTypeFilter<$PrismaModel> | $Enums.ReferralType
  }

  export type NestedEnumReferralTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferralType | EnumReferralTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferralType[] | ListEnumReferralTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferralTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReferralType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferralTypeFilter<$PrismaModel>
    _max?: NestedEnumReferralTypeFilter<$PrismaModel>
  }

  export type AdministratorCreateWithoutChildAdminsInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    parentAdmin?: AdministratorCreateNestedOneWithoutChildAdminsInput
    masterFranchises?: MasterFranchiseCreateNestedManyWithoutAdminInput
    superFranchises?: SuperFranchiseCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseCreateNestedManyWithoutAdminInput
  }

  export type AdministratorUncheckedCreateWithoutChildAdminsInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    parentAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    masterFranchises?: MasterFranchiseUncheckedCreateNestedManyWithoutAdminInput
    superFranchises?: SuperFranchiseUncheckedCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdministratorCreateOrConnectWithoutChildAdminsInput = {
    where: AdministratorWhereUniqueInput
    create: XOR<AdministratorCreateWithoutChildAdminsInput, AdministratorUncheckedCreateWithoutChildAdminsInput>
  }

  export type AdministratorCreateWithoutParentAdminInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    childAdmins?: AdministratorCreateNestedManyWithoutParentAdminInput
    masterFranchises?: MasterFranchiseCreateNestedManyWithoutAdminInput
    superFranchises?: SuperFranchiseCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseCreateNestedManyWithoutAdminInput
  }

  export type AdministratorUncheckedCreateWithoutParentAdminInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    childAdmins?: AdministratorUncheckedCreateNestedManyWithoutParentAdminInput
    masterFranchises?: MasterFranchiseUncheckedCreateNestedManyWithoutAdminInput
    superFranchises?: SuperFranchiseUncheckedCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdministratorCreateOrConnectWithoutParentAdminInput = {
    where: AdministratorWhereUniqueInput
    create: XOR<AdministratorCreateWithoutParentAdminInput, AdministratorUncheckedCreateWithoutParentAdminInput>
  }

  export type AdministratorCreateManyParentAdminInputEnvelope = {
    data: AdministratorCreateManyParentAdminInput | AdministratorCreateManyParentAdminInput[]
    skipDuplicates?: boolean
  }

  export type MasterFranchiseCreateWithoutAdminInput = {
    id?: string
    name: string
    countries?: MasterFranchiseCreatecountriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    superFranchises?: SuperFranchiseCreateNestedManyWithoutMasterFranchiseInput
  }

  export type MasterFranchiseUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    countries?: MasterFranchiseCreatecountriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    superFranchises?: SuperFranchiseUncheckedCreateNestedManyWithoutMasterFranchiseInput
  }

  export type MasterFranchiseCreateOrConnectWithoutAdminInput = {
    where: MasterFranchiseWhereUniqueInput
    create: XOR<MasterFranchiseCreateWithoutAdminInput, MasterFranchiseUncheckedCreateWithoutAdminInput>
  }

  export type MasterFranchiseCreateManyAdminInputEnvelope = {
    data: MasterFranchiseCreateManyAdminInput | MasterFranchiseCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type SuperFranchiseCreateWithoutAdminInput = {
    id?: string
    name: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    masterFranchise: MasterFranchiseCreateNestedOneWithoutSuperFranchisesInput
    regionalFranchises?: RegionalFranchiseCreateNestedManyWithoutSuperFranchiseInput
  }

  export type SuperFranchiseUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    country: string
    masterFranchiseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    regionalFranchises?: RegionalFranchiseUncheckedCreateNestedManyWithoutSuperFranchiseInput
  }

  export type SuperFranchiseCreateOrConnectWithoutAdminInput = {
    where: SuperFranchiseWhereUniqueInput
    create: XOR<SuperFranchiseCreateWithoutAdminInput, SuperFranchiseUncheckedCreateWithoutAdminInput>
  }

  export type SuperFranchiseCreateManyAdminInputEnvelope = {
    data: SuperFranchiseCreateManyAdminInput | SuperFranchiseCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type RegionalFranchiseCreateWithoutAdminInput = {
    id?: string
    name: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    superFranchise: SuperFranchiseCreateNestedOneWithoutRegionalFranchisesInput
    chapters?: ChapterCreateNestedManyWithoutRegionalFranchiseInput
  }

  export type RegionalFranchiseUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    state: string
    superFranchiseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutRegionalFranchiseInput
  }

  export type RegionalFranchiseCreateOrConnectWithoutAdminInput = {
    where: RegionalFranchiseWhereUniqueInput
    create: XOR<RegionalFranchiseCreateWithoutAdminInput, RegionalFranchiseUncheckedCreateWithoutAdminInput>
  }

  export type RegionalFranchiseCreateManyAdminInputEnvelope = {
    data: RegionalFranchiseCreateManyAdminInput | RegionalFranchiseCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AdministratorUpsertWithoutChildAdminsInput = {
    update: XOR<AdministratorUpdateWithoutChildAdminsInput, AdministratorUncheckedUpdateWithoutChildAdminsInput>
    create: XOR<AdministratorCreateWithoutChildAdminsInput, AdministratorUncheckedCreateWithoutChildAdminsInput>
    where?: AdministratorWhereInput
  }

  export type AdministratorUpdateToOneWithWhereWithoutChildAdminsInput = {
    where?: AdministratorWhereInput
    data: XOR<AdministratorUpdateWithoutChildAdminsInput, AdministratorUncheckedUpdateWithoutChildAdminsInput>
  }

  export type AdministratorUpdateWithoutChildAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentAdmin?: AdministratorUpdateOneWithoutChildAdminsNestedInput
    masterFranchises?: MasterFranchiseUpdateManyWithoutAdminNestedInput
    superFranchises?: SuperFranchiseUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorUncheckedUpdateWithoutChildAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    parentAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterFranchises?: MasterFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    superFranchises?: SuperFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorUpsertWithWhereUniqueWithoutParentAdminInput = {
    where: AdministratorWhereUniqueInput
    update: XOR<AdministratorUpdateWithoutParentAdminInput, AdministratorUncheckedUpdateWithoutParentAdminInput>
    create: XOR<AdministratorCreateWithoutParentAdminInput, AdministratorUncheckedCreateWithoutParentAdminInput>
  }

  export type AdministratorUpdateWithWhereUniqueWithoutParentAdminInput = {
    where: AdministratorWhereUniqueInput
    data: XOR<AdministratorUpdateWithoutParentAdminInput, AdministratorUncheckedUpdateWithoutParentAdminInput>
  }

  export type AdministratorUpdateManyWithWhereWithoutParentAdminInput = {
    where: AdministratorScalarWhereInput
    data: XOR<AdministratorUpdateManyMutationInput, AdministratorUncheckedUpdateManyWithoutParentAdminInput>
  }

  export type AdministratorScalarWhereInput = {
    AND?: AdministratorScalarWhereInput | AdministratorScalarWhereInput[]
    OR?: AdministratorScalarWhereInput[]
    NOT?: AdministratorScalarWhereInput | AdministratorScalarWhereInput[]
    id?: StringFilter<"Administrator"> | string
    email?: StringFilter<"Administrator"> | string
    emailVerified?: BoolFilter<"Administrator"> | boolean
    phone?: StringFilter<"Administrator"> | string
    phoneVerifie?: BoolFilter<"Administrator"> | boolean
    password?: StringFilter<"Administrator"> | string
    name?: StringFilter<"Administrator"> | string
    role?: EnumAdminRoleFilter<"Administrator"> | $Enums.AdminRole
    parentAdminId?: StringNullableFilter<"Administrator"> | string | null
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeFilter<"Administrator"> | Date | string
  }

  export type MasterFranchiseUpsertWithWhereUniqueWithoutAdminInput = {
    where: MasterFranchiseWhereUniqueInput
    update: XOR<MasterFranchiseUpdateWithoutAdminInput, MasterFranchiseUncheckedUpdateWithoutAdminInput>
    create: XOR<MasterFranchiseCreateWithoutAdminInput, MasterFranchiseUncheckedCreateWithoutAdminInput>
  }

  export type MasterFranchiseUpdateWithWhereUniqueWithoutAdminInput = {
    where: MasterFranchiseWhereUniqueInput
    data: XOR<MasterFranchiseUpdateWithoutAdminInput, MasterFranchiseUncheckedUpdateWithoutAdminInput>
  }

  export type MasterFranchiseUpdateManyWithWhereWithoutAdminInput = {
    where: MasterFranchiseScalarWhereInput
    data: XOR<MasterFranchiseUpdateManyMutationInput, MasterFranchiseUncheckedUpdateManyWithoutAdminInput>
  }

  export type MasterFranchiseScalarWhereInput = {
    AND?: MasterFranchiseScalarWhereInput | MasterFranchiseScalarWhereInput[]
    OR?: MasterFranchiseScalarWhereInput[]
    NOT?: MasterFranchiseScalarWhereInput | MasterFranchiseScalarWhereInput[]
    id?: StringFilter<"MasterFranchise"> | string
    name?: StringFilter<"MasterFranchise"> | string
    countries?: StringNullableListFilter<"MasterFranchise">
    adminId?: StringFilter<"MasterFranchise"> | string
    createdAt?: DateTimeFilter<"MasterFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"MasterFranchise"> | Date | string
  }

  export type SuperFranchiseUpsertWithWhereUniqueWithoutAdminInput = {
    where: SuperFranchiseWhereUniqueInput
    update: XOR<SuperFranchiseUpdateWithoutAdminInput, SuperFranchiseUncheckedUpdateWithoutAdminInput>
    create: XOR<SuperFranchiseCreateWithoutAdminInput, SuperFranchiseUncheckedCreateWithoutAdminInput>
  }

  export type SuperFranchiseUpdateWithWhereUniqueWithoutAdminInput = {
    where: SuperFranchiseWhereUniqueInput
    data: XOR<SuperFranchiseUpdateWithoutAdminInput, SuperFranchiseUncheckedUpdateWithoutAdminInput>
  }

  export type SuperFranchiseUpdateManyWithWhereWithoutAdminInput = {
    where: SuperFranchiseScalarWhereInput
    data: XOR<SuperFranchiseUpdateManyMutationInput, SuperFranchiseUncheckedUpdateManyWithoutAdminInput>
  }

  export type SuperFranchiseScalarWhereInput = {
    AND?: SuperFranchiseScalarWhereInput | SuperFranchiseScalarWhereInput[]
    OR?: SuperFranchiseScalarWhereInput[]
    NOT?: SuperFranchiseScalarWhereInput | SuperFranchiseScalarWhereInput[]
    id?: StringFilter<"SuperFranchise"> | string
    name?: StringFilter<"SuperFranchise"> | string
    country?: StringFilter<"SuperFranchise"> | string
    masterFranchiseId?: StringFilter<"SuperFranchise"> | string
    adminId?: StringFilter<"SuperFranchise"> | string
    createdAt?: DateTimeFilter<"SuperFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"SuperFranchise"> | Date | string
  }

  export type RegionalFranchiseUpsertWithWhereUniqueWithoutAdminInput = {
    where: RegionalFranchiseWhereUniqueInput
    update: XOR<RegionalFranchiseUpdateWithoutAdminInput, RegionalFranchiseUncheckedUpdateWithoutAdminInput>
    create: XOR<RegionalFranchiseCreateWithoutAdminInput, RegionalFranchiseUncheckedCreateWithoutAdminInput>
  }

  export type RegionalFranchiseUpdateWithWhereUniqueWithoutAdminInput = {
    where: RegionalFranchiseWhereUniqueInput
    data: XOR<RegionalFranchiseUpdateWithoutAdminInput, RegionalFranchiseUncheckedUpdateWithoutAdminInput>
  }

  export type RegionalFranchiseUpdateManyWithWhereWithoutAdminInput = {
    where: RegionalFranchiseScalarWhereInput
    data: XOR<RegionalFranchiseUpdateManyMutationInput, RegionalFranchiseUncheckedUpdateManyWithoutAdminInput>
  }

  export type RegionalFranchiseScalarWhereInput = {
    AND?: RegionalFranchiseScalarWhereInput | RegionalFranchiseScalarWhereInput[]
    OR?: RegionalFranchiseScalarWhereInput[]
    NOT?: RegionalFranchiseScalarWhereInput | RegionalFranchiseScalarWhereInput[]
    id?: StringFilter<"RegionalFranchise"> | string
    name?: StringFilter<"RegionalFranchise"> | string
    state?: StringFilter<"RegionalFranchise"> | string
    superFranchiseId?: StringFilter<"RegionalFranchise"> | string
    adminId?: StringFilter<"RegionalFranchise"> | string
    createdAt?: DateTimeFilter<"RegionalFranchise"> | Date | string
    updatedAt?: DateTimeFilter<"RegionalFranchise"> | Date | string
  }

  export type AdministratorCreateWithoutMasterFranchisesInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    parentAdmin?: AdministratorCreateNestedOneWithoutChildAdminsInput
    childAdmins?: AdministratorCreateNestedManyWithoutParentAdminInput
    superFranchises?: SuperFranchiseCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseCreateNestedManyWithoutAdminInput
  }

  export type AdministratorUncheckedCreateWithoutMasterFranchisesInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    parentAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childAdmins?: AdministratorUncheckedCreateNestedManyWithoutParentAdminInput
    superFranchises?: SuperFranchiseUncheckedCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdministratorCreateOrConnectWithoutMasterFranchisesInput = {
    where: AdministratorWhereUniqueInput
    create: XOR<AdministratorCreateWithoutMasterFranchisesInput, AdministratorUncheckedCreateWithoutMasterFranchisesInput>
  }

  export type SuperFranchiseCreateWithoutMasterFranchiseInput = {
    id?: string
    name: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdministratorCreateNestedOneWithoutSuperFranchisesInput
    regionalFranchises?: RegionalFranchiseCreateNestedManyWithoutSuperFranchiseInput
  }

  export type SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput = {
    id?: string
    name: string
    country: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    regionalFranchises?: RegionalFranchiseUncheckedCreateNestedManyWithoutSuperFranchiseInput
  }

  export type SuperFranchiseCreateOrConnectWithoutMasterFranchiseInput = {
    where: SuperFranchiseWhereUniqueInput
    create: XOR<SuperFranchiseCreateWithoutMasterFranchiseInput, SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput>
  }

  export type SuperFranchiseCreateManyMasterFranchiseInputEnvelope = {
    data: SuperFranchiseCreateManyMasterFranchiseInput | SuperFranchiseCreateManyMasterFranchiseInput[]
    skipDuplicates?: boolean
  }

  export type AdministratorUpsertWithoutMasterFranchisesInput = {
    update: XOR<AdministratorUpdateWithoutMasterFranchisesInput, AdministratorUncheckedUpdateWithoutMasterFranchisesInput>
    create: XOR<AdministratorCreateWithoutMasterFranchisesInput, AdministratorUncheckedCreateWithoutMasterFranchisesInput>
    where?: AdministratorWhereInput
  }

  export type AdministratorUpdateToOneWithWhereWithoutMasterFranchisesInput = {
    where?: AdministratorWhereInput
    data: XOR<AdministratorUpdateWithoutMasterFranchisesInput, AdministratorUncheckedUpdateWithoutMasterFranchisesInput>
  }

  export type AdministratorUpdateWithoutMasterFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentAdmin?: AdministratorUpdateOneWithoutChildAdminsNestedInput
    childAdmins?: AdministratorUpdateManyWithoutParentAdminNestedInput
    superFranchises?: SuperFranchiseUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorUncheckedUpdateWithoutMasterFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    parentAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childAdmins?: AdministratorUncheckedUpdateManyWithoutParentAdminNestedInput
    superFranchises?: SuperFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type SuperFranchiseUpsertWithWhereUniqueWithoutMasterFranchiseInput = {
    where: SuperFranchiseWhereUniqueInput
    update: XOR<SuperFranchiseUpdateWithoutMasterFranchiseInput, SuperFranchiseUncheckedUpdateWithoutMasterFranchiseInput>
    create: XOR<SuperFranchiseCreateWithoutMasterFranchiseInput, SuperFranchiseUncheckedCreateWithoutMasterFranchiseInput>
  }

  export type SuperFranchiseUpdateWithWhereUniqueWithoutMasterFranchiseInput = {
    where: SuperFranchiseWhereUniqueInput
    data: XOR<SuperFranchiseUpdateWithoutMasterFranchiseInput, SuperFranchiseUncheckedUpdateWithoutMasterFranchiseInput>
  }

  export type SuperFranchiseUpdateManyWithWhereWithoutMasterFranchiseInput = {
    where: SuperFranchiseScalarWhereInput
    data: XOR<SuperFranchiseUpdateManyMutationInput, SuperFranchiseUncheckedUpdateManyWithoutMasterFranchiseInput>
  }

  export type MasterFranchiseCreateWithoutSuperFranchisesInput = {
    id?: string
    name: string
    countries?: MasterFranchiseCreatecountriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdministratorCreateNestedOneWithoutMasterFranchisesInput
  }

  export type MasterFranchiseUncheckedCreateWithoutSuperFranchisesInput = {
    id?: string
    name: string
    countries?: MasterFranchiseCreatecountriesInput | string[]
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterFranchiseCreateOrConnectWithoutSuperFranchisesInput = {
    where: MasterFranchiseWhereUniqueInput
    create: XOR<MasterFranchiseCreateWithoutSuperFranchisesInput, MasterFranchiseUncheckedCreateWithoutSuperFranchisesInput>
  }

  export type AdministratorCreateWithoutSuperFranchisesInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    parentAdmin?: AdministratorCreateNestedOneWithoutChildAdminsInput
    childAdmins?: AdministratorCreateNestedManyWithoutParentAdminInput
    masterFranchises?: MasterFranchiseCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseCreateNestedManyWithoutAdminInput
  }

  export type AdministratorUncheckedCreateWithoutSuperFranchisesInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    parentAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childAdmins?: AdministratorUncheckedCreateNestedManyWithoutParentAdminInput
    masterFranchises?: MasterFranchiseUncheckedCreateNestedManyWithoutAdminInput
    regionalFranchises?: RegionalFranchiseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdministratorCreateOrConnectWithoutSuperFranchisesInput = {
    where: AdministratorWhereUniqueInput
    create: XOR<AdministratorCreateWithoutSuperFranchisesInput, AdministratorUncheckedCreateWithoutSuperFranchisesInput>
  }

  export type RegionalFranchiseCreateWithoutSuperFranchiseInput = {
    id?: string
    name: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdministratorCreateNestedOneWithoutRegionalFranchisesInput
    chapters?: ChapterCreateNestedManyWithoutRegionalFranchiseInput
  }

  export type RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput = {
    id?: string
    name: string
    state: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutRegionalFranchiseInput
  }

  export type RegionalFranchiseCreateOrConnectWithoutSuperFranchiseInput = {
    where: RegionalFranchiseWhereUniqueInput
    create: XOR<RegionalFranchiseCreateWithoutSuperFranchiseInput, RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput>
  }

  export type RegionalFranchiseCreateManySuperFranchiseInputEnvelope = {
    data: RegionalFranchiseCreateManySuperFranchiseInput | RegionalFranchiseCreateManySuperFranchiseInput[]
    skipDuplicates?: boolean
  }

  export type MasterFranchiseUpsertWithoutSuperFranchisesInput = {
    update: XOR<MasterFranchiseUpdateWithoutSuperFranchisesInput, MasterFranchiseUncheckedUpdateWithoutSuperFranchisesInput>
    create: XOR<MasterFranchiseCreateWithoutSuperFranchisesInput, MasterFranchiseUncheckedCreateWithoutSuperFranchisesInput>
    where?: MasterFranchiseWhereInput
  }

  export type MasterFranchiseUpdateToOneWithWhereWithoutSuperFranchisesInput = {
    where?: MasterFranchiseWhereInput
    data: XOR<MasterFranchiseUpdateWithoutSuperFranchisesInput, MasterFranchiseUncheckedUpdateWithoutSuperFranchisesInput>
  }

  export type MasterFranchiseUpdateWithoutSuperFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdministratorUpdateOneRequiredWithoutMasterFranchisesNestedInput
  }

  export type MasterFranchiseUncheckedUpdateWithoutSuperFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUpsertWithoutSuperFranchisesInput = {
    update: XOR<AdministratorUpdateWithoutSuperFranchisesInput, AdministratorUncheckedUpdateWithoutSuperFranchisesInput>
    create: XOR<AdministratorCreateWithoutSuperFranchisesInput, AdministratorUncheckedCreateWithoutSuperFranchisesInput>
    where?: AdministratorWhereInput
  }

  export type AdministratorUpdateToOneWithWhereWithoutSuperFranchisesInput = {
    where?: AdministratorWhereInput
    data: XOR<AdministratorUpdateWithoutSuperFranchisesInput, AdministratorUncheckedUpdateWithoutSuperFranchisesInput>
  }

  export type AdministratorUpdateWithoutSuperFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentAdmin?: AdministratorUpdateOneWithoutChildAdminsNestedInput
    childAdmins?: AdministratorUpdateManyWithoutParentAdminNestedInput
    masterFranchises?: MasterFranchiseUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorUncheckedUpdateWithoutSuperFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    parentAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childAdmins?: AdministratorUncheckedUpdateManyWithoutParentAdminNestedInput
    masterFranchises?: MasterFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type RegionalFranchiseUpsertWithWhereUniqueWithoutSuperFranchiseInput = {
    where: RegionalFranchiseWhereUniqueInput
    update: XOR<RegionalFranchiseUpdateWithoutSuperFranchiseInput, RegionalFranchiseUncheckedUpdateWithoutSuperFranchiseInput>
    create: XOR<RegionalFranchiseCreateWithoutSuperFranchiseInput, RegionalFranchiseUncheckedCreateWithoutSuperFranchiseInput>
  }

  export type RegionalFranchiseUpdateWithWhereUniqueWithoutSuperFranchiseInput = {
    where: RegionalFranchiseWhereUniqueInput
    data: XOR<RegionalFranchiseUpdateWithoutSuperFranchiseInput, RegionalFranchiseUncheckedUpdateWithoutSuperFranchiseInput>
  }

  export type RegionalFranchiseUpdateManyWithWhereWithoutSuperFranchiseInput = {
    where: RegionalFranchiseScalarWhereInput
    data: XOR<RegionalFranchiseUpdateManyMutationInput, RegionalFranchiseUncheckedUpdateManyWithoutSuperFranchiseInput>
  }

  export type SuperFranchiseCreateWithoutRegionalFranchisesInput = {
    id?: string
    name: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    masterFranchise: MasterFranchiseCreateNestedOneWithoutSuperFranchisesInput
    admin: AdministratorCreateNestedOneWithoutSuperFranchisesInput
  }

  export type SuperFranchiseUncheckedCreateWithoutRegionalFranchisesInput = {
    id?: string
    name: string
    country: string
    masterFranchiseId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperFranchiseCreateOrConnectWithoutRegionalFranchisesInput = {
    where: SuperFranchiseWhereUniqueInput
    create: XOR<SuperFranchiseCreateWithoutRegionalFranchisesInput, SuperFranchiseUncheckedCreateWithoutRegionalFranchisesInput>
  }

  export type AdministratorCreateWithoutRegionalFranchisesInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
    parentAdmin?: AdministratorCreateNestedOneWithoutChildAdminsInput
    childAdmins?: AdministratorCreateNestedManyWithoutParentAdminInput
    masterFranchises?: MasterFranchiseCreateNestedManyWithoutAdminInput
    superFranchises?: SuperFranchiseCreateNestedManyWithoutAdminInput
  }

  export type AdministratorUncheckedCreateWithoutRegionalFranchisesInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    parentAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childAdmins?: AdministratorUncheckedCreateNestedManyWithoutParentAdminInput
    masterFranchises?: MasterFranchiseUncheckedCreateNestedManyWithoutAdminInput
    superFranchises?: SuperFranchiseUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdministratorCreateOrConnectWithoutRegionalFranchisesInput = {
    where: AdministratorWhereUniqueInput
    create: XOR<AdministratorCreateWithoutRegionalFranchisesInput, AdministratorUncheckedCreateWithoutRegionalFranchisesInput>
  }

  export type ChapterCreateWithoutRegionalFranchiseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapterLeader?: UserCreateNestedOneWithoutLeadingChapterInput
    clubs?: ClubCreateNestedManyWithoutChapterInput
    events?: ChapterEventCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutRegionalFranchiseInput = {
    id?: string
    name: string
    chapterLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clubs?: ClubUncheckedCreateNestedManyWithoutChapterInput
    events?: ChapterEventUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutRegionalFranchiseInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutRegionalFranchiseInput, ChapterUncheckedCreateWithoutRegionalFranchiseInput>
  }

  export type ChapterCreateManyRegionalFranchiseInputEnvelope = {
    data: ChapterCreateManyRegionalFranchiseInput | ChapterCreateManyRegionalFranchiseInput[]
    skipDuplicates?: boolean
  }

  export type SuperFranchiseUpsertWithoutRegionalFranchisesInput = {
    update: XOR<SuperFranchiseUpdateWithoutRegionalFranchisesInput, SuperFranchiseUncheckedUpdateWithoutRegionalFranchisesInput>
    create: XOR<SuperFranchiseCreateWithoutRegionalFranchisesInput, SuperFranchiseUncheckedCreateWithoutRegionalFranchisesInput>
    where?: SuperFranchiseWhereInput
  }

  export type SuperFranchiseUpdateToOneWithWhereWithoutRegionalFranchisesInput = {
    where?: SuperFranchiseWhereInput
    data: XOR<SuperFranchiseUpdateWithoutRegionalFranchisesInput, SuperFranchiseUncheckedUpdateWithoutRegionalFranchisesInput>
  }

  export type SuperFranchiseUpdateWithoutRegionalFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterFranchise?: MasterFranchiseUpdateOneRequiredWithoutSuperFranchisesNestedInput
    admin?: AdministratorUpdateOneRequiredWithoutSuperFranchisesNestedInput
  }

  export type SuperFranchiseUncheckedUpdateWithoutRegionalFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    masterFranchiseId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUpsertWithoutRegionalFranchisesInput = {
    update: XOR<AdministratorUpdateWithoutRegionalFranchisesInput, AdministratorUncheckedUpdateWithoutRegionalFranchisesInput>
    create: XOR<AdministratorCreateWithoutRegionalFranchisesInput, AdministratorUncheckedCreateWithoutRegionalFranchisesInput>
    where?: AdministratorWhereInput
  }

  export type AdministratorUpdateToOneWithWhereWithoutRegionalFranchisesInput = {
    where?: AdministratorWhereInput
    data: XOR<AdministratorUpdateWithoutRegionalFranchisesInput, AdministratorUncheckedUpdateWithoutRegionalFranchisesInput>
  }

  export type AdministratorUpdateWithoutRegionalFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentAdmin?: AdministratorUpdateOneWithoutChildAdminsNestedInput
    childAdmins?: AdministratorUpdateManyWithoutParentAdminNestedInput
    masterFranchises?: MasterFranchiseUpdateManyWithoutAdminNestedInput
    superFranchises?: SuperFranchiseUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorUncheckedUpdateWithoutRegionalFranchisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    parentAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childAdmins?: AdministratorUncheckedUpdateManyWithoutParentAdminNestedInput
    masterFranchises?: MasterFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    superFranchises?: SuperFranchiseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ChapterUpsertWithWhereUniqueWithoutRegionalFranchiseInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutRegionalFranchiseInput, ChapterUncheckedUpdateWithoutRegionalFranchiseInput>
    create: XOR<ChapterCreateWithoutRegionalFranchiseInput, ChapterUncheckedCreateWithoutRegionalFranchiseInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutRegionalFranchiseInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutRegionalFranchiseInput, ChapterUncheckedUpdateWithoutRegionalFranchiseInput>
  }

  export type ChapterUpdateManyWithWhereWithoutRegionalFranchiseInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutRegionalFranchiseInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: StringFilter<"Chapter"> | string
    name?: StringFilter<"Chapter"> | string
    regionalFranchiseId?: StringFilter<"Chapter"> | string
    chapterLeaderId?: StringNullableFilter<"Chapter"> | string | null
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
  }

  export type RegionalFranchiseCreateWithoutChaptersInput = {
    id?: string
    name: string
    state: string
    createdAt?: Date | string
    updatedAt?: Date | string
    superFranchise: SuperFranchiseCreateNestedOneWithoutRegionalFranchisesInput
    admin: AdministratorCreateNestedOneWithoutRegionalFranchisesInput
  }

  export type RegionalFranchiseUncheckedCreateWithoutChaptersInput = {
    id?: string
    name: string
    state: string
    superFranchiseId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionalFranchiseCreateOrConnectWithoutChaptersInput = {
    where: RegionalFranchiseWhereUniqueInput
    create: XOR<RegionalFranchiseCreateWithoutChaptersInput, RegionalFranchiseUncheckedCreateWithoutChaptersInput>
  }

  export type UserCreateWithoutLeadingChapterInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingClub?: ClubCreateNestedOneWithoutClubLeaderInput
    clubs?: ClubCreateNestedManyWithoutMembersInput
    referralsCreated?: ReferralCreateNestedManyWithoutCreatorInput
    referralsReceived?: ReferralCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutLeadingChapterInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingClub?: ClubUncheckedCreateNestedOneWithoutClubLeaderInput
    clubs?: ClubUncheckedCreateNestedManyWithoutMembersInput
    referralsCreated?: ReferralUncheckedCreateNestedManyWithoutCreatorInput
    referralsReceived?: ReferralUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutLeadingChapterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeadingChapterInput, UserUncheckedCreateWithoutLeadingChapterInput>
  }

  export type ClubCreateWithoutChapterInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clubLeader?: UserCreateNestedOneWithoutLeadingClubInput
    members?: UserCreateNestedManyWithoutClubsInput
    events?: ClubEventCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutChapterInput = {
    id?: string
    name: string
    clubLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutClubsInput
    events?: ClubEventUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutChapterInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutChapterInput, ClubUncheckedCreateWithoutChapterInput>
  }

  export type ClubCreateManyChapterInputEnvelope = {
    data: ClubCreateManyChapterInput | ClubCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type ChapterEventCreateWithoutChapterInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterEventUncheckedCreateWithoutChapterInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterEventCreateOrConnectWithoutChapterInput = {
    where: ChapterEventWhereUniqueInput
    create: XOR<ChapterEventCreateWithoutChapterInput, ChapterEventUncheckedCreateWithoutChapterInput>
  }

  export type ChapterEventCreateManyChapterInputEnvelope = {
    data: ChapterEventCreateManyChapterInput | ChapterEventCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type RegionalFranchiseUpsertWithoutChaptersInput = {
    update: XOR<RegionalFranchiseUpdateWithoutChaptersInput, RegionalFranchiseUncheckedUpdateWithoutChaptersInput>
    create: XOR<RegionalFranchiseCreateWithoutChaptersInput, RegionalFranchiseUncheckedCreateWithoutChaptersInput>
    where?: RegionalFranchiseWhereInput
  }

  export type RegionalFranchiseUpdateToOneWithWhereWithoutChaptersInput = {
    where?: RegionalFranchiseWhereInput
    data: XOR<RegionalFranchiseUpdateWithoutChaptersInput, RegionalFranchiseUncheckedUpdateWithoutChaptersInput>
  }

  export type RegionalFranchiseUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superFranchise?: SuperFranchiseUpdateOneRequiredWithoutRegionalFranchisesNestedInput
    admin?: AdministratorUpdateOneRequiredWithoutRegionalFranchisesNestedInput
  }

  export type RegionalFranchiseUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    superFranchiseId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLeadingChapterInput = {
    update: XOR<UserUpdateWithoutLeadingChapterInput, UserUncheckedUpdateWithoutLeadingChapterInput>
    create: XOR<UserCreateWithoutLeadingChapterInput, UserUncheckedCreateWithoutLeadingChapterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeadingChapterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeadingChapterInput, UserUncheckedUpdateWithoutLeadingChapterInput>
  }

  export type UserUpdateWithoutLeadingChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingClub?: ClubUpdateOneWithoutClubLeaderNestedInput
    clubs?: ClubUpdateManyWithoutMembersNestedInput
    referralsCreated?: ReferralUpdateManyWithoutCreatorNestedInput
    referralsReceived?: ReferralUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutLeadingChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingClub?: ClubUncheckedUpdateOneWithoutClubLeaderNestedInput
    clubs?: ClubUncheckedUpdateManyWithoutMembersNestedInput
    referralsCreated?: ReferralUncheckedUpdateManyWithoutCreatorNestedInput
    referralsReceived?: ReferralUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ClubUpsertWithWhereUniqueWithoutChapterInput = {
    where: ClubWhereUniqueInput
    update: XOR<ClubUpdateWithoutChapterInput, ClubUncheckedUpdateWithoutChapterInput>
    create: XOR<ClubCreateWithoutChapterInput, ClubUncheckedCreateWithoutChapterInput>
  }

  export type ClubUpdateWithWhereUniqueWithoutChapterInput = {
    where: ClubWhereUniqueInput
    data: XOR<ClubUpdateWithoutChapterInput, ClubUncheckedUpdateWithoutChapterInput>
  }

  export type ClubUpdateManyWithWhereWithoutChapterInput = {
    where: ClubScalarWhereInput
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyWithoutChapterInput>
  }

  export type ClubScalarWhereInput = {
    AND?: ClubScalarWhereInput | ClubScalarWhereInput[]
    OR?: ClubScalarWhereInput[]
    NOT?: ClubScalarWhereInput | ClubScalarWhereInput[]
    id?: StringFilter<"Club"> | string
    name?: StringFilter<"Club"> | string
    chapterId?: StringFilter<"Club"> | string
    clubLeaderId?: StringNullableFilter<"Club"> | string | null
    createdAt?: DateTimeFilter<"Club"> | Date | string
    updatedAt?: DateTimeFilter<"Club"> | Date | string
  }

  export type ChapterEventUpsertWithWhereUniqueWithoutChapterInput = {
    where: ChapterEventWhereUniqueInput
    update: XOR<ChapterEventUpdateWithoutChapterInput, ChapterEventUncheckedUpdateWithoutChapterInput>
    create: XOR<ChapterEventCreateWithoutChapterInput, ChapterEventUncheckedCreateWithoutChapterInput>
  }

  export type ChapterEventUpdateWithWhereUniqueWithoutChapterInput = {
    where: ChapterEventWhereUniqueInput
    data: XOR<ChapterEventUpdateWithoutChapterInput, ChapterEventUncheckedUpdateWithoutChapterInput>
  }

  export type ChapterEventUpdateManyWithWhereWithoutChapterInput = {
    where: ChapterEventScalarWhereInput
    data: XOR<ChapterEventUpdateManyMutationInput, ChapterEventUncheckedUpdateManyWithoutChapterInput>
  }

  export type ChapterEventScalarWhereInput = {
    AND?: ChapterEventScalarWhereInput | ChapterEventScalarWhereInput[]
    OR?: ChapterEventScalarWhereInput[]
    NOT?: ChapterEventScalarWhereInput | ChapterEventScalarWhereInput[]
    id?: StringFilter<"ChapterEvent"> | string
    title?: StringFilter<"ChapterEvent"> | string
    description?: StringFilter<"ChapterEvent"> | string
    date?: DateTimeFilter<"ChapterEvent"> | Date | string
    chapterId?: StringFilter<"ChapterEvent"> | string
    createdAt?: DateTimeFilter<"ChapterEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ChapterEvent"> | Date | string
  }

  export type ChapterCreateWithoutClubsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    regionalFranchise: RegionalFranchiseCreateNestedOneWithoutChaptersInput
    chapterLeader?: UserCreateNestedOneWithoutLeadingChapterInput
    events?: ChapterEventCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutClubsInput = {
    id?: string
    name: string
    regionalFranchiseId: string
    chapterLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: ChapterEventUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutClubsInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutClubsInput, ChapterUncheckedCreateWithoutClubsInput>
  }

  export type UserCreateWithoutLeadingClubInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterCreateNestedOneWithoutChapterLeaderInput
    clubs?: ClubCreateNestedManyWithoutMembersInput
    referralsCreated?: ReferralCreateNestedManyWithoutCreatorInput
    referralsReceived?: ReferralCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutLeadingClubInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterUncheckedCreateNestedOneWithoutChapterLeaderInput
    clubs?: ClubUncheckedCreateNestedManyWithoutMembersInput
    referralsCreated?: ReferralUncheckedCreateNestedManyWithoutCreatorInput
    referralsReceived?: ReferralUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutLeadingClubInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeadingClubInput, UserUncheckedCreateWithoutLeadingClubInput>
  }

  export type UserCreateWithoutClubsInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterCreateNestedOneWithoutChapterLeaderInput
    leadingClub?: ClubCreateNestedOneWithoutClubLeaderInput
    referralsCreated?: ReferralCreateNestedManyWithoutCreatorInput
    referralsReceived?: ReferralCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutClubsInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterUncheckedCreateNestedOneWithoutChapterLeaderInput
    leadingClub?: ClubUncheckedCreateNestedOneWithoutClubLeaderInput
    referralsCreated?: ReferralUncheckedCreateNestedManyWithoutCreatorInput
    referralsReceived?: ReferralUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutClubsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClubsInput, UserUncheckedCreateWithoutClubsInput>
  }

  export type ClubEventCreateWithoutClubInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubEventUncheckedCreateWithoutClubInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubEventCreateOrConnectWithoutClubInput = {
    where: ClubEventWhereUniqueInput
    create: XOR<ClubEventCreateWithoutClubInput, ClubEventUncheckedCreateWithoutClubInput>
  }

  export type ClubEventCreateManyClubInputEnvelope = {
    data: ClubEventCreateManyClubInput | ClubEventCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithoutClubsInput = {
    update: XOR<ChapterUpdateWithoutClubsInput, ChapterUncheckedUpdateWithoutClubsInput>
    create: XOR<ChapterCreateWithoutClubsInput, ChapterUncheckedCreateWithoutClubsInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutClubsInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutClubsInput, ChapterUncheckedUpdateWithoutClubsInput>
  }

  export type ChapterUpdateWithoutClubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionalFranchise?: RegionalFranchiseUpdateOneRequiredWithoutChaptersNestedInput
    chapterLeader?: UserUpdateOneWithoutLeadingChapterNestedInput
    events?: ChapterEventUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutClubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    regionalFranchiseId?: StringFieldUpdateOperationsInput | string
    chapterLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: ChapterEventUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type UserUpsertWithoutLeadingClubInput = {
    update: XOR<UserUpdateWithoutLeadingClubInput, UserUncheckedUpdateWithoutLeadingClubInput>
    create: XOR<UserCreateWithoutLeadingClubInput, UserUncheckedCreateWithoutLeadingClubInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeadingClubInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeadingClubInput, UserUncheckedUpdateWithoutLeadingClubInput>
  }

  export type UserUpdateWithoutLeadingClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUpdateOneWithoutChapterLeaderNestedInput
    clubs?: ClubUpdateManyWithoutMembersNestedInput
    referralsCreated?: ReferralUpdateManyWithoutCreatorNestedInput
    referralsReceived?: ReferralUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutLeadingClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUncheckedUpdateOneWithoutChapterLeaderNestedInput
    clubs?: ClubUncheckedUpdateManyWithoutMembersNestedInput
    referralsCreated?: ReferralUncheckedUpdateManyWithoutCreatorNestedInput
    referralsReceived?: ReferralUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutClubsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClubsInput, UserUncheckedUpdateWithoutClubsInput>
    create: XOR<UserCreateWithoutClubsInput, UserUncheckedCreateWithoutClubsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClubsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClubsInput, UserUncheckedUpdateWithoutClubsInput>
  }

  export type UserUpdateManyWithWhereWithoutClubsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClubsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringFilter<"User"> | string
    phoneVerified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    membershipType?: EnumUserMembershipTypeFilter<"User"> | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFilter<"User"> | Date | string
    membershipEndDate?: DateTimeFilter<"User"> | Date | string
    leadingChapterId?: StringNullableFilter<"User"> | string | null
    leadingClubId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ClubEventUpsertWithWhereUniqueWithoutClubInput = {
    where: ClubEventWhereUniqueInput
    update: XOR<ClubEventUpdateWithoutClubInput, ClubEventUncheckedUpdateWithoutClubInput>
    create: XOR<ClubEventCreateWithoutClubInput, ClubEventUncheckedCreateWithoutClubInput>
  }

  export type ClubEventUpdateWithWhereUniqueWithoutClubInput = {
    where: ClubEventWhereUniqueInput
    data: XOR<ClubEventUpdateWithoutClubInput, ClubEventUncheckedUpdateWithoutClubInput>
  }

  export type ClubEventUpdateManyWithWhereWithoutClubInput = {
    where: ClubEventScalarWhereInput
    data: XOR<ClubEventUpdateManyMutationInput, ClubEventUncheckedUpdateManyWithoutClubInput>
  }

  export type ClubEventScalarWhereInput = {
    AND?: ClubEventScalarWhereInput | ClubEventScalarWhereInput[]
    OR?: ClubEventScalarWhereInput[]
    NOT?: ClubEventScalarWhereInput | ClubEventScalarWhereInput[]
    id?: StringFilter<"ClubEvent"> | string
    title?: StringFilter<"ClubEvent"> | string
    description?: StringFilter<"ClubEvent"> | string
    date?: DateTimeFilter<"ClubEvent"> | Date | string
    clubId?: StringFilter<"ClubEvent"> | string
    createdAt?: DateTimeFilter<"ClubEvent"> | Date | string
    updatedAt?: DateTimeFilter<"ClubEvent"> | Date | string
  }

  export type ChapterCreateWithoutChapterLeaderInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    regionalFranchise: RegionalFranchiseCreateNestedOneWithoutChaptersInput
    clubs?: ClubCreateNestedManyWithoutChapterInput
    events?: ChapterEventCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutChapterLeaderInput = {
    id?: string
    name: string
    regionalFranchiseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clubs?: ClubUncheckedCreateNestedManyWithoutChapterInput
    events?: ChapterEventUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutChapterLeaderInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutChapterLeaderInput, ChapterUncheckedCreateWithoutChapterLeaderInput>
  }

  export type ClubCreateWithoutClubLeaderInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutClubsInput
    members?: UserCreateNestedManyWithoutClubsInput
    events?: ClubEventCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutClubLeaderInput = {
    id?: string
    name: string
    chapterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutClubsInput
    events?: ClubEventUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutClubLeaderInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutClubLeaderInput, ClubUncheckedCreateWithoutClubLeaderInput>
  }

  export type ClubCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutClubsInput
    clubLeader?: UserCreateNestedOneWithoutLeadingClubInput
    events?: ClubEventCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    chapterId: string
    clubLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: ClubEventUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutMembersInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput>
  }

  export type ReferralCreateWithoutCreatorInput = {
    id?: string
    type: $Enums.ReferralType
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReferralsReceivedInput
  }

  export type ReferralUncheckedCreateWithoutCreatorInput = {
    id?: string
    type: $Enums.ReferralType
    receiverId: string
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutCreatorInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutCreatorInput, ReferralUncheckedCreateWithoutCreatorInput>
  }

  export type ReferralCreateManyCreatorInputEnvelope = {
    data: ReferralCreateManyCreatorInput | ReferralCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCreateWithoutReceiverInput = {
    id?: string
    type: $Enums.ReferralType
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutReferralsCreatedInput
  }

  export type ReferralUncheckedCreateWithoutReceiverInput = {
    id?: string
    type: $Enums.ReferralType
    creatorId: string
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutReceiverInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutReceiverInput, ReferralUncheckedCreateWithoutReceiverInput>
  }

  export type ReferralCreateManyReceiverInputEnvelope = {
    data: ReferralCreateManyReceiverInput | ReferralCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithoutChapterLeaderInput = {
    update: XOR<ChapterUpdateWithoutChapterLeaderInput, ChapterUncheckedUpdateWithoutChapterLeaderInput>
    create: XOR<ChapterCreateWithoutChapterLeaderInput, ChapterUncheckedCreateWithoutChapterLeaderInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutChapterLeaderInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutChapterLeaderInput, ChapterUncheckedUpdateWithoutChapterLeaderInput>
  }

  export type ChapterUpdateWithoutChapterLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionalFranchise?: RegionalFranchiseUpdateOneRequiredWithoutChaptersNestedInput
    clubs?: ClubUpdateManyWithoutChapterNestedInput
    events?: ChapterEventUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutChapterLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    regionalFranchiseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clubs?: ClubUncheckedUpdateManyWithoutChapterNestedInput
    events?: ChapterEventUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ClubUpsertWithoutClubLeaderInput = {
    update: XOR<ClubUpdateWithoutClubLeaderInput, ClubUncheckedUpdateWithoutClubLeaderInput>
    create: XOR<ClubCreateWithoutClubLeaderInput, ClubUncheckedCreateWithoutClubLeaderInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutClubLeaderInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutClubLeaderInput, ClubUncheckedUpdateWithoutClubLeaderInput>
  }

  export type ClubUpdateWithoutClubLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutClubsNestedInput
    members?: UserUpdateManyWithoutClubsNestedInput
    events?: ClubEventUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutClubLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutClubsNestedInput
    events?: ClubEventUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubUpsertWithWhereUniqueWithoutMembersInput = {
    where: ClubWhereUniqueInput
    update: XOR<ClubUpdateWithoutMembersInput, ClubUncheckedUpdateWithoutMembersInput>
    create: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput>
  }

  export type ClubUpdateWithWhereUniqueWithoutMembersInput = {
    where: ClubWhereUniqueInput
    data: XOR<ClubUpdateWithoutMembersInput, ClubUncheckedUpdateWithoutMembersInput>
  }

  export type ClubUpdateManyWithWhereWithoutMembersInput = {
    where: ClubScalarWhereInput
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyWithoutMembersInput>
  }

  export type ReferralUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutCreatorInput, ReferralUncheckedUpdateWithoutCreatorInput>
    create: XOR<ReferralCreateWithoutCreatorInput, ReferralUncheckedCreateWithoutCreatorInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutCreatorInput, ReferralUncheckedUpdateWithoutCreatorInput>
  }

  export type ReferralUpdateManyWithWhereWithoutCreatorInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ReferralScalarWhereInput = {
    AND?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    OR?: ReferralScalarWhereInput[]
    NOT?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    id?: StringFilter<"Referral"> | string
    type?: EnumReferralTypeFilter<"Referral"> | $Enums.ReferralType
    creatorId?: StringFilter<"Referral"> | string
    receiverId?: StringFilter<"Referral"> | string
    businessDetails?: StringNullableFilter<"Referral"> | string | null
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
  }

  export type ReferralUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutReceiverInput, ReferralUncheckedUpdateWithoutReceiverInput>
    create: XOR<ReferralCreateWithoutReceiverInput, ReferralUncheckedCreateWithoutReceiverInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutReceiverInput, ReferralUncheckedUpdateWithoutReceiverInput>
  }

  export type ReferralUpdateManyWithWhereWithoutReceiverInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ChapterCreateWithoutEventsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    regionalFranchise: RegionalFranchiseCreateNestedOneWithoutChaptersInput
    chapterLeader?: UserCreateNestedOneWithoutLeadingChapterInput
    clubs?: ClubCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    regionalFranchiseId: string
    chapterLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clubs?: ClubUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutEventsInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutEventsInput, ChapterUncheckedCreateWithoutEventsInput>
  }

  export type ChapterUpsertWithoutEventsInput = {
    update: XOR<ChapterUpdateWithoutEventsInput, ChapterUncheckedUpdateWithoutEventsInput>
    create: XOR<ChapterCreateWithoutEventsInput, ChapterUncheckedCreateWithoutEventsInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutEventsInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutEventsInput, ChapterUncheckedUpdateWithoutEventsInput>
  }

  export type ChapterUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionalFranchise?: RegionalFranchiseUpdateOneRequiredWithoutChaptersNestedInput
    chapterLeader?: UserUpdateOneWithoutLeadingChapterNestedInput
    clubs?: ClubUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    regionalFranchiseId?: StringFieldUpdateOperationsInput | string
    chapterLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clubs?: ClubUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ClubCreateWithoutEventsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chapter: ChapterCreateNestedOneWithoutClubsInput
    clubLeader?: UserCreateNestedOneWithoutLeadingClubInput
    members?: UserCreateNestedManyWithoutClubsInput
  }

  export type ClubUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    chapterId: string
    clubLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutClubsInput
  }

  export type ClubCreateOrConnectWithoutEventsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutEventsInput, ClubUncheckedCreateWithoutEventsInput>
  }

  export type ClubUpsertWithoutEventsInput = {
    update: XOR<ClubUpdateWithoutEventsInput, ClubUncheckedUpdateWithoutEventsInput>
    create: XOR<ClubCreateWithoutEventsInput, ClubUncheckedCreateWithoutEventsInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutEventsInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutEventsInput, ClubUncheckedUpdateWithoutEventsInput>
  }

  export type ClubUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutClubsNestedInput
    clubLeader?: UserUpdateOneWithoutLeadingClubNestedInput
    members?: UserUpdateManyWithoutClubsNestedInput
  }

  export type ClubUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    clubLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutClubsNestedInput
  }

  export type UserCreateWithoutReferralsCreatedInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterCreateNestedOneWithoutChapterLeaderInput
    leadingClub?: ClubCreateNestedOneWithoutClubLeaderInput
    clubs?: ClubCreateNestedManyWithoutMembersInput
    referralsReceived?: ReferralCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutReferralsCreatedInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterUncheckedCreateNestedOneWithoutChapterLeaderInput
    leadingClub?: ClubUncheckedCreateNestedOneWithoutClubLeaderInput
    clubs?: ClubUncheckedCreateNestedManyWithoutMembersInput
    referralsReceived?: ReferralUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutReferralsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsCreatedInput, UserUncheckedCreateWithoutReferralsCreatedInput>
  }

  export type UserCreateWithoutReferralsReceivedInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterCreateNestedOneWithoutChapterLeaderInput
    leadingClub?: ClubCreateNestedOneWithoutClubLeaderInput
    clubs?: ClubCreateNestedManyWithoutMembersInput
    referralsCreated?: ReferralCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutReferralsReceivedInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerified?: boolean
    password: string
    name: string
    membershipType?: $Enums.UserMembershipType
    membershipStartDate?: Date | string
    membershipEndDate: Date | string
    leadingChapterId?: string | null
    leadingClubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leadingChapter?: ChapterUncheckedCreateNestedOneWithoutChapterLeaderInput
    leadingClub?: ClubUncheckedCreateNestedOneWithoutClubLeaderInput
    clubs?: ClubUncheckedCreateNestedManyWithoutMembersInput
    referralsCreated?: ReferralUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutReferralsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsReceivedInput, UserUncheckedCreateWithoutReferralsReceivedInput>
  }

  export type UserUpsertWithoutReferralsCreatedInput = {
    update: XOR<UserUpdateWithoutReferralsCreatedInput, UserUncheckedUpdateWithoutReferralsCreatedInput>
    create: XOR<UserCreateWithoutReferralsCreatedInput, UserUncheckedCreateWithoutReferralsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsCreatedInput, UserUncheckedUpdateWithoutReferralsCreatedInput>
  }

  export type UserUpdateWithoutReferralsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUpdateOneWithoutChapterLeaderNestedInput
    leadingClub?: ClubUpdateOneWithoutClubLeaderNestedInput
    clubs?: ClubUpdateManyWithoutMembersNestedInput
    referralsReceived?: ReferralUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUncheckedUpdateOneWithoutChapterLeaderNestedInput
    leadingClub?: ClubUncheckedUpdateOneWithoutClubLeaderNestedInput
    clubs?: ClubUncheckedUpdateManyWithoutMembersNestedInput
    referralsReceived?: ReferralUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReferralsReceivedInput = {
    update: XOR<UserUpdateWithoutReferralsReceivedInput, UserUncheckedUpdateWithoutReferralsReceivedInput>
    create: XOR<UserCreateWithoutReferralsReceivedInput, UserUncheckedCreateWithoutReferralsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsReceivedInput, UserUncheckedUpdateWithoutReferralsReceivedInput>
  }

  export type UserUpdateWithoutReferralsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUpdateOneWithoutChapterLeaderNestedInput
    leadingClub?: ClubUpdateOneWithoutClubLeaderNestedInput
    clubs?: ClubUpdateManyWithoutMembersNestedInput
    referralsCreated?: ReferralUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUncheckedUpdateOneWithoutChapterLeaderNestedInput
    leadingClub?: ClubUncheckedUpdateOneWithoutClubLeaderNestedInput
    clubs?: ClubUncheckedUpdateManyWithoutMembersNestedInput
    referralsCreated?: ReferralUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AdministratorCreateManyParentAdminInput = {
    id?: string
    email: string
    emailVerified?: boolean
    phone: string
    phoneVerifie?: boolean
    password: string
    name: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterFranchiseCreateManyAdminInput = {
    id?: string
    name: string
    countries?: MasterFranchiseCreatecountriesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperFranchiseCreateManyAdminInput = {
    id?: string
    name: string
    country: string
    masterFranchiseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionalFranchiseCreateManyAdminInput = {
    id?: string
    name: string
    state: string
    superFranchiseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUpdateWithoutParentAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childAdmins?: AdministratorUpdateManyWithoutParentAdminNestedInput
    masterFranchises?: MasterFranchiseUpdateManyWithoutAdminNestedInput
    superFranchises?: SuperFranchiseUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorUncheckedUpdateWithoutParentAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childAdmins?: AdministratorUncheckedUpdateManyWithoutParentAdminNestedInput
    masterFranchises?: MasterFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    superFranchises?: SuperFranchiseUncheckedUpdateManyWithoutAdminNestedInput
    regionalFranchises?: RegionalFranchiseUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdministratorUncheckedUpdateManyWithoutParentAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerifie?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterFranchiseUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superFranchises?: SuperFranchiseUpdateManyWithoutMasterFranchiseNestedInput
  }

  export type MasterFranchiseUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superFranchises?: SuperFranchiseUncheckedUpdateManyWithoutMasterFranchiseNestedInput
  }

  export type MasterFranchiseUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countries?: MasterFranchiseUpdatecountriesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperFranchiseUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterFranchise?: MasterFranchiseUpdateOneRequiredWithoutSuperFranchisesNestedInput
    regionalFranchises?: RegionalFranchiseUpdateManyWithoutSuperFranchiseNestedInput
  }

  export type SuperFranchiseUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    masterFranchiseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionalFranchises?: RegionalFranchiseUncheckedUpdateManyWithoutSuperFranchiseNestedInput
  }

  export type SuperFranchiseUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    masterFranchiseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionalFranchiseUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superFranchise?: SuperFranchiseUpdateOneRequiredWithoutRegionalFranchisesNestedInput
    chapters?: ChapterUpdateManyWithoutRegionalFranchiseNestedInput
  }

  export type RegionalFranchiseUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    superFranchiseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutRegionalFranchiseNestedInput
  }

  export type RegionalFranchiseUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    superFranchiseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperFranchiseCreateManyMasterFranchiseInput = {
    id?: string
    name: string
    country: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperFranchiseUpdateWithoutMasterFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdministratorUpdateOneRequiredWithoutSuperFranchisesNestedInput
    regionalFranchises?: RegionalFranchiseUpdateManyWithoutSuperFranchiseNestedInput
  }

  export type SuperFranchiseUncheckedUpdateWithoutMasterFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionalFranchises?: RegionalFranchiseUncheckedUpdateManyWithoutSuperFranchiseNestedInput
  }

  export type SuperFranchiseUncheckedUpdateManyWithoutMasterFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionalFranchiseCreateManySuperFranchiseInput = {
    id?: string
    name: string
    state: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionalFranchiseUpdateWithoutSuperFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdministratorUpdateOneRequiredWithoutRegionalFranchisesNestedInput
    chapters?: ChapterUpdateManyWithoutRegionalFranchiseNestedInput
  }

  export type RegionalFranchiseUncheckedUpdateWithoutSuperFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutRegionalFranchiseNestedInput
  }

  export type RegionalFranchiseUncheckedUpdateManyWithoutSuperFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateManyRegionalFranchiseInput = {
    id?: string
    name: string
    chapterLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUpdateWithoutRegionalFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterLeader?: UserUpdateOneWithoutLeadingChapterNestedInput
    clubs?: ClubUpdateManyWithoutChapterNestedInput
    events?: ChapterEventUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutRegionalFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chapterLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clubs?: ClubUncheckedUpdateManyWithoutChapterNestedInput
    events?: ChapterEventUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutRegionalFranchiseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chapterLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubCreateManyChapterInput = {
    id?: string
    name: string
    clubLeaderId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterEventCreateManyChapterInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clubLeader?: UserUpdateOneWithoutLeadingClubNestedInput
    members?: UserUpdateManyWithoutClubsNestedInput
    events?: ClubEventUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clubLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutClubsNestedInput
    events?: ClubEventUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clubLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterEventUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterEventUncheckedUpdateWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterEventUncheckedUpdateManyWithoutChapterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubEventCreateManyClubInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutClubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUpdateOneWithoutChapterLeaderNestedInput
    leadingClub?: ClubUpdateOneWithoutClubLeaderNestedInput
    referralsCreated?: ReferralUpdateManyWithoutCreatorNestedInput
    referralsReceived?: ReferralUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutClubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapter?: ChapterUncheckedUpdateOneWithoutChapterLeaderNestedInput
    leadingClub?: ClubUncheckedUpdateOneWithoutClubLeaderNestedInput
    referralsCreated?: ReferralUncheckedUpdateManyWithoutCreatorNestedInput
    referralsReceived?: ReferralUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumUserMembershipTypeFieldUpdateOperationsInput | $Enums.UserMembershipType
    membershipStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    membershipEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leadingChapterId?: NullableStringFieldUpdateOperationsInput | string | null
    leadingClubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubEventUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubEventUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubEventUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateManyCreatorInput = {
    id?: string
    type: $Enums.ReferralType
    receiverId: string
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralCreateManyReceiverInput = {
    id?: string
    type: $Enums.ReferralType
    creatorId: string
    businessDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutClubsNestedInput
    clubLeader?: UserUpdateOneWithoutLeadingClubNestedInput
    events?: ClubEventUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    clubLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: ClubEventUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chapterId?: StringFieldUpdateOperationsInput | string
    clubLeaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReferralsReceivedNestedInput
  }

  export type ReferralUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    receiverId?: StringFieldUpdateOperationsInput | string
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    receiverId?: StringFieldUpdateOperationsInput | string
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutReferralsCreatedNestedInput
  }

  export type ReferralUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    creatorId?: StringFieldUpdateOperationsInput | string
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumReferralTypeFieldUpdateOperationsInput | $Enums.ReferralType
    creatorId?: StringFieldUpdateOperationsInput | string
    businessDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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