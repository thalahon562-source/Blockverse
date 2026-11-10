# Blockverse – Web-App für GitHub Pages

Statische Web-App (PWA): kein Build, kein Server nötig. Läuft offline und lässt sich auf dem iPad/iPhone als App zum Home-Bildschirm hinzufügen.

## Inhalt
- `index.html` – die komplette App
- `manifest.webmanifest` – App-Name, Icons, Farben
- `sw.js` – Offline-Modus
- `icons/`, `apple-touch-icon.png`, `favicon.ico` – App-Icons
- `404.html` – leitet falsche Adressen zurück zur App

## Auf GitHub veröffentlichen (auch vom iPad aus)
1. Auf github.com einloggen → **New repository** (z. B. `blockverse`, Public) → erstellen.
2. **Add file → Upload files**. ZIP vorher entpacken und **alle Dateien und den Ordner `icons`** hineinziehen (`index.html` muss direkt im Hauptordner des Repos liegen). **Commit changes**.
3. **Settings → Pages → Build and deployment**: *Deploy from a branch*, Branch `main`, Ordner `/ (root)` → **Save**.
4. Nach ca. 1 Minute ist die App erreichbar unter `https://DEIN-NAME.github.io/blockverse/`.

## Auf dem iPad als App installieren
1. Die Adresse in **Safari** öffnen (nicht in einem In-App-Browser).
2. **Teilen** (Quadrat mit Pfeil) → **Zum Home-Bildschirm** → **Hinzufügen**.
3. Von jetzt an startet Blockverse im Vollbild mit eigenem Icon und funktioniert auch offline (nach dem ersten Laden).

## Wichtig zu wissen
- **Spielstand und hochgeladene Spiele liegen lokal auf dem Gerät.** Die App auf dem Home-Bildschirm hat auf iOS einen *eigenen* Speicher, getrennt von Safari: Dinge, die vorher in Safari gespeichert wurden, erscheinen dort nicht. Am besten gleich nach der Installation die App nutzen.
- **Updates:** `index.html` im Repo ersetzen. Die App lädt die neue Version beim nächsten Start mit Internet. Wurden Icons oder `manifest.webmanifest` geändert, in `sw.js` die Zahl bei `VERSION` erhöhen (z. B. `bv-v2`).
- **Icon ändern:** PNGs im Ordner `icons/` ersetzen (gleiche Dateinamen und Größen) und `VERSION` erhöhen. Ein bereits installiertes Icon muss einmal gelöscht und neu hinzugefügt werden.
- Hochgeladene Spiele laufen in einer abgeschotteten Sandbox und können nicht auf Blockverse-Daten zugreifen.
