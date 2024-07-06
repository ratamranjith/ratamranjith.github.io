@echo off
REM Create directories
mkdir src\components\admin
mkdir src\components\main
mkdir src\assets\images
mkdir src\assets\fonts
mkdir src\assets\themes
mkdir src\utils
mkdir src\api

REM Create files
type nul > src\components\admin\AdminDashboard.jsx
type nul > src\components\admin\ManageProjects.jsx
type nul > src\components\admin\ManageUsers.jsx
type nul > src\components\main\Header.jsx
type nul > src\components\main\Navigation.jsx
type nul > src\components\main\Sidebar.jsx
type nul > src\components\main\Projects.jsx
type nul > src\components\main\Certifications.jsx
type nul > src\components\main\Interests.jsx
type nul > src\components\main\Contact.jsx
type nul > src\components\main\ThemeToggle.jsx
type nul > src\assets\themes\dark.css
type nul > src\assets\themes\light.css
type nul > src\utils\themeUtils.jsx
type nul > src\utils\authUtils.jsx
type nul > src\utils\validationUtils.jsx
type nul > src\api\index.jsx
type nul > src\api\auth.jsx
type nul > src\api\projects.jsx
type nul > src\api\users.jsx
type nul > src\App.jsx
type nul > src\App.css
type nul > src\index.jsx
type nul > src\tailwind.css

echo Project structure created successfully!
