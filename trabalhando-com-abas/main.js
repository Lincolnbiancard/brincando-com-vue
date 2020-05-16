Vue.component('tabs', {
    props: {},
    template: `
    <div>
        <div class="tabs is-toggle is-fullwidth is-large">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                <a href="#" @click="selectTab(tab)">
                    <span class="icon"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>{{ tab.name }}</span>
                </a>
                </li>
            </ul>
        </div>
        <div class="table-detail">
            <slot></slot>
        </div>
    </div>    
    `,
    data() {
        return {
            tabs: []
        }
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },
});

Vue.component('tab', {
    props: {
        name: {required: true},
        selected: {default: false}
    },
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected;
    },
    template: `
    <div v-show="isActive">
        <slot></slot>
    </div>`
})

new Vue({
    el: '#root',
});