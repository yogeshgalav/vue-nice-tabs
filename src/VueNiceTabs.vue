<template>
  <div class="nav-tabs">
    <nav :class="['nav', navClass]">
      <div class="">
        <ul :class="['nav-item-list', navTabClass]">
          <li
            v-for="tab in tabs"
            :key="tab"
            class="nav-item"
          >
            <a
              ref="tabNav"
              :href="'#' + tab.replace(/ /g, '-')"
              :class="{
                'nav-link': true,
                'active': activeTab === tab,
              }"
              :disabled="disableTabs.indexOf(tab) !== -1"
              @click="switchTab(tab, $event)"
            >
              <slot :name="'tab-heading-' + tab">{{ tab }} </slot>
            </a>
          </li>
        </ul>
      </div>
      <div
        v-for="tab in tabs"
        :id="tab.replace(/ /g, '-')"
        :key="tab"
        class="tab-content"
      >
        <div :class="['tab-pane', tab === activeTab ? 'active' : '']">
          <slot :name="'tab-panel-' + tab" />
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
.nav-tabs {
  border-bottom: none;
}
.nav-tabs .nav-link {
  border: 1px solid transparent;
}
.nav-item-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-left: 10px;
    margin-bottom: 40px;
}
.nav-item-list::-webkit-scrollbar {
    display: none;
}
.nav {
    margin-top: 0px;
}
.nav-item-list li a {
    text-align: center;
    color: #000;
    font-weight: 800;
    padding: 6px 60px 6px 60px;
}
.nav-item-list li a:focus,
.nav-item-list li a:hover {
    background: #fff;
}
.nav .nav-item {
    background: transparent;
    border: 0;
    border-bottom: none;
}

.nav-link {
    display: block;
}
.nav-link .active {
    border-color: white !important;
}
.nav-item-list li a:hover {
    background: #fff;
}
.nav {
    padding: 15px;
}
.nav .nav-item .active {
    background: #fff;
    border-bottom: 4px solid #10069f !important;
    border-radius: 5% !important;
    color: #10069f !important;
    position: relative;
    margin-bottom: -1px;
}
.nav .nav-item .active:focus {
    background: #fff !important;
    color: #10069f !important;
}
.nav .nav-item a {
    text-align: center;
    color: #000;
    font-size: 14px;
    padding: 15px 15px;
    font-weight: 800;
    cursor: pointer;
    margin-right: 20px;
}
.nav .nav-item a :disabled{
    color: grey;
}

@media (max-width: 640px) {
    .nav .nav-item a {
        text-align: center;
        color: #000;
        font-size: 14px;
        padding: 15px 10px;
        font-weight: 500;
        cursor: pointer;
        margin-right: 0px;
    }
}
</style>
<script>
export default {
	props: {
		initialTab: {
			type: String,
			default: ''
		},
		tabs: {
			type: Array,
			default: () => []
		},
		disableTabs: {
			type: Array,
			default: () => []
		},
		navClass: {
			type: String,
			default: ''
		},
		navTabClass: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			activeTab: ''
		};
	},
	watch: {
		initialTab(val) {
			if (this.tabs.includes(val)) {
				this.activeTab = val;
			}
		}
	},
	mounted() {
		let hash_tab = window.location.hash;
		hash_tab = hash_tab ? hash_tab.replace('#','') : '';
		if (hash_tab && this.tabs.includes(hash_tab)) {
			this.activeTab = hash_tab;
		}else if (this.tabs.includes(this.initialTab)) {
			this.activeTab = this.initialTab;
		} else {
			this.activeTab = this.tabs[0];
		}
	},
	methods: {
		switchTab(tabName, event) {
			this.$emit('changeTab', tabName);
			this.activeTab = tabName;
			event.target.blur();
			if (window.innerWidth >= 768) {
				event.preventDefault();
			}
		}
	}
};
</script>
