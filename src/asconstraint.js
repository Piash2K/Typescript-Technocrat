//as const assertion
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
var UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
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

*/
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false;
};
var isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
