import './style.css'
import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/+esm'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.addEventListener('DOMContentLoaded', () => {
    // Profile Dropdown Logic
    const profileBtn = document.getElementById('profile-menu-button');
    const profileMenu = document.getElementById('profile-menu');

    if (profileBtn && profileMenu) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileMenu.classList.toggle('hidden');
            // Close notification menu if open
            const notifMenu = document.getElementById('notification-menu');
            if (notifMenu && !notifMenu.classList.contains('hidden')) {
                notifMenu.classList.add('hidden');
            }
        });

        document.addEventListener('click', (e) => {
            if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
                profileMenu.classList.add('hidden');
            }
        });
    }

    // Notification Dropdown Logic
    const notifBtn = document.getElementById('notification-button');
    const notifMenu = document.getElementById('notification-menu');

    if (notifBtn && notifMenu) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifMenu.classList.toggle('hidden');
            // Close profile menu if open
            const profMenu = document.getElementById('profile-menu');
            if (profMenu && !profMenu.classList.contains('hidden')) {
                profMenu.classList.add('hidden');
            }
        });

        document.addEventListener('click', (e) => {
            if (!notifMenu.contains(e.target) && !notifBtn.contains(e.target)) {
                notifMenu.classList.add('hidden');
            }
        });
    }

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Invite Manufacturers Modal Logic
    const inviteBtn = document.getElementById('invite-manufacturers-btn');
    const inviteModal = document.getElementById('invite-modal');
    const cancelInviteBtn = document.getElementById('cancel-invite-btn');
    const sendInviteBtn = document.getElementById('send-invites-btn');

    if (inviteBtn && inviteModal) {
        const closeModal = () => {
            inviteModal.classList.add('hidden');
        };

        inviteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            inviteModal.classList.remove('hidden');
        });

        if (cancelInviteBtn) {
            cancelInviteBtn.addEventListener('click', closeModal);
        }

        if (sendInviteBtn) {
            sendInviteBtn.addEventListener('click', () => {
                const emailsInput = document.getElementById('invite-emails');
                const emails = emailsInput ? emailsInput.value : '';
                
                if (emails.trim()) {
                     alert(`Invitations sent to: ${emails}`);
                     closeModal();
                     // Reset form
                     if (emailsInput) emailsInput.value = '';
                     const messageInput = document.getElementById('invite-message');
                     if (messageInput) messageInput.value = '';
                } else {
                    alert('Please enter at least one email address.');
                }
            });
        }
        
        // Close on backdrop click (click outside the modal panel)
        inviteModal.addEventListener('click', (e) => {
             const modalPanel = inviteModal.querySelector('.relative.transform.overflow-hidden');
             if (modalPanel && !modalPanel.contains(e.target)) {
                 closeModal();
             }
        });
    }
});
