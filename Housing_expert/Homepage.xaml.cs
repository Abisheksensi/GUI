using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Navigation;
using System;

namespace Housing_expert
{
    public sealed partial class Home : Page
    {
        public Home()
        {
            this.InitializeComponent();
        }

        private void PropertyAddCard_Click(object sender, RoutedEventArgs e)
        {
            if (this.Frame != null) // Use the page’s Frame for navigation
            {
                this.Frame.Navigate(typeof(PropertySelection));
            }
        }

        private void AgentAddCard_Click(object sender, RoutedEventArgs e)
        {
            if (this.Frame != null) // Use the page’s Frame for navigation
            {
                this.Frame.Navigate(typeof(AgentSelection));
            }
        }
    }
}