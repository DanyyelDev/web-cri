@echo off
echo ============================================
echo   Iglesia Cristiana C.R.I - Web App
echo ============================================
echo.
echo Instalando dependencias...
call npm install
echo.
echo Iniciando servidor de desarrollo...
echo Abre tu navegador en: http://localhost:4200
echo.
call ng serve --open
