//as const assertion

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

// const UserRoles = {
//   Admin: "Admin",
//   Editor: "Editor",
//   Viewer: "Viewer",
// } as const;
const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

/*

  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",

  1. typeof operator
  2. keyof operator

  const user ={
  id: 222,
  name: "Piash"
  }
  typeof user:
  type user {
  id: number;
  name: string
  }

  typeof userRoles {
  Admin: "Admin" ;
  Editor: "Editor";
  Viewer: "Viewer"
  }

  keyof typeof userRoles
  "Admin"|"Editor"|"Viewer"

  "ADMIN"|"EDITOR"|"VIEWER"
  
  UserRole["Admin"]>>>> "ADMIN"
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  }
  return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
