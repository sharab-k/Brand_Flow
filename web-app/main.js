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
    const inviteTriggers = document.querySelectorAll('.invite-trigger');
    const inviteModal = document.getElementById('invite-modal');
    const cancelInviteBtn = document.getElementById('cancel-invite-btn');
    const sendInviteBtn = document.getElementById('send-invites-btn');

    console.log('Invite Logic Init:', { triggers: inviteTriggers.length, modal: !!inviteModal });

    if (inviteTriggers.length > 0 && inviteModal) {
        const closeModal = () => {
            console.log('Closing modal');
            inviteModal.classList.add('hidden');
        };

        const openModal = (e) => {
            console.log('Open modal clicked');
            e.preventDefault();
            e.stopPropagation();
            inviteModal.classList.remove('hidden');
        };

        inviteTriggers.forEach(trigger => {
            trigger.addEventListener('click', openModal);
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
    } else {
        console.warn('Invite modal or triggers not found');
    }

    // Brief Detail Tabs Logic
    const tabs = [
        { id: 'tab-overview', contentId: 'content-overview' },
        { id: 'tab-manufacturers', contentId: 'content-manufacturers' },
        { id: 'tab-proposals', contentId: 'content-proposals' }
    ];

    const tabElements = tabs.map(t => document.getElementById(t.id)).filter(el => el);
    
    if (tabElements.length > 0) {
        tabs.forEach(tab => {
            const tabBtn = document.getElementById(tab.id);
            const contentDiv = document.getElementById(tab.contentId);

            if (tabBtn && contentDiv) {
                tabBtn.addEventListener('click', (e) => {
                    e.preventDefault();

                    // 1. Hide all content & reset tab styles
                    tabs.forEach(t => {
                        const tBtn = document.getElementById(t.id);
                        const tContent = document.getElementById(t.contentId);
                        
                        if (tBtn && tContent) {
                            tContent.classList.add('hidden');
                            
                            // Reset classes
                            tBtn.classList.remove('border-blue-500', 'text-blue-600');
                            tBtn.classList.add('border-transparent', 'text-slate-500', 'hover:border-gray-300', 'hover:text-slate-700');
                        }
                    });

                    // 2. Show active content & set active tab style
                    contentDiv.classList.remove('hidden');
                    tabBtn.classList.remove('border-transparent', 'text-slate-500', 'hover:border-gray-300', 'hover:text-slate-700');
                    tabBtn.classList.add('border-blue-500', 'text-blue-600');
                });
            }
        });
    }

    // AI Assistant Sidebar Logic
    const aiChatToggle = document.getElementById('ai-chat-toggle');
    const aiSidebar = document.getElementById('ai-sidebar');
    const closeAiSidebarBtn = document.getElementById('close-ai-sidebar');

    if (aiChatToggle && aiSidebar) {
        aiChatToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            // Toggle visibility
            if (aiSidebar.classList.contains('hidden')) {
                aiSidebar.classList.remove('hidden');
            } else {
                aiSidebar.classList.add('hidden');
            }
        });

        if (closeAiSidebarBtn) {
            closeAiSidebarBtn.addEventListener('click', () => {
                aiSidebar.classList.add('hidden');
            });
        }

        // Close when clicking outside (since it's a popup now)
        document.addEventListener('click', (e) => {
            if (!aiSidebar.contains(e.target) && !aiChatToggle.contains(e.target) && !aiSidebar.classList.contains('hidden')) {
                aiSidebar.classList.add('hidden');
            }
        });
    }
});
