/**
 * ### Task 8: Intersection Types

**Objective**: Practice using intersection types.

**Instructions**:

- Create a type `AdminUser` that is an intersection of:
  - `User` with properties `name` and `email`
  - `Admin` with property `adminLevel`
- Write a function `describeAdmin(user: AdminUser): string` that returns a description of the admin user.
 */

type User = { name: string; email: string }
type Admin = { adminLevel: number }

type AdminUser = User & Admin

const describeAdmin = (user: AdminUser): string => {
  return `This admin named ${user.name} and email: ${user.email} has level ${user.adminLevel} access`
}

console.log(describeAdmin({name: 'Mr. X', email: 'x@gmail.com', adminLevel: 5}))
