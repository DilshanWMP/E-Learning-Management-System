   M S B A M L   `   `   `  ����B  >CodeDot, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:CodeDotCodeDot  5   	       CodeDot.CourseWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   'localclr-namespace:CodeDot     5   	     � Title$  CourseWindow��5   	   $	��400��6   $	��500��6+    � WindowStartupLocation$ CenterScreen=�5	   	   ���	#FFFAFAFA.��5      � .+�5   
   �� ���	#FF2D3142$	��Top=�6%   $��60��6=   �� 5   
   $��Add New Course��6   $��24(�5      $
��Bold"�5      
�������$��Center=�5      $	��Top=�5      $��0,10,0,0q�5      �� 5   
   $��Center=�6   $��Center=�5      $	��350��5      $��0,40,0,0q�5      .+�5      �� $��Course Name:��6   $��16(�5      ���	#FF2D3142$��0,0,0,5q�5       �� 5"      -   5         ��Name$ CourseNameTextBox��5"      $��16(�5#      $��10q�5$      $��0,0,0,15q�5%      ���	#FFCCCCCC$��1q�5'      
�������5(      �� 5+      $��Course Description:��6   $��16(�5,      ���	#FF2D3142$��0,0,0,5q�5.      �� 50      -   5        $ CourseDescriptionTextBox��50      $��16(�51      $��10q�52      $��0,0,0,20q�53      ���	#FFCCCCCC$��1q�55      
�������$	��100��57      " �� VerticalScrollBarVisibility$
 Auto=�58      �� 5:       �� Orientation$ 
Horizontal=�6   $��Center=�62   .+�5;      �� -   5        $
��Save��5;      $��16(�5<      $
��Bold"�5=      $��15,10q�5>      ���	#FF5CB85C
�������
������  � Cursor$
 Hand��5B      $��0,0,10,0q�5C      5D      �� 5F      -   5        $��Cancel��5F      $��16(�5G      $
��Bold"�5H      $��15,10q�5I      ���	#FFD9534F
�������
������ $
 Hand��5M      5N      5P      5Q      5R      5S      