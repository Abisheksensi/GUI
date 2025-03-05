using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace Housing_expert
{
    public class User
    {
        public ObjectId Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; } // Store plain text passwords (not secure for production)
    }
}