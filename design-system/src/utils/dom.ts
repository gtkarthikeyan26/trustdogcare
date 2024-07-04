export function isClickInsideElement<E extends HTMLElement>(
    el: E,
    ev: MouseEvent
) {
    const rect = el.getBoundingClientRect();

    return (
        ev.clientX > rect.left &&
        ev.clientX < rect.right &&
        ev.clientY > rect.top &&
        ev.clientY < rect.bottom
    );
}
