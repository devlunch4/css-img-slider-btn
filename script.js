// 버튼 선택
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slideContainer = document.querySelector('.slide');

// → 버튼 클릭 시: 첫 번째 아이템을 맨 뒤로 보냄
next.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    if (items.length > 0) {
        slideContainer.appendChild(items[0]);  // Node.appendChild 동작 원리: 기존 요소를 이동함 :contentReference[oaicite:1]{index=1}
    }
});

// ← 버튼 클릭 시: 마지막 아이템을 맨 앞으로 보냄
prev.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    if (items.length > 0) {
        // Element.prepend는 요소를 부모의 첫 자식으로 삽입하는 최신 메서드 :contentReference[oaicite:2]{index=2}
        slideContainer.prepend(items[items.length - 1]);
    }
});
