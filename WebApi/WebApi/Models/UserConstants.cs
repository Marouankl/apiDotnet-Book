namespace WebApi.Models
{
    public class UserConstants
    {
        public static List<UserModel> Users = new List<UserModel>()
        {
            new UserModel() { Email = "admin@admin.com", Password = "admin", Nom= "Jason", Prenom= "Bryant", Role = "Admin" },
            new UserModel() {Email = "user@user.com", Password = "user", Nom= "Elyse", Prenom= "Lambert", Role = "User" },
        };
    }
}