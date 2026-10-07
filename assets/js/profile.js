function getProfiles() {
    const data = localStorage.getItem('profiles');
    if (data) {
        return JSON.parse(data)
    } else {
        localStorage.setItem('profiles', JSON.stringify(profileData));
        return profileData;
    }
}

function displayProfile(profiles) {
    const container = document.querySelector('.data')

    profiles.forEach(function (profile) {
        container.innerHTML += `
    <h1>${profile.namaLengkap}</h1>
    <h1>${profile.umur}</h1>
    <h1>${profile.pekerjaan}</h1>
    <h1>${profile.stack}</h1>
    `
    });

}

// Tambah Data
function simpan() {
    const data = getProfiles();
    const json = {
        namaLengkap: document.getElementById('nama').value,
        umur: document.getElementById('umur').value,
        pekerjaan: document.getElementById('pekerjaan').value,
        stack: document.getElementById('stack').value
    };
    data.push(json);
    localStorage.setItem('profiles', JSON.stringify(data))
    displayProfile(data)
}
document.getElementById('simpan').onclick = simpan;

function update() {
    const data = getProfiles();
    const nomor = document.getElementById('nomor').value;
    const index = parseInt(nomor) - 1;
    if (data[index]) {
        data[index] = {
            namaLengkap: document.getElementById('nama').value,
            umur: document.getElementById('umur').value,
            pekerjaan: document.getElementById('pekerjaan').value,
            stack: document.getElementById('stack').value
        };
    }
    localStorage.setItem('profiles', JSON.stringify(data))
    displayProfile(data)
}
document.getElementById('update').onclick = update;

function hapus() {
    const data = getProfiles();
    const nomor = document.getElementById('nomor').value;
    const index = parseInt(nomor) - 1;
    if (data[index]) {
        data[index] = {
            namaLengkap: document.getElementById('nama').value,
            umur: document.getElementById('umur').value,
            pekerjaan: document.getElementById('pekerjaan').value,
            stack: document.getElementById('stack').value
        };
    }
    localStorage.removeItem('profiles', JSON.stringify(data))
    displayProfile(data)
}
document.getElementById('hapus').onclick = hapus;

displayProfile(getProfiles())