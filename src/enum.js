// enum
// set of fixed string literal ak jaigai rakhe
// type UserRoles = "Admin" | "Editor" | "Viewer";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false;
};
var isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
