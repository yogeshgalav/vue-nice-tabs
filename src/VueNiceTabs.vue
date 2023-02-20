<template>
  <div class="nav-tabs">
    <nav :class="[size === 'large' ? 'tabbed-nav2' : 'tabbed-nav']">
      <div class="tabbed-nav1">
        <ul :class="['nav tabbed-nav-list flex my-1 mb-4 md:mb-6 overflow-x-auto list-none', align]">
          <li v-for="tab in tabSlugs" :key="tab" class="nav-item py-3">
            <a
              ref="tabNav" :href="'#' + tab"
              class="nav-link  mr-2 px-2 md:px-6 py-2 text-gray-500 font-medium rounded-t-md hover:bg-slate-100 flex flex-row w-max no-underline"
              :class="{active: activeTab === tab,
                       'text-light-gray1':
                         disableTab.indexOf(tab) !== -1
              }" @click="switchTab(tab, $event)"
            >
              <slot :name="'tab-heading-' + tab">{{ tab }} </slot>
            </a>
          </li>
        </ul>
      </div>

      <div
        v-for="tab in tabSlugs" :id="tab" :key="tab"
        class="tab-content"
      >
        <div :class="['tab-pane', tab === activeTab ? 'active' : '']">
          <div v-if="tab === activeTab">
            <slot :name="'tab-panel-' + tab" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

export default {
    props: {
        initialTab: {
            type: String,
            default: '',
        },
        tabs: {
            type: Array,
            default: () => [],
        },
        disableTab: {
            type: Array,
            default: () => [],
        },
        size: {
            type: String,
            default: '',
        },
        page: {
            type: String,
            default: '',
        },
        align: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            activeTab: '',
        };
    },
    computed :{
        tabSlugs(){
            return this.tabs.map((el)=>{
                return el.replace(/ /g, '-');
            });
        },
    },
    watch: {
        page(val) {
            if (this.tabs.includes(this.initialTab)) 
                this.activeTab = this.initialTab;
            
        },
        initialTab(val) {
            if (this.tabs.includes(val)) 
                this.activeTab = val;
            
        },
    },
    mounted() {
        let hash_tab = window.location.hash;
        hash_tab = hash_tab ? hash_tab.replace('#', '') : '';
        if (hash_tab && this.tabs.includes(hash_tab)) 
            this.activeTab = hash_tab;
         else if (this.tabs.includes(this.initialTab)) 
            this.activeTab = this.initialTab;
         else 
            this.activeTab = this.tabs[0];
        
    },
    methods: {
        switchTab(tabName, event) {
            this.$emit('changeTab', tabName);
            this.activeTab = tabName;

            event.target.blur();
            if (window.innerWidth >= 768) 
                event.preventDefault();
            
        },
    },
};
</script>

<style>
.nav-link.active {
    color: #2563eb;
    border-bottom: 3px solid #2563eb;
}

.nav-link.active:hover {
    background-color: #fcfdfd;
}
</style>