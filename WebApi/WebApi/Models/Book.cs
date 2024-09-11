namespace WebApi.Models
{
    public class Book
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; } 
        public string Auteur { get; set; }
    }
}
