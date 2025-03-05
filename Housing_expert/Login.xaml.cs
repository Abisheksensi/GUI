using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Threading.Tasks;
using Housing_expert; // Reference the User class from User.cs

namespace Housing_expert
{
    public sealed partial class Login : Page
    {
        private readonly IMongoClient _mongoClient;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<User> _usersCollection;

        public Login()
        {
            this.InitializeComponent();

            // Use the provided MongoDB connection string
            string connectionString = "mongodb+srv://AbishekSensi:jjZWwkNvQsbJMCbc@cluster0.wvgbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
            _mongoClient = new MongoClient(connectionString);
            _database = _mongoClient.GetDatabase("Housing_Expert"); // Use the provided database name
            _usersCollection = _database.GetCollection<User>("Trends_card"); // Use the provided collection name
        }

        private async void LoginButton_Click(object sender, RoutedEventArgs e)
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
                bool loginSuccessful = await AuthenticateUser(username, password);

                if (loginSuccessful)
                {
                    // Instead of showing a success dialog, navigate to the Home page
                    if (this.Frame != null) // Use the page’s Frame for navigation
                    {
                        this.Frame.Navigate(typeof(Home));
                    }
                    else
                    {
                        // If Frame is null (unlikely), show a dialog as a fallback
                        var successDialog = new ContentDialog
                        {
                            Title = "Success",
                            Content = "Login successful! Welcome to Housing Expert",
                            CloseButtonText = "OK",
                            XamlRoot = this.Content.XamlRoot
                        };
                        await successDialog.ShowAsync();
                    }
                }
                else
                {
                    var failDialog = new ContentDialog
                    {
                        Title = "Login Failed",
                        Content = "Invalid username or password",
                        CloseButtonText = "OK",
                        XamlRoot = this.Content.XamlRoot
                    };
                    await failDialog.ShowAsync();
                }
            }
            catch (Exception ex)
            {
                var errorDialog = new ContentDialog
                {
                    Title = "Login Failed",
                    Content = $"An error occurred: {ex.Message}",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await errorDialog.ShowAsync();
            }
        }

        private async Task<bool> AuthenticateUser(string username, string password)
        {
            var filter = Builders<User>.Filter.Eq(u => u.Username, username);
            var user = await _usersCollection.Find(filter).FirstOrDefaultAsync();

            if (user == null)
            {
                return false; // User not found
            }

            // Simple comparison of plain text password (not recommended for production)
            return user.Password == password;
        }
    }
}