<template>
	<div class="common-layout layout-container">
		<el-container>
			<el-header><Header /></el-header>
			<el-container class="layout-container-body">
				<el-aside width="200px"><SideBar /></el-aside>
				<el-main><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
import SideBar from "./components/SideBar.vue"
</script>

<style lang="scss" scoped>
$header-height:60px;
.layout-container {
    ::v-deep .el-header {
        height:$header-height;
    }
	height: 100vh;
	&-body {
		height: calc(100vh - #{$header-height});
	}
}
.el-header {
	padding: 0;
}
</style>
