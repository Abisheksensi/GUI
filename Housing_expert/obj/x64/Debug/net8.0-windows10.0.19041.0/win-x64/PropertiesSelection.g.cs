﻿#pragma checksum "D:\Project New\Housing_expert\Housing_expert\PropertiesSelection.xaml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "F1C0EE897C8FE9530EC9D20CF7C8CC3D2B5C03388E4411B179BA50C45822CAC1"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Housing_expert
{
    partial class PropertySelection : 
        global::Microsoft.UI.Xaml.Controls.Page, 
        global::Microsoft.UI.Xaml.Markup.IComponentConnector
    {

        /// <summary>
        /// Connect()
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.UI.Xaml.Markup.Compiler"," 3.0.0.2502")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 2: // PropertiesSelection.xaml line 156
                {
                    this.BackToHomeButton = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.Button>(target);
                    ((global::Microsoft.UI.Xaml.Controls.Button)this.BackToHomeButton).Click += this.BackToHomeButton_Click;
                }
                break;
            case 3: // PropertiesSelection.xaml line 161
                {
                    this.SavePropertyButton = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.Button>(target);
                    ((global::Microsoft.UI.Xaml.Controls.Button)this.SavePropertyButton).Click += this.SavePropertyButton_Click;
                }
                break;
            case 5: // PropertiesSelection.xaml line 133
                {
                    this.WifiCheckBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.CheckBox>(target);
                }
                break;
            case 6: // PropertiesSelection.xaml line 135
                {
                    this.PoolCheckBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.CheckBox>(target);
                }
                break;
            case 7: // PropertiesSelection.xaml line 137
                {
                    this.ParkingCheckBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.CheckBox>(target);
                }
                break;
            case 8: // PropertiesSelection.xaml line 139
                {
                    this.GymCheckBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.CheckBox>(target);
                }
                break;
            case 9: // PropertiesSelection.xaml line 141
                {
                    this.GardenCheckBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.CheckBox>(target);
                }
                break;
            case 10: // PropertiesSelection.xaml line 143
                {
                    this.SecurityCheckBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.CheckBox>(target);
                }
                break;
            case 11: // PropertiesSelection.xaml line 110
                {
                    this.UploadImagesButton = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.Button>(target);
                    ((global::Microsoft.UI.Xaml.Controls.Button)this.UploadImagesButton).Click += this.UploadImagesButton_Click;
                }
                break;
            case 12: // PropertiesSelection.xaml line 120
                {
                    this.ImagePreviewText = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.TextBlock>(target);
                }
                break;
            case 14: // PropertiesSelection.xaml line 44
                {
                    this.PropertyTypeComboBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.ComboBox>(target);
                }
                break;
            case 15: // PropertiesSelection.xaml line 56
                {
                    this.LocationTextBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.TextBox>(target);
                }
                break;
            case 16: // PropertiesSelection.xaml line 91
                {
                    this.PriceTextBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.TextBox>(target);
                }
                break;
            case 17: // PropertiesSelection.xaml line 96
                {
                    this.PropertyTitleTextBox = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.TextBox>(target);
                }
                break;
            case 18: // PropertiesSelection.xaml line 66
                {
                    this.Rating1 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.RadioButton>(target);
                    ((global::Microsoft.UI.Xaml.Controls.RadioButton)this.Rating1).Checked += this.Rating_Changed;
                }
                break;
            case 19: // PropertiesSelection.xaml line 70
                {
                    this.Rating2 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.RadioButton>(target);
                    ((global::Microsoft.UI.Xaml.Controls.RadioButton)this.Rating2).Checked += this.Rating_Changed;
                }
                break;
            case 20: // PropertiesSelection.xaml line 74
                {
                    this.Rating3 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.RadioButton>(target);
                    ((global::Microsoft.UI.Xaml.Controls.RadioButton)this.Rating3).Checked += this.Rating_Changed;
                }
                break;
            case 21: // PropertiesSelection.xaml line 78
                {
                    this.Rating4 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.RadioButton>(target);
                    ((global::Microsoft.UI.Xaml.Controls.RadioButton)this.Rating4).Checked += this.Rating_Changed;
                }
                break;
            case 22: // PropertiesSelection.xaml line 82
                {
                    this.Rating5 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.RadioButton>(target);
                    ((global::Microsoft.UI.Xaml.Controls.RadioButton)this.Rating5).Checked += this.Rating_Changed;
                }
                break;
            default:
                break;
            }
            this._contentLoaded = true;
        }


        /// <summary>
        /// GetBindingConnector(int connectionId, object target)
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.UI.Xaml.Markup.Compiler"," 3.0.0.2502")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Microsoft.UI.Xaml.Markup.IComponentConnector GetBindingConnector(int connectionId, object target)
        {
            global::Microsoft.UI.Xaml.Markup.IComponentConnector returnValue = null;
            return returnValue;
        }
    }
}

