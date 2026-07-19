const form = document.getElementById('participationForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form verilerini topla
    const formData = {
        fullname: document.getElementById('fullname').value,
        age: document.getElementById('age').value,
        profession: document.getElementById('profession').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        maritalStatus: document.getElementById('maritalStatus').value,
        timestamp: new Date().toLocaleString('tr-TR')
    };
    
    // LocalStorage'e kaydet
    let participants = JSON.parse(localStorage.getItem('participants')) || [];
    participants.push(formData);
    localStorage.setItem('participants', JSON.stringify(participants));
    
    // Konsolda göster
    console.log('Katılımcı Kaydedildi:', formData);
    console.log('Toplam Katılımcı:', participants.length);
    
    // Başarı mesajını göster
    form.style.display = 'none';
    successMessage.classList.remove('hidden');
    successMessage.classList.add('show');
    
    // 3 saniye sonra sayfayı yenile
    setTimeout(() => {
        location.reload();
    }, 3000);
});

console.log('%c🏨 Balıkesir Laguna Tatil Formu Aktif', 'color: #667eea; font-size: 16px; font-weight: bold;');