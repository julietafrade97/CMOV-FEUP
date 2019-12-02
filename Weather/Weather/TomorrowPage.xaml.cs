﻿using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Weather.Models;

namespace Weather
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class TomorrowPage : ContentPage
    {
        private City city;
        public TomorrowPage(City city)
        {
            this.city = city;
            InitializeComponent();
        }
    }
}