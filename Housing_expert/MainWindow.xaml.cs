using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Navigation;
using System;

namespace Housing_expert
{
    public sealed partial class MainWindow : Window
    {
        private Frame _navigationFrame; // Private field for the navigation Frame

        public MainWindow()
        {
            this.InitializeComponent();

            // Set up the Frame for navigation but don’t navigate immediately
            _navigationFrame = new Frame();

        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            if (_navigationFrame != null)
            {
                _navigationFrame.Navigate(typeof(Login));
                this.Content = _navigationFrame;
            }
        }

        private void SignUpButton_Click(object sender, RoutedEventArgs e)
        {
            if (_navigationFrame != null)
            {
                _navigationFrame.Navigate(typeof(SignUp));
                this.Content = _navigationFrame;
            }
        }
    }
}