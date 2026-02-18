@echo off
echo ========================================
echo Upload RN TRAVEL ke GitHub
echo ========================================
echo.

git config --global user.name "aakunsid-lang"
git config --global user.email "your-email@example.com"
git init
git add .
git commit -m "Initial commit - RN TRAVEL website"
git branch -M main
git remote add origin https://github.com/aakunsid-lang/rn-travel.git
git push -u origin main

echo.
echo ========================================
echo Upload selesai!
echo ========================================
pause
