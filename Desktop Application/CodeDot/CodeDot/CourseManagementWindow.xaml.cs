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
    /// Interaction logic for CourseManagementWindow.xaml
    /// </summary>
    public partial class CourseManagementWindow : Window
    {
        private CourseDbContext _db = new CourseDbContext();
        public CourseManagementWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            courseGrid.ItemsSource = _db.Courses.ToList();
        }

        private void Add_Course(object sender, RoutedEventArgs e)
        {
            Course course = new Course();
            CourseWindow pWindow = new CourseWindow(course);
            if(pWindow.ShowDialog() == true)
            {
                _db.Courses.Add(course);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Delete_Course(object sender, RoutedEventArgs e)
        {
            if(courseGrid.SelectedItem is Course p)
            {
                _db.Courses.Remove(p);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Update_Course(object sender, RoutedEventArgs e)
        {
            if(courseGrid.SelectedItem is Course p)
            {
                Course course = new Course();
                course.CourseID = p.CourseID;
                course.CourseName = p.CourseName;
                course.CourseDescription = p.CourseDescription;

                CourseWindow pWindow = new CourseWindow(course);
                if (pWindow.ShowDialog() == true)
                {
                    p.CourseName = course.CourseName;
                    p.CourseDescription = course.CourseDescription;
                    _db.Courses.Update(p);
                    _db.SaveChanges();
                    LoadData();
                }
            }
        }

    }
}
