// enum

// set of fixed string literal ak jaigai rakhe

// type UserRoles = "Admin" | "Editor" | "Viewer";

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role=== UserRoles.Editor) {
    return true;
  }
  return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
