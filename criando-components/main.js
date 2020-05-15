Vue.component('modal',{
    template: `
    <!-- Modal -->
    <div class="modal fade" id="exampleModal"  @dblclick="$emit('event-dbl-click')" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
                <slot name="header"></slot>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
                <slot name="btn-close"></slot>
            </button>
            <button type="button" class="btn btn-success">
                <slot name="btn-save"></slot>
            </button>
        </div>
        </div>
    </div>
    </div>
    `
});

new Vue({
    el: '#app',
    data: {
        modalVisible: true
    },
    methods: {
        closeModal(){
            console.log('double click no modal!');
            this.modalVisible = false;
        },
        showModal(){
            this.modalVisible = true;
        }
    }
});