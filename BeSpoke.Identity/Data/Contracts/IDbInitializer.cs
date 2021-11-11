using System.Threading.Tasks;

namespace keo.Identity.Data.Contracts
{
    public interface IDbInitializer
    {
        Task Initialize();
    }
}