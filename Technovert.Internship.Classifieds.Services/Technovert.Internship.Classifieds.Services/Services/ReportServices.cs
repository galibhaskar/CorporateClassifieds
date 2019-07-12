using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Technovert.Internship.Classifieds.Services.IServices;

namespace Technovert.Internship.Classifieds.Services.Services
{
    public class ReportServices : IReportServices
    {
        public List<Reports> GetAllReportsByAdID(int AdID)
        {
            using (IDbConnection con = new SqlConnection(@"Server=intdev-pc;Initial Catalog=classifieds;Integrated Security=True"))
            {
                try
                {
                    string sql = "select report.ID,report.AdID,report.ReportDescription,report.ReportCategory,report.Created,report.Modified,reportedBy.* from Reports report inner join Users reportedBy on report.ReportedBy=reportedBy.ID where report.AdID=" + AdID;
                    List<Reports> Reports = (List<Reports>)con.Query(sql, new[] { typeof(Reports),typeof(User) }, reportsObject => 
                    {
                        Reports reports = reportsObject[0] as Reports;
                        reports.ReportedBy = reportsObject[1] as User;
                        return reports;
                    },splitOn: "ID");

                    return Reports;
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
        }
    }
}
