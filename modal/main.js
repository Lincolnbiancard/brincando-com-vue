Vue.component('modal', {
    props: {

    },
    template: `
    <div class="modal is-active">
        <div class="modal-background" @click="$emit('click-close-modal')"></div>
            <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">
                <slot name="title"></slot>
            </p>
            <button @click="$emit('click-close-modal')" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <slot name="body"></slot><br>
                <slot>Se não passar nada coloca esse texto como padrão</slot>
            </section>
            <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button @click="$emit('click-close-modal')" class="button">Cancel</button>
            </footer>
        </div>
    </div>
    `,
});

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});