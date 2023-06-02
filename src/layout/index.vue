<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="200px"><SideBar/></el-aside>
			<el-container>
				<el-header><Header/></el-header>
				<el-main><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';
</script>

<style lang="scss" scoped></style>
