
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdministratorScalarFieldEnum = {
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

exports.Prisma.MasterFranchiseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  countries: 'countries',
  adminId: 'adminId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SuperFranchiseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  country: 'country',
  masterFranchiseId: 'masterFranchiseId',
  adminId: 'adminId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RegionalFranchiseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  state: 'state',
  superFranchiseId: 'superFranchiseId',
  adminId: 'adminId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ChapterScalarFieldEnum = {
  id: 'id',
  name: 'name',
  regionalFranchiseId: 'regionalFranchiseId',
  chapterLeaderId: 'chapterLeaderId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClubScalarFieldEnum = {
  id: 'id',
  name: 'name',
  chapterId: 'chapterId',
  clubLeaderId: 'clubLeaderId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.ChapterEventScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  date: 'date',
  chapterId: 'chapterId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClubEventScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  date: 'date',
  clubId: 'clubId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReferralScalarFieldEnum = {
  id: 'id',
  type: 'type',
  creatorId: 'creatorId',
  receiverId: 'receiverId',
  businessDetails: 'businessDetails',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GmailVerificationCodeScalarFieldEnum = {
  id: 'id',
  email: 'email',
  code: 'code',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.AdminRole = exports.$Enums.AdminRole = {
  ADMIN: 'ADMIN',
  MASTER_ADMIN: 'MASTER_ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  REGIONAL_ADMIN: 'REGIONAL_ADMIN'
};

exports.UserMembershipType = exports.$Enums.UserMembershipType = {
  ONE_CLUB: 'ONE_CLUB',
  VIP: 'VIP',
  GOLD: 'GOLD'
};

exports.ReferralType = exports.$Enums.ReferralType = {
  SELF: 'SELF',
  THIRD_PARTY: 'THIRD_PARTY'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
