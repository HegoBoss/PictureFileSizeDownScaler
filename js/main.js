// Wacht tot de pagina volledig is geladen
document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const status = document.getElementById('status');
    const downloadBtn = document.getElementById('downloadBtn');

    // Luister naar het uploaden van een bestand
    imageInput.addEventListener('change', async (event) => {
        const imageFile = event.target.files[0];

        // Controleer of er echt een bestand is geselecteerd
        if (!imageFile) {
            status.innerText = "Geen bestand geselecteerd.";
            return;
        }

        // Toon feedback aan de gebruiker
        status.innerHTML = "⏳ Bezig met verkleinen... even geduld.";
        downloadBtn.style.display = 'none';

        // Instellingen voor de compressie
        const options = {
            maxSizeMB: 1,           // Probeer het bestand onder de 1MB te krijgen
            maxWidthOrHeight: 1920,  // Behoud een goede resolutie (Full HD)
            useWebWorker: true,     // Gebruikt een achtergrondproces zodat de browser niet vastloopt
            initialQuality: 0.8     // Start op 80% kwaliteit voor een goede balans
        };

        try {
            // Roep de bibliotheek aan om de foto te verwerken
            const compressedFile = await imageCompression(imageFile, options);
            
            // Bereken de winst in grootte
            const oudeGrootte = (imageFile.size / 1024 / 1024).toFixed(2);
            const nieuweGrootte = (compressedFile.size / 1024 / 1024).toFixed(2);

            status.innerHTML = `✅ Klaar!<br>Van ${oudeGrootte} MB naar <strong>${nieuweGrootte} MB</strong>.`;

            // Maak een tijdelijke downloadlink voor het nieuwe bestand
            const url = URL.createObjectURL(compressedFile);
            downloadBtn.href = url;
            downloadBtn.download = `geoptimaliseerd_${imageFile.name}`;
            downloadBtn.style.display = 'inline-block';
            downloadBtn.innerText = "Download Verkleinde Foto";
            
        } catch (error) {
            console.error("Fout bij compressie:", error);
            status.innerText = "❌ Oeps! Er ging iets mis tijdens het verwerken.";
        }
    });
});