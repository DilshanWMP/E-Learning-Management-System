   M S B A M L   `   `   `  ����B  >CodeDot, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:CodeDotCodeDot  5   	   $    CodeDot.CourseManagementWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   'localclr-namespace:CodeDot     5   	     � Title$  CourseManagementWindow��5   	   $	��450��6(   $	��800��65   ���	#FFFAFAFA � WindowStartupLocation$ CenterScreen=�5
   	   .��5      �  � RowDefinitions 5   
   �� 5      $��* �6   �� 5      $��6* �6    � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $��3* �6   .+�5   
   �� $��0��6   $��0��6!   $��2��61   ���	#FF2D31426E   �� 5   
   $��0��6   $��2��6!   $��Center=�5      $��25(�5      $
��Bold"�5       �� Padding$ 5q�5      $��0q�6    
�������$��Course Management System��5      �� 5    
   $��0��6   $��0��6   $��Center=�5!      $��Assets/CodeDot-logo.png��5"      $��10q�61   �� 5$   
   $��1��6   $��0��6!   $��2��61   ���	#FFE8F0FE6E   �� 5&   
   $��1��6   $��0��6"   $��Center=�62   .+�5'      �� -   5        $��15(�5'      $��15q�5(      $��5q�6"   ���	#FF5CB85C
�������$��DemiBold"�5+      .��5-      
Add Course6"   �� 5/      -   5        $��15(�5/      $��15q�50      $��5q�6"   ���	#FF5BC0DE
�������$��DemiBold"�53      .��55      Update Course6%   �� 57      -   5        $��15(�57      $��15q�58      $��5q�6"   ���	#FFD9534F
�������$��DemiBold"�5;      .��5=      Delete Course6%   5>      &   System.Windows.Controls.DataGrid  5@   
   -   5          Name$ 
courseGrid��5F      $��1��5@      $��1��6       AutoGenerateColumns$
 True��5A      $��10q�5B      $��Stretch=�5C      $��Stretch=�5D      ���	#FFDDDDDD5F      5I      5K      