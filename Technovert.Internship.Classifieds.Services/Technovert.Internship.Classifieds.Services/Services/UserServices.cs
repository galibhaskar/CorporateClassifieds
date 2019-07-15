using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Technovert.Internship.Classifieds.Services.Generic;

namespace Technovert.Internship.Classifieds.Services.Services
{
    public class UserServices : IUserServices
    {

        public IEnumerable<User> GetUsers(int id = 0)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add("@id", id);
            return Procedure.ExecuteProcedure<User>("GetUser", param);
        }

        public void AddOrUpdateUser(List<User> user)
        {
            for (int i = 0; i < user.Capacity; i++)
            {

                DynamicParameters param = new DynamicParameters();
                param.Add("@ID", user[i].ID);
                param.Add("@Name", user[i].Name);
                param.Add("@Email", user[i].Email);
                param.Add("@Phone", user[i].Phone);
                param.Add("@Location", user[i].Location);
                param.Add("@Role", user[i].Role);
                param.Add("@Created", user[i].ID == 0 ? DateTime.Now : user[i].Created);
                param.Add("@Modified", user[i].Modified);
                param.Add("@Picture", user[i].Picture);
                if (user[i].ID == null)
                {
                    user[i].IsActive = true;
                    user[i].Permission = false;
                }
                param.Add("@IsActive", user[i].IsActive);
                param.Add("@Permission", user[i].Permission);
                Procedure.ExecuteProcedure<string>("AddOrUpdateUser", param);
            }
        }

        public void DeleteUser(int id)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add("@ID", id);
            param.Add("@Status", 0);
            Procedure.ExecuteProcedure<string>("AddOrUpdateUser", param);
        }
    }
}
