using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Threading.Tasks;
using Housing_expert;

namespace Housing_expert
{
    public sealed partial class SignUp : Page
    {
        private readonly IMongoClient _mongoClient;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<User> _usersCollection;

        public SignUp()
        {
            this.InitializeComponent();

            // Use the provided MongoDB connection string
            string connectionString = "mongodb+srv://AbishekSensi:jjZWwkNvQsbJMCbc@cluster0.wvgbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
            _mongoClient = new MongoClient(connectionString);
            _database = _mongoClient.GetDatabase("Housing_Expert"); // Use the provided database name
            _usersCollection = _database.GetCollection<User>("Trends_card"); // Use the provided collection name
        }

        private async void RegisterButton_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameTextBox.Text;
            string password = PasswordBox.Password;

            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                var dialog = new ContentDialog
                {
                    Title = "Error",
                    Content = "Please enter both username and password",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await dialog.ShowAsync();
                return;
            }

            try
            {
                // Create new user with auto-generated ObjectId
                var newUser = new User
                {
                    Id = ObjectId.GenerateNewId(),
                    Username = username,
                    Password = password // Plain text password (not secure for production)
                };

                // Check if username already exists
                var filter = Builders<User>.Filter.Eq(u => u.Username, username);
                var existingUser = await _usersCollection.Find(filter).FirstOrDefaultAsync();

                if (existingUser != null)
                {
                    var errorDialog = new ContentDialog
                    {
                        Title = "Error",
                        Content = "Username already exists. Please choose a different username.",
                        CloseButtonText = "OK",
                        XamlRoot = this.Content.XamlRoot
                    };
                    await errorDialog.ShowAsync();
                    return;
                }

                // Insert the new user into MongoDB
                await _usersCollection.InsertOneAsync(newUser);

                var successDialog = new ContentDialog
                {
                    Title = "Success",
                    Content = "User registered successfully!",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await successDialog.ShowAsync();

                // Clear the input fields after successful registration
                UsernameTextBox.Text = "";
                PasswordBox.Password = "";
            }
            catch (Exception ex)
            {
                var errorDialog = new ContentDialog
                {
                    Title = "Registration Failed",
                    Content = $"An error occurred: {ex.Message}",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await errorDialog.ShowAsync();
            }
        }
    }

}