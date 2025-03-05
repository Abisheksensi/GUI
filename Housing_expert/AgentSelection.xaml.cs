using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Threading.Tasks;

namespace Housing_expert
{
    public sealed partial class AgentSelection : Page
    {
        private readonly IMongoClient _mongoClient;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Agent> _agentsCollection;

        public AgentSelection()
        {
            this.InitializeComponent();

            // Use the provided MongoDB connection string
            string connectionString = "mongodb+srv://AbishekSensi:jjZWwkNvQsbJMCbc@cluster0.wvgbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
            _mongoClient = new MongoClient(connectionString);
            _database = _mongoClient.GetDatabase("Housing_Expert"); // Use the provided database name
            _agentsCollection = _database.GetCollection<Agent>("Agents"); // New collection for agents
        }

        private async void SaveAgentButton_Click(object sender, RoutedEventArgs e)
        {
            string agentName = AgentNameTextBox.Text;
            string contactInfo = AgentContactTextBox.Text;

            if (string.IsNullOrEmpty(agentName) || string.IsNullOrEmpty(contactInfo))
            {
                var dialog = new ContentDialog
                {
                    Title = "Error",
                    Content = "Please fill in all required fields.",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await dialog.ShowAsync();
                return;
            }

            try
            {
                var agent = new Agent
                {
                    Id = ObjectId.GenerateNewId(),
                    Name = agentName,
                    ContactInfo = contactInfo
                };

                await _agentsCollection.InsertOneAsync(agent);

                var successDialog = new ContentDialog
                {
                    Title = "Success",
                    Content = "Agent saved successfully!",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await successDialog.ShowAsync();

                // Clear fields
                AgentNameTextBox.Text = "";
                AgentContactTextBox.Text = "";
            }
            catch (Exception ex)
            {
                var errorDialog = new ContentDialog
                {
                    Title = "Error",
                    Content = $"An error occurred: {ex.Message}",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await errorDialog.ShowAsync();
            }
        }
    }

    // Define an Agent class for MongoDB
    public class Agent
    {
        public ObjectId Id { get; set; }
        public string? Name { get; set; }
        public string? ContactInfo { get; set; }
    }
}