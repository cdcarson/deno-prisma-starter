
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.0.0
 * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
 */
Prisma.prismaVersion = {
  client: "4.0.0",
  engine: "da41d2bb3406da22087b849f0e911199ba4fbf11"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

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
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt'
});

exports.Prisma.UserAccountScalarFieldEnum = makeEnum({
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  lastSignedInAt: 'lastSignedInAt',
  email: 'email',
  password: 'password',
  emailVerified: 'emailVerified'
});

exports.Prisma.UserProfileScalarFieldEnum = makeEnum({
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  bio: 'bio',
  location: 'location',
  photo: 'photo'
});

exports.Prisma.UserStripeCustomerScalarFieldEnum = makeEnum({
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  stripeCustomerId: 'stripeCustomerId',
  customer: 'customer'
});

exports.Prisma.UserBalanceItemScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  userId: 'userId',
  amount: 'amount',
  type: 'type'
});

exports.Prisma.UserMagicLinkScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  secret: 'secret',
  used: 'used',
  remember: 'remember',
  action: 'action',
  newEmail: 'newEmail'
});

exports.Prisma.PublicationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  url: 'url',
  organizationName: 'organizationName',
  logo: 'logo',
  tagline: 'tagline',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PublicationDashboardUserScalarFieldEnum = makeEnum({
  publicationId: 'publicationId',
  userId: 'userId',
  updatedAt: 'updatedAt',
  permission: 'permission'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});
exports.UserBalancItemType = makeEnum({
  INITIAL: 'INITIAL',
  PURCHASE: 'PURCHASE',
  BALANCE_ADDITION: 'BALANCE_ADDITION'
});

exports.MagicLinkAction = makeEnum({
  SIGN_IN: 'SIGN_IN',
  VERIFY_EMAIL: 'VERIFY_EMAIL',
  CHANGE_EMAIL: 'CHANGE_EMAIL'
});

exports.PublicationPermission = makeEnum({
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  UserAccount: 'UserAccount',
  UserProfile: 'UserProfile',
  UserStripeCustomer: 'UserStripeCustomer',
  UserBalanceItem: 'UserBalanceItem',
  UserMagicLink: 'UserMagicLink',
  Publication: 'Publication',
  PublicationDashboardUser: 'PublicationDashboardUser'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
