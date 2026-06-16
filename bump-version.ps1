# bump-version.ps1 - update the version number in all 4 places at once.
#
# Usage:
#   .\bump-version.ps1          # auto-increment patch (e.g. 3.4.2 -> 3.4.3)
#   .\bump-version.ps1 3.5.0    # set an explicit version
#
# Updates:
#   1. app.js     APP_VERSION
#   2. sw.js      CACHE_NAME  (kakeibo-vX.Y.Z)
#   3. index.html style.css?v=X.Y.Z
#   4. index.html app.js?v=X.Y.Z
param([string]$NewVersion)

$ErrorActionPreference = 'Stop'
$dir   = $PSScriptRoot
$appJs = Join-Path $dir 'app.js'
$swJs  = Join-Path $dir 'sw.js'
$html  = Join-Path $dir 'index.html'

$appText = [System.IO.File]::ReadAllText($appJs)
if ($appText -notmatch "APP_VERSION='([0-9]+)\.([0-9]+)\.([0-9]+)'") {
  Write-Error 'Could not read current version from app.js.'
}
$cur = $Matches[1] + '.' + $Matches[2] + '.' + $Matches[3]

if (-not $NewVersion) {
  $NewVersion = $Matches[1] + '.' + $Matches[2] + '.' + ([int]$Matches[3] + 1)
}
if ($NewVersion -notmatch '^[0-9]+\.[0-9]+\.[0-9]+$') {
  Write-Error "Version must be X.Y.Z (got: $NewVersion)"
}

Write-Host "Updating version $cur -> $NewVersion ..."

$utf8 = New-Object System.Text.UTF8Encoding($false)
function Update-File($path, $pattern, $replacement) {
  $t   = [System.IO.File]::ReadAllText($path)
  $new = [regex]::Replace($t, $pattern, $replacement)
  if ($new -eq $t) { Write-Warning ("  no change: " + [System.IO.Path]::GetFileName($path)) }
  [System.IO.File]::WriteAllText($path, $new, $utf8)
}

Update-File $appJs "APP_VERSION='[0-9]+\.[0-9]+\.[0-9]+'" "APP_VERSION='$NewVersion'"
Update-File $swJs  "kakeibo-v[0-9]+\.[0-9]+\.[0-9]+"      "kakeibo-v$NewVersion"
Update-File $html  "style\.css\?v=[0-9]+\.[0-9]+\.[0-9]+" "style.css?v=$NewVersion"
Update-File $html  "app\.js\?v=[0-9]+\.[0-9]+\.[0-9]+"    "app.js?v=$NewVersion"

Write-Host "Done. Updated 4 places to v$NewVersion." -ForegroundColor Green
