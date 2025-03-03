using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace CodeDot
{
    /// <summary>
    /// Interaction logic for CourseWindow.xaml
    /// </summary>
    public partial class CourseWindow : Window
    {
        public Course Course { get; private set; }
        public CourseWindow(Course course)
        {
            InitializeComponent();
            Course = course;
            CourseNameTextBox.Text = course.CourseName;
            CourseDescriptionTextBox.Text = course.CourseDescription;
        }

        private void Save_Course(object sender, RoutedEventArgs e)
        {
            try
            {
                Course.CourseName = CourseNameTextBox.Text;
                Course.CourseDescription = CourseDescriptionTextBox.Text;
                DialogResult = true;
                Close();
            }

            catch (Exception ex)
            {
                //<!--this-->
                MessageBox.Show(ex.Message, "Error in input", MessageBoxButton.OK, MessageBoxImage.Error);
                DialogResult = false;
                Close();
            }
        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            DialogResult = false;
            Close();
        }
    }
}
