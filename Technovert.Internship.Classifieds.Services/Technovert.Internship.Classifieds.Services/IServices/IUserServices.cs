using System.Collections.Generic;

namespace Technovert.Internship.Classifieds.Services.Services
{
    public interface IUserServices
    {
       
        IEnumerable<User> GetUsers(int id = 0);
        void AddOrUpdateUser(List<User> user);
        void DeleteUser(int id);
    }
}