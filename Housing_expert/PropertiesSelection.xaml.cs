using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Windows.Storage.Pickers; // For file picking
using Windows.Storage; // For file handling
using System.Linq; // For LINQ methods like Any and Select

namespace Housing_expert
{
    public sealed partial class PropertySelection : Page
    {
        private readonly IMongoClient _mongoClient;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Property> _propertiesCollection;

        public PropertySelection()
        {
            this.InitializeComponent();

            // Use the provided MongoDB connection string
            string connectionString = "mongodb+srv://AbishekSensi:jjZWwkNvQsbJMCbc@cluster0.wvgbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
            _mongoClient = new MongoClient(connectionString);
            _database = _mongoClient.GetDatabase("Housing_Expert"); // Use the provided database name
            _propertiesCollection = _database.GetCollection<Property>("Properties"); // New collection for properties
        }

        private void Rating_Changed(object sender, RoutedEventArgs e)
        {
            // This method can remain empty or be used for real-time updates if needed
        }

        private async void UploadImagesButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // Use FileOpenPicker to allow image selection
                var picker = new FileOpenPicker();
                picker.ViewMode = PickerViewMode.Thumbnail;
                picker.SuggestedStartLocation = PickerLocationId.Desktop; // Changed from Pictures to Desktop
                picker.FileTypeFilter.Add(".jpg");
                picker.FileTypeFilter.Add(".jpeg");
                picker.FileTypeFilter.Add(".png");

                // Get the window handle for the picker (required for WinUI 3 Desktop)
                var hwnd = WinRT.Interop.WindowNative.GetWindowHandle(this);
                WinRT.Interop.InitializeWithWindow.Initialize(picker, hwnd);

                var files = await picker.PickMultipleFilesAsync();
                if (files != null && files.Any()) // Use Any() from LINQ
                {
                    string imagePreview = $"Selected {files.Count} image(s): {string.Join(", ", files.Select(f => f.Name))}";
                    ImagePreviewText.Text = imagePreview;
                }
                else
                {
                    ImagePreviewText.Text = "No images selected";
                }
            }
            catch (Exception ex)
            {
                var errorDialog = new ContentDialog
                {
                    Title = "Error",
                    Content = $"Failed to upload images: {ex.Message}",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await errorDialog.ShowAsync();
            }
        }

        private async void SavePropertyButton_Click(object sender, RoutedEventArgs e)
        {
            string propertyType = (PropertyTypeComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();
            string location = LocationTextBox.Text;
            string ratings = GetSelectedRating(); // Get rating from radio buttons
            string price = PriceTextBox.Text;
            string title = PropertyTitleTextBox.Text;

            if (string.IsNullOrEmpty(propertyType) || string.IsNullOrEmpty(location) || string.IsNullOrEmpty(ratings) ||
                string.IsNullOrEmpty(price) || string.IsNullOrEmpty(title))
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

            // Get selected facilities from checkboxes
            List<string> facilities = new List<string>();
            if (WifiCheckBox.IsChecked == true) facilities.Add("WiFi");
            if (PoolCheckBox.IsChecked == true) facilities.Add("Pool");
            if (ParkingCheckBox.IsChecked == true) facilities.Add("Parking");
            if (GymCheckBox.IsChecked == true) facilities.Add("Gym");
            if (GardenCheckBox.IsChecked == true) facilities.Add("Garden");
            if (SecurityCheckBox.IsChecked == true) facilities.Add("Security");

            try
            {
                var property = new Property
                {
                    Id = ObjectId.GenerateNewId(),
                    PropertyType = propertyType,
                    Location = location,
                    Ratings = ratings,
                    Price = price,
                    Title = title,
                    Facilities = facilities.Any() ? facilities : null, // Use Any() from LINQ
                    Images = new List<string> { "PlaceholderImageURL" } // Use actual image paths/URLs in production
                };

                await _propertiesCollection.InsertOneAsync(property);

                var successDialog = new ContentDialog
                {
                    Title = "Success",
                    Content = "Property saved successfully!",
                    CloseButtonText = "OK",
                    XamlRoot = this.Content.XamlRoot
                };
                await successDialog.ShowAsync();

                // Clear fields
                PropertyTypeComboBox.SelectedIndex = 0;
                LocationTextBox.Text = "";
                PriceTextBox.Text = "";
                PropertyTitleTextBox.Text = "";
                WifiCheckBox.IsChecked = false;
                PoolCheckBox.IsChecked = false;
                ParkingCheckBox.IsChecked = false;
                GymCheckBox.IsChecked = false;
                GardenCheckBox.IsChecked = false;
                SecurityCheckBox.IsChecked = false;
                Rating5.IsChecked = true; // Reset to default (5 stars)
                ImagePreviewText.Text = "No images selected";
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

        private string GetSelectedRating()
        {
            if (Rating1.IsChecked == true) return "1";
            if (Rating2.IsChecked == true) return "2";
            if (Rating3.IsChecked == true) return "3";
            if (Rating4.IsChecked == true) return "4";
            if (Rating5.IsChecked == true) return "5";
            return "5"; // Default to 5 if no rating is selected
        }

        private void BackToHomeButton_Click(object sender, RoutedEventArgs e)
        {
            if (this.Frame != null) // Use the page’s Frame for navigation
            {
                this.Frame.Navigate(typeof(Home));
            }
        }
    }

    // Define a Property class for MongoDB
    public class Property
    {
        public ObjectId Id { get; set; }
        public string? PropertyType { get; set; }
        public string? Location { get; set; }
        public string? Ratings { get; set; }
        public string? Price { get; set; }
        public string? Title { get; set; }
        public List<string>? Facilities { get; set; }
        public List<string>? Images { get; set; } // Store image URLs or paths
    }
}