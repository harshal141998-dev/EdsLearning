export default function decorate(block) {

    const menuButton = block.querySelector('.sony-header__menu-btn');
    const navigation = block.querySelector('.sony-header__nav');

    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            navigation.classList.toggle('active');
        });
    }
}