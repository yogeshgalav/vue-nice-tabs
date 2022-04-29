<template>
  <div class="nav-tabs">
    <nav :class="[size === 'large' ? 'tabbed-nav2' : 'tabbed-nav']">
      <div class="tabbed-nav1">
        <ul :class="['nav tabbed-nav-list', align]">
          <li
            v-for="tab in tabs"
            :key="tab"
            class="nav-item"
          >
            <a
              ref="tabNav"
              :href="'#' + tab.replace(/ /g, '-')"
              class="nav-link"
              :class="{
                active: activeTab === tab,
                'text-light-gray1':
                  disableTab.indexOf(tab) !== -1
              }"
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
<style lang="scss">
@import "resources/sass/_variables.scss";
.nav-tabs {
  border-bottom: none;
}
.tabbed-nav-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
}
.tabbed-nav-list::-webkit-scrollbar {
    display: none;
}
.tabbed-nav {
    margin-top: 0px;
}
.tabbed-nav-list li a {
    text-align: center;
    color: #000;
    font-weight: 800;
    padding: 6px 60px 6px 60px;
}
.tabbed-nav-list li a:focus,
.tabbed-nav-list li a:hover {
    background: #fff;
}
.tabbed-nav .nav-item {
    background: transparent;
    border: 0;
    border-bottom: none;
}

// Nav Tab 2
.nav-link.active {
    border-color: white !important;
}
.tabbed-nav2 .nav-item .active {
    background: #fff;
    // border: 1px solid #707070;
    border-bottom: none !important;
    color: #2f80ed !important;
    position: relative;
    margin-bottom: -1px;
}
.tabbed-nav2 .nav-item .active:focus {
    background: #deedf9 !important;
    color: #000 !important;
}
.tabbed-nav2 .nav {
    padding-left: 10px;
}
.tabbed-nav2 .nav-item a {
    text-align: center;
    color: #000;
    font-size: 14px;
    padding: 6px 30px;
    font-weight: 800;
    cursor: pointer;
}

.tabbed-nav2 ul li a {
    text-align: center;
    color: #000;
    font-weight: 800;
    padding: 6px 60px 6px 60px;
}
.tabbed-nav2 ul li a:focus,
.tabbed-nav-list li a:hover {
    background: #fff;
}
.tabbed-nav2 .nav-item {
    background: $white;
    border: 0;
    border-bottom: none;
}
.tabbed-nav {
    padding: 15px;
}
// Nav Tab 1

.tabbed-nav .nav-item .active {
    background: #fff;
    border-bottom: 4px solid #10069f !important;
    border-radius: 5% !important;
    color: #10069f !important;
    position: relative;
    margin-bottom: -1px;
}
.tabbed-nav .nav-item .active:focus {
    background: #fff !important;
    color: #10069f !important;
}
.tabbed-nav .nav {
    padding-left: 10px;
    margin-bottom: 40px;
}
.tabbed-nav .nav-item a {
    text-align: center;
    color: #000;
    font-size: 14px;
    padding: 15px 15px;
    font-weight: 800;
    cursor: pointer;
    margin-right: 20px;
}

@media (max-width: 640px) {
    .tabbed-nav .nav-item a {
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
		disableTab: {
			type: Array,
			default: () => []
		},
		size: {
			type: String,
			default: ''
		},
		page: {
			type: String,
			default: ''
		},
		align: {
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
		page(val) {
			if (this.tabs.includes(this.initialTab)) {
				this.activeTab = this.initialTab;
			}
		},
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
